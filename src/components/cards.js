"use client";
import Image from "next/image";
import { useState } from 'react';

export default function Cards({ bookTitle, bookAuthor, bookPrice, bookImage, bookPostedDate }) {
    const [isOnHover, setIsOnHover] = useState(false);

    const formatDate = (dateString) => {
        const date = new Date(dateString);

        // Get the day, month, and year from the Date object
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    }

    const formattedDate = formatDate(bookPostedDate);
    const formatPrice = bookPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

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
                        className="object-cover w-full h-full"
                        width={370}
                        height={370}
                    />
                </figure>
                <div className="flex flex-col bg-[#F2EEE5] rounded-b-xl h-[200px] justify-between">
                    <div>
                        <div className="w-full pl-4 mt-3 text-[#5B5959] text-[16px]">
                            {formattedDate}
                        </div>
                        <div className="max-w-[350px] text-[20px] mt-1 pl-4 font-bold leading-6 line-clamp-2 overflow-hidden text-ellipsis">
                            {bookTitle}</div>
                    </div>
                    <div>
                        <div className="w-full text-[18px] pl-4">{bookAuthor}</div>
                        <div className="border-t border-[#B8B094] w-11/12 my-2 mx-auto" />
                        <div className="w-full text-[20px] pl-4 mb-4 font-bold">Rp {formatPrice}</div>
                    </div>
                </div>
            </div>
        </>
    )
}