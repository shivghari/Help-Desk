const express = require("express");
const UserSchema = require("../Models/UserSchema");
const FacultiesSchema = require("../Models/FacultiesSchema");
const router = express.Router();
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer({ dest: "uploads" });
const fs = require("fs");
const path = require("path");

const JWT_SECRET = "Darshanisagoodb$oy";

// mailer Content
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  auth: {
    user: "shiv26.dds@gmail.com",
    pass: "pkbskkmjkqoovaas",
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("ready for messages");
    console.log(success);
  }
});

//body-parser configuration
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//ROUTE:1 create a user using: POST  "/signin/createuser". No Login required
router.post("/createuser", upload.single("userPhoto"), async (req, res) => {
  let success = false;
  try {
    //check whether the user with this email exits already
    let user = await UserSchema.findOne({ enrollNo: req.body.enrollNo });
    if (user) {
      return res.status(400).json({
        success,
        error: "Sorry a user with this email already exists",
      });
    }
    console.log(req.body.userPhoto);
    // create a new user
    if (req.file) {
      //setting up the Profile photo path and Name
      let fileType = req.file.mimetype.split("/")[1];
      let newFilename = req.file.filename + "." + fileType;
      fs.rename(
        path.resolve(process.cwd(), `uploads/${req.file.filename}`),
        path.resolve(process.cwd(), `uploads/${newFilename}`),
        (data) => {
          console.log("File Uploaded: ", newFilename);
        }
      );

      user = await UserSchema.create({
        userName: req.body.userName,
        enrollNo: req.body.enrollNo,
        email: req.body.email,
        password: req.body.password,
        userPhoto: newFilename,
        field: "",
        semester: 0,
        className: "",
      });
    } else {
      user = await UserSchema.create({
        userName: req.body.userName,
        enrollNo: req.body.enrollNo,
        email: req.body.email,
        password: req.body.password,
        field: "",
        semester: 0,
        className: "",
      });
    }

    const data = {
      user: {
        enrollNo: user.enrollNo,
      },
    };
    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, authtoken });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 2 : For Faculties Sign IN
router.post(
  "/createfaculty",

  async (req, res) => {
    let success = false;
    try {
      //check whether the user with this email exits already
      let user = await FacultiesSchema.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({
          success,
          error: "sorry a user with this email already exists",
        });
      }

      // create a new user
      user = await FacultiesSchema.create({
        userName: "Darshan Patel",
        email: "pateldarshan2910@gmail.com",
        password: "darshan@123",
        field: "Computer Engineering",
        education: "Ast. Prof. Compter",
        mobileNo: 9724333903,
        studentList: ["63272584fd2374f71b6f61b8"],
      });

      const data = {
        user: {
          email: user.email,
        },
      };
      const authtoken = await jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authtoken });

      const mailOptions = {
        from: "shiv26.dds@gmail.com",
        to: user.email,
        subject: "Your Credencials for SDI Login",
        html: `<p>SDI Login Credentials</p> <br/> 
                <p>Email Id : <strong>${user.email}</strong></p>
                <p>Password : <strong>${user.password}</strong></p>
        `,
      };

      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;
