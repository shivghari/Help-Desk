import axios from "axios";
import { useEffect, useState } from "react";
import Notification from "../util/Notification";

const GetComplaintsByUserID = (url, update = null) => {
  const [complaints, setcomplaints] = useState([]);

  useEffect(() => {
    axios
      .post(url, {
        userID: localStorage.getItem("id"),
      })
      .then((response) => {
        setcomplaints(response.data);
        console.log(update["Notification"]);
        if (update["Notification"] === "update") {
          Notification.warningNotification("Complaint Updated..!");
        } else if (update["Notification"] === "delete") {
          Notification.errorNotification("Complaint Deleted..!");
        } else if (update["Notification"] === "success") {
          Notification.successNotification("Complaint Added Successfully...");
        } else {
          console.log("NOthing");
        }
      })
      .catch((err) => {
        console.log(err, "err");
      });
  }, [url, update]);

  return complaints;
};

export default GetComplaintsByUserID;
