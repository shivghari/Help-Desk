const express = require("express");
const router = express.Router();
const UserSchema = require("../Models/UserSchema");
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

module.exports = router;
