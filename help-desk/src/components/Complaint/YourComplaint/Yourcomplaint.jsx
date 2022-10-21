import { React, useState } from "react";
import "./Yourcomplaint.css";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";
import EditComplaint from "./EditComplaint";

import DeleteComplaintById from "../../../util/DeleteComplaintById";
import GetComplaintsByUserID from "../../../Hooks/GetComplaintsByUserID";

// tostify Notifiation
import { ToastContainer } from "react-toastify";

function Yourcomplaint() {
  // const [editComplaint, seteditComplaint] = useState(false);
  const [selectedComplaint, setselectedComplaint] = useState({});

  const complaints = GetComplaintsByUserID(
    "http://localhost:5000/getComplaint",
    selectedComplaint
  );

  return (
    <>
      <div className="yourcomplaint">
        {complaints.length !== 0 &&
          complaints.map((val) => {
            return (
              <>
                <div className="allcomplaint" key={val._id}>
                  <div className="complaint_info">
                    <div className="acontainer">
                      <Avatar
                        sx={{ width: 56, height: 56, bgcolor: "#FF8E4F" }}
                      ></Avatar>
                    </div>
                    <div className="complaint_infodetails">
                      <div className="complaint_infoname">
                        <h3>{val.userID["userName"]}</h3>
                      </div>
                      <h5>{val.userID["role"]}</h5>
                      <h4 className="complaint_title">{val.title}</h4>
                      <p>{val.desc}</p>
                      <Rating
                        name="size-medium"
                        value={val.severity}
                        readOnly
                      />
                      <div className="status_edit">
                        <div className="status">
                          <h4>Status:</h4>
                          <span className="status_result">
                            {val.status ? val.status : "Pending"}
                          </span>
                        </div>
                        <div className="edit">
                          <button
                            className="editcomplaint"
                            onClick={() => {
                              setselectedComplaint({ id: val._id });
                            }}
                          >
                            Edit Complaint
                          </button>
                          <button
                            className="deletecomplaint"
                            onClick={() => {
                              DeleteComplaintById.deleteComplaint(
                                val._id,
                                setselectedComplaint
                              );
                              // setselectedComplaint({ Notification: "delete" });
                            }}
                          >
                            Delete Comaplaint
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {selectedComplaint["id"] === val._id ? (
                    <EditComplaint
                      complaintID={val._id}
                      setselectedComplaint={setselectedComplaint}
                    />
                  ) : null}
                </div>
              </>
            );
          })}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default Yourcomplaint;
