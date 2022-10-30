const express = require("express");
const router = express.Router();
const UserSchema = require("../Models/UserSchema");
const FacultiesSchema = require("../Models/FacultiesSchema");
const Verifytoken = require("../Middlewares/Verifytoken");

router.post("/editStudentProfile", Verifytoken, async (req, res) => {
  try {
    // console.log(req.body.headers["auth-token"]);
    const id = req.body.id;
    const updateProfile = await UserSchema.findByIdAndUpdate(id, req.body.data);
    res.status(200).send(updateProfile);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/editFacultyProfile", Verifytoken, async (req, res) => {
  try {
    // console.log(req.body.headers["auth-token"]);
    const id = req.body.id;
    const updateProfile = await FacultiesSchema.findByIdAndUpdate(
      id,
      req.body.data
    );
    res.status(200).send(updateProfile);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/makecrlr", async (req, res) => {
  try {
    UserSchema.updateOne(
      { _id: req.body.userID },
      {
        role: req.body.post,
      }
    )
      .then((response) => {
        res.status(200).json({ message: "Student Role is Changed" });
      })
      .catch((e) => {
        res.status(300).json({ message: "Something Went Worng..." });
      });
  } catch (e) {
    res.status(300).json({ message: "Something Went Wrong..." });
  }
});

module.exports = router;
