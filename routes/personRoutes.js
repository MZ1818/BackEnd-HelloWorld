const express = require("express");
const router = express.Router();

//import model
const Person = require("./../models/Person");

//POST method
router.post("/", async (req, res) => {
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

//GET METHOD
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//PARAMETRISED API CALLS
//GET METHOD
router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType; //extract worktype from url parameter

    //put a check here bcz 3 conditions can arise(success/failure/workType invalid)
    if (workType == "chef" || workType == "waiter" || workType == "manager") {
      const response = await Person.find({ work: workType });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(400).json({ error: "Invalid Work Type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//PUT METHOD
router.put("/:id_unique", async (req, res) => {
  try {
    const personId = req.params.id_unique; //Extract id from url parameter
    const updatedPersonData = req.body; //updated data will come here by client

    const response = await Person.findByIdAndUpdate(
      personId,
      updatedPersonData,
      {
        new: true, //check is verify updated data returned in response
        runValidators: true, //run all validation in schema again on updated data too
      }
    );

    //condition if id is not correct
    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }

    console.log("updated data");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//DELETE METHOD
router.delete(
  "/:id_unique",
  async (req, res) => {
    try {
      const personId = req.params.id_unique; //Extract id from url parameter

      const response = await Person.findByIdAndDelete(personId);

      //condition if id is not correct
      if (!response) {
        return res.status(404).json({ error: "Person not found" });
      }

      console.log("Deleted data");
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  (module.exports = router)
);
