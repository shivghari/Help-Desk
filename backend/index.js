const express = require("express");
const connectToMongo = require("./db.js");

connectToMongo();
const app = express();
app.use(express.json());

app.use("/", require("./Routers/Signin"));
app.use("/", require("./Routers/Login"));

app.listen(5000, () => {
  console.log("Connected to 5000");
});
