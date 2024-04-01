import mongoose, { Schema } from "mongoose"

// schema
const blogSchema = new mongoose.Schema({
    title: String,
    desc: String
});

const ProductSchema = new mongoose.Schema({
    method: String,
    date: String,
    type: String,
    data: Schema.Types.Mixed
})

const Blogposts = mongoose.models.blogposts || mongoose.model("blogposts", blogSchema);
const Products = mongoose.models.products || mongoose.model("products", ProductSchema);
export { Blogposts, Products };