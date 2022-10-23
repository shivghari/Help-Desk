import React from 'react';
import "./Managestudent.css";
import { Avatar} from "@mui/material";

function Managestudent() {
  return (
    <>
        {/* <div className='managecontainer'> */}
        <div className="manageallinformation">
          <h3 className="manageinfoheading">Your Students - (Manage CR LR)</h3>
          <div className='allmanageinfo'>
            <div className="manageinfo">
                <div className="managescontainer">
                <Avatar sx={{ width: 56, height: 56, bgcolor: "#FF8E4F" }}>
                    S
                    {/* {`${val.name[0].toUpperCase()}${val?.name
                            ?.split(" ")[1][0]
                            .toUpperCase()}`} */}
                </Avatar>
                </div>
                <div className="manageinfodetails">
                <div className="manageinfoname">
                    <h3>Shiv Ghariwala</h3>
                    {/* <img src={mic} alt="micimg" className='micimg'></img> */}
                </div>
                <h5>Sem-7 CE-A</h5>
                <p>
                I have a great interest in Designing and i would like to continue with this<br/>skill through my carrier
                </p>
                <div className="managebutton">
                        <button type="submit" className='mbutton'>Appoint CR</button>
                        <button type="submit" className='mbutton'>Appoint LR</button>
                </div>
                </div>
            </div>
        </div>
        </div>
        {/* </div> */}
    </>
  )
}

export default Managestudent