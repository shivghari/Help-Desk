import { React, useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import "./Trackcomplaint.css";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";

import data from "../TrackComplaint/com";
import { StepContent, Typography } from "@mui/material";
import { useEffect } from "react";

function Trackcomplaint() {
  const [value, setValue] = useState(null);

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
        {data.map((val) => {
          return (
            <>
              <div className="track_allcomplaint">
                <div className="trackcomplaint_info">
                  <div className="track_acontainer">
                    <Avatar sx={{ width: 56, height: 56, bgcolor: "#FF8E4F" }}>
                      {`${val.name[0].toUpperCase()}${val?.name
                        ?.split(" ")[1][0]
                        .toUpperCase()}`}
                    </Avatar>
                  </div>
                  <div className="trackcomplaint_infodetails">
                    <div className="trackcomplaint_infoname">
                      <h3>{val.name}</h3>
                    </div>
                    <h5>{val.designation}</h5>
                    <h4 className="trackcomplaint_title">{val.title}</h4>
                    <p>{val.details}</p>
                    <Rating
                      name="size-medium"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                    {screenWidth > 425 ? (
                      <Stepper
                        activeStep={1}
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
                      <Stepper activeStep={3} orientation="vertical">
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
                      <span className="trackstatus_result">{val.status}</span>
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
