'use client'

import { Columns3Cog, House, LogOut, Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const LinksSidebar = [
    {href: "/", label: "HOME", icon: House},
    {href: "/admin", label: "GERENCIAMENTO", icon: Columns3Cog},
    {href: "/", label: "LOGOUT", icon: LogOut},
]

export default function AdminSidebar(){
    const [isAdminSidebarOpen, setIsAdminSidebarOpen] = useState(false)
    const toggleAdminSidebar = () => setIsAdminSidebarOpen(!isAdminSidebarOpen)

    return(
        <div>
            <div className="bg-black flex flex-wrap md:hidden items-center justify-between">
                <Image 
        src={'/logo/RETROSELL-LOGO.png'}
        alt="Logo do Site"
        width={1000}
        height={1000}
        className="w-60 h-15 rounded-xl"
         />

         <Menu className="w-12 h-12 text-[#4bce5d] cursor-pointer" onClick={toggleAdminSidebar}/>

            </div>

        <aside 
        className={`fixed top-0 left-0 bg-black w-full md:w-72 h-screen 
        transition-transform ${isAdminSidebarOpen ? '' : '-translate-x-full'}
        md:translate-x-0
        `}>

            <div className="flex flex-col w-full">
                <div className="flex flex-row w-full items-center p-1 justify-between md:justify-center">
                    <Image 
        src={'/logo/RETROSELL-LOGO.png'}
        alt="Logo do Site"
        width={1000}
        height={1000}
        className="w-40 h-10 md:w-60 md:h-15 rounded-xl"
         />

         <X className="w-10 h-10 text-[#4bce5d] cursor-pointer md:hidden" onClick={toggleAdminSidebar}/>
         </div>

         <ul className="p-5">
            {LinksSidebar.map(({href, label, icon : Icon }, index) => (
                <li key={index} >
                    <Link href={href} className="flex flex-row gap-5 items-center px-2 py-3 ">
                    <Icon className="w-10 h-10 text-white"/>
                    <span className="font-bebasneue text-white text-3xl">{label}</span>
                    
                    </Link>

                </li>

            ))}
         </ul>




         </div>
            




        </aside>
        </div>
    )
}

