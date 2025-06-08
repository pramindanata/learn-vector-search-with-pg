/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS vector');

  await knex.schema
    .createTable('jobs', function (table) {
      table.increments('id').primary();
      table.string('role');
      table.text('description');
      table.specificType('embedding_vector', 'vector').nullable();
    })
    .createTable('basic_users', function (table) {
      table.increments('id').primary();
      table.string('name');
      table.jsonb('work_experiences');
      table.specificType('embedding_vector', 'vector').nullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('basic_users').dropTableIfExists('jobs');
};
