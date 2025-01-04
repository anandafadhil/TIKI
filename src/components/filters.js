"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from 'react';

export default function Filters({ onClose, pathname, isAll, isNon, isNonFiction, isFiction, alwaysVisibleGenres, additionalGenres, alwaysVisibleGenresNon, additionalGenresNon }) {
    const [isShowMore, setIsShowMore] = useState(false);


    const handleShowMore = () => {
        setIsShowMore(true);
    }

    const closeShowMore = () => {
        setIsShowMore(false);
    }
    return (
        <>
            <div className="relative z-[2000] " aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500/80 transition-opacity" aria-hidden="true"></div>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full xs:items-center lg:items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative xs:w-[95%] lg:w-[50%] transform overflow-hidden rounded-lg bg-[#F2EEE5] text-left shadow-xl transition-all sm:my-8 ">

                            {/* Modal Body */}
                            <div className="bg-[#F2EEE5] ">
                                <div className="bg-[#F2EEE5]">

                                    {/* Close Button */}
                                    <div className='bg-[#847060] flex items-center xs:py-0 lg:py-4 xs:px-4 text-white justify-between'>
                                        <a>
                                            Filter
                                        </a>
                                        <button
                                            onClick={onClose}
                                            className="text-white hover:text-[#5B5959] text-[32px]"
                                        >
                                            ×
                                        </button>
                                    </div>

                                    {/* Genre's List */}
                                    <div className='lg:w-[18%] xl:w-[12%] px-4 py-6'>
                                        <div className='px-2 flex flex-col justify-start gap-2'>
                                            <div className='font-bold text-[18px] mb-2 text-black'>Genres</div>
                                            {isAll ? (
                                                [
                                                    ...alwaysVisibleGenres,
                                                    ...alwaysVisibleGenresNon
                                                ].map((genre) => (
                                                    <Link key={genre.path} href={genre.path}>
                                                        <div
                                                            className={`text-[14px] underline ${pathname === genre.name.toLowerCase() ? 'font-bold text-black' : 'text-[#5B5959]'
                                                                }`}
                                                        >
                                                            {genre.name}
                                                        </div>
                                                    </Link>
                                                ))
                                            ) : !isNonFiction && !isNon ? (
                                                [
                                                    ...alwaysVisibleGenres.filter(genre => pathname === genre.name.toLowerCase()),
                                                    ...additionalGenres.filter(genre => pathname === genre.name.toLowerCase()),
                                                    ...alwaysVisibleGenres.filter(genre => pathname !== genre.name.toLowerCase()),
                                                ].map((genre) => (
                                                    <Link key={genre.path} href={genre.path}>
                                                        <div
                                                            className={`text-[14px] underline ${pathname === genre.name.toLowerCase() ? 'font-bold text-black' : 'text-[#5B5959]'
                                                                }`}
                                                        >
                                                            {genre.name}
                                                        </div>
                                                    </Link>
                                                ))
                                            ) : (
                                                [
                                                    ...alwaysVisibleGenresNon.filter(genre => pathname === genre.name.toLowerCase()),
                                                    ...additionalGenresNon.filter(genre => pathname === genre.name.toLowerCase()),
                                                    ...alwaysVisibleGenresNon.filter(genre => pathname !== genre.name.toLowerCase()),
                                                ].map((genre) => (
                                                    <Link key={genre.path} href={genre.path}>
                                                        <div
                                                            className={`text-[14px] underline ${pathname === genre.name.toLowerCase() ? 'font-bold text-black' : 'text-[#5B5959]'
                                                                }`}
                                                        >
                                                            {genre.name}
                                                        </div>
                                                    </Link>
                                                ))
                                            )}

                                            {/* Additional Genres */}
                                            {isShowMore && (
                                                <div className="flex flex-col gap-2">
                                                    {(isAll
                                                        ? [...additionalGenres, ...additionalGenresNon]
                                                        : isNonFiction || isNon
                                                            ? additionalGenresNon
                                                            : additionalGenres
                                                    )
                                                        .filter(genre => pathname !== genre.name.toLowerCase())
                                                        .map((genre) => (
                                                            <Link key={genre.path} href={genre.path}>
                                                                <div
                                                                    className={`text-[14px] underline ${pathname === genre.name.toLowerCase() ? 'font-bold text-black' : 'text-[#5B5959]'
                                                                        }`}
                                                                >
                                                                    {genre.name}
                                                                </div>
                                                            </Link>
                                                        ))}
                                                </div>
                                            )}

                                            {/* Show More/Less */}
                                            {!isShowMore ? (
                                                <div>
                                                    <div
                                                        className="flex flex-row items-center cursor-pointer"
                                                        onClick={handleShowMore}
                                                    >
                                                        <div className='font-bold text-[14px] text-black underline'>See More</div>
                                                        <div className='font-bold text-[14px] text-black ml-6'>
                                                            <Image src="/icons/plus.svg" className="" alt="" height={24} width={24} />
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div>
                                                    <div
                                                        className="flex flex-row items-center cursor-pointer"
                                                        onClick={closeShowMore}
                                                    >
                                                        <div className='font-bold text-[14px] text-black underline'>See Less</div>
                                                        <div className='font-bold text-[14px] text-black ml-6'>
                                                            <Image src="/icons/minus.svg" alt="" width={24} height={24} />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}