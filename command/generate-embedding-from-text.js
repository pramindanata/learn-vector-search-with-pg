require('dotenv').config();

async function generateEmbeddingFromText(text) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    console.error('OPENAI_API_KEY is not set in .env');
    process.exit(1);
  }

  if (!text) {
    console.error('Please provide a text input.');
    process.exit(1);
  }

  try {
    const response = await fetch('https://api.openai.com/v1/embeddings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'text-embedding-3-small',
        input: text,
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

    console.log('\nEmbedding vector (as array):');
    console.log(JSON.stringify(embedding));
  } catch (err) {
    console.error('Failed to generate embedding:', err.message);
    process.exit(1);
  }

  process.exit(0);
}

module.exports = generateEmbeddingFromText;
