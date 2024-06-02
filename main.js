// Problem 1:
// Conditional Statements (if-else)
// You run a movie theater, and you want to offer discounts based on a person's age. Write a JavaScript program that asks the user for their age and then displays a message:
// - If the age is less than 18, display "You get a 20% discount!"
// - If the age is between 18 and 65 (inclusive), display "Normal ticket price applies."
// - If the age is 65 or older, display "You get a 30% senior discount!"
var prompt = require("prompt-sync")();

var age = prompt("Enter ur age");
if (age < 18) {
  console.log("You get a 20% discount!");
} else if (age >= 18 && age <= 65) {
  console.log("Normal ticket price applies.");
} else {
  console.log("You get a 30% senior discount!");
}

// Problem 2:
//  Variables (var and const)
// Create a JavaScript program to calculate the area of a rectangle. Ask the user for the length
// and width of the rectangle and store them in variables. Calculate and display the area using
// the formula: area = length * width.

const len = prompt("enter length");
const wid = prompt("enter width");
const area = len * wid;
console.log("Required Area : " + area);

// Problem 3:
//  Objects and Properties
// You're creating an online store. Define a JavaScript object named "product" with the following properties:
// - name (string)
// - price (number)
// - inStock (boolean)
// Create at least three products using your object template and display their details using console.log.

const product1 = {
  name: "XYZ",
  price: 55,
  inStock: true,
};
const product2 = {
  name: "abc",
  price: 555,
  inStock: true,
};
const product3 = {
  name: "lmn",
  price: 505,
  inStock: true,
};
console.log(product1);
console.log(product2);
console.log(product3);

// Problem 4: \
// Arrays
// You're organizing a party and want to keep track of the guest list. Create an array called
// "guestList" and add the names of at least five guests. Then, write a program that checks if a
// given name is on the guest list. If the name is found, display "Welcome to the party, [name]!"; otherwise, display "Sorry, you're not on the guest list."

var guestList = ["ajay", "nini", "kiki", "sisi", "mimi"];
var checkGuest = prompt("Enter the guest name");
if (guestList.includes(checkGuest)) {
  console.log("Welcome to the party," + checkGuest + "!");
} else {
  console.log("Sorry, you're not on the guest list.");
}

// Problem 5:
//  JSON (JavaScript Object Notation)
// You're working on a weather app. Create a JSON object representing the weather forecast for
// a specific day. Include properties like "date," "temperature," "conditions," and "humidity."
// Display the information using console.log.
// Remember to encourage your students to experiment and think creatively while solving these problems. They can use the concepts you've taught them to come up with their own solutions.
// This will not only help solidify their understanding but also foster their problem-solving skills in JavaScript.

const weatherForecast = {
  date: "2024-09-07",
  temperature: 44,
  condition: "Sunny",
  humidity: 60,
};
console.log(weatherForecast.date);
console.log(weatherForecast.temperature);
console.log(weatherForecast.condition);
console.log(weatherForecast.humidity);
