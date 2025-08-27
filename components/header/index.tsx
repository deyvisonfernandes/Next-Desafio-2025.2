'use client'
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const links = [
    {href: '/', label: 'HOME'},
    {href: '/sobrenos', label: 'SOBRE NÓS'},
    {href: '/produtos', label: 'PRODUTOS'},
    {href: '/gerenciamento', label: 'GERENCIAMENTO'},
    {href: '/contato', label: 'CONTATO'},
    {href: '/login', label: 'LOGIN'}
]

export default function Header(){
    const [isNavOpen, setIsNavOpen] = useState(false)

    const toggleNav = () => setIsNavOpen(!isNavOpen)

    return(
        <header className="sticky w-full top-0 z-20  mx-auto py-8 px-4 md:p-2 bg-black">
        <div className="flex flex-wrap items-center justify-between w-full md:w-10/12 mx-auto">
        <Link href="/" className="flex gap-4 items-center">
        <Image 
        src={'/logo/RETROSELL-LOGO.png'}
        alt="Logo do Site"
        width={1000}
        height={1000}
        className="w-60 h-15 rounded-xl"
         />
        </Link>
        <nav className="flex justify-end ">
            <div className="hidden w-full md:flex justify-end items-center gap-10">
                {links.map((link, index) => 
                <Link href={link.href} key={index}>
                <span className="text-[#4bce5d] font-saira hover:text-white/90 hover:border-2 p-1 hover:border-[#4bce5d]/70  font-semibold rounded-2xl">
                {link.label}
                </span>
                </Link>
                )}
            </div>
            <div className="md:hidden">
                {isNavOpen ?
                <X 
                onClick={toggleNav}
                className="w-10 h-10 text-[#4bce5d] cursor-pointer "
                />
                :
                <div className="flex">
                    <Menu
                    onClick={toggleNav}
                    className="w-12 h-12 text-[#4bce5d] cursor-pointer"
                     />
                </div>
                
            }
            </div>
        </nav>
        {isNavOpen && (
            <div className="md:hidden bg-black flex basis-full flex-col items-center gap-6 mt-10">
                {links.map((link, index) => 
                <Link href={link.href} key={index}>
                <span className="font-saira text-white/90 text-3xl border-b-1  border-b-[#4bce5d] font-semibold">
                {link.label}
                </span>
                </Link>
                )}
            </div>

        )}


        </div>
        </header>
    )


}