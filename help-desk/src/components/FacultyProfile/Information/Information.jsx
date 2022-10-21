import React from 'react';
import "./Information.css";
import { Avatar, Rating } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

function Information() {
  return (
    <>
    <div className="informationcontainer">
        <div className="fallinformation">
          <h3 className="finfoheading">All Information for you</h3>
          <div className="finfo">
            <div className="fscontainer">
              <Avatar sx={{ width: 56, height: 56, bgcolor: "#FF8E4F" }}>
                SG
                {/* {`${val.name[0].toUpperCase()}${val?.name
                        ?.split(" ")[1][0]
                        .toUpperCase()}`} */}
              </Avatar>
            </div>
            <div className="finfodetails">
              <div className="finfoname">
                <h3>Shivani Vohra</h3>
                {/* <img src={mic} alt="micimg" className='micimg'></img> */}
              </div>
              <h5>Faculty</h5>
              <p>
                Hello Dear Student,
                <br />I am informing you to take a part in open book test
                compitition and make your class
                <br /> proud by beign in compitition. Faculties can take a part
                too.
                <br /> Hurry up folks.
              </p>
              <div className="fratings">
                <Rating name="size-medium" value={2} readOnly />
                <div className="flike">
                  <ThumbUpOffAltIcon fontSize="medium" />
                  <span>302</span>
                  <ThumbDownOffAltIcon fontSize="medium" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Information