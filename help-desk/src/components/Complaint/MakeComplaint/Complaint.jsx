import { React, useState } from "react";
import ErrorIcon from "@mui/icons-material/Error";
import SecurityIcon from "@mui/icons-material/Security";
import "./Complaint.css";
import Rating from "@mui/material/Rating";
import StoreInUsestate from "../../../util/StoreInUsestate";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import axios from "axios";

function Complaint() {
  const [value, setValue] = useState(null);
  const [complaintData, setcomplaintData] = useState({
    title: "",
    desc: "",
    to: "",
    severity: 0,
  });
  const [complaintPhoto, setcomplaintPhoto] = useState("");

  const submitComplaint = (e) => {
    e.preventDefault();
    var complaintDetails = new FormData();
    complaintDetails.append("userID", localStorage.getItem("id"));
    complaintDetails.append("title", complaintData.title);
    complaintDetails.append("desc", complaintData.desc);
    complaintDetails.append("to", complaintData.to);
    complaintDetails.append("severity", complaintData.severity);
    complaintDetails.append("image", complaintPhoto);

    axios
      .post("http://localhost:5000/addcomplaint", complaintDetails, {
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch(() => {
        console.log("Error");
      });
  };
  return (
    <>
      <div className="Complaint">
        <div className="make_complaint">
          <div className="write_complaint">
            <h3>Write Your Complaint Here</h3>
          </div>
          <div className="complaint_form">
            <div className="complaint_fields">
              <label>Complaint Title</label>
              <input
                type="text"
                className="complaint_input"
                name="title"
                onChange={(e) => {
                  StoreInUsestate.handleChange(e, setcomplaintData);
                }}
              />
              <label>Complaint</label>
              <textarea
                rows="5"
                cols="25"
                className="complaint_textinput"
                name="desc"
                onChange={(e) => {
                  StoreInUsestate.handleChange(e, setcomplaintData);
                }}
              />
              {/* Photo Inpur and Designing*/}
              <div className="PhotoSelecAndHolder">
                <label
                  htmlFor="complaintPhoto"
                  className="fileLabel"
                  style={{ width: "48%", marginTop: "5px" }}
                >
                  Upload Pictures
                  <div className="dummyDiv" htmlFor="photoInput">
                    <CameraAltIcon sx={{ margin: "5px 10px 10px 15px" }} />
                  </div>
                </label>
                <div>
                  {complaintPhoto ? (
                    <img
                      src={URL.createObjectURL(complaintPhoto)}
                      alt="uploadedProduct"
                      className="profilePicture"
                    />
                  ) : null}
                </div>
              </div>
              {/* End */}
              <input
                className="complaintPhotoInput"
                id="complaintPhoto"
                type="file"
                name="photoInput"
                onChange={(e) => {
                  setcomplaintPhoto(e.target.files[0]);
                }}
              />
              <label>Complaint To</label>
              <select
                className="complaint_to"
                name="to"
                onChange={(e) => {
                  StoreInUsestate.handleChange(e, setcomplaintData);
                }}
              >
                <option value={"Faculty"}>Faculty</option>
                <option value={"Student"}>Student</option>
                <option value={"All"}>All</option>
              </select>
              <label>Serverity/Urgency</label>
              <div className="serverity">
                <Rating
                  name="severity"
                  value={value}
                  onChange={(e, newValue) => {
                    StoreInUsestate.handleChange(e, setcomplaintData);
                    setValue(newValue);
                  }}
                  sx={{ marginBottom: "15px" }}
                />
              </div>
              <button
                type="submit"
                className="complaint_button"
                onClick={(e) => {
                  submitComplaint(e);
                  console.log(complaintPhoto, "check photo here");
                }}
              >
                Make Complaint
              </button>
            </div>
            <div className="isolation"></div>
            <div className="complaint_rules">
              <div className="rules_method">
                <ErrorIcon />
                <h5>Complaint Rules & Method</h5>
                <p>
                  If complaint to higher authority - every lower
                  <br /> authority need to approve the complaint.
                </p>
                <p>Your ID Number and other details are shared.</p>
                <p>Abusive language is prohibited.</p>
                <p>Legal Actions will takne on responsible person.</p>
                <p>Complaint can be track by System.</p>
                <p>Severity star can make impact on complaint solving speed.</p>
              </div>
              <div className="take_care">
                <SecurityIcon sx={{ fontSize: "100px" }} />
                <h3>
                  Give us Some Time,
                  <br />
                  We take care from here...
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Complaint;
