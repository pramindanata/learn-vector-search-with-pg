require('dotenv').config();

const { Command } = require('commander');
const program = new Command();
const helloCommand = require('./command/hello');
const generateJobEmbeddingVector = require('./command/generate-job-embedding-vector');
const generateUserEmbeddingVector = require('./command/generate-user-embedding-vector');

program
  .command('hello')
  .description('Prints hello world')
  .action(helloCommand);

program
  .command('generate-job-embedding-vector')
  .description('Generate embedding vectors for all jobs in the database')
  .action(generateJobEmbeddingVector);

program
  .command('generate-user-embedding-vector')
  .description('Generate embedding vectors for all basic users in the database')
  .action(generateUserEmbeddingVector);

program.parse(process.argv);
