// Problem 2:
// Writing Functions
// Write a JavaScript function named calculateCircleArea that takes the radius of a circle
// as a parameter and returns the area of the circle. You can use the formula area = π * radius^2. Test the function with a few different radii.

// var calculateCircleArea = function (r) {
//   var area = Math.PI * (r * r);
//   console.log(area);
// };

// calculateCircleArea(5);
// calculateCircleArea(7);

// Problem 3:
//  Callback Functions
// Create a function named performOperation that takes two numbers and a callback
// function as parameters. The callback function should determine the operation to be performed (addition, subtraction, multiplication, or division) on the two numbers. Call the
// performOperation function with different numbers and callback functions for each
// mathematical operation.

// function add(x, y) {
//   return x + y;
// }
// function sub(x, y) {
//   return x - y;
// }
// function mul(x, y) {
//   return x * y;
// }
// function divide(x, y) {
//   return x / y;
// }

// var performOperation = function (a, b, callBack) {
//   return callBack(a, b);
// };

// console.log(performOperation(2, 3, add));
// console.log(performOperation(2, 3, sub));
// console.log(performOperation(2, 3, mul));
// console.log(performOperation(2, 3, divide));

// Problem 4:
//  Using the 'fs' Module
// Write a Node.js program that uses the fs module to read the contents of a text file named "notes.txt" and display them in the console.

// var fs = require("fs");

// fs.appendFile("notes.txt", "\nHello! Good Morning.", () => {
//   console.log("file loaded");
// });

// Problem 5:
//  Using 'os' Module
// Create a Node.js program that uses the os module to display the following system
// information:
// ● Total memory available (in bytes)
// ● Free memory available (in bytes)
// ● Operating system platform
// ● Number of CPU cores

// var os = require("os");

// var memory = os.totalmem();

// console.log("memory:", memory);
// console.log("free Memory:", os.freemem());
// console.log("Platform:", os.platform());
// console.log("num of CPU cores:", os.cpus().length);

// Problem 6:
//  'lodash' Usage
// Use the lodash library to solve the following problem: Given an array of numbers, write a
// function that returns the sum of all even numbers in the array. Use the _.sumBy function from
// lodash to achieve this.

var _ = require("lodash");

var data = [2, 5, 6, 3, 8];

function sumOfEven(data) {
  var evenNumbers = _.filter(data, (num) => num % 2 === 0);
  return _.sumBy(evenNumbers);
}

console.log(sumOfEven(data));
