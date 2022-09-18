import {React,useState} from 'react';
import "./Yourcomplaint.css";
import Rating from '@mui/material/Rating';
import ablack from "../../../images/[A] Black.png"
import data from "./com"

function Yourcomplaint() {
    const [value, setValue] = useState(null);
  return (
    <>
        <div className='yourcomplaint'>
            <div className='student_yourcomplaint'>
                <h1>Student Complaint Management Portal</h1>
                <div className='yourcomplaint_options'>
                        <h3>Make Complaint</h3>
                        <h3>Track Complaint</h3>
                        <h3>Your Complaint</h3>
                </div>
            </div>
            {data.map((val) => {
                return(
                    <>
                    <div className="allcomplaint">
                        <div className="complaint_info">
                            <div className='acontainer'>
                                <img src={ablack} alt="ablackimg" className='ablackimg'></img>
                            </div>
                            <div className="complaint_infodetails">
                                <div className="complaint_infoname">
                                    <h3>{val.name}</h3>
                                </div>
                                <h5>{val.designation}</h5>
                                <h4 className='complaint_title'>{val.title}</h4>
                                <p>{val.details}</p>
                                <Rating
                                    name="size-medium"
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                                <div className='status_edit'>
                                    <div className='status'>
                                        <h4>Status:</h4><span className='status_result'>{val.status}</span>
                                    </div>
                                    <div className='edit'>
                                        <button className='editcomplaint'>Edit Complaint</button>
                                        <button className='deletecomplaint'>Delete Comaplaint</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
                )
            })}
        </div> 
        
    </>
  )
}

export default Yourcomplaint