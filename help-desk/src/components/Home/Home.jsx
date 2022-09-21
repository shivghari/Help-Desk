import { Grid } from "@mui/material";
import React from "react";
import "./Home.css";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";

function Home() {
  return (
    <div className="home-container">
      <div className="cgpit-slider">
        <img
          src="./images/CGPIT.jpg"
          alt="cgpit"
          className="cgpit-slider-image"
        />
      </div>
      <div className="customer-journy-map">
        {/* <img src="./images/customerJourneyMap.png" alt="customer Journey Map" /> */}
        <AddLocationAltIcon fontSize="large" />
        <div>
          <p>
            348J+X6M, Maliba Campus, Mahuva-Bardoli Rd, Gopal Vidyanagar,
            Tarsadi, Gujarat 394350
          </p>
          <p>CGPIT - ChhotuBhai Gopalbhi Patel Institute of Technology</p>
        </div>
      </div>
      <div className="title">
        <h1>Ease Your Task...We will Help you...</h1>
      </div>

      <div className="portal-container">
        <h3>Who are You ?</h3>
        <br />
        <Grid container spacing={2}>
          <Grid item md={4} sm={4} xs={12}>
            <img
              src="./images/StudentPortal.jpg"
              alt="studentPortal.png"
              width="100%"
              height="75%"
              className="portalImage"
            />
            <h2>Student Portal</h2>
          </Grid>
          <Grid item md={4} sm={4} xs={12}>
            <img
              src="./images/FacultyPortal.jpg"
              alt="studentPortal.png"
              width="100%"
              height="75%"
              className="portalImage"
            />
            <h2>Faculty Portal</h2>
          </Grid>
          <Grid item md={4} sm={4} xs={12}>
            <img
              src="./images/OtherPortal.jpg"
              alt="studentPortal.png"
              width="100%"
              height="75%"
              className="portalImage"
            />
            <h2>Other</h2>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
