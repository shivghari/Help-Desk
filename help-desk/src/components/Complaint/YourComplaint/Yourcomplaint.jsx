import { React, useState } from "react";
import "./Yourcomplaint.css";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";
import EditComplaint from "./EditComplaint";
import GetCurrentUserData from "../../../Hooks/GetCurrentUserData";
import DeleteComplaintById from "../../../util/DeleteComplaintById";
import GetComplaintsByUserID from "../../../Hooks/GetComplaintsByUserID";

function Yourcomplaint() {
  // const [editComplaint, seteditComplaint] = useState(false);
  const [selectedComplaint, setselectedComplaint] = useState({});
  const userData = GetCurrentUserData("http://localhost:5000/getdatabyid");
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
                        <h3>{userData.userName}</h3>
                      </div>
                      <h5>{userData.role}</h5>
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
                              console.log("hola", selectedComplaint.keys);
                            }}
                          >
                            Edit Complaint
                          </button>
                          <button
                            className="deletecomplaint"
                            onClick={() => {
                              var status = DeleteComplaintById.deleteComplaint(
                                val._id
                              );
                              console.log(status);
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
    </>
  );
}

export default Yourcomplaint;
