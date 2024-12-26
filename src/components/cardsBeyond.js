"use client";

export default function CardsBeyond({ title, paragraph, image }) {
    return (
        <>
            <div className="card bg-[#fff] w-[577px] h-[619px] shadow-xl rounded-3xl">
                <figure className="h-[367px]">
                    <img
                        src={image}
                        alt={title}
                        className="object-cover w-full h-full"
                    />
                </figure>
                {/* <div className="card-body"> */}
                <div className="flex flex-col bg-[#F2EEE5] rounded-b-xl h-[252px] justify-between">
                    <div className="w-full flex items-center justify-center text-black text-[18px] mt-4 pl-4 italic">{paragraph}</div>
                    <div className="mb-4 flex items-center justify-center">
                        <button className="h-[40px] w-[120px] bg-[#2A230F] text-[#F2EEE5] text-[16px] rounded-md hover:bg-[#3A3118]">
                            <a href="/#mission">
                                Read More
                            </a>
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}