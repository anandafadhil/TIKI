"use client";
import Image from "next/image";
import Link from 'next/link';

export default function CardsBeyond({ id, title, paragraph, image }) {
    return (
        <>
            <div className="card bg-[#fff] w-[577px] h-[619px] shadow-xl rounded-3xl">
                <figure className="h-[367px]">
                    <Image
                        src={image}
                        alt={title}
                        className="object-cover w-full h-full"
                        width={367}
                        height={367}
                    />
                </figure>
                {/* <div className="card-body"> */}
                <div className="flex flex-col bg-[#F2EEE5] rounded-b-xl h-[252px] justify-between">
                    <div className="w-full flex items-center justify-center text-black text-[18px] mt-4 pl-4 italic">{paragraph}</div>
                    <div className="mb-4 flex items-center justify-center">
                        <button className="h-[40px] w-[120px] bg-[#2A230F] text-[#F2EEE5] text-[16px] rounded-md hover:bg-[#3A3118]">
                            <Link href={`/article/${id}`}>
                                Read More
                            </Link>
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}