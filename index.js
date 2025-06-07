require('dotenv').config();

const { Command } = require('commander');
const program = new Command();
const helloCommand = require('./command/hello');
const generateJobEmbeddingVector = require('./command/generate-job-embedding-vector');

program
  .command('hello')
  .description('Prints hello world')
  .action(helloCommand);

program
  .command('generate-job-embedding-vector')
  .description('Generate embedding vectors for all jobs in the database')
  .action(generateJobEmbeddingVector);

program.parse(process.argv);
