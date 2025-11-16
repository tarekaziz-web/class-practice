import mongoose, { Schema } from "mongoose";

const BlogSchema = new Schema({
    title: { type: String, require: true },
    description: { type: String, require: true }
});

export const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema)