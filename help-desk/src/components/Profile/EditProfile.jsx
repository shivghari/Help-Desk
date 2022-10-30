import React, { useState } from "react";
import "./EditProfile.css";
import StoreInUsestate from "../../util/StoreInUsestate";
import axios from "axios";
import GetCurrentUserData from "../../Hooks/GetCurrentUserData";
import Notification from "../../util/Notification";
import { ToastContainer } from "react-toastify";

function EditProfile({ closeEditProfile }) {
  const [editProfileData, seteditProfileData] = useState({
    field: "",
    semester: "",
    className: "",
    bio: "",
  });

  const userData = GetCurrentUserData("http://localhost:5000/getdatabyid");

  function handleSubmit() {
    axios
      .post("http://localhost:5000/editStudentProfile", {
        id: localStorage.getItem("id"),
        data: editProfileData,
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      })
      .then(() => {
        console.log("Data Submit");
        Notification.successNotification("Profile Updated Successfully.");
      })
      .catch((e) => {
        console.log("Something went wrong");
        Notification.errorNotification(
          "Something Went Wrong. Please Try Later..."
        );
      });
  }

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
          name="semester"
          placeholder={
            userData.semester ? userData.semester : "Enter Semester You Study"
          }
          className="EditProfileInput"
          onChange={(e) => {
            StoreInUsestate.handleChange(e, seteditProfileData);
          }}
        />{" "}
        <br />
        <input
          type="text"
          name="className"
          placeholder={
            userData.className ? userData.className : "Enter Classname"
          }
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

export default EditProfile;
