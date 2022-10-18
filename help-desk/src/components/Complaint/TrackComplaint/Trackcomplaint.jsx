import { React, useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import "./Trackcomplaint.css";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";

import { StepContent, Typography } from "@mui/material";
import { useEffect } from "react";

import GetComplaintsByUserID from "../../../Hooks/GetComplaintsByUserID";
import GetCurrentUserData from "../../../Hooks/GetCurrentUserData";

function Trackcomplaint() {
  const userData = GetCurrentUserData("http://localhost:5000/getdatabyid");
  const complaints = GetComplaintsByUserID(
    "http://localhost:5000/getComplaint"
  );
  const [screenWidth, setscreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    setscreenWidth(window.innerWidth);
    console.log("Width Chnages");
  }, []);

  const steps = [
    "Complaint Sent",
    "Approved By CR",
    "Approved By Faculty",
    "Approved By HOD",
    "Reached to Director",
  ];
  return (
    <>
      <div className="trackcomplaint">
        {complaints &&
          complaints.map((val) => {
            return (
              <>
                <div className="track_allcomplaint">
                  <div className="trackcomplaint_info">
                    <div className="track_acontainer">
                      <Avatar
                        sx={{ width: 56, height: 56, bgcolor: "#FF8E4F" }}
                      >
                        {/* {`${userData.userName[0].toUpperCase()}${userData?.userName
                          ?.split(" ")[1][0]
                          .toUpperCase()}`} */}
                      </Avatar>
                    </div>
                    <div className="trackcomplaint_infodetails">
                      <div className="trackcomplaint_infoname">
                        <h3>{userData?.userName}</h3>
                      </div>
                      <h5>{userData?.role}</h5>
                      <h4 className="trackcomplaint_title">{val?.title}</h4>
                      <p>{val?.desc}</p>
                      <Rating
                        name="size-medium"
                        value={val?.severity}
                        readOnly
                      />
                      {screenWidth > 425 ? (
                        <Stepper
                          activeStep={val?.track}
                          alternativeLabel
                          className="stepper"
                        >
                          {steps.map((label) => (
                            <Step key={label}>
                              <StepLabel>{label}</StepLabel>
                            </Step>
                          ))}
                        </Stepper>
                      ) : (
                        <Stepper activeStep={val?.track} orientation="vertical">
                          {steps.map((step, index) => (
                            <Step key={step.label}>
                              <StepLabel>{step}</StepLabel>
                              <StepContent>
                                <Typography>{step.description}</Typography>
                              </StepContent>
                            </Step>
                          ))}
                        </Stepper>
                      )}
                      <div className="track_status">
                        <h4>Status:</h4>
                        <span className="trackstatus_result">
                          {val?.status ? val?.status : "Pending"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Checking The Stepper Bertical */}

                {/* End Cheking */}
              </>
            );
          })}
      </div>
    </>
  );
}

export default Trackcomplaint;
