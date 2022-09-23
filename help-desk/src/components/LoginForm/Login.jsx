import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  return (
    <>
      <div className="login-container">
        <div className="main-container">
          <div className="login-heading">
            <h1>Login Here</h1>
          </div>
          <div className="login-contain">
            <div className="login-details">
              <input type="text" placeholder="Enter Email or Enrollment" />
              <br />
              <input type="text" placeholder="Enter Password" />
              <h1 className="forgot">Forgot Password?</h1>
              <div className="login-button">
                <button type="sumbit">Login</button>
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
