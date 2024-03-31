export const metadata = {
    title: "Blogs - Programmer D"
}

export default function BlogLayout({children, params}) {
    let slug = "";
    try{
        slug = params.slug.replaceAll("%20", " ");
    }catch(err){
        slug = params.slug;
    }
    // console.log(slug);
    metadata.title = slug;

    return (
      <div>
        {children}
      </div>
    )
  }