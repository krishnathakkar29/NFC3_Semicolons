const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, // Student's attendance
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      required: true,
    }, // Subject for the attendance
    class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
      required: true,
    }, // Class for the attendance
    date: { type: Date, required: true },
    status: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Attendance = mongoose.model("Attendance", attendanceSchema);
