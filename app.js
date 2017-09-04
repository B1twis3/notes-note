console.log('starting app.js');

// using require to add modules;
const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

var command = process.argv[2];
console.log("Command : ", command);

if (command === 'list') {
    console.log('Listing all notes');
} else if (command === 'add') {
    console.log('Adding new note');
} else if (command === 'read') {
    console.log('Reading note');
} else if (command === 'remove') {
    console.log('Removing last note');
} else {
  console.log('Command not recognized');
}
