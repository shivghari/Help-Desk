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
    const allinformation = await InformationSchema.find().populate("author");
    res.status(200).send(allinformation);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/likeinfo", async (req, res) => {
  try {
    InformationSchema.findOne({ _id: req.body.infoID })
      .then((response) => {
        if (response?.like?.includes(req.body.userID)) {
          res.status(300).json({ message: "Info is Already Liked" });
        } else {
          InformationSchema.updateOne(
            { _id: req.body.infoID },
            {
              $push: {
                like: [req.body.userID],
              },
            }
          )
            .then((response) => {
              res.status(200).json({ message: "Info Liked Successfully" });
            })
            .catch((e) => {
              res
                .status(300)
                .json({ message: "SOmething Went Worong in Here." });
            });
        }
      })
      .catch((e) => {
        res
          .status(300)
          .json({ message: "Something Went Wring in Likeing the info" });
      });
  } catch (e) {
    res
      .status(300)
      .json({ message: "Something Went Wring in Likeing the info" });
  }
});

router.post("/dislikeinfo", async (req, res) => {
  try {
    InformationSchema.findOne({ _id: req.body.infoID })
      .then((response) => {
        likeArr = response.like;
        const newlikeArr = likeArr.filter((item) => {
          console.log(item);
          if (!item.equals(req.body.userID)) {
            return item;
          }
        });
        console.log(newlikeArr, " NEw Attau ");
        InformationSchema.updateOne(
          { _id: req.body.infoID },
          {
            $set: {
              like: newlikeArr,
            },
          }
        )
          .then(() => {
            res.status(200).json({ message: "Info Disliked Successfully" });
          })
          .catch((e) => {
            console.log(e, "inside");
            res
              .status(300)
              .json({ message: "Something Went Wrong In Disliking the info" });
          });
      })
      .catch((e) => {
        console.log(e, "inside Outside");
        res.status(300).json({ message: "Something Went Wrong..." });
      });
  } catch (e) {
    console.log(e, "Outside");
    res.status(300).json({ message: "Something Went Wrong!!" });
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
