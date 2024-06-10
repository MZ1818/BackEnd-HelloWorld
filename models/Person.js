const mongoose = require("mongoose");

//importing bcrypt
const bcrypt = require("bcrypt");

//Define Person Schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  work: {
    type: String,
    required: true,
    enum: ["chef", "waiter", "manager"],
  },
  mobile: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
  salary: {
    type: Number,
    required: true,
  },
  //for authentication
  username: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
});

//password hashing is done just before it get stored in the DB using "pre"
personSchema.pre("save", async function (next) {
  const person = this;

  //hash the password only if it has been modified(or its new)
  //here if password is not modified--returns false--opposite of false true---will run next()
  //& if password is modified ---returns true--opposite of true is false--will go to try block
  if (!person.isModified("password")) return next();

  try {
    //hash password generation

    //generate salt
    const salt = await bcrypt.genSalt(10);

    //hash password
    //it will take 2 parameters(password+salt)---then hash it
    const hashedPassword = await bcrypt.hash(person.password, salt);

    //override plain password with hashed one
    person.password = hashedPassword;
    next();
  } catch (err) {
    return next(err);
  }

  //for comparing hashed password
  personSchema.methods.comparePassword = async function (candidatePassword) {
    try {
      //use bcrypt to compare provided password with the hashed password
      const isMatch = await bcrypt.compare(candidatePassword, this.password);
      return isMatch;
    } catch (err) {
      throw err;
    }
  };
});

//Create Person model
const Person = mongoose.model("Person", personSchema);

module.exports = Person;
