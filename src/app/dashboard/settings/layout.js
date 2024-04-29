export const metadata = {
    title: 'DashBoard Settings - Programmer D',
    desc: 'DashBoard Settings page with (default settings, advance settings, media source & data settings, etc.) tools!'
}

export default function DashBoardSettingsLayout({ children }){
    return <div className="w-full ml-3 bg-white p-4 border border-solid border-slate-50 rounded-md shadow-md shadow-slate-300">
        {children}
    </div>
}