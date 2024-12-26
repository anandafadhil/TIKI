"use client";

export default function Cards({bookTitle, bookAuthor, bookPrice, bookImage}) {
    return (
        <>
            <div className="card bg-[#fff] w-[370px] h-[570px] shadow-xl rounded-3xl">
                <figure className="h-[370px]">
                    <img
                        src={bookImage}
                        alt={bookTitle}
                        className="object-cover w-full h-full"
                    />
                </figure>
                <div className="flex flex-col bg-[#F2EEE5] rounded-b-xl h-[200px] justify-between">
                    <div>
                        <div className="w-full text-[20px] mt-4 pl-4 font-bold">{bookTitle}</div>
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