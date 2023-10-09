import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { FaTimes } from 'react-icons/fa';
import logo from '../../assets/Untitled-1-removebg-preview.png'

const Navbar = ({ closeView }) => {
    return (
        <div>
            <div className="bg-gradient-to-l sidenavbar  from-blue-800 to-cyan-800 w-full fixed overflow-y-hidden z-50 h-[100%]">
                <div className="pt-8 mb-8">
                    <div className="flex items-center z-50 justify-between">
                        <div className="">
                            <img src={logo} alt="" className="w-32 ml-10" />
                        </div>

                        <div className="mr-10 text-4xl text-white">
                            <FaTimes className="cursor-pointer text-blue-300" onClick={closeView} />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 leading-10 track gap-4 text-white">
                    <Link to="/" className="font-semibold ml-5 text-cyan-200 text-xl">Home</Link>
                    <Link to="/team" className="font-semibold ml-5 text-xl">Team</Link>
                    <Link to="/plan" className="font-semibold ml-5 text-xl">Investment Plans</Link>
                    <Link to="/contact" className="font-semibold ml-5 text-xl">Contact Us</Link>
                    <div className="flex items-center mt-6 justify-center">
                        <Link to="/register" className="ml-5 border px-6 py-1.5 text-xl w-32 text-center rounded-full">Sign Up</Link>
                        <Link to="/login" className="ml-5 border px-6 py-1.5 text-xl w-32 text-center rounded-full">Log In</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
