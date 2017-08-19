console.log('starting app');

// using require to add modules
const fs = require('fs');
const os = require('os');

// add user variable to store user information
var user = os.userInfo();

// display information stored
console.log(user);

fs.appendFile('greetings.txt', `Hello ${user.username}!` ,function (err) {
  if (err) {
    console.log('Unable to write to file');
  }
});
