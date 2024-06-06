const express = require("express");
const router = express.Router();

//import model
const MenuItem = require("../models/MenuItem");

//POST METHOD
router.post("/", async (req, res) => {
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

// GET METHOD
router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Question 1: Create a parameterized GET Method API for the Menu Item on the Basis of
// taste Type via using Express Router
// ( /menu/:taste )
//PARAMETRISED API CALLS
//GET METHOD
router.get("/:tasteType", async (req, res) => {
  try {
    const tasteType = req.params.tasteType; //extract worktype from url parameter

    //put a check here bcz 3 conditions can arise(success/failure/workType invalid)
    if (tasteType == "sweet" || tasteType == "spicy" || tasteType == "sour") {
      const response = await MenuItem.find({ taste: tasteType });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(400).json({ error: "Invalid taste Type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Question 2: Create a PUT Method API to update the MenuItem Records ( menu/:id )
//PUT METHOD
router.put("/:id_unique_", async (req, res) => {
  try {
    const menuId = req.params.id_unique_; //Extract id from url parameter
    const updatedMenuData = req.body; //updated data will come here by client

    const response = await MenuItem.findByIdAndUpdate(menuId, updatedMenuData, {
      new: true, //check is verify updated data returned in response
      runValidators: true, //run all validation in schema again on updated data too
    });

    //condition if id is not correct
    if (!response) {
      return res.status(404).json({ error: "Menu not found" });
    }

    console.log("updated data");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Question 3: Create a DELETE Method API to delete the MenuItem Records ( menu/:id )

//DELETE METHOD
router.delete(
  "/:id_unique_",
  async (req, res) => {
    try {
      const menuId = req.params.id_unique_; //Extract id from url parameter

      const response = await MenuItem.findByIdAndDelete(menuId);

      //condition if id is not correct
      if (!response) {
        return res.status(404).json({ error: "Menu not found" });
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
