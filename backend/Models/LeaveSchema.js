const mongoose = require("mongoose");

const { Schema } = mongoose;

const LeaveSchema = new Schema({
  studentID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserSchema",
  },
  facultyID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "FacultiesSchema",
  },

  title: {
    type: String,
    required: true,
  },

  desc: {
    type: String,
    required: true,
  },

  to: {
    type: String,
  },

  status: {
    type: String,
  },
},
{ timestamps: true }
);

module.exports = mongoose.model("LeaveSchema", LeaveSchema);
// const Complaint = mongoose.model("ComplaintSchema", ComplaintSchema);
// module.exports = Complaint;
