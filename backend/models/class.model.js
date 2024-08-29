import mongoose from "mongoose";

const classSchema = new mongoose.Schema(
  {
    className: { type: String, required: true },
    subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }], // Subjects taught in the class
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

export const Class = mongoose.model("Class", classSchema);
