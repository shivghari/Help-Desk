import React, { useState } from "react";
import "./StudentSignin.css";
import LockIcon from "@mui/icons-material/Lock";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { Link } from "react-router-dom";
import axios from "axios";

import StoreInUsestate from "../../../util/StoreInUsestate";

function StudentSignin() {
  const [userData, setuserData] = useState({
    userName: "",
    enrollNo: 0,
    email: "",
    password: "",
    conformPassword: "",
  });

  const [userPhoto, setUserphoto] = useState("");

  const SubmitSigninData = (e) => {
    e.preventDefault();
    var signinData = new FormData();
    signinData.append("userName", userData.userName);
    signinData.append("enrollNo", userData.enrollNo);
    signinData.append("email", userData.email);
    signinData.append("userPhoto", userPhoto);
    signinData.append("password", userData.password);

    axios
      .post("http://localhost:5000/createuser", signinData)
      .then((response) => {
        console.log("Data Sent : ", response);
      })
      .catch((err) => {
        console.log("Sonething Went Wrong : ", err);
      });
  };

  return (
    <>
      <div className="SigninContainer">
        <div className="FormPart">
          <div className="titleContainer">
            <h2>Sign In</h2>
          </div>
          <form className="signinForm">
            <label>Enter your Fullname</label>
            <br />
            <input
              className="signInInput"
              name="userName"
              // onChange={handleChange}
              onChange={(e) => {
                StoreInUsestate.handleChange(e, setuserData);
              }}
            />
            <br />
            <label>Enrolment No</label>
            <br />
            <input
              className="signInInput"
              name="enrollNo"
              // onChange={handleChange}
              onChange={(e) => {
                StoreInUsestate.handleChange(e, setuserData);
              }}
            />
            <br />
            <label>Email ID</label>
            <br />
            <input
              className="signInInput"
              name="email"
              // onChange={handleChange}
              onChange={(e) => {
                StoreInUsestate.handleChange(e, setuserData);
              }}
            />
            <br />
            <div className="PhotoSelecAndHolder">
              <label
                htmlFor="photoInput"
                className="fileLabel"
                style={{ width: "48%", marginTop: "5px" }}
              >
                Profile Photo
                <div className="dummyDiv" htmlFor="photoInput">
                  <CameraAltIcon sx={{ margin: "5px 10px 10px 15px" }} />
                </div>
              </label>
              <div>
                {userPhoto ? (
                  <img
                    src={URL.createObjectURL(userPhoto)}
                    alt="uploadedProduct"
                    className="profilePicture"
                  />
                ) : null}
              </div>
            </div>
            <br />
            <input
              className="signInInput"
              type="file"
              id="photoInput"
              name="userPhoto"
              onChange={(e) => {
                setUserphoto(e.target.files[0]);
              }}
            />
            <br />
            <label>Set Password</label>
            <br />
            <input
              className="signInInput"
              name="password"
              // onChange={handleChange}
              onChange={(e) => {
                StoreInUsestate.handleChange(e, setuserData);
              }}
            />
            <br />
            <label>Confirm Password</label>
            <br />
            <input
              className="signInInput"
              name="conformPassword"
              // onChange={handleChange}
              onChange={(e) => {
                StoreInUsestate.handleChange(e, setuserData);
              }}
            />
            <br />
            <div className="agreeContainer">
              <input type="checkbox" className="checkBox"></input>
              <span className="agreeDetails">
                I agree with all the Trems and Conditions and Privacy Policies.
              </span>
            </div>
            <br />
            <button className="signinBtn" onClick={SubmitSigninData}>
              Sign In
            </button>
            <h1 className="loginLink">
              Don’t have an Account? <Link to="/signin">Sign In</Link> here
            </h1>
          </form>
        </div>
        <div className="InstructionPart">
          <h1 className="HelpDeskHeading">Help Desk for all</h1>
          <p className="brandLine">Ease your Task</p>
          <div className="privacyContainer">
            <p className="privacyHeading">Privacy Policies*</p>
            <p className="privacyContent">
              We care About your valuable data, we make it secure by not sharing
              it outside the application.
            </p>
          </div>
          <div className="termsContainer">
            <p
              style={{
                color: "white",
                fontSize: "20px",
                textAlign: "left",
                marginBottom: "5px",
              }}
            >
              Note:
            </p>
            <ul>
              <li>
                Your information may be disclose to the higher authority of the
                Department.
              </li>
              <li>Your account might be track by others</li>
              <li>In case of misbehave account may be Blocked or Removed.</li>
              <li>Your data safe with Us.</li>
            </ul>
          </div>
          <div className="lockIcon">
            <LockIcon sx={{ color: "white", fontSize: "120px" }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentSignin;
