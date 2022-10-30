import React from "react";
import "./Managestudent.css";
import { Avatar } from "@mui/material";
import GetAllInformation from "../../../Hooks/GetAllInformation";
import MakeCRLR from "../../../util/MakeCRLR";
import { useState } from "react";

function Managestudent() {
  const [toggle, setoggle] = useState(false);
  const students = GetAllInformation(
    "http://localhost:5000/getallstudent",
    toggle
  );
  return (
    <>
      {/* <div className='managecontainer'> */}
      <div className="manageallinformation">
        <h3 className="manageinfoheading">Your Students - (Manage CR LR)</h3>
        <div className="allmanageinfo">
          {students &&
            students.map((std, index) => (
              <div className="manageinfo" key={index}>
                <div className="managescontainer">
                  <Avatar sx={{ width: 56, height: 56, bgcolor: "#FF8E4F" }}>
                    {`${std.userName[0].toUpperCase()}${std?.userName
                      ?.split(" ")[1][0]
                      .toUpperCase()}`}
                  </Avatar>
                </div>
                <div className="manageinfodetails">
                  <div className="manageinfoname">
                    <h3>{std?.userName}</h3>
                    {/* <img src={mic} alt="micimg" className='micimg'></img> */}
                  </div>
                  <h5>{`Sem ${std?.semester} - ${std?.field} ${std?.className}`}</h5>
                  <h5>{std?.role}</h5>
                  <p>{std?.bio}</p>
                  <div className="managebutton">
                    {std?.role === "CR" || std?.role === "LR" ? (
                      <button
                        type="submit"
                        className="mbutton"
                        onClick={() => {
                          MakeCRLR.dismissCRLR(std?._id);
                          setoggle(!toggle);
                        }}
                      >
                        Dismiss from CR/LR Post
                      </button>
                    ) : (
                      <>
                        <button
                          type="submit"
                          className="mbutton"
                          onClick={() => {
                            MakeCRLR.makeCR(std?._id);
                            setoggle(!toggle);
                          }}
                        >
                          Appoint CR
                        </button>
                        <button
                          type="submit"
                          className="mbutton"
                          onClick={() => {
                            MakeCRLR.makeLR(std?._id);
                            setoggle(!toggle);
                          }}
                        >
                          Appoint LR
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Managestudent;
