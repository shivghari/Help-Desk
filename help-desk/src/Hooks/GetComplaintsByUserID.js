import axios from "axios";
import { useEffect, useState } from "react";

const GetComplaintsByUserID = (url) => {
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
  }, [url]);

  return complaints;
};

export default GetComplaintsByUserID;
