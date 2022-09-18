import {React,useState} from 'react';
import ErrorIcon from '@mui/icons-material/Error';
import SecurityIcon from '@mui/icons-material/Security';
import "./Complaint.css";
import Rating from '@mui/material/Rating';

function Complaint() {
    const [value, setValue] = useState(null);
  return (
    <>
        <div className='Complaint'>
            <div className='student_complaint'>
                <h1>Student Complaint Management Portal</h1>
                <div className='complaint_options'>
                    <h3>Make Complaint</h3>
                    <h3>Track Complaint</h3>
                    <h3>Your Complaint</h3>
                </div>
            </div>
            <div className='make_complaint'>
                <div className='write_complaint'>
                    <h3>Write Your Complaint Here</h3>
                </div>
                <div className='complaint_form'>
                    <div className='complaint_fields'>
                        <label>Complaint Title</label>
                        <input type="text" className='complaint_input'/>
                        <label>Complaint</label>
                        <textarea rows="5" cols="25" className='complaint_textinput'/>
                        <label>Upload Pictures</label>
                        <input type="text" className='complaint_input'/>
                        <label>Complaint To</label>
                        <select className='complaint_to'>
                            <option>Faculty</option>
                            <option>Student</option>
                            <option>Other</option>
                        </select>
                        <label>Serverity/Urgency</label>
                        <div className='serverity'>
                            <Rating
                                name="size-medium"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </div>
                        <button type="submit" className='complaint_button'>Make Complaint</button>
                    </div>
                    <div className="isolation"></div>
                    <div className='complaint_rules'>
                        <div className='rules_method'>
                            <ErrorIcon/>
                            <h5>Complaint Rules & Method</h5>
                            <p>If complaint to higher authority - every lower<br/> authority need to approve the complaint.</p>
                            <p>Your ID Number and other details are shared.</p>
                            <p>Abusive language is prohibited.</p>
                            <p>Legal Actions will takne on responsible person.</p>
                            <p>Complaint can be track by System.</p>
                            <p>Severity star can make impact on complaint solving speed.</p>
                        </div>
                        <div className='take_care'>
                            <SecurityIcon sx={{fontSize: "100px"}}/>
                            <h3>Give us Some Time,<br/>We take care from here...</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Complaint