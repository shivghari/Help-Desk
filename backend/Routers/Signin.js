const express = require("express");
const User = require("../Models/User");
const Faculties = require("../Models/Faculties");
const router = express.Router();
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

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

//ROUTE:1 create a user using: POST  "/signin/createuser". No Login required
router.post(
  "/createuser",

  async (req, res) => {
    let success = false;
    try {
      //check whether the user with this email exits already
      let user = await User.findOne({ enrollNo: req.body.enrollNo });
      if (user) {
        return res.status(400).json({
          success,
          error: "sorry a user with this email already exists",
        });
      }

      // create a new user
      user = await User.create({
        userName: "Darshan Patel",
        enrollNo: "201903103510142",
        email: "pateldarshan2910@gmail.com",
        password: "darshan@123",
        field: "Computer Engineering",
        semester: 7,
        className: "CE-A",
      });

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
  }
);

// ROUTE 2 : For Faculties Sign IN
router.post(
  "/createfaculty",

  async (req, res) => {
    let success = false;
    try {
      //check whether the user with this email exits already
      let user = await Faculties.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({
          success,
          error: "sorry a user with this email already exists",
        });
      }

      // create a new user
      user = await Faculties.create({
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
