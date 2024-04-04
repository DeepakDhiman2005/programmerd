export const metadata = {
    title: "Programmer D - DashBoard"
}

export default function DashBoardSlugLayout({children, params}){
    let slug = params.slug.replace(params.slug[0], params.slug[0].toUpperCase());
    metadata.title = slug + " - DashBoard";
    return (
        <div>{children}</div>
    )
}