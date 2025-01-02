"use client";
import Image from "next/image";
import { useState } from 'react';

export default function CardsGenre({ genreTitle, genreImage }) {
    const [isOnHover, setIsOnHover] = useState(false);

    return (
        <>
            <div className="card bg-[#fff] w-[402px] h-[344px] shadow-xl rounded-3xl"
                onMouseEnter={() => setIsOnHover(true)}
                onMouseLeave={() => setIsOnHover(false)}
            >
                <figure className="h-[272px]">
                    <Image
                        src={genreImage}
                        alt={genreTitle}
                        className="object-cover w-full h-full"
                        width={272}
                        height={272}
                    />
                </figure>
                {/* <div className="card-body"> */}
                <div className="flex flex-col bg-[#F2EEE5] rounded-b-xl h-[72px] justify-between">
                    <div className={`w-full flex items-center justify-center text-[20px] mt-4 pl-4 font-bold${isOnHover ? 'underline' : ''}`}>{genreTitle}</div>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}