export const metadata = {
    title: 'Programmer D - DashBoard'
}

// components
import DashBoardSideBar from "@/components/DashBoard/DashBoardSideBar"

export default function ProductsLayout({ children }) {
    return (
      <div className="flex justify-start items-start p-3">
        <DashBoardSideBar />
        {children}
      </div>
    )
  }
  