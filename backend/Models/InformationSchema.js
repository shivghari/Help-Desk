const mongoose = require("mongoose");

const { Schema } = mongoose;

const InformationSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FacultiesSchema",
    },
    image: {
      type: String,
    },
    mention: {
      type: String,
      default: "all",
    },
    like: [{ type: mongoose.Schema.Types.ObjectId, ref: "UserSchema" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("InformationSchema", InformationSchema);
