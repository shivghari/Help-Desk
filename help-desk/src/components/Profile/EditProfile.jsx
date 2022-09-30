import React, { useState } from "react";
import "./EditProfile.css";
import StoreInUsestate from "../../util/StoreInUsestate";

function EditProfile({ closeEditProfile }) {
  const [editProfileData, seteditProfileData] = useState({
    field: "",
    semester: "",
    className: "",
    bio: "",
  });

  return (
    <>
      <div className="EditProfileContainer">
        <h1>Edit Your Profile Here</h1>
        <input
          type="text"
          name="field"
          placeholder="Enter Your Field"
          className="EditProfileInput"
          onChange={(e) => {
            StoreInUsestate.handleChange(e, seteditProfileData);
          }}
        />{" "}
        <br />
        <input
          type="text"
          name="semester"
          placeholder="Enter Semester You Study"
          className="EditProfileInput"
          onChange={(e) => {
            StoreInUsestate.handleChange(e, seteditProfileData);
          }}
        />{" "}
        <br />
        <input
          type="text"
          name="className"
          placeholder="Enter Classname"
          className="EditProfileInput"
          onChange={(e) => {
            StoreInUsestate.handleChange(e, seteditProfileData);
          }}
        />{" "}
        <br />
        <textarea
          type="text"
          name="bio"
          placeholder="Enter Your Bio"
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
            console.log(editProfileData);
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
    </>
  );
}

export default EditProfile;
