const mongoose = require("mongoose");

const { Schema } = mongoose;

const FacultiesSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  userPhoto: {
    type: String,
  },

  role: {
    type: String,
    default: "Faculty",
  },

  field: {
    type: String,
  },

  education: {
    type: String,
  },

  mobileNo: {
    type: Number,
  },

  studentList: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "UserSchema" }],
  },
});

module.exports = mongoose.model("FacultiesSchema", FacultiesSchema);
