import React, { useState } from "react";
import "./Profile.css";
import Grid from "@mui/material/Grid";

import CameraAltIcon from "@mui/icons-material/CameraAlt";

import { useNavigate } from "react-router-dom";
import GetCurrentUserData from "../../Hooks/GetCurrentUserData";
import Information from "../FacultyProfile/Information/Information";

import EditProfile from "./EditProfile";

export default function Profile() {
  const [openEditProfile, setopenEditProfile] = useState(false);
  // const [userdata, setUserdata] = useState({});

  const userdata = GetCurrentUserData(
    "http://localhost:5000/getdatabyid",
    openEditProfile
  );

  //function is to make changes in OpenEditprofile State from Child EditProfile Component
  const closeEditProfile = (action) => {
    setopenEditProfile(action);
  };

  const Navigate = useNavigate();
  // useEffect(() => {
  //   let uid = localStorage.getItem("id");
  //   axios
  //     .post("http://localhost:5000/getdatabyid", {
  //       id: uid,
  //     })
  //     .then((response) => {
  //       console.log(response.data, "Hola");
  //       setUserdata(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("Sonething Went Wrong : ", error);
  //     });
  // }, [openEditProfile]);
  return (
    <>
      <div className="wholeprofile">
        <div className="studentinfo">
          <div className="profilesection">
            <img
              src={
                userdata.userPhoto
                  ? `http://localhost:5000/static/${userdata?.userPhoto}`
                  : `./images/Profile Image.png`
              }
              alt="profileimg"
              className="profileimg"
            ></img>
            <CameraAltIcon fontSize="large" />
          </div>
          <div className="profiledetails">
            <h2>{userdata?.userName}</h2>
            <h4>
              {userdata?.className} Semester-{userdata?.semester}th
            </h4>
            <h3>{userdata?.enrollNo}</h3>
            <h4>{userdata?.role}</h4>
            <h4>{userdata?.field}</h4>

            <p>{userdata?.bio}</p>
          </div>
          <div className="editprofile">
            <button
              className="editp"
              onClick={() => {
                setopenEditProfile(true);
              }}
            >
              Edit Profile
            </button>
          </div>
        </div>
        {openEditProfile === true ? (
          <div className="EditPRofileCpmponent">
            <EditProfile closeEditProfile={closeEditProfile} />
          </div>
        ) : null}
        <div className="services">
          <h3>Services...</h3>
          <Grid container spacing={2}>
            <Grid item md={4} sm={6} xs={12}>
              <div
                className="complaintsection"
                onClick={() => {
                  Navigate("/complaint");
                }}
              >
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
          <Information />
        </div>
      </div>
    </>
  );
}
