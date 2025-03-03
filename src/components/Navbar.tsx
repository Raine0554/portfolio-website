"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black text-white w-full top-0 left-0 z-50">
            <div className="container mx-auto flex items-center justify-between px-6 py-4 h-16">
                
                {/* Logo */}
                <Link href="/" className="text-xl font-black">
                    LS/
                </Link>

                {/* Hamburger Icon (for mobile) */}
                <button
                    className="sm:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <span>&#x2715;</span> // Close Icon
                    ) : (
                        <span>&#9776;</span> // Hamburger Icon
                    )}
                </button>

                {/* Navigation Links */}
                <ul className={`${isOpen ? "block" : "hidden"} sm:flex sm:items-center sm:space-x-6 mt-4 sm:mt-0`}>

                    <li>
                        <a href="#experience" className="hover:text-blue-400">Experience</a>
                    </li>
 
                    <li>
                        <a href="#projects" className="hover:text-blue-400">Projects</a>
                    </li>
                    <li>
                        <a href="https://github.com/Lorraine-Sanares" className="hover:text-blue-400">GitHub</a>
                    </li>
                    <li>
                        <a href="#more" className="hover:text-blue-400">More</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-blue-400">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
