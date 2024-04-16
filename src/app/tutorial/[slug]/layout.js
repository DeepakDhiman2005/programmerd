export const metadata = {
    title: 'Awesome Tutorials - With Programming Content!'
}

export default function ProductsLayout({ children, params }) {
    let slug = params.slug;
    let title = slug.match("%20") ? slug.replaceAll("%20", " "): slug;
    metadata.title = title.replace(title[0], title[0].toUpperCase()) + " - in tutorial";

    return (
      <div>
        {children}
      </div>
    )
  }