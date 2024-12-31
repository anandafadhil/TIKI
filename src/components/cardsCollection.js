"use client";
import Image from "next/image";
import {useState} from 'react';

export default function Cards({ bookTitle, bookAuthor, bookPrice, bookImage }) {
    const [isOnHover, setIsOnHover] = useState(false);

    return (
        <>
            <div
                className="card bg-[#fff] h-[570px] shadow-xl rounded-3xl"
                onMouseEnter={() => setIsOnHover(true)}
                onMouseLeave={() => setIsOnHover(false)}
            >
                <figure className="h-[370px]">
                    <Image
                        src={bookImage}
                        alt={bookTitle}
                        className="object-cover h-full"
                        width={370}
                        height={370}
                    />
                </figure>
                <div className="flex flex-col bg-[#F2EEE5] rounded-b-xl h-[200px] justify-between">
                    <div>
                        <div className="w-full pl-4 mt-3 text-[#5B5959] text-[16px]">
                            28/12/2024
                        </div>
                        <div className={`w-full text-[20px] mt-1 pl-4 font-bold line-clamp-2 leading-6 ${isOnHover ? 'underline' : ''}`}>{bookTitle}</div>
                    </div>
                    <div>
                        <div className="w-full text-[18px] pl-4">{bookAuthor}</div>
                        <div className="border-t border-[#B8B094] w-11/12 my-2 mx-auto" />
                        <div className="w-full text-[20px] pl-4 mb-4 font-bold">{bookPrice}</div>
                    </div>
                </div>
            </div>
        </>
    )
}