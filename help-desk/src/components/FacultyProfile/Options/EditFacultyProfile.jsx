import React, { useState } from "react";
import "./EditFacultyProfile.css";
import StoreInUsestate from "../../../util/StoreInUsestate";
import axios from "axios";
import GetCurrentUserData from "../../../Hooks/GetCurrentUserData";
import Notification from "../../../util/Notification";
import { ToastContainer } from "react-toastify";

function EditFacultyProfile({ closeEditProfile }) {
  const [editProfileData, seteditProfileData] = useState({
    field: "",
    education: "",
    mobileNo: "",
    bio: "",
  });

  function handleSubmit() {
    axios
      .post("http://localhost:5000/editFacultyProfile", {
        id: localStorage.getItem("id"),
        data: editProfileData,
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      })
      .then(() => {
        console.log("Data Submit");
        Notification.successNotification("Profile Update Successfully.");
      })
      .catch((e) => {
        console.log("Something went wrong");
        Notification.errorNotification(
          "Something Went Wrong. Please Try later..."
        );
      });
  }

  const userData = GetCurrentUserData("http://localhost:5000/getfacdatabyid");

  return (
    <>
      <div className="EditProfileContainer">
        <h1>Edit Your Profile Here</h1>
        <input
          type="text"
          name="field"
          placeholder={userData.field ? userData.field : "Enter Your Field"}
          className="EditProfileInput"
          onChange={(e) => {
            StoreInUsestate.handleChange(e, seteditProfileData);
          }}
        />{" "}
        <br />
        <input
          type="text"
          name="education"
          placeholder={
            userData.education
              ? userData.education
              : "Enter education You Study"
          }
          className="EditProfileInput"
          onChange={(e) => {
            StoreInUsestate.handleChange(e, seteditProfileData);
          }}
        />{" "}
        <br />
        <input
          type="text"
          name="mobileNo"
          placeholder={userData.mobileNo ? userData.mobileNo : "Enter mobileNo"}
          className="EditProfileInput"
          onChange={(e) => {
            StoreInUsestate.handleChange(e, seteditProfileData);
          }}
        />{" "}
        <br />
        <textarea
          type="text"
          name="bio"
          placeholder={userData.bio ? userData.bio : "Enter Your Bio"}
          className="EditProfileInput"
          style={{
            height: "70px",
            width: "80%",
            paddingTop: "5px",
            fontFamily: "Arial",
            fontSize: "15px",
          }}
          onChange={(e) => {
            StoreInUsestate.handleChange(e, seteditProfileData);
          }}
        />{" "}
        <br />
        <button
          className="editProfile"
          onClick={() => {
            handleSubmit();
            closeEditProfile(false);
          }}
        >
          Edit Profile
        </button>
        <button
          className="calcellBtn"
          onClick={() => {
            closeEditProfile(false);
          }}
        >
          Cancel
        </button>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default EditFacultyProfile;
