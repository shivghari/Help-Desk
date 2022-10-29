import React, { useState } from "react";
import "./Information.css";
import { Avatar } from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign";
// import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import GetAllInformation from "../../../Hooks/GetAllInformation";
import moment from "moment";
import InfoGestures from "../../../util/InfoGestures";

function Information() {
  // const [like, setlike] = useState(false);
  const [dislike, setdislike] = useState(true);

  const allinfo = GetAllInformation(
    "http://localhost:5000/getallinformation",
    dislike
  );
  return (
    <>
      <h3 className="finfoheading">All Information for you</h3>
      {/* <div className="informationcontainer"> */}
      <div className="fallinformation">
        {allinfo &&
          allinfo.map((info) => (
            <div className="finfo" key={info._id}>
              <div className="fscontainer">
                <Avatar sx={{ width: 56, height: 56, bgcolor: "#FF8E4F" }}>
                  {`${info?.author?.userName[0].toUpperCase()}${info?.author?.userName
                    ?.split(" ")[1][0]
                    .toUpperCase()}`}
                </Avatar>
              </div>
              <div className="finfodetails">
                <div className="finfoname">
                  <h3>{info?.author?.userName}</h3>
                  {info?.mention?.toLowerCase() === "@all" ? (
                    <CampaignIcon sx={{ marginLeft: "5px" }} />
                  ) : null}
                </div>
                <div className="infoDescAndImageContainer">
                  <div className="descHolder">
                    <h5>{info?.author?.role}</h5>
                    <h4>{info?.title}</h4>
                    <p>{info?.desc}</p>
                    <h5>{moment(info?.createdAt).format("MMMM d, YYYY")}</h5>
                    <div className="flike">
                      {!info?.like?.includes(localStorage.getItem("id")) ? (
                        <FavoriteBorderIcon
                          fontSize="medium"
                          onClick={() => {
                            // setlike(true);
                            // setselectedInfo({ id: info?._id });
                            InfoGestures.gestures(
                              info._id,
                              "http://localhost:5000/likeinfo",
                              localStorage.getItem("id")
                            );
                            setdislike(!dislike);
                          }}
                        />
                      ) : (
                        <FavoriteIcon
                          fontSize="medium"
                          onClick={() => {
                            InfoGestures.gestures(
                              info._id,
                              "http://localhost:5000/dislikeinfo",
                              localStorage.getItem("id")
                            );
                            setdislike(!dislike);
                          }}
                        />
                      )}

                      <p>{info?.like?.length}</p>
                    </div>
                  </div>
                  <div className="imageHolder">
                    {info.image ? (
                      <img
                        src={
                          "http://localhost:5000/staticInformation/" +
                          info?.image
                        }
                        className="infoImage"
                        alt="InfoPhoto"
                      />
                    ) : null}
                  </div>
                </div>
                <div className="fratings">
                  {/* <Rating name="size-medium" value={2} readOnly /> */}
                  {/* <div className="flike">
                    <FavoriteBorderIcon fontSize="medium" />
                    <p>302</p>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
      </div>
      {/* </div> */}
    </>
  );
}

export default Information;
