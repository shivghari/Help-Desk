import React from 'react';
import Complaint from "./MakeComplaint/Complaint";
import Trackcomplaint from './TrackComplaint/Trackcomplaint';
import Yourcomplaint from './YourComplaint/Yourcomplaint';

function Index() {
  return (
    <>
        <Complaint/>
        <Yourcomplaint/>
        <Trackcomplaint/>
    </>
  )
}

export default Index