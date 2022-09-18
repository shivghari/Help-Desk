import React from 'react';
import "./Profile.css";
import profile from "../../images/Profile Image 1.png";
import camera from "../../images/camera.png"
import Grid from '@mui/material/Grid';
import complaint from "../../images/make Complaint 1.png"
import leave from "../../images/travelll 1.png"
import attendance from "../../images/remainder 1.png"
import sblack from "../../images/sblack.png"
import mic from "../../images/mic.png" 
import like from "../../images/like.png"
import dislike from "../../images/dislike.png"
import star from "../../images/star.png"
import fillstar from "../../images/fillstar.png"

export default function Profile() {
  return (
    <>
            <div className='wholeprofile'>
                <div className='studentinfo'>
                    <div className='profilesection'>
                        <img src={profile} alt="profileimg" className="profileimg"></img>
                        <img src={camera} alt="cameraimg" className="cameraimg"></img>
                    </div>
                    <div className='profiledetails'>
                        <h3>Anjali Pradipkumar Parmar</h3>
                        <h4>class-B sem-7th</h4>
                        <h5>201903103510141</h5>
                        <h5>Class Representive</h5>
                        <h5>User id - 200193</h5>
                        <p>I have a great interest in Designing and i would like to continue with this skill through my carrier</p>
                    </div>
                    <div className='editprofile'>
                        <button className='editp'>Edit Profile</button>
                    </div>
                </div>
                <div className="services">
                    <h3>Services...</h3>
                    <Grid container spacing={2}>
                        <Grid item md={4} sm={6} xs={12}>
                            <div className="complaintsection">
                                <img src={complaint} alt="complaintimg" className="complaintimg"></img>
                                <h4>Make Complaint Now</h4>
                            </div>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <div className="leavesection">
                                <img src={leave} alt="leaveimg" className="leaveimg"></img>
                                <h4>Make Leave Now</h4>
                            </div>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <div className="attendancesection">
                                <img src={attendance} alt="attendanceimg" className="attendanceimg"></img>
                                <h4>My Attendance %</h4>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className="allinformation">
                    <h3 className="infoheading">All Information for you</h3>
                    <div className="info">
                        <div className='scontainer'>
                            <img src={sblack} alt="sblackimg" className='sblackimg'></img>
                        </div>
                        <div className="infodetails">
                            <div className="infoname">
                                <h3>Shivani Vohra</h3>
                                {/* <img src={mic} alt="micimg" className='micimg'></img> */}
                            </div>
                            <h5>Faculty</h5>
                            <p>Hello Dear Student,<br/>I am informing you to take a part in open book test compitition and make your class<br/> proud by beign in compitition. Faculties can take a part too.<br/> Hurry up folks.</p>
                            <div className="ratings">
                                <div className="stars">
                                    <img src={fillstar} alt="statimg" className="starimg"></img>
                                    <img src={fillstar} alt="statimg" className="starimg"></img>
                                    <img src={star} alt="statimg" className="starimg"></img>
                                    <img src={star} alt="statimg" className="starimg"></img>
                                    <img src={star} alt="statimg" className="starimg"></img>
                                </div>
                                <div className="like">
                                    <img src={like} alt="likeimg" className="likeimg"></img><span>302</span>
                                    <img src={dislike} alt="dislikeimg" className="dislikeimg"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}
