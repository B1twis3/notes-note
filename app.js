console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

console.log('Command : ', command);
console.log('Yargs : ', argv);

if (command === 'list') {
    notes.getAll();
} else if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
  if (_.isEmpty(note)) {
      console.log('Title already exists');
  } else {
      console.log('New title created');
      console.log(`Title : ${note.title}`);
      console.log(`Text  : ${note.body}`);
  }
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
      console.log('Note found');
      console.log(`Title : ${note.title}`);
      console.log(`Text  : ${note.body}`);
    } else {
      console.log('Note not found');
    }
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = (noteRemoved) ? 'note was removed' : 'note not found';
      console.log(message);
} else {
    console.log('Command not recognized');
}
