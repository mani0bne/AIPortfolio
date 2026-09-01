import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
  html: String,
  template: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Portfolio", portfolioSchema);