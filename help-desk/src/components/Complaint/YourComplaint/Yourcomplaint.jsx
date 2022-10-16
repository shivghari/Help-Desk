import { React } from "react";
import "./Yourcomplaint.css";
import Rating from "@mui/material/Rating";

import Avatar from "@mui/material/Avatar";
import data from "./com";

function Yourcomplaint() {
  return (
    <>
      <div className="yourcomplaint">
        {data.map((val) => {
          return (
            <>
              <div className="allcomplaint">
                <div className="complaint_info">
                  <div className="acontainer">
                    <Avatar sx={{ width: 56, height: 56, bgcolor: "#FF8E4F" }}>
                      {`${val.name[0].toUpperCase()}${val?.name
                        ?.split(" ")[1][0]
                        .toUpperCase()}`}
                    </Avatar>
                  </div>
                  <div className="complaint_infodetails">
                    <div className="complaint_infoname">
                      <h3>{val.name}</h3>
                    </div>
                    <h5>{val.designation}</h5>
                    <h4 className="complaint_title">{val.title}</h4>
                    <p>{val.details}</p>
                    <Rating name="size-medium" value={3} />
                    <div className="status_edit">
                      <div className="status">
                        <h4>Status:</h4>
                        <span className="status_result">{val.status}</span>
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
