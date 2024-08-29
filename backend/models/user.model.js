import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },  
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "faculty"],
      required: true,
    },
    facultySubjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }], // Subjects taught by faculty
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
