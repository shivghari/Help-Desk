import axios from "axios";

class DeleteComplaintById {
  static deleteComplaint = (complaintID) => {
    var status = false;
    axios
      .post("http://localhost:5000/deletecomplaint", {
        id: complaintID,
      })
      .then((response) => {
        status = true;
      })
      .catch((err) => {
        status = false;
        console.log("Error : ", err);
      });
    return status;
  };
}

export default DeleteComplaintById;
