const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "complaintPhoto" });
const fs = require("fs");
const path = require("path");
const ComplaintSchema = require("../Models/ComplaintSchema");
const Verifytoken = require("../Middlewares/Verifytoken");

router.post("/addcomplaint", upload.single("image"), async (req, res) => {
  console.log(req.body);
  if (req.file) {
    let fileType = req.file.mimetype.split("/")[1];
    let newFilename = req.file.filename + "." + fileType;
    fs.rename(
      path.resolve(process.cwd(), `complaintPhoto/${req.file.filename}`),
      path.resolve(process.cwd(), `complaintPhoto/${newFilename}`),
      (data) => {
        console.log("File Uploaded: ", newFilename);
      }
    );

    ComplaintSchema.create({
      userID: req.body.userID,
      title: req.body.title,
      desc: req.body.desc,
      image: newFilename,
      to: req.body.to,
      severity: req.body.severity,
    })
      .then(() => {
        console.log("Complaint Added");
      })
      .catch((err) => {
        console.log("err");
      });
    //   const complaint = new Complaint(req.body);
    //   try {
    //     const addcomplaint = await complaint.save();
    //     res.status(200).json(addcomplaint);
    //   } catch (error) {
    //     res.status(300).json("Something Went Wring In appending Complaint");
    //     console.log("error in add product.", error);
    //   }
  } else {
    ComplaintSchema.create({
      userID: req.body.userID,
      title: req.body.title,
      desc: req.body.desc,
      to: req.body.to,
      severity: req.body.severity,
    })
      .then(() => {
        console.log("Complaint Added");
      })
      .catch((err) => {
        console.log("err");
      });
  }
});

router.post("/getComplaint", async (req, res) => {
  try {
    ComplaintSchema.find({ userID: req.body.userID })
      .populate("userID")
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((e) => {
        console.log(e);
        res.status(300).json("Something Went Wring in Fetching Complaint 1");
      });
  } catch (e) {
    res.status(300).json("Something Went Wring in Fetching Complaint");
  }
});

router.post("/getAllComplaint", async (req, res) => {
  try {
    ComplaintSchema.find({})
      .populate("userID")
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((e) => {
        console.log(e);
        res.status(300).json("Something Went Wring in Fetching Complaint 1");
      });
  } catch (e) {
    res.status(300).json("Something Went Wring in Fetching Complaint");
  }
});

router.put("/updatecomplaint", upload.single(""), async (req, res) => {
  try {
    const id = req.body.id;
    const updatecomplaint = await ComplaintSchema.findByIdAndUpdate(id, {
      title: req.body.title,
      desc: req.body.desc,
      severity: req.body.severity,
    });
    res.status(200).send(updatecomplaint);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/deletecomplaint", async (req, res) => {
  try {
    const id = req.body.id;
    const deletecomplaint = await ComplaintSchema.findByIdAndDelete(id);
    res.status(200).send(deletecomplaint);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/publiccomplaint", Verifytoken, async (req, res) => {
  try {
    const allcomplaints = await ComplaintSchema.find();
    res.status(200).json(allcomplaints);
  } catch (error) {
    console.log("error in add all products", error);
  }
});

module.exports = router;
