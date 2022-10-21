import React from 'react';
import "./Index.css"
import Information from './Information/Information';
import Managestudent from './Managestudent/Managestudent';
import Options from "./Options/Options"
import Postinformation from "./Postinformation/Postinformation"


function Index() {
  return (
    <>
        <Options/>
        <Postinformation/>
        <Information/>
        <Managestudent/>
    </>
  )
}

export default Index