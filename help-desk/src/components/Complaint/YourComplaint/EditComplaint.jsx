import React, { useState } from "react";
import "./EditComplaint.css";
import Rating from "@mui/material/Rating";
import StoreInUsestate from "../../../util/StoreInUsestate";
import axios from "axios";

function EditComplaint({ complaintID, setselectedComplaint }) {
  const [updateComplaint, setupdateComplaint] = useState({
    title: "",
    desc: "",
    severity: 0,
  });

  const editComplaintFunc = (e) => {
    e.preventDefault();
    const complaintData = new FormData();
    complaintData.append("title", updateComplaint.title);
    complaintData.append("desc", updateComplaint.desc);
    complaintData.append("severity", updateComplaint.severity);
    complaintData.append("id", complaintID);

    axios
      .put("http://localhost:5000/updatecomplaint", complaintData)
      .then((response) => {
        setselectedComplaint({ Notification: "update" });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <>
      <div className="editComplaintComponent">
        <h3>Edit Complaint</h3>
        <div>
          <input
            type="text"
            placeholder="Update Title"
            className="updateComplaintInput"
            name="title"
            onChange={(e) => {
              StoreInUsestate.handleChange(e, setupdateComplaint);
            }}
          />
          <br />
          <textarea
            rows="5"
            type="text"
            placeholder="Update Description"
            className="editComplaintTextarea"
            name="desc"
            onChange={(e) => {
              StoreInUsestate.handleChange(e, setupdateComplaint);
            }}
          />
          <br />
          <label>Saverity/ Urgency</label> <br />
          <Rating
            defaultValue={2}
            size="medium"
            name="severity"
            onChange={(e) => {
              StoreInUsestate.handleChange(e, setupdateComplaint);
            }}
          />
          <br />
          <button
            className="editComplaintbtns"
            onClick={(e) => {
              editComplaintFunc(e);
            }}
          >
            Save Edit
          </button>
          <button
            className="editComplaintbtns"
            onClick={() => {
              setselectedComplaint({});
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default EditComplaint;
