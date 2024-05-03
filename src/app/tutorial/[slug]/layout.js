export const metadata = {
    title: 'Awesome Tutorials - With Programming Content!'
}

export default function ProductsLayout({ children, params }) {
    // let title = params.slug;
    // metadata.title = title.replace(title[0], title[0].toUpperCase()) + " - in tutorial";

    return (
      <div>
        {children}
      </div>
    )
  }