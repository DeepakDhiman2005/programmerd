export const metadata = {
    title: "Programmer D - DashBoard"
}

export default function DashBoardSlugLayout({children, params}){
    // let slug = params.slug.replace(params.slug[0], params.slug[0].toUpperCase());
    metadata.title = params.slug.replace(params.slug[0], params.slug[0].toUpperCase()) + " - DashBoard";
    return (
        <div className="w-full">{children}</div>
    )
}