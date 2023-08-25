"use client"
import React, {useState} from "react"
import Link from "next/link"
import { useStateContext } from "@/context/StateContext"
import { ShoppingCart } from "lucide-react"
import { X } from 'lucide-react';
import { Menu } from 'lucide-react';
import { siteConfig } from "@/config/site"
import { ThemeToggle } from "@/components/theme-toggle"
import { Icons } from "@/components/icons"



export function SiteHeader() {
  const { totalQuantities } = useStateContext()
 const [navbar, setNavbar] = useState(false);
  return (
    <div className="bp-10">
      <nav className="w-full bg-white text-black dark:bg-black dark:text-white shadow-md top-0 left-0 right-0">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/" className="flex items-center space-x-2">
                <Icons.logo className="h-6 w-6" />
                <span className="inline-block font-bold">{siteConfig.name}</span>
              </Link>

              
              
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-black dark:text-white rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <X/>
                  ) : (
                    <Menu/>
                  )}
                </button>
              </div>
            </div>
          </div>
          
          <div className="">
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
     
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                {siteConfig.mainNav?.length ? (
                <>
                    {siteConfig.mainNav?.map(
                      (item, index) =>
                        item.href && (
                          <li className=" text-md text-black dark:text-white py-2 md:px-3 text-center border-b-2 md:border-b-0  hover:bg-gray-900  border-gray-900  md:hover:text-gray-600 md:hover:bg-transparent">
                            <Link href={item.href} onClick={() => setNavbar(!navbar)}>
                              {item.title}
                            </Link>
                          </li>
                        )
                    )}
                    <li className="text-md text-black  dark:text-white py-2 md:px-3 text-center border-b-2 md:border-b-0  hover:bg-gray-900  border-gray-900  md:hover:text-gray-600 md:hover:bg-transparent">
                      <Link href={"/cart"} rel="noreferrer">
                        <div className="relative p-2  ">
                          <div className="static">
                            <ShoppingCart />
                            <span className="bg-red-700  text-white absolute rounded-full -top-1 -right-1 text-xs py-1 px-2">
                              {totalQuantities}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="text-md text-black dark:text-white py-2 md:px-3 text-center border-b-2 md:border-b-0  hover:bg-gray-900  border-gray-900  md:hover:text-gray-600 md:hover:bg-transparent">
                      <ThemeToggle/>
                    </li>
                    </> 
          
                ) : null}
               
              </ul>
            </div>
            
          </div>
           
           
        </div>
      </nav>
    </div>
  );
}




// import Link from "next/link"
// import { useStateContext } from "@/context/StateContext"
// import { ShoppingCart } from "lucide-react"

// import { siteConfig } from "@/config/site"
// import { MainNav } from "@/components/main-nav"
// import { ThemeToggle } from "@/components/theme-toggle"
// import { Icons } from "@/components/icons"

// export function SiteHeader() {
//   const { totalQuantities } = useStateContext()
//   return (

//     <nav className="flex items-center justify-between flex-wrap bg-gray-500 p-6">
//   <div className="flex items-center flex-shrink-0 text-white mr-6">
//     <Link href="/" className="flex items-center space-x-2">
//         <Icons.logo className="h-6 w-6" />
//         <span className="inline-block font-bold">{siteConfig.name}</span>
//       </Link>
//   </div>
//   <div className="block lg:hidden">
//     <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-gray-400 hover:text-white hover:border-white">
//       <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
//     </button>
//   </div>
//   <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
//     <div className="text-sm lg:flex-grow">
//       <MainNav items={siteConfig.mainNav} />
//     </div>
//     <div>
//       <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
//     </div>
//   </div>
// </nav>
//     // <header classNameName="top-0 z-40 w-full bg-background px-10 py-5">
//     //   <div classNameName="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
//     //     <div classNameName="hidden">
//     //     <MainNav items={siteConfig.mainNav} /></div>
//     //     <div classNameName="flex flex-1 items-center justify-end space-x-4">
//     //       <nav classNameName="flex items-center space-x-1">
//     //         <form classNameName="flex items-center">
//     //           <label htmlFor="simple-search" classNameName="sr-only">
//     //             Search
//     //           </label>
//     //           <div classNameName="relative w-full">
//     //             <div classNameName="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//     //               <svg
//     //                 aria-hidden="true"
//     //                 classNameName="w-5 h-5 text-gray-500 dark:text-gray-400"
//     //                 fill="currentColor"
//     //                 viewBox="0 0 20 20"
//     //                 xmlns="http://www.w3.org/2000/svg"
//     //               >
//     //                 <path
//     //                   fillRule="evenodd"
//     //                   d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//     //                   clipRule="evenodd"
//     //                 ></path>
//     //               </svg>
//     //             </div>
//     //             <input
//     //               type="text"
//     //               id="simple-search"
//     //               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-300 focus:border-red-300 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
//     //               placeholder="Search"
//     //               required
//     //             />
//     //           </div>
//     //         </form>
            
//     //         <Link href={"/cart"} rel="noreferrer">
//     //           <div className="relative p-2  ">
//     //             <div className="static">
//     //               <ShoppingCart />
//     //               <span className="bg-red-700  text-white absolute rounded-full -top-1 -right-1 text-xs py-1 px-2">
//     //                 {totalQuantities}
//     //               </span>
//     //             </div>
//     //           </div>
//     //         </Link>
//     //         <ThemeToggle />
//     //       </nav>
//     //     </div>
//     //   </div>
//     // </header>
//   )
// }
