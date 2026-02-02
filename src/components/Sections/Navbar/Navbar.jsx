import "../Sections.css"
import { useState } from "react"
export default function Navbar({menus = ['empty']}){
    return(
        <div className="fixed h-20 w-full flex justify-between px-10 text-[#1a3123]">
            <h1 className="font-bold text-2xl flex items-end pb-3 px-10 bg-white rounded-b-2xl">WBA</h1>
            <ul className="flex gap-10 h-full pb-3 px-10 items-end bg-white rounded-b-2xl">
                {menus.map((menu, index) => (
                    <li key={index}><a href={`#${menu.toLowerCase()}`}>{menu}</a></li>
                ))}
            </ul>
        </div>
    )
}