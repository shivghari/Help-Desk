import axios from "axios";
import { useEffect, useState } from "react";

const GetAllComplaint = (url, update = null) => {
  const [allComplaint, setAllComplaint] = useState([]);

  useEffect(() => {
    axios
      .post(url)
      .then((response) => {
        setAllComplaint(response.data);
      })
      .catch((err) => {
        console.log("Something Went Wrong...");
      });
  }, [url, update]);

  return allComplaint;
};

export default GetAllComplaint;
