//using express
const express = require("express");
const app = express();

//.env file configure
require("dotenv").config();

//import it on top only
const db = require("./db");

// Person model import
// const Person = require("./models/Person");

//import passpost from auth.js
const passport = require("./auth");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

//Middleware function
//here all 3 parameters are must in exact sequence
const logRequest = (req, res, next) => {
  console.log(
    `[${new Date().toLocaleDateString()}] ::: Request Made to ${
      req.originalUrl
    }`
  );
  next(); //move on to next phase
};

//if we want middleware to be used everywhere
app.use(logRequest);

//initialise
app.use(passport.initialize());

//local strategy veryfing function named as a middleware to be used anywhere easily
const localAuthMiddleware = passport.authenticate("local", { session: false });

//GET Request
//we are passing "logRequest" middleware below
app.get("/", (req, res) => {
  res.send("Welcome to my hotel sir!");
});

//we need to import person Router.js file
const personRoutes = require("./routes/personRoutes");
const menuRoutes = require("./routes/menuItemRoutes");

//use the routers
app.use("/person", localAuthMiddleware, personRoutes);
app.use("/menu", menuRoutes);

const PORT = process.env.PORT || 3000;
// localHost & PORT NUM
app.listen(PORT, () => {
  console.log("running on PORT 3000");
});
