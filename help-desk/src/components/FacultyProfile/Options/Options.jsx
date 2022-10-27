import React, { useState } from "react";
import "./Options.css";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import GetCurrentUserData from "../../../Hooks/GetCurrentUserData";
import EditFacultyProfile from "./EditFacultyProfile";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

export default function Options() {
  const [openEditProfile, setopenEditProfile] = useState(false);
  const userData = GetCurrentUserData(
    "http://localhost:5000/getfacdatabyid",
    openEditProfile
  );
  const Navigate = useNavigate();

  //Function to handle the open and Close the EditFacultyProfile Component
  const closeEditProfile = (action) => {
    setopenEditProfile(action);
  };

  return (
    <>
      {/* <div className='wholefprofile'> */}
      <div className="facultyinfo">
        <div className="fprofilesection">
          <img
            src="./images/Profile Image.png"
            alt="fprofileimg"
            className="fprofileimg"
          ></img>
          <CameraAltIcon fontSize="large" />
        </div>
        <div className="fprofiledetails">
          <h3>{userData?.userName}</h3>
          <h4>{userData?.field}</h4>
          <h4>{userData?.education}</h4>
          <h5>{userData?.email}</h5>
          <h5>{userData?.mobileNo}</h5>
          <h5>{userData?.role}</h5>
          <p>{userData?.bio}</p>
        </div>
        <div className="feditprofile">
          <button
            className="feditp"
            onClick={() => {
              setopenEditProfile(true);
            }}
          >
            Edit Profile
          </button>
        </div>
      </div>
      {openEditProfile === true ? (
        <div>
          <EditFacultyProfile closeEditProfile={closeEditProfile} />
        </div>
      ) : null}
      <div className="fservices">
        <h3>Services...</h3>
        <Grid container spacing={2}>
          <Grid item md={4} sm={6} xs={12}>
            <div
              className="fcomplaintsection"
              onClick={() => {
                Navigate("/complaint");
              }}
            >
              <img
                src="./images/make Complaint.png"
                alt="fcomplaintimg"
                className="ffeatureImage"
              ></img>
              <h4>Make Complaint Now</h4>
            </div>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <div className="fleavesection">
              <img
                src="./images/travelll.png"
                alt="fleaveimg"
                className="ffeatureImage"
              ></img>
              <h4>Make Leave Now</h4>
            </div>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <div className="fattendancesection">
              <img
                src="./images/remainder.jpg"
                alt="fattendanceimg"
                className="ffeatureImage"
              ></img>
              <h4>My Attendance %</h4>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
