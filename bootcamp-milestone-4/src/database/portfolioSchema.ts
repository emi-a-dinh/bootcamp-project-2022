import mongoose, { Schema } from "mongoose";

const commentSchema = new mongoose.Schema({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const portfolioSchema = new mongoose.Schema({
  projectName: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
  projectDetails: { type: String, required: true },
  comments: [commentSchema],
});

const Portfolio =
  mongoose.models["portfolios"] ||
  mongoose.model("portfolios", portfolioSchema);

export default Portfolio;
