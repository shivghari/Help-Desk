import axios from "axios";
import { useEffect, useState } from "react";

const GetCurrentUserData = (url, update) => {
  const [data, setdata] = useState({});

  useEffect(() => {
    axios
      .post(url, {
        id: localStorage.getItem("id"),
      })
      .then((res) => {
        setdata(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log("Problem in fetching Data");
      });
  }, [url, update]);

  return data;
};

export default GetCurrentUserData;
