const express = require("express");
const router = express.Router();
const InformationSchema = require("../Models/InformationSchema");
const multer = require("multer");
const upload = multer({ dest: "InformationPhoto" });
const fs = require("fs");
const path = require("path");

router.post(
  "/postinformation",
  upload.single("infoPhoto"),
  async (req, res) => {
    try {
      if (req.file) {
        let fileType = req.file.mimetype.split("/")[1];
        let newFilename = req.file.filename + "." + fileType;
        fs.rename(
          path.resolve(process.cwd(), `InformationPhoto/${req.file.filename}`),
          path.resolve(process.cwd(), `InformationPhoto/${newFilename}`),
          (data) => {
            console.log("File Uploaded: ", newFilename);
          }
        );
        const information = InformationSchema({
          title: req.body.title,
          author: req.body.author,
          desc: req.body.desc,
          image: newFilename,
          mention: req.body.mention,
        });
        const createinformation = await information.save();
        res.status(200).send(createinformation);
      } else {
        const information = InformationSchema({
          title: req.body.title,
          author: req.body.author,
          desc: req.body.desc,
          mention: req.body.mention,
        });
        const createinformation = await information.save();
        res.status(200).send(createinformation);
      }
    } catch (e) {
      res.status(400).send(e);
    }
  }
);

router.get("/getallinformation", async (req, res) => {
  try {
    const allinformation = await InformationSchema.find();
    res.status(200).send(allinformation);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/deleteinfromationbyid", async (req, res) => {
  try {
    const deleteinformation = await InformationSchema.findByIdAndDelete(
      req.body.id
    );
    res.status(200).send(deleteinformation);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
