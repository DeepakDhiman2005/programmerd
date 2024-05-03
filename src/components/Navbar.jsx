"use client"
import React, { useEffect, useState, useRef } from "react";

// nextjs
import Link from "next/link";
import { usePathname } from "next/navigation";

// icons
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { SidebarOpenClose } from "@/app/redux/features/EventEmit";
import { SearchBarOpenClose } from "@/app/redux/features/EventEmit";

const Navbar = () => {
    // useState
    const [NavClass, setNavClass] = useState('original-nav');
    const [ClassList, setClassList] = useState('original-link');

    // nextjs
    const pathname = usePathname();

    // redux
    const SidebarEvent = useSelector(state => state.events.sidebar);
    const dispatch = useDispatch();

    // useRef
    const NavList = useRef(null);

    useEffect(()=>{
        if(window.innerWidth <= 768){
            setNavClass('change-nav');
            setClassList("change-link");
            if(window.location.pathname != "/"){
                dispatch(SidebarOpenClose(false));
                window.document.body.style.overflow = "";
            }
        }else{
            if(window.location.pathname != '/'){
                setNavClass('change-nav');
                setClassList("change-link");
            }
            try{
                if(window.location.pathname != "/"){
                    dispatch(SidebarOpenClose(false));
                    window.document.body.style.overflow = "";
                }
                window.addEventListener("scroll", ()=>{
                    if(scrollY > 10){
                        setNavClass('change-nav');
                        setClassList('change-link');
                    }else{
                        if(window.location.pathname != "/"){
                            setNavClass('change-nav');
                            setClassList("change-link");
                        }else{
                            setNavClass('original-nav');
                            setClassList('original-link');
                        }
                    }
                })
            }catch(err){ console.log("Navbar UseEffect Error: " + err) }   
        }
    }, [pathname]);

    // functions
    const Burger = () => {
        let classname = NavList.current.className;
        if(String(classname).match("hidden")){
            NavList.current.className = classname.replace("hidden", "block");
        }else{
            NavList.current.className = classname.replace("block", "hidden");
        }
    }

    const OnSearch = () => {
        // console.log("click on search button!");
        // Burger();
        dispatch(SearchBarOpenClose(true));
    }

    return <>
        <nav className={NavClass}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
                <div className="flex justify-around items-center ml-2">
                    {
                        SidebarEvent ? <RxCross2 className="cursor-pointer text-slate-500" size={"30px"} onClick={()=>{
                            if(window.location.pathname === "/"){
                                setNavClass('original-nav');
                                setClassList('original-link');
                            }else{
                                setNavClass('change-nav');
                                setClassList('change-link');
                            }
                            dispatch(SidebarOpenClose(false))
                            window.document.body.style.overflow = "";
                        }} />: <GiHamburgerMenu  className="cursor-pointer text-slate-500" size={"30px"} onClick={()=>{
                            setNavClass('change-nav');
                            setClassList('change-link');
                            dispatch(SidebarOpenClose(true))
                            window.document.body.style.overflow = "hidden";
                        }} />
                    }
                </div>

                <IoIosSearch size={"26px"} className="text-slate-800 dark:text-slate-50 cursor-pointer md:hidden" onClick={Burger} />

                <div ref={NavList} className="hidden w-full md:block md:w-auto mr-2" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-transparent rounded-lg bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 dark:text-slate-50 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link href="/" className="block py-2 px-3 text-white bg-blue-500 rounded md:bg-transparent md:text-blue-500 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link href="/tutorial" className={ClassList}>Tutorial</Link>
                        </li>
                        <li>
                            <Link href="/products" className={ClassList}>Products</Link>
                        </li>
                        <li>
                            <Link href={"/blogs"} className={ClassList}>Blogs</Link>
                        </li>
                        <li>
                            <Link href="/contact" className={ClassList}>Contact</Link>
                        </li>
                        <li className="hidden justify-start items-center md:flex">
                            <IoIosSearch size={"22px"} className={ClassList} style={{cursor: "pointer"}} onClick={OnSearch} />
                        </li>
                        <li className="hover:bg-gray-100 flex justify-start items-center md:hidden pl-1" onClick={OnSearch}>
                            <IoIosSearch size={"22px"} className="md:hidden" style={{cursor: "pointer", width: "28px", height: "20px"}} />
                            <h2 className="ml-1 text-lg text-gray-800 md:hidden">Search</h2>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}

export default Navbar;