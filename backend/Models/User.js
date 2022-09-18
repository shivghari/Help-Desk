const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },

  enrollNo: {
    type: Number,
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
    default: "student",
  },

  field: {
    type: String,
  },

  semester: {
    type: Number,
  },

  className: {
    type: String,
  },
});

const User = mongoose.model("UserSchema", UserSchema);
module.exports = User;
