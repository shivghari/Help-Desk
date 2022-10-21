import React from 'react';
import "./Postinformation.css";

function Postinformation() {
  return (
    <>
        <div className="postcontainer">
            <div className='wholepostinfo'>
                <div className='postheading'>
                    <h3>Post New Information</h3>
                </div>
                <div className='postform'>
                    <div className='postdetails'>
                        <label>Information Title</label>
                        <input type="text" className='post_input'/>
                        <label>Information Description</label>
                        <input type="text" className='post_input'/>
                        <label>Class Or Persion Mention (@xyz)</label>
                        <input type="text" className='post_input'/>
                        <div className="postbutton">
                            <button type="submit" className='pbutton'>Post</button>
                            <button type="submit" className='pbutton'>Discard</button>
                        </div>
                    </div>
                    <div className='postimage'>
                        <label>Add Photo Here</label>
                        <div className="pimageborder"></div>
                        {/* <input
                            className="postimageInput"
                            type="file"
                            id="postimageInput"
                            name="postPhoto"
                        /> */}
                        <img src="./images/camera.png" alt="postcameraimg" className="postcameraimg"></img>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Postinformation