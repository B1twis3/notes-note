console.log('Starting notes.js');

// Show all atributes of notes.js
// console.log(module);

// // Add atribute age as export
// module.exports.age = 24;

module.exports.addNote = () => {
    console.log('Add note');
    return 'New note';
};

module.exports.Add = function (a, b) {
  return a + b;
}
