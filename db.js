//import mongoose library||connect mongoDB with nodeJS
const mongoose = require("mongoose");

//define mongoDB URL
const mongoURL =
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.6/hotels";

//set mongoDB Connection
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//get default connection
//default connection object
const db = mongoose.connection;

//define event listners for DB Connection
db.on("connected", () => {
  console.log("connected to mongoDB server");
});

db.on("error", (err) => {
  console.log("mongoDB Connection error:", err);
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

//export database connection
module.exports = db;
