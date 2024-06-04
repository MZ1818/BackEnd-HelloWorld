// Problem 1:
//  Understanding Servers and Express.js
// Explain in your own words what a server is in the context of Node.js. Then, write step-by-step instructions on
// how to create a basic server using Express.js.

//using express
const express = require("express");
const app = express();

//GET Request
app.get("/", (req, res) => {
  res.send("Coming with the pizza Sir!");
});

app.get("/objects", (req, res) => {
  var custom_boj = {
    name: "Ramu",
    age: 25,
    school: "newton",
  };
  res.send(custom_boj);
});

app.post("/items", (req, res) => {
  res.send("chagani post worked");
});

//localHost & PORT NUM
app.listen(3000, () => {
  console.log("running on PORT 3000");
});
