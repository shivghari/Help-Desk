const mongoose = require("mongoose");

const { Schema } = mongoose;

const ComplaintSchema = new Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserSchema",
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
    default: 1,
  },

  status: {
    type: String,
  },
});

module.exports = mongoose.model("ComplaintSchema", ComplaintSchema);
// const Complaint = mongoose.model("ComplaintSchema", ComplaintSchema);
// module.exports = Complaint;
