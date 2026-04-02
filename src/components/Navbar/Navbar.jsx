import React , { useState } from 'react'
import { GoHeartFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { HiShoppingBag } from "react-icons/hi2";
import { TbMenu2 } from "react-icons/tb";
import { TbMenu3 } from "react-icons/tb";

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
  return (
    <>
    <header className='bg-white fixed top-0 left-0 right-0'>
        <nav className='mx-w-[1400px] mx-auto px-20 flex md:h-[14vh] h-[12vh] items-center justify-between'>
            {/* logo */}
            <a href="#" className='text-3xl font-bold'>
                Gr<span className='text-orange-500 uppercase'>o</span>cify
            </a>
        
        {/* Desktop Menu  */ }
        <ul className='md:flex items-center gap-x-15 hidden'>
            <li>
                <a href="#" className='font-semibold text-wider text-orange-500'>Home</a>
            </li>

            <li>
                <a href="#" className='font-semibold text-wider text-zinc-800 hover:text-orange-500'>About Us</a>
            </li>

            <li>
                <a href="#" className='font-semibold text-wider text-zinc-800 hover:text-orange-500'>Process</a>
            </li>

            <li>
                <a href="#" className='font-semibold text-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
            </li>
        </ul>

        {/* Nav Action */}
            <div className='flex items-center gap-x-5'>

                {/* input field for search */}
                <div className='md:flex p-1 border-2 border-orange-500 rounded-full hidden'>
                    <input type="text" name="text" id="text" placeholder='Search...' autoComplete='off'
                    className='flex-1 h-[5vh] px-3 focus:outline-none'/>
                    <button className='bg-gradient-to-b from-red-600 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl '>
                        <IoSearch />
                    </button>
                </div>

                <a href="#" className='text-zinc-800 text-2xl'>
                    <GoHeartFill />
                </a>

                <a href="#" className='text-zinc-800 text-2xl'>
                    <HiShoppingBag />
                </a>

                {/* Hamburger */}
                <a href="#" className='text-3xl text-zinc-800 md:hidden' onClick={toggleMenu}>
                    {showMenu ? <TbMenu3 /> : <TbMenu2 />}
                </a>

            </div>

            {/* Mobile Menu */}

            <ul className={`flex flex-col gap-y-12 bg-orange-500/15 backdrop-blur-xl rounded-xl p-10 items-center gap-x-15 md:hidden absolute top-30 -left-full transform -translate-x-1/2 transition-all duration-500 ${showMenu ? 'left-1/2' : '-left-full'}`}>
            <li>
                <a href="#" className='font-semibold text-wider text-orange-500'>Home</a>
            </li>

            <li>
                <a href="#" className='font-semibold text-wider text-zinc-800 hover:text-orange-500'>About Us</a>
            </li>

            <li>
                <a href="#" className='font-semibold text-wider text-zinc-800 hover:text-orange-500'>Process</a>
            </li>

            <li>
                <a href="#" className='font-semibold text-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
            </li>
            <li className='flex p-1 border-2 border-orange-500 rounded-full md:hidden'>
                    <input type="text" name="text" id="text" placeholder='Search...' autoComplete='off'
                    className='flex-1 h-[5vh] px-3 focus:outline-none'/>
                    <button className='bg-gradient-to-b from-red-600 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl '>
                        <IoSearch />
                    </button>
            </li>
        </ul>

        </nav>
    </header>
    </>
  )
}

export default Navbar