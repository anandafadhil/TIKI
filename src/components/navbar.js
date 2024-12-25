"use client";

import { useState, useRef, useEffect } from 'react';

export default function Navbar() {
    const [isFictionOpen, setFictionOpen] = useState(false);
    const [isNonFictionOpen, setNonFictionOpen] = useState(false);
    const fictionRef = useRef(null);
    const nonFicRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (fictionRef.current && !fictionRef.current.contains(event.target)) {
                setFictionOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (nonFicRef.current && !nonFicRef.current.contains(event.target)) {
                setNonFictionOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <>
            <div className="navbar h-[60px] bg-[#F2EEE5] flex justify-center items-center drop-shadow-md rounded-b-lg text-[#0F172A]">
                <div className="">
                    {/* Dropdown System */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        </div>
                    </div>
                    {/* Horizontal Menu */}
                    <div className="gap-20 justify-center text-[16px] h-full w-[1500px] menu menu-horizontal">
                        <li><a className="poppins-bold underline underline-offset-2">Home</a></li>
                        <li><a>New Arrivals</a></li>
                        <li ref={fictionRef}>
                            <div
                                role="button"
                                tabIndex={0}
                                className="relative"
                                onClick={() => setFictionOpen(!isFictionOpen)}
                            >
                                <span>Fiction</span>
                                <img src="/icons/chevron-down.svg" className={`w-[12px] transform transition-transform duration-200 ${isFictionOpen ? "rotate-180" : ""}`} />
                                {isFictionOpen && (
                                    <div className="p-4 mt-4 bg-[#F2EEE5] border outline outline-1 outline-gray-300 absolute top-full left-1/2 transform -translate-x-1/2 mt-2 h-[364px] w-[364px]">
                                        <p className="ml-6 mt-4 text-[24px] text-black font-semibold mb-6">Fiction by Genre</p>
                                        <ul className="justify-start text-[18px] text-black grid grid-cols-2 gap-2 mt-2 right-4 w-full">
                                            <li><a>Fantasy</a></li>
                                            <li><a>Horror</a></li>
                                            <li><a>Romance</a></li>
                                            <li><a>Drama</a></li>
                                            <li><a>Comedy</a></li>
                                            <li><a>Contemporary</a></li>
                                            <li><a>Thriller</a></li>
                                            <li><a>Mystery</a></li>
                                            <li><a>Action</a></li>
                                            <li><a>Sci-fi</a></li>
                                            <li><a>Classic</a></li>
                                            <li><a>Family</a></li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </li>
                        <li ref={nonFicRef}>
                            <div
                                role="button"
                                tabIndex={0}
                                className="relative"
                                onClick={() => setNonFictionOpen(!isNonFictionOpen)}
                            >
                                <span>Non-Fiction</span>
                                <img src="/icons/chevron-down.svg" className={`w-[12px] transform transition-transform duration-200 ${isNonFictionOpen ? "rotate-180" : ""}`} />
                                {isNonFictionOpen && (
                                    <div className="p-4 mt-4 bg-[#F2EEE5] border outline outline-1 outline-gray-300 absolute top-full left-1/2 transform -translate-x-1/2 mt-2 h-[364px] w-[364px]">
                                        <p className="ml-6 mt-4 text-[24px] text-black font-semibold mb-6">Non-Fiction by Genre</p>
                                        <ul className="justify-start text-[18px] text-black grid grid-cols-2 gap-2 mt-2 right-4 w-full">
                                            <li><a>Fantasy</a></li>
                                            <li><a>Horror</a></li>
                                            <li><a>Romance</a></li>
                                            <li><a>Drama</a></li>
                                            <li><a>Comedy</a></li>
                                            <li><a>Contemporary</a></li>
                                            <li><a>Thriller</a></li>
                                            <li><a>Mystery</a></li>
                                            <li><a>Action</a></li>
                                            <li><a>Sci-fi</a></li>
                                            <li><a>Classic</a></li>
                                            <li><a>Family</a></li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </li>
                        <li><a>Sell Your Book</a></li>
                        <li><a>Join Community</a></li>
                        <li><a>Donate to Charity</a></li>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">

                </div>
            </div>
        </>
    )
}