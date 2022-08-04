import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <>
        <div className="footer">
            <div className='footer-details'>
                <div className='createby'>
                    <h5 className='create-text'>Created By: SDI DEVELOPERS</h5>
                </div>
                <div className='copyright'>
                    <h5 className='create-text'>@JULY / 2022</h5>
                </div>
            </div>
            <div className='socials'>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin"></i>
            </div>
        </div>
    </>
  )
}
