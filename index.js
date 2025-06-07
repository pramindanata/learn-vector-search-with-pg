require('dotenv').config();

const { Command } = require('commander');
const program = new Command();
const helloCommand = require('./command/hello');
const generateJobEmbeddingVector = require('./command/generate-job-embedding-vector');
const generateUserEmbeddingVector = require('./command/generate-user-embedding-vector');
const recommendJobsForUsers = require('./command/recommend-jobs');

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

program
  .command('recommend-jobs')
  .description('Get top 3 recommended jobs for each user using vector search')
  .action(recommendJobsForUsers);

program.parse(process.argv);
