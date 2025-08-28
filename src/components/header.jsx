
import React from "react";
import logo from "../assets/logo.png";

export default function Header() {
    return(
        <header className="w-full sticky bg-white top-0 z-10 shadow-md    text-white">
                    <div className="w-full  text-[#2b3d67]  font-semibold text-sm py-1 px-4 flex justify-end gap-10 items-center">
                    </div>
                    <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-3">
                        <div className="flex flex-1  items-center gap-4">
                            <img src={logo} alt="Logo" className=" w-44" />
                            <div className="flex-1  max-w-xl pl-20 w-full">
                                <input
                                    type="text"
                                    placeholder="Search for a procedure, hospital, and doctor.."
                                    className="w-full px-4 py-1.5 text-sm border border-gray-700 shadow-md rounded-sm text-gray-700 focus:outline-none"
                                />
                            </div>
                        </div>
        
                        <div className="flex items-center gap-6 mt-4 md:mt-0">
                            <button className="border border-[#2b3d67] text-sm px-4 py-1.5 rounded-sm text-[#2b3d67] transition">
                                Get a FREE quote
                            </button>
                            <button className="bg-[#17b2aa] text-sm px-4 py-1.5 rounded-sm font-semibold">
                                Get a FREE Consultation
                            </button>
                        </div>
                    </div>
        
        
                    <div className=" w-full">
                        <div className="max-w-7xl mx-auto flex gap-6 px-4 py-5     text-[#2b3d67] font-semibold  overflow-x-auto">
                            <a href="#" className="hover:underline">Treatment</a>
                            <a href="#" className="hover:underline">Hospitals</a>
                            <a href="#" className="hover:underline">Doctors</a>
                            <a href="#" className="hover:underline">Patient Stories</a>
                            <a href="#" className="hover:underline">Packages</a>
                            <a href="#" className="hover:underline">Our Company</a>
                            <a href="#" className="hover:underline">Knowledge Center</a>
                        </div>
                    </div>
                </header>
    )
}