import mongoose, { Schema } from "mongoose";

type Portfolio = {
  projectName: string;
  image: string;
  imageAlt: string;
  projectDetails: string;
};

const portfolioSchema = new Schema<Portfolio>({
  projectName: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
  projectDetails: { type: String, required: true },
});

const Portfolio =
  mongoose.models["portfolios"] ||
  mongoose.model("portfolios", portfolioSchema);

export default Portfolio;
