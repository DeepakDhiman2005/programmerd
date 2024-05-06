import React from "react";

// next
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return <>
        <footer className="bg-white border border-solid border-slate-100 rounded-lg shadow-sm shadow-slate-200 dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://www.youtube.com/@ProgrammerD7" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Image src="/logo.svg" className="h-12" alt="Logo" width={80} height={50} />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Programmer D</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link href={"/privacy"} className="hover:underline me-4 md:me-6 cursor-pointer">Privacy Police</Link>
                        </li>
                        <li>
                            <Link href={"/blogs"} className="hover:underline me-4 md:me-6 cursor-pointer">Blogs</Link>
                        </li>
                        <li>
                            <Link href={"/contact"} className="hover:underline me-4 md:me-6 cursor-pointer">Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://programmerd.in" className="hover:underline">Programmer D™</a>. programmerd.in</span>
            </div>
        </footer>
    </>
}

export default Footer;