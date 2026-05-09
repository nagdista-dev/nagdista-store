import mongoose from "mongoose";

// !START BUILDING
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  { timestamps: true },
);
//  !MODEL
const User = mongoose.model("User", userSchema);
// !EXPORT
export default User;
