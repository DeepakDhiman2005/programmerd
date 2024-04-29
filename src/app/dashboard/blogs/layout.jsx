export const metadata = {
    title: 'DashBoard Blogs - Programmer D',
    desc: 'DashBoard Blogs page with (editor, reader, etc.) tools!'
}

export default function DashBoardBlogLayout({ children }){
    return <div className="w-full ml-3 bg-white p-4 border border-solid border-slate-50 rounded-md shadow-md shadow-slate-300">
        {children}
    </div>
}