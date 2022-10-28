import axios from "axios";

class InfoGestures {
  static gestures = (infoid, url, id = localStorage.getItem("id")) => {
    axios
      .post(url, {
        userID: id,
        infoID: infoid,
      })
      .then((response) => {
        console.log("Maked Gestures", response);
      })
      .catch((e) => {
        console.log("Something Went Wrong");
      });
  };
}

export default InfoGestures;
