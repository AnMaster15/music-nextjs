"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn(" absolute top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        <Menu setActive={setActive} >
            <Link href={'/'}>
            <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
            </Link>
            <MenuItem setActive={setActive} active={active} item="Our Cources">
            <div className="flex flex-col space-y-4">
            <HoveredLink href="/cources">All Cources</HoveredLink>
            <HoveredLink href="/cources">Basic Music</HoveredLink>
            <HoveredLink href="/cources">Advanced Composition</HoveredLink>
            <HoveredLink href="/cources">Songwriting</HoveredLink>
            <HoveredLink href="/cources">Music Production</HoveredLink>
            </div>
            </MenuItem>
            <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active} item="Contact us"></MenuItem>
            </Link>
        </Menu>
        </div>
  )
}

export default Navbar

// <nav className="bg-white shadow-md">
// <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//   <div className="flex justify-between h-16">
//     <div className="flex">
//       <div className="shrink-0 flex items-center">
//         <a href="/" className="text-xl font-bold text-gray-900">
//           Food Recipe App
//         </a>
//       </div>
//       <div className="hidden md:ml-6 md:flex md:space-x-8">
//         <a href="/" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700">
//           Home
//         </a>
//       </div>
//     </div>
//     <div className="flex items-center">
//       {isSignedIn ? (
//         <div className="flex items-center space-x-4">
//           <a href="/profile" className="text-gray-900 hover:text-gray-700">
//             Profile
//           </a>
//           <a href="/about-us" className="text-gray-900 hover:text-gray-700">
//             About Us
//           </a>
//           <button
//             onClick={handleSignOut}
//             className="bg-red-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-red-700"
//           >
//             Sign Out
//           </button>
//         </div>
//       ) : (
//         <div className="flex items-center space-x-4">
//           <a href="/sign-in" className="text-gray-900 hover:text-gray-700">
//             Sign In
//           </a>
//           <a href="/sign-up" className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
//             Sign Up
//           </a>
//         </div>
//       )}
//     </div>
//   </div>
// </div>
// </nav>