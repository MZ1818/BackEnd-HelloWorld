//using express
const express = require("express");
const app = express();

//import it on top only
const db = require("./db");

//import model
const Person = require("./models/Person");
const MenuItem = require("./models/MenuItem");
const Task = require("./models/Task");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

//GET Request
app.get("/", (req, res) => {
  res.send("Welcome to my hotel sir!");
});

//POST method
app.post("/person", async (req, res) => {
  try {
    const data = req.body; //all data that we are getting from client is getting stored in req.body

    //create a document of that collection/model
    const newPerson = new Person(data);

    //save the new document to database
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Internal Server Error" });
  }
});

//POST METHOD
//Question 1: Create a POST Method API
// Create a POST method API to store data or menu items as per the schema we discussed ( /menu )
app.post("/menu", async (req, res) => {
  try {
    const dataFromClient = req.body;
    const newMenuItem = new MenuItem(dataFromClient);

    const responseToSave = await newMenuItem.save();
    console.log("MenuItem data saved");
    res.status(200).json(responseToSave);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Internal Server Error" });
  }
});

//QUESTION 4
//GET METHOD
app.get("/api/tasks", async (req, res) => {
  try {
    const data = await Task.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//POST METHOD
//QUESTION 3
app.post("/api/tasks", async (req, res) => {
  try {
    const data = req.body;
    const newTask = new Task(data);

    const response = await newTask.save();
    console.log("Task data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Internal Server Error" });
  }
});

//GET METHOD
app.get("/person", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET METHOD
// Question 2: Create a GET Method API
// Create a GET method API to List down the All Menu Items as per the schema we discussed ( /menu )
app.get("/menu", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log();
    res.status(500).json({ error: "Internal Server Error" });
  }
});
//localHost & PORT NUM
app.listen(3000, () => {
  console.log("running on PORT 3000");
});
