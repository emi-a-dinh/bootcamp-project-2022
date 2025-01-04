import mongoose, { Schema } from "mongoose";

const commentSchema = new mongoose.Schema({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const blogSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
  slug: { type: String, required: true },
  comments: [commentSchema],
});

const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default Blog;
