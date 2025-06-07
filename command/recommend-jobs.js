const knexConfig = require('../knexfile');
const knex = require('knex')(knexConfig);
const Table = require('cli-table3');

async function recommendJobsForUsers() {
  // Get all users with embedding
  const users = await knex('basic_users').select('id', 'name', 'work_experiences', 'embedding_vector').whereNotNull('embedding_vector');
  // Get all jobs with embedding
  const jobs = await knex('jobs').select('id', 'role', 'embedding_vector').whereNotNull('embedding_vector');

  if (users.length === 0 || jobs.length === 0) {
    console.log('No users or jobs with embedding vectors found.');
    process.exit(0);
  }

  for (const user of users) {
    // Use raw SQL to get top 3 jobs by vector similarity
    const recommendations = await knex.raw(`
      SELECT id, role, embedding_vector, 1 - (embedding_vector <#> ?) AS similarity
      FROM jobs
      WHERE embedding_vector IS NOT NULL
      ORDER BY similarity DESC
      LIMIT 3
    `, [user.embedding_vector]);

    const userRoles = user.work_experiences.map(exp => exp.role)
    const table = new Table({
      head: ['Job ID', 'Job Role', 'Matchedness'],
      colWidths: [8, 28, 14]
    });

    recommendations.rows.forEach(job => {
      const percent = (job.similarity * 100).toFixed(2) + '%';
      table.push([
        job.id,
        job.role,
        percent
      ]);
    });
    console.log(`\nUser: ${user.name}`);
    if (userRoles.length > 0) {
      console.log('Roles: ' + userRoles.join(', '));
    }
    console.log(table.toString());
  }
  process.exit(0);
}

module.exports = recommendJobsForUsers;
