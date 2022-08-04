import React from "react";
import "./StudentSignin.css";
import LockIcon from "@mui/icons-material/Lock";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import GirlProfile from "./GirlProfile.jpg";

function StudentSignin() {
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
            <input className="signInInput"></input>
            <br />
            <label>Enrolment No</label>
            <br />
            <input className="signInInput"></input>
            <br />
            <label>Email ID</label>
            <br />
            <input className="signInInput"></input>
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
                <img
                  src={GirlProfile}
                  alt="profile"
                  className="profilePicture"
                />
              </div>
            </div>
            <br />
            <input className="signInInput" type="file" id="photoInput"></input>
            <br />
            <label>Set Password</label>
            <br />
            <input className="signInInput"></input>
            <br />
            <label>Confirm Password</label>
            <br />
            <input className="signInInput"></input>
            <br />
            <div className="agreeContainer">
              <input type="checkbox" className="checkBox"></input>
              <span className="agreeDetails">
                I agree with all the Trems and Conditions and Privacy Policies.
              </span>
            </div>
            <br />
            <button className="signinBtn">Sign In</button>
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
