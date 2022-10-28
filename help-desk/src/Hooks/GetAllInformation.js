import axios from "axios";
import { useEffect, useState } from "react";

const GetAllInformation = (url, update) => {
  const [allinfo, setallinfo] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setallinfo(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log("Err : ", e);
      });
  }, [url, update]);

  return allinfo;
};

export default GetAllInformation;
