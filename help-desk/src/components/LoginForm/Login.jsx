import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";

export default function Login() {
  
  const Navigate = useNavigate();
  const [logindata, setLogindata] = useState({
    enrollNo: 0 || "",
    password: "",
  });

  const handlechange = (e) => {
    const {name,value} = e.target
    setLogindata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handlesubmit = (e) => {
    e.preventDefault()
    var x = logindata.enrollNo;
    if(x.includes("@")){
      axios
      .post("http://localhost:5000/facultylogin", 
        {
          enrollNo: logindata.enrollNo,
          password: logindata.password
        })
      .then((response) => {
        console.log("Data Sent : ", response);
        localStorage.setItem("token",response.data.authtoken);
        Navigate("/profile")
      }).catch((err) => {
        console.log("Sonething Went Wrong : ", err);
      });
    } else{
      axios
      .post("http://localhost:5000/login", 
        {
          enrollNo: logindata.enrollNo,
          password: logindata.password
        })
      .then((response) => {
        console.log("Data Sent : ", response);
        localStorage.setItem("token",response.data.authtoken);
        Navigate("/profile")
      }).catch((err) => {
        console.log("Sonething Went Wrong : ", err);
      });
    }
  }

  return (
    <>
      <div className="login-container">
        <div className="main-container">
          <div className="login-heading">
            <h1>Login Here</h1>
          </div>
          <div className="login-contain">
            <div className="login-details">
              <input type="text" placeholder="Enter Email or Enrollment" name="enrollNo" onChange={handlechange}/>
              <br />
              <input type="text" placeholder="Enter Password" onChange={handlechange} name="password"/>
              <h1 className="forgot">Forgot Password?</h1>
              <div className="login-button">
                <button type="sumbit" onClick={handlesubmit}>Login</button>
              </div>
              <h1 className="signup">
                Don’t have an Account? <Link to="/signup">Sign Up</Link> here
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
