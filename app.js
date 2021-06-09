// require the npm modules
const chalk = require('chalk');
const notes = require('./notes.js');
const yargs = require('yargs');
const { string } = require('yargs');

//customized version for yargs
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new Note',
    builder: {
        title: {
            describe: 'Title of the Note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'The body of the Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) =>{
        notes.addNote(argv.title, argv.body);
    }
})

//create a remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a Note',
    builder: {
        title: {
            describe: 'Title to remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) =>{
        notes.removeNote(argv.title);
    }
})

//create a list command
yargs.command({
    command: 'list',
    describe: 'List the Notes',
    handler: () =>{
        notes.listNotes();
    }
})

//create a read command
yargs.command({
    command: 'read',
    describe: 'Read the Note',
    builder: {
        title: {
            describe: 'Note to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) =>{
        notes.readNote(argv.title)
    }
})

yargs.parse();