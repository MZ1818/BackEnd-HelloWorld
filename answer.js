// Question 2:
//  MongoDB Queries
// a) Write a MongoDB query to create a new document in a collection named "students" with fields "name,"
// "age," and "grade."
// b) Write a MongoDB query to update the "age" field of a document in the "students" collection with the name
// "John" to 30.
// c) Write a MongoDB query to delete a document from the "students" collection with the name "John"
// d) Write a MongoDB query to retrieve all documents from the "students" collection where the age is
// greater than 50.

// ANSWERS
// a.
// use xyz
// db.createCollection("students")
// db.students.insertOne({name:"John",age:24,grade:"A"})

// b.
// db.students.updateOne({name:"John"},{$set:{age:30}})

// c.
// db.students.deleteOne({name:"John"})

// d.
// db.students.find({age:{$gt:50}})

// Question 3: SQL vs. MongoDB

// Answer: SQL databases use structured tables with rows and columns to store data, while MongoDB uses
// flexible and dynamic documents in collections. SQL databases use SQL as a querying language, while
// MongoDB uses a JavaScript-like syntax for queries. SQL databases are suitable for applications with
// well-defined and structured data, such as financial systems. MongoDB is better for projects with changing or unstructured data, like content management systems or real-time analytics.

// Question 4: Query Comparison
// Compare and contrast the following MongoDB and SQL queries for retrieving data:
// a) MongoDB: db.products.find({ category: "Electronics" })
// SQL: SELECT * FROM products WHERE category = "Electronics"
// b) MongoDB: db.users.findOne({ username: "Alice" })
// SQL: SELECT * FROM users WHERE username = "Alice"
// c) MongoDB: db.orders.aggregate([{ $group: { _id: "$status", total: { $sum:
// "$amount" } } }])
// SQL: SELECT status, SUM(amount) as total FROM orders GROUP BY status

// answers
// a.REtrieves products with category "electronics"
// b. retrieves a user named"alice"
// c. calculate total amount of orders grouped by status
