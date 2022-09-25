import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

// import {
//    Link
// } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const Navigate = useNavigate();
  const handlescroll = () => {
    const offset = window.scrollY;
    if (offset > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handlescroll);
  });

  // const menu = document.getElementById(".menu-btn");
  // const side = document.getElementById(".side");
  // const body = document.querySelector("body");
  // const cancel = document.querySelector(".cancel-btn")
  const handlemenu = () => {
    setMenu(!menu);
  };
  const handlecancel = () => {
    setMenu(false);
  };

  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className={scrolled ? "sticky" : "nav"}>
        <div className="logo-navbar">
          <div className="logo">
            <h2
              className="logo-text"
              onClick={() => {
                Navigate("/");
              }}
            >
              SDI
            </h2>
          </div>
          <div className="Navbar-items">
            <ul>
              <li
                onClick={() => {
                  Navigate("/");
                }}
              >
                Home
              </li>
              <li>Services</li>
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
        <div className={menu ? "side show" : "side"} id="side">
          <ul className="sidebar">
            <div className="cancel-btn" onClick={handlecancel}>
              <i className="fas fa-times" onClick={handlecancel}></i>
            </div>
            <li
              className="item"
              onClick={() => {
                console.log("Helo");
              }}
            >
              Home
            </li>
            <li className="item">Services</li>
            <li className="item">About us</li>
            <li className="item">Contact us</li>
          </ul>
        </div>
        <div className="login-menu">
          <div className="nav-login">
            {localStorage.getItem("id") ? (
              <button
                type="submit"
                onClick={() => {
                  localStorage.removeItem("id");
                  localStorage.removeItem("token");
                  Navigate("/");
                }}
              >
                Logout
              </button>
            ) : (
              <button
                type="submit"
                onClick={() => {
                  Navigate("/signin");
                }}
              >
                Login
              </button>
            )}
          </div>
          <div className="menu-btn" onClick={handlemenu} id="menu-btn">
            <i className="fas fa-bars" onClick={handlemenu}></i>
          </div>
        </div>
      </div>
    </>
  );
}
