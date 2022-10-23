import React from 'react';
import "./ManageComplaint.css";
import data from "./data";
import Rating from "@mui/material/Rating";

function ManageComplaint() {
  return (
    <>
        <div className='myourcomplaint'>
        <div className='manageSheading'>
            <h3>Manage Student Complaint</h3> 
        </div>
        <div className='managescomplaints'>
        {data.map((val) => {
                return(
                    <>
                    <div className="manageallcomplaint">
                        <div className="managecomplaint_info">
                            <div className='manageacontainer'>
                                <img src="./images/[A] Black.png" alt="ablackimg" className='manageablackimg'></img>
                            </div>
                            <div className="managecomplaint_infodetails">
                                <div className="managecomplaint_infoname">
                                    <h3>{val.name}</h3>
                                </div>
                                <h5>{val.designation}</h5>
                                <h4 className='managecomplaint_title'>{val.title}</h4>
                                <p>{val.details}</p>
                                <Rating
                                    name="size-medium"
                                />
                                <div className='managestatus_edit'>
                                    <div className='managestatus'>
                                        <h4>Status:</h4><span className='managestatus_result'>{val.status}</span>
                                    </div>
                                    <div className='manageedit'>
                                        <button className='manageeditcomplaint'>Change Status</button>
                                        <button className='manageeditcomplaint'>Pass To HOD</button>
                                        <button className='manageeditcomplaint'>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
                )
            })}
        </div>
    </div>
    </>
  )
}

export default ManageComplaint