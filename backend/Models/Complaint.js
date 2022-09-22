const mongoose = require("mongoose");

const { Schema } = mongoose;

const ComplaintSchema = new Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  title: {
    type: String,
    required: true,
  },

  desc: {
    type: String,
    required: true,
  },

  image: {
    type: String,
  },

  to: {
    type: String,
  },

  severity: {
    type: Number,
  },

  track: {
    type: Number,
  },

  status: {
    type: String,
  },
});

const Complaint = mongoose.model("ComplaintSchema", ComplaintSchema);
module.exports = Complaint;
