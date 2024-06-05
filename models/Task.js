// Question 3: Creating a POST API with Express and Mongoose
// You're building a simple task management application. Your task is to create a POST API endpoint for adding
// new tasks to the database. Assume you've already set up an Express application and connected it to your
// MongoDB using Mongoose.
// a) Design the Mongoose schema for a "Task" with fields for "title," "description," "priority," and "dueDate."
// b) Create a POST API endpoint /api/tasks that allow clients to submit new tasks to the database. Ensure it handles request validation and responds with the newly created task.

// Question 4: Creating a GET API with Express and Mongoose
// Continuing with the task management application, you need to create a GET API endpoint for retrieving a list of
// tasks from the database.
// Create a GET API endpoint /api/tasks that retrieve a list of all tasks from the database. Ensure it handles
// errors and responds with the list of tasks in JSON format.

const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default: "Medium",
  },
  dueDate: {
    type: Date,
    required: true,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
