import React from 'react';
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from 'react-icons/hi';
import { IoSearch } from "react-icons/io5";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { useState } from 'react';               

const Navbar = () => {
    const [showMenu, setShowMenu] =useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
       <header className='bg-white fixed top-0  right-0 left-0 z-50'>
     <nav className='max-w-[1400px] mx-auto md:h-[14vh]h-[12vh] flex justify-between items-center '>
        {/* logo  */}
    <a href="#" className='text-3xl font-bold'>
                Gr<span className='text-orange-500 uppercase'>o</span>cify
            </a>
            {/* destop mein  */}
            <ul className='md:flex items-center gap-x-15 hidden'>
                <li><a href="# Home"className='font-semibold tracking-wider text-orange-500'>Home</a></li>
                <li><a href="# About Us"className='font-semibold tracking-wider text-zince-800 hover:text-orange-500'>About Us</a></li>
                <li><a href="# Process"className='font-semibold tracking-wider text-zince-800 hover:text-orange-500'>Process</a></li>
                <li><a href="# Contact"className='font-semibold tracking-wider text-zince-800 hover:text-orange-500'>Contact</a></li>
            </ul>
            {/* nav action  */}
            <div className='flex items-center gap-x-5'>
                {/* input field  */}
              <div className='md:flex items-center w-72 h-12 p-1 pl-5 border-2 border-orange-400 rounded-full hidden sm:hidden'>
             <input
             type="text"
             name="text"
             id="text"
             placeholder="Search..."
             autoComplete="off"
             className='min-w-0 flex-1 bg-transparent text-base text-zinc-700 placeholder:text-zinc-400 focus:outline-none'
             />

             <button className='bg-orange-500 text-white w-10 h-10 flex shrink-0 justify-center items-center rounded-full text-xl shadow-sm transition hover:bg-orange-600'>
             <IoSearch />
             </button>

             </div>
                <a href="#" className='text-zince-800 text-2xl'><GoHeartFill/></a>
                <a href="#" className='text-zince-800 text-2xl'><HiShoppingBag/></a>
                <a href="#" className='text-zince-800 text-3xl md:hidden' onClick={toggleMenu}>
                  {showMenu ? <TbMenu3 /> : <TbMenu2 /> }
                </a>
             </div>
            {/* mobile mein */}
              <ul className={`flex flex-col gap-y-12 bg-orange-500/15 backdrop-blur-xl shadow-xl rounded-xl items-center gap-y-4 md:hidden absolute top-30 -left-full transform-translate-x-1/2 transition-all dur ation-500 ${showMenu ? 'left-1/2' : ''} transition-all duration-500 p-8`}>
                <li><a href="#"className='font-semibold tracking-wider text-orange-500'>Home</a></li>
                <li><a href="#"className='font-semibold tracking-wider text-zince-800 hover:text-orange-500'>About Us</a></li>
                <li><a href="#"className='font-semibold tracking-wider text-zince-800 hover:text-orange-500'>Process</a></li>
                <li><a href="#"className='font-semibold tracking-wider text-zince-800 hover:text-orange-500'>Contact</a></li>

                <li className='flex items-center w-72 max-w-full h-12 p-1 pl-5 border-2 border-orange-400 rounded-full md:hidden'>
             <input
             type="text"
             name="text"
             id="text"
             placeholder="Search..."
             autoComplete="off"
             className='min-w-0 flex-1 bg-transparent text-base text-zinc-700 placeholder:text-zinc-400 focus:outline-none'
             />

             <button className='bg-orange-500 text-white w-10 h-10 flex shrink-0 justify-center items-center rounded-full text-xl shadow-sm transition hover:bg-orange-600'>
             <IoSearch />
             </button>

             </li>


        
            </ul>

        </nav>
       </header>
    );
}

export default Navbar;







