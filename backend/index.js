const express = require("express");
const cors = require("cors");
const path = require("path");
const connectToMongo = require("./db.js");

connectToMongo();
const app = express();
app.use(express.json());

app.use("/static", express.static(path.resolve("uploads")));
app.use("/staticComplaint", express.static(path.resolve("complaintPhoto")));
app.use("/staticInformation", express.static(path.resolve("InformationPhoto")));
app.use(cors());
app.use("/", require("./Routers/Signin"));
app.use("/", require("./Routers/Login"));
app.use("/", require("./Routers/Complaint"));
app.use("/", require("./Routers/UpdateDetails"));
app.use("/", require("./Routers/InformationPortal"));
app.use("/", require("./Routers/Leave"));

app.listen(5000, () => {
  console.log("Connected to 5000");
});
