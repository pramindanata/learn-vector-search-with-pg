const knexConfig = require('../knexfile');
const knex = require('knex')(knexConfig);
const pgvector = require('pgvector/utils');

async function generateJobEmbeddingVector() {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    console.error('OPENAI_API_KEY is not set in .env');
    process.exit(1);
  }

  const jobs = await knex('jobs').select('id', 'role', 'description');
  const results = await Promise.allSettled(
    jobs.map(async (job) => {
      const input = `The job role is "${job.role}". The job description is ${job.description}`;

      try {
        const response = await fetch('https://api.openai.com/v1/embeddings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: 'text-embedding-3-small',
            input,
          }),
        });

        if (!response.ok) {
          throw new Error(`OpenAI API error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        const embedding = data.data && data.data[0] && data.data[0].embedding;

        if (!embedding) {
          throw new Error('No embedding returned from OpenAI API');
        }

        const norm = Math.sqrt(embedding.reduce((sum, val) => sum + val * val, 0));
        const normalizedEmbedding = embedding.map((val) => val / norm);
        const embeddingToSql = pgvector.toSql(normalizedEmbedding);

        await knex.raw('UPDATE jobs SET embedding_vector = ? WHERE id = ?', [embeddingToSql, job.id]);
        console.log(`Updated embedding for job id ${job.id}`);
      } catch (err) {
        throw new Error(`Failed to update embedding for job id ${job.id}: ${err.message}`);
      }
    }),
  );

  results.forEach((result, idx) => {
    if (result.status === 'rejected') {
      console.error(`Job id ${jobs[idx].id} error:`, result.reason);
    }
  });

  process.exit(0);
}

module.exports = generateJobEmbeddingVector;
