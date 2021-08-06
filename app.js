const fs = require('fs');
const notes = require('./notes')
// const chalk = require('chalk');
const yargs = require('yargs');

// fs.writeFileSync('C:/Users/sampa/Desktop/notes.txt', 'This file was created by Node.JS');
// fs.appendFileSync('C:/Users/sampa/Desktop/notes.txt', 'This text has been appended!');
// getNotes();

// console.log(chalk.bgGreen.black.inverse.bold.italic('Success!'));
// console.log(process.env);

console.log(yargs.argv);

yargs.version('1.1.0');

// Create Commands

yargs.command({
    command: 'add',
    describe: 'add a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body);
    }
}).argv;

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            type: 'string',
            demandOption: true
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title);
    }
}).argv;

yargs.command({
    command: 'display',
    describe: 'display the notes',
    builder: {
        title: {
            describe: 'Note Title',
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.displayNote(argv.title);
    }
}).argv;


