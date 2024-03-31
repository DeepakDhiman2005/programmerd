import mongoose from "mongoose"

// schema
const blogSchema = new mongoose.Schema({
    title: String,
    desc: String
});

const ProductSchema = new mongoose.Schema({
    title: String,
    desc: String,
    href: String,
    image: String,
    src: String
})

const Blogposts = mongoose.models.blogposts || mongoose.model("blogposts", blogSchema);
const Products = mongoose.models.products || mongoose.model("products", ProductSchema);
export { Blogposts, Products };