# Demo Vector Search

This project demonstrates vector search and semantic matching using OpenAI embeddings and PostgreSQL with the [pgvector](https://github.com/pgvector/pgvector) extension.

## Requirements

- **Node.js v20 or higher**
- **PostgreSQL v13 or higher** (with pgvector extension)

## Features

- **Job & User Seeding:** Seed jobs and users with realistic data, including multi-role work experiences.
- **Embedding Generation:** Generate and store OpenAI embedding vectors for jobs, users, and values.
- **Vector Search:** Recommend jobs to users using vector similarity search.
- **Flexible Value Table:** Store and embed arbitrary job-related values for experimentation.
- **Command Scripts:** Modular commands for embedding generation, recommendations, and utilities.

## Setup

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Configure environment:**

   - Copy `.env.example` to `.env` and set your `OPENAI_API_KEY` and database connection.

3. **Prepare the database:**

   - Run migrations:

     ```sh
     npx knex migrate:latest
     ```

   - Seed data:

     ```sh
     npx knex seed:run
     ```

4. **Install pgvector extension in PostgreSQL:**

   ```sql
   CREATE EXTENSION IF NOT EXISTS vector;
   ```

## Commands

All commands are run via `node index.js <command> [args]`.

### Generate Embeddings

- **Jobs:**

  `node index.js generate-job-embedding-vector`

- **Users:**

  `node index.js generate-user-embedding-vector`

- **Values:**

  `node index.js generate-values-embedding-vector`

- **From Text:**

  `node index.js generate-embedding-from-text "your text here"`

### Job Recommendation

- **Recommend jobs for each user:**

  `node index.js recommend-jobs`

  This will print a table of the top 3 recommended jobs for each user, including similarity scores.

## Project Structure

- `seeders/` – Seed files for jobs, users, and values.
- `migrations/` – Migration files for database schema.
- `command/` – Command scripts for embedding generation and recommendations.
- `index.js` – Command dispatcher.

## Notes

- Embedding generation uses the OpenAI API and may incur costs.
- Ensure your database supports the `vector` type (via pgvector).
- All embedding vectors are normalized before storage for accurate cosine similarity.
