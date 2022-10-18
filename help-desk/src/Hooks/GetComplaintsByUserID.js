import axios from "axios";
import { useEffect, useState } from "react";

const GetComplaintsByUserID = (url, update = null) => {
  const [complaints, setcomplaints] = useState([]);

  useEffect(() => {
    axios
      .post(url, {
        userID: localStorage.getItem("id"),
      })
      .then((response) => {
        setcomplaints(response.data);
      })
      .catch((err) => {
        console.log(err, "err");
      });
  }, [url, update]);

  return complaints;
};

export default GetComplaintsByUserID;
