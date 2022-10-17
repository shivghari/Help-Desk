import { React, useEffect, useState } from "react";
import "./Yourcomplaint.css";
import Rating from "@mui/material/Rating";
import axios from "axios";
import Avatar from "@mui/material/Avatar";

function Yourcomplaint() {
  const [complaints, setcomplaints] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:5000/getComplaint", {
        userID: localStorage.getItem("id"),
      })
      .then((response) => {
        console.log(response.data);
        setcomplaints(response.data);
      })
      .catch((err) => {
        console.log(err, "err");
      });
  }, []);
  return (
    <>
      <div className="yourcomplaint">
        {complaints.length !== 0 &&
          complaints.map((val) => {
            return (
              <>
                <div className="allcomplaint">
                  <div className="complaint_info">
                    <div className="acontainer">
                      <Avatar
                        sx={{ width: 56, height: 56, bgcolor: "#FF8E4F" }}
                      >
                        {/* {`${val.name[0].toUpperCase()}${val?.name
                          ?.split(" ")[1][0]
                          .toUpperCase()}`} */}
                      </Avatar>
                    </div>
                    <div className="complaint_infodetails">
                      <div className="complaint_infoname">
                        <h3>{"Patel Ishan"}</h3>
                      </div>
                      <h5>{"Student"}</h5>
                      <h4 className="complaint_title">{val.title}</h4>
                      <p>{val.desc}</p>
                      <Rating name="size-medium" value={val.severity} />
                      <div className="status_edit">
                        <div className="status">
                          <h4>Status:</h4>
                          <span className="status_result">
                            {val.status ? val.status : "Pending"}
                          </span>
                        </div>
                        <div className="edit">
                          <button className="editcomplaint">
                            Edit Complaint
                          </button>
                          <button className="deletecomplaint">
                            Delete Comaplaint
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
    </>
  );
}

export default Yourcomplaint;
