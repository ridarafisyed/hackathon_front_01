import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex items-center gap-6 md:gap-10 text-white">
      
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
          
             <form className="flex items-center">
               <label htmlFor="simple-search" className="sr-only">
                 Search
               </label>
               <div className="relative w-full">
                 <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                   <svg
                     aria-hidden="true"
                     className="w-5 h-5 text-gray-500 dark:text-gray-400"
                     fill="currentColor"
                     viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <path
                       fillRule="evenodd"
                       d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                       clipRule="evenodd"
                     ></path>
                   </svg>
                 </div>
                 <input
                   type="text"
                   id="simple-search"
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-300 focus:border-red-300 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                   placeholder="Search"
                   required
                 />
               </div>
             </form>
        </nav>
      ) : null}
    </div>
  )
}

