const express = require("express");
const cors = require("cors");
const path = require("path");
const connectToMongo = require("./db.js");

connectToMongo();
const app = express();
app.use(express.json());

app.use("/static", express.static(path.resolve("uploads")));
app.use(cors());
app.use("/", require("./Routers/Signin"));
app.use("/", require("./Routers/Login"));
app.use("/", require("./Routers/Complaint"));

app.listen(5000, () => {
  console.log("Connected to 5000");
});
