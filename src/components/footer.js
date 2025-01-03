'use client';
import Image from "next/image";
import Link from 'next/link';
import Swal from 'sweetalert2'
import { usePathname } from "next/navigation";

export default function Footer() {
    const router = usePathname();
    const collectionsType = router.replace('/', '');
    const pathname = collectionsType
    return (
        <>
            <div className="bg-[#847060] h-[452px] text-white mt-44">
                <div className="px-4 flex flex-row gap-24 justify-center items-center h-full">

                    {/* Logo and Contact Section */}
                    <div className="flex flex-col items-center mb-4">
                        <Image src="/icons/tikii-logo-2.svg" alt="Tiki Logo" className="mt-8" width={180} height={180} />
                        <div className="flex space-x-4 mt-8 mb-10">
                            <a href="https://www.instagram.com/tikii_bookstore/" className="text-lg" target="_blank">
                                <Image src="/icons/instagram.svg" alt="Instagram Logo" width={32} height={32} />
                            </a>
                            <a href="tel:+123456789" className="text-lg">
                                <Image src="/icons/phone.svg" alt="Telephone Logo" width={32} height={32} />
                            </a>
                        </div>
                        <p className="text-sm mt-2 mb-20">2024 Tiki. All rights reserved.</p>
                    </div>

                    {/* About Tiki Section */}
                    <div className="items-center justify-center h-full flex flex-row">
                        <div className='mb-14'>
                            <div className="font-bold text-[24px]">About Tikii</div>
                            <div className="border-t border-[#fff] w-[275px] text-[18px] mt-6" />
                            <div className="text-sm hover:underline underline-offset-4 mt-8">
                                <a href="/#mission">
                                    About Us
                                </a>
                            </div>
                            <div className="text-sm hover:underline underline-offset-4 mt-8">
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
                            </div>
                        </div>


                    </div>

                    {/* Support Section */}
                    <div className="flex flex-row justify-center items-center h-full">
                        <div className='mb-14'>
                            <div className="font-bold text-[24px]">Support</div>
                            <div className="border-t border-[#fff] w-[275px] text-[18px] mt-6" />
                            <div className="text-sm hover:underline underline-offset-4 mt-8">
                                <a href="https://titip.tikiibookstore.com" target="_blank">
                                    Sell Book
                                </a>
                            </div>
                            <div className="text-sm hover:underline underline-offset-4 mt-8">
                                <a href="https://chat.whatsapp.com/J6QIhUqIlHT1ELmtT8FFKb" target="_blank">
                                    Join Community
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}