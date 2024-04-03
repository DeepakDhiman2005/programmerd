import mongoose, { Schema } from "mongoose"

// schema
const blogSchema = new mongoose.Schema({
    method: String,
    date: String,
    type: String,
    data: Schema.Types.Mixed
});

const ProductSchema = new mongoose.Schema({
    method: String,
    date: String,
    type: String,
    data: Schema.Types.Mixed
})

const AuthSchema = new mongoose.Schema({
    email: String,
    password: String
})

const Blogposts = mongoose.models.blogposts || mongoose.model("blogposts", blogSchema);
const Products = mongoose.models.products || mongoose.model("products", ProductSchema);
const Auth = mongoose.models.auths || mongoose.model("auths", AuthSchema);
export { Blogposts, Products, Auth };