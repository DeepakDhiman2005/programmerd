export const metadata = {
    title: 'Awesome Products - Purchase know!'
}

export default function ProductsSlugLayout({ children, params }) {
    metadata.title = params.slug.replace(params.slug[0], params.slug[0].toUpperCase())+ " - Purchase know!";
    return (
      <div>
        {children}
      </div>
    )
  }
  