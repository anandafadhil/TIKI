'use client';

export default function CardsArticle({ articleTitle, articleImage, datePosted, readLength }) {
    return (
        <>
            <div
                className="card bg-[#fff] w-[550px] h-[550px] shadow-xl rounded-3xl"
                style={{
                    backgroundImage: `url(${articleImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="h-full flex flex-row items-end mb-16">
                    <div className="px-10">
                        <div className="flex flex-row text-white text-[18px] items-center gap-6">
                            <div className="">
                                Posted {datePosted}
                            </div>
                            <div>
                                <img src="/icons/circle.svg" />
                            </div>
                            <div className="">
                                {readLength}
                            </div>
                        </div>
                        <div className="border-t border-[#FFFFFF] w-full my-4 mx-auto" />
                        <div className="text-[30px] font-semibold text-white">
                            {articleTitle}
                        </div>
                    </div>
                </div>

            </div>
            {/* <div className="flex flex-col bg-[#F2EEE5] rounded-b-xl h-[200px] justify-between"> */}
            {/* <div>
                        <div className="w-full text-[20px] mt-4 pl-4 font-bold">{bookTitle}</div>
                    </div>
                    <div>
                        <div className="w-full text-[18px] pl-4">{bookAuthor}</div>
                        <div className="border-t border-[#B8B094] w-11/12 my-2 mx-auto" />
                        <div className="w-full text-[20px] pl-4 mb-4 font-bold">{bookPrice}</div>
                    </div> */}

            {/* </div> */}
        </>
    )
}