// Problem 1:
//  Understanding Servers and Express.js
// Explain in your own words what a server is in the context of Node.js. Then, write step-by-step instructions on
// how to create a basic server using Express.js.

//A server in nodejs is a program that receives and responds to requests received from the client(web browsers or mobile apps).
//It processes request and sends appropriate responses

//created server below
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Coming with the pizza Sir!");
});

app.listen(3000, () => {
  console.log("running on PORT 3000");
});

// Problem 2:
//  JSON Manipulation
// a) Define JSON and explain its importance in web development.
// b) Given a JSON data string: {"name": "Alice", "age": 25, "hobbies": ["reading",
// "painting"]}, explain how you would extract the value of the "age" key.
// c) How would you convert the following object into a JSON data string? {"title": "Book", "pages":
// 200}

const jsonData = { name: "Alice", age: 25, hobbies: ["reading", "painting"] };
console.log(jsonData.age);

// Problem 3:
// API and Endpoints
// a) Define what an API is and its role in software development.
// b) Explain what an endpoint is in the context of web APIs.
// c) Provide an example of an endpoint you might find in a social media application.

//An API IS a set of rules that allows different software to communicate and interact with each other.

//EndPoint is a specific url that represents particular service given by API.

//example of endpoint in social media "/users/raman"

// Problem 4:
//  Creating a Route with Express.js
// a) The HTTP GET method is used to request data from a server. It's often used to retrieve information or
// resources from a specified URL.
// b) Code to create a simple Express.js route:

//GET Request
app.get("/", (req, res) => {
  res.send("Coming with the pizza Sir!");
});

// Problem 5:
// JSON Parsing and Object Conversion
// a) Given a JSON data string: {"product": "Laptop", "price": 999.99}, explain how you would
// parse it into a JavaScript object.
// b) You have an object: { "name": "Bob", "age": 30 }. How would you convert it into a JSON data
// string?

const jsonnData = '{"product": "Laptop", "price": 999.99}';
const convertToObject = JSON.parse(jsonnData);
console.log(convertToObject);

const obj = { name: "Bob", age: 30 };
const converToJson = JSON.stringify(obj);
console.log(converToJson);

// Problem 6:
// Building a Basic API
// Imagine you're building an API for a weather app. Your API needs an endpoint to retrieve the current weather.
// Create an Express.js route that responds with a JSON object containing the current temperature, conditions,
// and city.
const express = require("express");
const app = express();

app.get("/weather", (req, res) => {
  const weatherData = {
    temperature: 25,
    condition: "Sunny",
    city: "Los Angeles",
  };
  res.send(weatherData);
});

app.listen(3000, () => {
  console.log("running on PORT 3000");
});
