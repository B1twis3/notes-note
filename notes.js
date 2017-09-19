console.log('Starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title: title,
    body: body
  }

try {
  var notesString = fs.readFileSync('notes-data.json');
  notes = JSON.parse(notesString);
} catch (e) {

}

// // duplicateNotes in ES6 style
// var duplicateNotes = notes.filter((note) => notes.title === title);
var duplicateNotes = notes.filter((note) => {
  return note.title === title;
});

// if (duplicateNotes.lenght === 0) {
//   notes.push(note);
//   fs.writeFileSync('notes-data.json', JSON.stringify(notes));
// }
// };

if (duplicateNotes == 0) {
  notes.push(note);
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Reading note', title)
};

var removeNote = (title) => {
    console.log('Removing note', title);
};

module.exports = {
  // addNote: addNote  // may be shorted
  addNote,
  getAll,
  getNote,
  removeNote
};
