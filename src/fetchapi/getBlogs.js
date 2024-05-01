export async function getBlogs () {
    const resp = await fetch("http://localhost:3000/api/blogs/", {cache: "no-store"});
    const data = await resp.json();
    return data;
}