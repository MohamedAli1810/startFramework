import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const [isOpened, setIsOpened] = useState(false);
  return <>
  <nav className='bg-slate-700 z-50 fixed w-full'>
    <div className="container flex justify-between items-center py-5 text-white">
        <div className=''>
            <a href="/#" className='text-3xl font-bold'>Start Framework</a>
        </div>
        {}
        <button onClick={() => setIsOpened(!isOpened)} className="md:hidden">
        <svg className="w-5 h-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 14">
            <path stroke="currentColor"   strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
        {isOpened && (
        <div className="md:hidden w-full md:block md:w-auto" >
            <ul className='flex gap-x-5' >
                <li>
                    <NavLink  to="about">About</NavLink>
                </li>
                <li>
                    <NavLink to="portfolio">Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="contact">Contact</NavLink>
                </li>
            </ul>
        </div>
        )}
        </button>
        <div className="hidden w-full md:block md:w-auto" >
            <ul className='flex gap-x-5' >
                <li>
                    <NavLink  to="about">About</NavLink>
                </li>
                <li>
                    <NavLink to="portfolio">Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="contact">Contact</NavLink>
                </li>
            </ul>
        </div>
     
    </div>
  </nav>
  </>
}
