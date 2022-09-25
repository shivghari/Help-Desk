const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const Faculties = require("../Models/Faculties");
const Verifytoken = require("../Middlewares/Verifytoken");

const JWT_SECRET = "Darshanisagoodb$oy";

//ROUTE:1 Authenticate a user using: POST  "/api/auth/signin". No Login required
router.post("/login", async (req, res) => {
  let success = false;
  //  If there are errors, return bad request and the errors
  const { enrollNo, password } = req.body;
  try {
    let user = await User.findOne({ enrollNo });
    if (!user) {
      success = false;
      return res.status(400).json({
        success,
        error: "Please try to login with correct credentials",
      });
    }
    //const passwordCompare = await bcrypt.compare(password, user.password);
    //!passwordCompare
    if (password !== user.password) {
      success = false;
      return res.status(400).json({
        success,
        error: "Please try to login with correct credentials",
      });
    }
    const data = {
      user: {
        id: user._id,
        enrollNo: user.enrollNo,
        userName: user.userName,
      },
    };

    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, authtoken, data });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 2: for faculties login
router.post("/facultylogin", async (req, res) => {
  let success = false;
  //  If there are errors, return bad request and the errors
  const { enrollNo, password } = req.body;
  try {
    let user = await Faculties.findOne({ enrollNo });
    if (!user) {
      success = false;
      return res.status(400).json({
        success,
        error: "Please try to login with correct credentials",
      });
    }
    //const passwordCompare = await bcrypt.compare(password, user.password);
    //!passwordCompare
    if (password !== user.password) {
      success = false;
      return res.status(400).json({
        success,
        error: "Please try to login with correct credentials",
      });
    }
    const data = {
      user: {
        email: user.email,
        userName: user.userName,
      },
    };

    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, authtoken, data });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route-3 get data of student

router.post("/getdatabyid",async(req,res)=>{
    try {
      let user = await User.findById(req.body.id).select("-password")
      res.status(200).json(user)
    } catch (error) {
      console.log("error in find userdata.",error);
    }
})

module.exports = router;
