import mongoose from "mongoose";

// !START BUILDING
const reviewSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  { timestamps: true },
);
//  !MODEL
const Review = mongoose.model("Review", reviewSchema);
// !EXPORT
export default Review;
