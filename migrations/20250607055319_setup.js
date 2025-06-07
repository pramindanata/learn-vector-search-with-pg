/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('jobs', function(table) {
      table.increments('id').primary();
      table.string('role');
      table.text('description');
      table.specificType('embedding_vector', 'vector'); // For pgvector extension
    })
    .createTable('basic_users', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.jsonb('work_experiences');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('basic_users')
    .dropTableIfExists('jobs');
};
