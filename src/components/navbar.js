"use client";
import Image from "next/image";
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from "next/navigation";
import Swal from 'sweetalert2'

export default function Navbar() {
    const router = usePathname();
    const collectionsType = router.replace('/', '');
    const pathname = collectionsType
    const [sidebarOpen, setSidebarOpen] = useState(false);
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
            {/* <div className="navbar h-[60px] bg-[#F2EEE5] flex justify-center items-center drop-shadow-md rounded-b-lg text-[#0F172A] relative z-[1000]"> */}
            <div className=" h-[60px] bg-[#F2EEE5] drop-shadow-md rounded-b-lg text-[#0F172A] relative z-[1000]">
                <div className="xs:hidden lg:flex">
                    {/* Dropdown System */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="h-[60px] flex flex-row items-center justify-center text-[12px] gap-8 w-full xl:gap-16 xl:text-[16px] 2xl:gap-20 2xl:text-[16px]">

                        {/* Logo */}
                        <Link href="/">
                            <Image src="/icons/tikii-logo-1.svg" width={60} height={60} alt="Tikii Logo" />
                        </Link>
                        <Link className={`${pathname === '' ? 'poppins-bold underline underline-offset-2' : ''}`} href="/">Home</Link>
                        <Link className={`${pathname === 'new' ? 'poppins-bold underline underline-offset-2' : ''}`} href="/new">New Arrivals</Link>

                        {/* Fiction */}
                        <div ref={fictionRef}>
                            <div
                                role="button"
                                tabIndex={0}
                                className="relative flex flex-row gap-1"
                                onClick={() => setFictionOpen(!isFictionOpen)}
                            >
                                <span className={`${pathname === 'fiction' ? 'poppins-bold underline underline-offset-2' : ''}`}>Fiction</span>
                                <Image src="/icons/chevron-down.svg" width={12} alt="" height={12} className={`transform transition-transform duration-200 ${isFictionOpen ? "rotate-180" : ""}`} />
                                {isFictionOpen && (
                                    <div className="">
                                        <div className="px-4 py-8 mt-4 bg-[#F2EEE5] border outline outline-1 outline-gray-300 absolute top-[30px] left-1/2 transform -translate-x-1/2 mt-2 h-[364px] w-[364px] rounded-xl">
                                            <Link className="ml-6 text-[24px] text-black font-semibold" href='/fiction'>Fiction by Genre</Link>
                                            <ul className="justify-start text-[18px] text-black grid grid-cols-2 gap-y-3 mt-6 right-4 w-full ml-6">
                                                <li><Link href='/action/'>Action</Link></li>
                                                <li><Link href='/classic/'>Classic</Link></li>
                                                <li><Link href='/comedy/'>Comedy</Link></li>
                                                <li><Link href='/contemporary/'>Contemporary</Link></li>
                                                <li><Link href='/drama/'>Drama</Link></li>
                                                <li><Link href='/family/'>Family</Link></li>
                                                <li><Link href='/fantasy/'>Fantasy</Link></li>
                                                <li><Link href='/horror/'>Horror</Link></li>
                                                <li><Link href='/mystery/'>Mystery</Link></li>
                                                <li><Link href='/romance/'>Romance</Link></li>
                                                <li><Link href='/sci-fi/'>Sci-fi</Link></li>
                                                <li><Link href='/thriller/'>Thriller</Link></li>
                                            </ul>
                                        </div>
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
                                <span className={`${pathname === 'non-fiction' ? 'poppins-bold underline underline-offset-2' : ''}`}>Non-Fiction</span>
                                <Image src="/icons/chevron-down.svg" width={12} height={12} alt="" className={`transform transition-transform duration-200 ${isNonFictionOpen ? "rotate-180" : ""}`} />
                                {isNonFictionOpen && (
                                    <div className="px-4 py-8 mt-4 bg-[#F2EEE5] border outline outline-1 outline-gray-300 absolute top-[30px] left-1/2 transform -translate-x-1/2 mt-2 h-[364px] w-[364px] rounded-xl">
                                        <Link className="ml-6 text-[24px] text-black font-semibold" href='/non-fiction'>Non-Fiction by Genre</Link>
                                        <ul className="justify-start text-[18px] text-black grid grid-cols-2 gap-y-3 mt-6 right-4 w-full ml-6">
                                            <li><Link href='/art-non/'>Art</Link></li>
                                            <li><Link href='/biography-non/'>Biography</Link></li>
                                            <li><Link href='/culinary-non/'>Culinary</Link></li>
                                            <li><Link href='/education-non/'>Education</Link></li>
                                            <li><Link href='/essay-non/'>Essay</Link></li>
                                            <li><Link href='/history-non/'>History</Link></li>
                                            <li><Link href='/parenting-and-family-non/'>Parenting & Family</Link></li>
                                            <li><Link href='/philosophy-non/'>Philosophy</Link></li>
                                            <li><Link href='/science-non/'>Science</Link></li>
                                            <li><Link href='/self-help-non/'>Self-Help</Link></li>
                                            <li><Link href='/travel-non/'>Travel</Link></li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Article */}
                        <a
                            className={`hover:cursor-pointer ${pathname === 'article'
                                ? 'poppins-bold underline underline-offset-2 text-gray-400'
                                : ''
                                }`}
                            // href={pathname === 'article' ? '#' : '/article'}
                            onClick={(e) => {
                                e.preventDefault();
                                Swal.fire({
                                    title: 'Coming Soon!',
                                    text: 'This feature will be available soon.',
                                    icon: 'info',
                                    confirmButtonText: 'OK',
                                });
                            }}
                        >
                            Beyond Tikii
                        </a>

                        {/* Sell */}
                        <a href="/#sell">Sell Your Book</a>
                        <Link href="https://chat.whatsapp.com/J6QIhUqIlHT1ELmtT8FFKb" target="_blank">Join Community</Link>
                        <Link href="https://bit.ly/DonasiTIKII" target="_blank">Donate to Charity</Link>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className="px-4 xl:hidden flex items-center justify-between w-full">
                    {/* Mobile Sidebar Toggle Button */}

                    <div className="mt-2 lg:hidden">
                        {!sidebarOpen ? (
                            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-black">
                                <Image src="/icons/align-justify.svg" width={24} height={24} alt="Menu" />
                            </button>
                        ) : (
                            <button onClick={() => {
                                setSidebarOpen(false);
                                setSidebarFictionOpen(false);
                                setSidebarNonFictionOpen(false);
                            }} className="text-black">
                                <Image src="/icons/x.svg" width={24} height={24} alt="Menu" />
                            </button>
                        )}
                    </div>
                    <div className="lg:hidden">
                        {/* Logo */}
                        <Link href="/">
                            <Image src="/icons/tikii-logo-1.svg" width={60} height={60} alt="Tikii Logo" />
                        </Link>
                    </div>

                    {/* Sidebar Menu for Mobile */}
                    {sidebarOpen && (
                        <div className="bg-[#F2EEE5] mt-2 absolute w-full top-full left-1/2 transform -translate-x-1/2 h-[430px] shadow-xl">
                            <div className="w-full px-4 py-8 font-medium text-[14px]">
                                <ul>
                                    <li className={`${pathname === '' ? 'poppins-semibold underline underline-offset-2' : ''}`}><Link href="/">Home</Link></li>
                                    <li className={`mt-6 ${pathname === 'new' ? 'poppins-semibold underline underline-offset-2' : ''}`}><Link href="/new">New Arrivals</Link></li>

                                    {/* Fiction */}
                                    <div
                                        className="flex flex-row justify-between items-center"
                                        role="button"
                                        onClick={() => {
                                            setSidebarFictionOpen(true);
                                            setSidebarOpen(false);
                                        }}>
                                        <div className={`mt-6 flex justify-between items-center ${pathname === 'fiction' ? 'poppins-semibold underline underline-offset-2' : ''}`}>
                                            Fiction
                                        </div>
                                        <Image src="/icons/arrow-right.svg" width={20} height={20} alt="Menu" />
                                    </div>

                                    {/* Non Fiction */}
                                    <div
                                        className="flex flex-row justify-between items-center"
                                        role="button"
                                        onClick={() => {
                                            setSidebarNonFictionOpen(true);
                                            setSidebarOpen(false);
                                        }}>
                                        <div className={`mb-6 mt-6 flex justify-between items-center ${pathname === 'non-fiction' ? 'poppins-semibold underline underline-offset-2' : ''}`}>
                                            Non FIction
                                        </div>

                                        <Image src="/icons/arrow-right.svg" width={20} height={20} alt="Menu" />
                                    </div>
                                    {/* Article */}
                                    <a
                                        className={`hover:cursor-pointer ${pathname === 'article'
                                            ? 'poppins-bold underline underline-offset-2 text-gray-400'
                                            : ''
                                            }`}
                                        // href={pathname === 'article' ? '#' : '/article'}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            Swal.fire({
                                                title: 'Coming Soon!',
                                                text: 'This feature will be available soon.',
                                                icon: 'info',
                                                confirmButtonText: 'OK',
                                            });
                                        }}
                                    >
                                        Beyond Tikii
                                    </a>
                                    <li className="mt-6"><a href="/#sell">Sell Your Book</a></li>
                                    <li className="mt-6"><Link href="https://chat.whatsapp.com/J6QIhUqIlHT1ELmtT8FFKb" target="_blank">Join Community</Link>                                    </li>
                                    <li className="mt-6"><Link href="https://bit.ly/DonasiTIKII" target="_blank">Donate to Charity</Link></li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {isSidebarFictionOpen && (
                        <div className="bg-[#F2EEE5] shadow-lg mt-2 absolute flex justify-end w-full top-full left-1/2 transform -translate-x-1/2 h-[328px]">
                            <div className="px-4 py-8 font-medium text-[14px] flex flex-col w-[85%]">
                                <div className="gap-6 flex flex-row w-[80%]">
                                    <button onClick={() => {
                                        setSidebarOpen(true);
                                        setSidebarFictionOpen(false);
                                    }} className="text-black">
                                        <Image src="/icons/arrow-right.svg" className='rotate-180' width={24} height={24} alt="Menu" />
                                    </button>
                                    <Link className="xs:text-[18px] lg:text-[20px] text-black font-semibold" href='/fiction'>Fiction by Genre</Link>
                                </div>
                                <ul className="w-[80%] justify-start text-[14px] text-black grid grid-cols-2 gap-y-4 mt-6 right-4 w-full">
                                    <li><Link href='/action/'>Action</Link></li>
                                    <li><Link href='/classic/'>Classic</Link></li>
                                    <li><Link href='/comedy/'>Comedy</Link></li>
                                    <li><Link href='/contemporary/'>Contemporary</Link></li>
                                    <li><Link href='/drama/'>Drama</Link></li>
                                    <li><Link href='/family/'>Family</Link></li>
                                    <li><Link href='/fantasy/'>Fantasy</Link></li>
                                    <li><Link href='/horror/'>Horror</Link></li>
                                    <li><Link href='/mystery/'>Mystery</Link></li>
                                    <li><Link href='/romance/'>Romance</Link></li>
                                    <li><Link href='/sci-fi/'>Sci-fi</Link></li>
                                    <li><Link href='/thriller/'>Thriller</Link></li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {isSidebarNonFictionOpen && (
                        <div className="bg-[#F2EEE5] shadow-lg mt-2 absolute flex justify-end w-full top-full left-1/2 transform -translate-x-1/2 h-[328px]">
                            <div className="py-8 font-medium text-[14px] flex flex-col w-[85%]">
                                <div className="gap-6 flex flex-row w-[80%]">
                                    <button onClick={() => {
                                        setSidebarOpen(true);
                                        setSidebarNonFictionOpen(false);
                                    }} className="text-black">
                                        <Image src="/icons/arrow-right.svg" className='rotate-180' width={24} height={24} alt="Menu" />
                                    </button>
                                    <Link className="xs:text-[18px] lg:text-[20px] text-black font-semibold" href='/non-fiction'>Non Fiction by Genre</Link>
                                </div>
                                <ul className="w-[80%] justify-start text-[14px] text-black grid grid-cols-2 gap-y-4 mt-6 right-4 w-full">
                                    <li><Link href='/art-non/'>Art</Link></li>
                                    <li><Link href='/biography-non/'>Biography</Link></li>
                                    <li><Link href='/culinary-non/'>Culinary</Link></li>
                                    <li><Link href='/education-non/'>Education</Link></li>
                                    <li><Link href='/essay-non/'>Essay</Link></li>
                                    <li><Link href='/health-and-wellness-non/'>Health & Welness</Link></li>
                                    <li><Link href='/history-non/'>History</Link></li>
                                    <li><Link href='/parenting-and-family-non/'>Parenting & Family</Link></li>
                                    <li><Link href='/philosophy-non/'>Philosophy</Link></li>
                                    <li><Link href='/science-non/'>Science</Link></li>
                                    <li><Link href='/self-help-non/'>Self-Help</Link></li>
                                    <li><Link href='/travel-non/'>Travel</Link></li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}