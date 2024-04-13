
// component
import DashBoardSideBar from "@/components/DashBoard/DashBoardSideBar";

export const metadata = {
    title: "Programmer D - DashBoard"
}

export default function DashBoardSlugLayout({children}){
    return (
        <div className="flex justify-start w-full items-start p-4 pt-6">
            <DashBoardSideBar />
            {children}
        </div>
    )
}