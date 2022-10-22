import React from 'react';
import "./Options.css";
import Grid from '@mui/material/Grid';


export default function Options() {
  return (
    <>
            {/* <div className='wholefprofile'> */}
                <div className='facultyinfo'>
                    <div className='fprofilesection'>
                        <img src="./images/Profile Image.png" alt="fprofileimg" className="fprofileimg"></img>
                        <img src="./images/camera.png" alt="fcameraimg" className="fcameraimg"></img>
                    </div>
                    <div className='fprofiledetails'>
                        <h3>Anjali Pradipkumar Parmar</h3>
                        <h4>class-B sem-7th</h4>
                        <h5>201903103510141</h5>
                        <h5>Class Representive</h5>
                        <h5>User id - 200193</h5>
                        <p>I have a great interest in Designing and i would like to continue with this skill through my carrier</p>
                    </div>
                    <div className='feditprofile'>
                        <button className='feditp'>Edit Profile</button>
                    </div>
                </div>
                <div className="fservices">
                    <h3>Services...</h3>
                    <Grid container spacing={2}>
                        <Grid item md={4} sm={6} xs={12}>
                            <div className="fcomplaintsection">
                                <img src="./images/make Complaint.png" alt="fcomplaintimg" className="ffeatureImage"></img>
                                <h4>Make Complaint Now</h4>
                            </div>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <div className="fleavesection">
                                <img src="./images/travelll.png" alt="fleaveimg" className="ffeatureImage"></img>
                                <h4>Make Leave Now</h4>
                            </div>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <div className="fattendancesection">
                                <img src="./images/remainder.jpg" alt="fattendanceimg" className="ffeatureImage"></img>
                                <h4>My Attendance %</h4>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                {/* </div> */}
            </>
  )
}