import { usePathname } from "next/navigation"

export const metadata = {
    title: "Blogs - Programmer D"
}

export default function BlogsLayout({ children }) {
    // const pathname = usePathname();
    // console.log(pathname)
    return (
      <div>
        {children}
      </div>
    )
  }