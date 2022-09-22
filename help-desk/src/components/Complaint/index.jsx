import React, { useState } from "react";
import "./complaintMain.css";
import Complaint from "./MakeComplaint/Complaint";
import Trackcomplaint from "./TrackComplaint/Trackcomplaint";
import Yourcomplaint from "./YourComplaint/Yourcomplaint";

function Index() {
  const [currentTab, setCurrentTab] = useState("makeComplaint");
  return (
    <>
      <div className="student_complaint">
        <h1>Student Complaint Management Portal</h1>
        <div className="complaint_options">
          <h3
            onClick={() => {
              setCurrentTab("makeComplaint");
            }}
          >
            Make Complaint
          </h3>

          <h3
            onClick={() => {
              setCurrentTab("trackComplaint");
            }}
          >
            Track Complaint
          </h3>

          <h3
            onClick={() => {
              setCurrentTab("yourComplaint");
            }}
          >
            Your Complaint
          </h3>
        </div>
      </div>

      {currentTab === "makeComplaint" ? <Complaint /> : null}
      {currentTab === "trackComplaint" ? <Trackcomplaint /> : null}
      {currentTab === "yourComplaint" ? <Yourcomplaint /> : null}
    </>
  );
}

export default Index;
