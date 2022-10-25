import React from "react";
import "./ManageComplaint.css";
import Rating from "@mui/material/Rating";
import GetAllComplaint from "../../../Hooks/GetAllComplaint";

function ManageComplaint() {
  const complaints = GetAllComplaint("http://localhost:5000/getAllComplaint");
  return (
    <>
      <div className="myourcomplaint">
        <div className="manageSheading">
          <h3>Manage Student Complaint</h3>
        </div>
        <div className="managescomplaints">
          {complaints &&
            complaints.map((val, index) => {
              return (
                <>
                  <div className="manageallcomplaint" key={index}>
                    <div className="managecomplaint_info">
                      <div className="manageacontainer">
                        <img
                          src="./images/[A] Black.png"
                          alt="ablackimg"
                          className="manageablackimg"
                        ></img>
                      </div>
                      <div className="managecomplaint_infodetails">
                        <div className="managecomplaint_infoname">
                          <h3>{val?.userID?.userName}</h3>
                        </div>
                        <h5>{val?.userID?.role}</h5>
                        <h4 className="managecomplaint_title">{val?.title}</h4>
                        <p>{val?.desc}</p>
                        <Rating
                          name="size-medium"
                          value={val?.severity}
                          readOnly
                        />
                        <div className="managestatus_edit">
                          <div className="managestatus">
                            <h4>Status:</h4>
                            <span className="managestatus_result">
                              {val?.status ? val?.status : "Pending"}
                            </span>
                          </div>
                          <div className="manageedit">
                            <button className="manageeditcomplaint">
                              Change Status
                            </button>
                            <button className="manageeditcomplaint">
                              Pass To HOD
                            </button>
                            <button className="manageeditcomplaint">
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default ManageComplaint;
