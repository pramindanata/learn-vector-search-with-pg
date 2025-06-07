require('dotenv').config();

const { Command } = require('commander');
const program = new Command();
const helloCommand = require('./command/hello');

program
  .command('hello')
  .description('Prints hello world')
  .action(helloCommand);

program.parse(process.argv);
