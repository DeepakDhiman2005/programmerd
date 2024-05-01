// api
import BlogPage from "@/components/Blogs/BlogPage";
import { getBlogs } from "@/fetchapi/getBlogs";

export async function generateMetadata(props){
    // console.log(props)
    let searchParam = props.searchParams.blogpost;
    const resp = await getBlogs();
    let blog = resp.filter((blog)=>blog.data.title === searchParam)[0];
    // console.log(blog);
    let title = blog.data.title;
    let desc = blog.data.desc;
    let image = blog.data.image;
    // console.log(image)

    return {
        title: title,
        description: desc,
        openGraph: {
            images: [image]
        }
    }
}

const SearchBlogPost = (props) => {
    // console.log(props);
    let query = props.searchParams.blogpost;
    // console.log(query);
    return <>
        <BlogPage query={query} />
    </>
}

export default SearchBlogPost;