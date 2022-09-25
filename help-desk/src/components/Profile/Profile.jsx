import React, { useState } from "react";
import "./Profile.css";

import Grid from "@mui/material/Grid";
import { Avatar, Rating } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import axios from "axios";
import { useEffect } from "react";

export default function Profile() {

  const [userdata, setUserdata] = useState([])

  useEffect(()=>{
    let uid = localStorage.getItem("id");
    axios.post("http://localhost:5000/getdatabyid",
    {
      id: uid,
    })
    .then((response)=>{
        console.log(response);
        setUserdata(response.data);
    }).catch((error)=>{
      console.log("Sonething Went Wrong : ", error);
    })
  },[])
  return (
    <>
      <div className="wholeprofile">
        <div className="studentinfo">
          <div className="profilesection">
            <img
              src="./images/Profile Image.png"
              alt="profileimg"
              className="profileimg"
            ></img>
            <CameraAltIcon fontSize="large" />
          </div>
          <div className="profiledetails">
            <h3>{userdata.userName}</h3>
            <h4>{userdata.className} sem-{userdata.semester}th</h4>
            <h5>{userdata.enrollNo}</h5>
            <h5>{userdata.role}</h5>
            <h5>User id - 200193</h5>
            <h5>{userdata.field}</h5>
            <p>
              I have a great interest in Designing and i would like to continue
              with this skill through my carrier
            </p>
          </div>
          <div className="editprofile">
            <button className="editp">Edit Profile</button>
          </div>
        </div>
        <div className="services">
          <h3>Services...</h3>
          <Grid container spacing={2}>
            <Grid item md={4} sm={6} xs={12}>
              <div className="complaintsection">
                <img
                  src="./images/make Complaint.png"
                  alt="complaintimg"
                  className="featureImage"
                ></img>
                <h4>Make Complaint Now</h4>
              </div>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <div className="leavesection">
                <img
                  src="./images/travelll.png"
                  alt="leaveimg"
                  className="featureImage"
                ></img>
                <h4>Make Leave Now</h4>
              </div>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <div className="attendancesection">
                <img
                  src="./images/remainder.jpg"
                  alt="attendanceimg"
                  className="featureImage"
                ></img>
                <h4>My Attendance %</h4>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="allinformation">
          <h3 className="infoheading">All Information for you</h3>
          <div className="info">
            <div className="scontainer">
              <Avatar sx={{ width: 56, height: 56, bgcolor: "#FF8E4F" }}>
                SG
                {/* {`${val.name[0].toUpperCase()}${val?.name
                        ?.split(" ")[1][0]
                        .toUpperCase()}`} */}
              </Avatar>
            </div>
            <div className="infodetails">
              <div className="infoname">
                <h3>Shivani Vohra</h3>
                {/* <img src={mic} alt="micimg" className='micimg'></img> */}
              </div>
              <h5>Faculty</h5>
              <p>
                Hello Dear Student,
                <br />I am informing you to take a part in open book test
                compitition and make your class
                <br /> proud by beign in compitition. Faculties can take a part
                too.
                <br /> Hurry up folks.
              </p>
              <div className="ratings">
                <Rating name="size-medium" value={2} readOnly />
                <div className="like">
                  <ThumbUpOffAltIcon fontSize="medium" />
                  <span>302</span>
                  <ThumbDownOffAltIcon fontSize="medium" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
