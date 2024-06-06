//using express
const express = require("express");
const app = express();

//import it on top only
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

//GET Request
app.get("/", (req, res) => {
  res.send("Welcome to my hotel sir!");
});

//we need to import person Router.js file
const personRoutes = require("./routes/personRoutes");
const menuRoutes = require("./routes/menuItemRoutes");

//use the routers
app.use("/person", personRoutes);
app.use("/menu", menuRoutes);

//localHost & PORT NUM
app.listen(3000, () => {
  console.log("running on PORT 3000");
});
