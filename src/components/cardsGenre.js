"use client";
import Image from "next/image";

export default function CardsGenre({ bookTitle, bookImage }) {
    return (
        <>
            <div className="card bg-[#fff] w-[402px] h-[344px] shadow-xl rounded-3xl">
                <figure className="h-[272px]">
                    <Image
                        src={bookImage}
                        alt={bookTitle}
                        className="object-cover w-full h-full"
                        width={272}
                        height={272}
                    />
                </figure>
                {/* <div className="card-body"> */}
                <div className="flex flex-col bg-[#F2EEE5] rounded-b-xl h-[72px] justify-between">
                    <div className="w-full flex items-center justify-center text-[20px] mt-4 pl-4 font-bold">{bookTitle}</div>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}