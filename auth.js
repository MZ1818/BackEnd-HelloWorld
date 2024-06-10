// Person model import
const Person = require("./models/Person");

//import passpost & local stratogy
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

//passport local strategy verification function
passport.use(
  new LocalStrategy(async (USERNAME, PASSWORD, done) => {
    //authentication logic here
    try {
      // console.log("Recieved credentials:", USERNAME, PASSWORD);
      const user = await Person.findOne({ username: USERNAME });
      // console.log(user);
      if (!user) return done(null, false, { message: "Incorrect username" });

      const isPasswordMatch = user.password === PASSWORD ? true : false;

      //this tym we will check password through a function comparePassword
      // const isPasswordMatch = await user.comparePassword(PASSWORD);
      if (isPasswordMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Incorrect password" });
      }
    } catch (err) {
      return done(err);
    }
  })
);

module.exports = passport; //export configured passport
