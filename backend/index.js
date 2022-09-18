const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World.");
});

app.listen(5000, () => {
  console.log("Connected to 5000");
});
