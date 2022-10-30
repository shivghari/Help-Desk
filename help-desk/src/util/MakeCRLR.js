import axios from "axios";

class MakeCRLR {
  static makeCR = (id) => {
    axios
      .post("http://localhost:5000/makecrlr", {
        userID: id,
        post: "CR",
      })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log("err : ", e);
      });
  };

  static makeLR = (id) => {
    axios
      .post("http://localhost:5000/makecrlr", {
        userID: id,
        post: "LR",
      })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log("err : ", e);
      });
  };

  static dismissCRLR = (id) => {
    axios
      .post("http://localhost:5000/makecrlr", {
        userID: id,
        post: "student",
      })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log("err : ", e);
      });
  };
}

export default MakeCRLR;
