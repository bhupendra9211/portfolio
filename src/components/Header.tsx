"use client";
import React from "react";
import { Link } from "react-scroll";
import { DarkThemeToggle, Navbar } from "flowbite-react";
import Image from "next/image";
import pic from "../../public/icons/profile.png";
import Contact from "./Contact";


const Header = () => {
    const navItems = [
        {
            id: 1,
            text: "Home",
        },
        {
            id: 2,
            text: "About",
        },
        {
            id: 3,
            text: "Portfolio",
        },
        {
            id: 4,
            text: "Skills",
        },
    ];
    return (
        <>
            <Navbar fluid className='bg-gray-100 shadow-md  !px-6 fixed top-0 left-0 right-0 dark:bg-gray-800 z-50'>
                <Navbar.Brand as={Link} to="Home" smooth={true} duration={500} offset={-70}>
                    <Image src={pic} className="mr-3 h-12 w-12 rounded-full border cursor-pointer" alt="logo" />
                    <h1 className="font-semibold text-xl cursor-pointer dark:text-white">
                        Bhupendr<span className="text-red-600 text-2xl dark:text-red">A</span>
                        <p className="text-sm dark:text-white">Web Developer</p>
                    </h1>
                </Navbar.Brand>

                <Navbar.Toggle />

                <Navbar.Collapse>
                    {navItems.map(({ id, text }) => (
                        <Navbar.Link key={id} as="div" className='text-base hover:scale-105 duration-200 cursor-pointer dark:text-white'>
                            <Link
                                to={text}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                activeClass="active"
                            >
                                {text}
                            </Link>
                        </Navbar.Link>
                    ))}
                    <div className="block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white text-base cursor-pointer dark:text-white">
                        <Contact />
                    </div>
                    <DarkThemeToggle className="block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white text-base hover:scale-105 duration-200 cursor-pointer" />
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header
