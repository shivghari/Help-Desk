const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://shivghariwala:shiv21112@cluster0.iaksp.mongodb.net/SDI";

const connectToMongo = () => {
  mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("connect");
    })
    .catch((e) => {
      console.log("error");
    });
};

module.exports = connectToMongo;
