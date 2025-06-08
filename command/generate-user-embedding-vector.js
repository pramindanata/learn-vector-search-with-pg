const knexConfig = require('../knexfile');
const knex = require('knex')(knexConfig);
const pgvector = require('pgvector/utils');

function workExperiencesToText(workExperiences) {
  // workExperiences is an array of objects
  return workExperiences
    .map((exp, idx) => {
      return `Experience ${idx + 1}: Role: ${exp.role}, Company: ${exp.company}, Industry: ${exp.industry}, Period: ${exp.startedAt} to ${exp.endedAt}.`;
    })
    .join(' ');
}

async function generateUserEmbeddingVector() {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    console.error('OPENAI_API_KEY is not set in .env');
    process.exit(1);
  }

  const users = await knex('basic_users').select('id', 'name', 'work_experiences');
  const results = await Promise.allSettled(
    users.map(async (user) => {
      const experiencesText = workExperiencesToText(user.work_experiences || []);
      const input = `User name: "${user.name}". Work experiences: ${experiencesText}`;

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

        await knex.raw('UPDATE basic_users SET embedding_vector = ? WHERE id = ?', [embeddingToSql, user.id]);
        console.log(`Updated embedding for user id ${user.id}`);
      } catch (err) {
        throw new Error(`Failed to update embedding for user id ${user.id}: ${err.message}`);
      }
    }),
  );

  results.forEach((result, idx) => {
    if (result.status === 'rejected') {
      console.error(`User id ${users[idx].id} error:`, result.reason);
    }
  });

  process.exit(0);
}

module.exports = generateUserEmbeddingVector;
