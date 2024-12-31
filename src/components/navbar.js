"use client";
import Image from "next/image";
import Link from 'next/link';

import { useState, useRef, useEffect } from 'react';

export default function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    console.log(sidebarOpen)
    const [isFictionOpen, setFictionOpen] = useState(false);
    const [isNonFictionOpen, setNonFictionOpen] = useState(false);
    const [isSidebarFictionOpen, setSidebarFictionOpen] = useState(false);
    const [isSidebarNonFictionOpen, setSidebarNonFictionOpen] = useState(false);
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
                <div className="hidden lg:flex">
                    {/* Dropdown System */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        </div>
                    </div>

                    {/* Horizontal Menu */}
                    <div className="gap-20 text-[16px] h-[60px] w-[1600px] flex flex-row items-center justify-center">

                        {/* Logo */}
                        <Link href="/">
                            <Image src="/icons/tikii-logo-1.svg" width={60} height={60} alt="Tikii Logo" />
                        </Link>
                        <Link className="poppins-bold underline underline-offset-2" href="/">Home</Link>
                        <Link href="/new">New Arrivals</Link>

                        {/* Fiction */}
                        <div ref={fictionRef}>
                            <div
                                role="button"
                                tabIndex={0}
                                className="relative flex flex-row gap-1"
                                onClick={() => setFictionOpen(!isFictionOpen)}
                            >
                                <span>Fiction</span>
                                <Image src="/icons/chevron-down.svg" width={12} alt="" height={12} className={`transform transition-transform duration-200 ${isFictionOpen ? "rotate-180" : ""}`} />
                                {isFictionOpen && (
                                    <div className="p-4 mt-4 bg-[#F2EEE5] border outline outline-1 outline-gray-300 absolute top-full left-1/2 transform -translate-x-1/2 mt-2 h-[364px] w-[364px]">
                                        <Link className="ml-6 mt-4 text-[24px] text-black font-semibold mb-6" href='/fiction'>Fiction by Genre</Link>
                                        <ul className="justify-start text-[18px] text-black grid grid-cols-2 gap-2 mt-2 right-4 w-full ml-6">
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
                        </div>

                        {/* Non Fiction */}
                        <div ref={nonFicRef}>
                            <div
                                role="button"
                                tabIndex={0}
                                className="relative flex flex-row gap-1"
                                onClick={() => setNonFictionOpen(!isNonFictionOpen)}
                            >
                                <span>Non-Fiction</span>
                                <Image src="/icons/chevron-down.svg" width={12} height={12} alt="" className={`transform transition-transform duration-200 ${isFictionOpen ? "rotate-180" : ""}`} />
                                {isNonFictionOpen && (
                                    <div className="p-4 mt-4 bg-[#F2EEE5] border outline outline-1 outline-gray-300 absolute top-full left-1/2 transform -translate-x-1/2 mt-2 h-[364px] w-[364px]">
                                        <Link className="ml-6 mt-4 text-[24px] text-black font-semibold mb-6" href='/non-fiction'>Non-Fiction by Genre</Link>
                                        <ul className="justify-start text-[18px] text-black grid grid-cols-2 gap-2 mt-2 right-4 w-full ml-6">
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
                        </div>

                        <Link href='/article'>Beyond Tikii</Link>
                        <a href="/#sell">Sell Your Book</a>
                        <a>Join Community</a>
                        <a>Donate to Charity</a>
                    </div>
                </div>

                {/* Mobile*/}
                <div className="px-4 lg:hidden flex items-center justify-between w-full">
                    {/* Mobile Sidebar Toggle Button */}

                    <div className="mt-2 lg:hidden">
                        {!sidebarOpen ? (
                            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-black">
                                <Image src="/icons/align-justify.svg" width={24} height={24} alt="Menu" />
                            </button>
                        ) : (
                            <button onClick={() => setSidebarOpen(false)} className="text-black">
                                <Image src="/icons/x.svg" width={24} height={24} alt="Menu" />
                            </button>
                        )}

                    </div>

                    {/* Logo */}
                    <Link href="/">
                        <Image src="/icons/tikii-logo-1.svg" width={60} height={60} alt="Tikii Logo" />
                    </Link>

                    {/* Sidebar Menu for Mobile */}
                    {sidebarOpen && (
                        <div className="bg-[#F2EEE5] mt-2 absolute w-full top-full left-1/2 transform -translate-x-1/2 h-[430px]">
                            <div className="w-full px-4 py-8">
                                <ul>
                                    <li className="underline underline-offset-2 font-semibold text-[14px]"><Link href="/">Home</Link></li>
                                    <li className="font-medium text-[14px] mt-6"><Link href="/new">New Arrivals</Link></li>
                                    <li className="font-medium text-[14px] mt-6 flex items-center justify-between">
                                        <Link href="/fiction">Fiction</Link>
                                        <button onClick={() => setSidebarFictionOpen(false)} className="text-black">
                                            <Image src="/icons/arrow-right.svg" width={20} height={20} alt="Menu" />
                                        </button>                                    </li>
                                    <li className="font-medium text-[14px] mt-6 flex items-center justify-between">
                                        <Link href="/non-fiction">Non-Fiction</Link>
                                        <button onClick={() => setSidebarNonFictionOpen(false)} className="text-black">
                                            <Image src="/icons/arrow-right.svg" width={20} height={20} alt="Menu" />
                                        </button>
                                    </li>
                                    <li className="font-medium text-[14px] mt-6"><Link href="/article">Beyond Tikii</Link></li>
                                    <li className="font-medium text-[14px] mt-6"><a href="/#sell">Sell Your Book</a></li>
                                    <li className="font-medium text-[14px] mt-6"><a>Join Community</a></li>
                                    <li className="font-medium text-[14px] mt-6"><a>Donate to Charity</a></li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>



                <div className="navbar-center hidden lg:flex">

                </div>
            </div>
        </>
    )
}