// var obj = {
//   name: 'John'
// };
//
// var stringObj = JSON.stringify(obj);
//
// console.log(typeof stringObj);
// console.log(stringObj);
//
// var personString = '{"name": "John", "age": 24}';
// var personStringObj = JSON.parse(personString);
//
// console.log(typeof personString);
// console.log(personString);
// console.log(typeof personStringObj);
// console.log(personStringObj);

const fs = require('fs');

var originalNote = {
  title: 'Default title',
  body: 'Default body text'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof originalNote);
console.log(originalNote);
console.log(typeof originalNoteString);
console.log(originalNoteString);
console.log(typeof noteString);
console.log(noteString);
console.log(typeof note);
console.log(note.title);
