console.log('starting app.js');

// using require to add modules;
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

console.log("Value is a string? :",  _.isString(true));
console.log("Value is a string? :", _.isString("Mischa"));
console.log("Value is a string? :", _.isString("1234"));
console.log("Value is a string? :", _.isString(1234));
console.log("Value is a Bool? :", _.isBoolean(true));

// Use of the uniq utility from the lodash package
var myArray = new Array(1, 1, 2, 3, 5, 4, 3, 2, 5);
console.log("First");
console.log(myArray);

var filteredArray = _.uniq(myArray);
console.log("Second");
console.log(myArray);
console.log(filteredArray);

var sortedArray = filteredArray.sort();
console.log("Third");
console.log(myArray);
console.log(filteredArray);
console.log(sortedArray);

result = notes.addNote();
console.log(result);

sum = notes.Add(1, 5);
console.log(`The total is ${sum}`)
