console.log('starting app.js');

// using require to add modules;
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

result = notes.addNote();
console.log(result);

sum = notes.Add(1, 5);
console.log(`The total is ${sum}`)

// add user variable to store user information;
// var user = os.userInfo();

// // display information stored;
// console.log(user);

// use filesystem module with error handling callback;
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age} years old.` ,function (err) {
//   if (err) {
//     console.log('Unable to write to file');
//   }
//   console.log('The data was append to file');
// });

/*
// same way of using a callback for error handling done differently
fs.appendFile('greetings.txt', `Hello ${user.username}!`, (err) => {
  if (err) throw  err;    // error handling
    console.log('The data was append to file'); // when everthing goes well
});
*/
