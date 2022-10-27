import React, { useState } from "react";
import "./Postinformation.css";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import StoreInUsestate from "../../../util/StoreInUsestate";
import axios from "axios";

function Postinformation() {
  const [infoData, setinfoData] = useState({
    title: "",
    desc: "",
    author: "",
    mention: "",
  });

  const [infoPhoto, setinfoPhoto] = useState("");

  const haldleSubmit = (e) => {
    e.preventDefault();
    const InformationData = new FormData();
    InformationData.append("author", localStorage.getItem("id"));
    InformationData.append("title", infoData.title);
    InformationData.append("desc", infoData.desc);
    InformationData.append("mention", infoData.mention);
    InformationData.append("infoPhoto", infoPhoto);
    axios
      .post("http://localhost:5000/postinformation", InformationData)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e, "err");
      });
  };

  // TO discard the Filled Data
  const discardFunction = () => {
    setinfoData({
      title: "",
      desc: "",
      author: "",
      mention: "",
    });
    setinfoPhoto("");
  };

  return (
    <>
      <div className="postcontainer">
        <div className="wholepostinfo">
          <div className="postheading">
            <h3>Post New Information</h3>
          </div>
          <div className="postform">
            <div className="postdetails">
              <label>Information Title</label>
              <input
                type="text"
                className="post_input"
                name="title"
                value={infoData.title}
                onChange={(e) => {
                  StoreInUsestate.handleChange(e, setinfoData);
                }}
              />
              <label>Information Description</label>
              <input
                type="text"
                className="post_input"
                name="desc"
                value={infoData.desc}
                onChange={(e) => {
                  StoreInUsestate.handleChange(e, setinfoData);
                }}
              />
              <label>Class Or All (@xyz) Mentions</label>
              <input
                type="text"
                className="post_input"
                name="mention"
                value={infoData.mention}
                onChange={(e) => {
                  StoreInUsestate.handleChange(e, setinfoData);
                }}
              />
              <div className="postbutton">
                <button
                  type="submit"
                  className="pbutton"
                  onClick={(e) => {
                    haldleSubmit(e);
                  }}
                >
                  Post
                </button>
                <button
                  type="submit"
                  className="pbutton"
                  onClick={() => {
                    discardFunction();
                  }}
                >
                  Discard
                </button>
              </div>
            </div>
            <div className="postimage">
              <label htmlFor="postImageInput">
                {infoPhoto ? (
                  <img
                    src={URL.createObjectURL(infoPhoto)}
                    className="infoPhoto"
                    alt="ComplaintPhoto"
                  />
                ) : (
                  <>
                    <p>Add Photo Here</p>
                    <div className="pimageborder"></div>
                  </>
                )}
                <input
                  className="postImageInput"
                  type="file"
                  id="postImageInput"
                  name="postPhoto"
                  onChange={(e) => {
                    setinfoPhoto(e.target.files[0]);
                  }}
                />
                <div style={{ textAlign: "center" }}>
                  <CameraAltIcon fontSize="large" sx={{ marginTop: "5px" }} />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Postinformation;
