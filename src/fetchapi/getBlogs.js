export async function getBlogs () {
    const apikey = process.env.API_KEY;
    const resp = await fetch(`${apikey}/api/blogs/`, {cache: "no-store"});
    const data = await resp.json();
    return data;
}