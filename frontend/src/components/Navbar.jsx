import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineUserCircle } from "react-icons/hi2";

const Navbar = () => {

    return (
        <nav className="shadow-md rounded-b-2xl border-t-2 border-pink-400 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    {/* 🔹 Logo + Brand */}
                    <div className="flex items-center space-x-3">
                        <Link to="/">
                            <img
                                src="/images/logo.png"
                                alt="logo"
                                className="h-10 w-auto object-contain"
                            />
                        </Link>
                    </div>

                    {/* 🔹 Menu */}
                    <div className="hidden md:flex items-center space-x-8 text-gray-700 text-sm font-medium">
                        <Link to="/" className="hover:text-pink-500 transition">
                            Home
                        </Link>

                        <Link to="/vendors" className="hover:text-pink-500 transition">
                            Vendors
                        </Link>

                        <Link to="/#" className="hover:text-pink-500 transition">
                            Categories
                        </Link>

                        <Link to="/how-it-works" className="hover:text-pink-500 transition">
                            How It Works
                        </Link>

                        <Link to="/create-listing" className="hover:text-pink-500 transition">
                            Blog
                        </Link>

                        <Link to="/contact-us" className="hover:text-pink-500 transition">
                            Contact
                        </Link>
                    </div>

                    {/* 🔹 Right Side */}
                    <div className="flex items-center space-x-5">
                        {/* Login Button */}
                        <button className="flex items-center space-x-2 text-gray-700 hover:text-pink-500 transition"
                        >
                            <HiOutlineUserCircle className="text-[22px]" />
                            <span>Login</span>

                        </button>

                        {/* Sign Up Button */}
                        <Link>
                            <button className="bg-pink-500 text-white px-5 py-2 rounded-full font-medium hover:bg-pink-600 transition">
                                Sign Up
                            </button>
                        </Link>

                    </div>

                </div>



            </div>

        </nav>
    )



};

export default Navbar;