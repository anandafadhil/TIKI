"use client";

import * as React from 'react';
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import CardsArticle from "../../components/cardsArticle";
import Pagination from "../../components/pagination";
import "../globals.css";

export default function Article() {
    const articleInfo = [{
        articleTitle: "Building Bridge Through Books: Tikii's Mission to Unite Readers Across Indonesia",
        articleImage: "/images/cards_picture_28.png",
        postDate: "5 Dec 2024",
        readLength: "2 min read"
    },
    {
        articleTitle: "Building Bridge Through Books: Tikii's Mission to Unite Readers Across Indonesia",
        articleImage: "/images/cards_picture_28.png",
        postDate: "5 Dec 2024",
        readLength: "2 min read"
    },
    {
        articleTitle: "Building Bridge Through Books: Tikii's Mission to Unite Readers Across Indonesia",
        articleImage: "/images/cards_picture_28.png",
        postDate: "5 Dec 2024",
        readLength: "2 min read"
    },
    {
        articleTitle: "Building Bridge Through Books: Tikii's Mission to Unite Readers Across Indonesia",
        articleImage: "/images/cards_picture_28.png",
        postDate: "5 Dec 2024",
        readLength: "2 min read"
    },
    {
        articleTitle: "Building Bridge Through Books: Tikii's Mission to Unite Readers Across Indonesia",
        articleImage: "/images/cards_picture_28.png",
        postDate: "5 Dec 2024",
        readLength: "2 min read"
    },
    {
        articleTitle: "Building Bridge Through Books: Tikii's Mission to Unite Readers Across Indonesia",
        articleImage: "/images/cards_picture_28.png",
        postDate: "5 Dec 2024",
        readLength: "2 min read"
    },
    {
        articleTitle: "Building Bridge Through Books: Tikii's Mission to Unite Readers Across Indonesia",
        articleImage: "/images/cards_picture_28.png",
        postDate: "5 Dec 2024",
        readLength: "2 min read"
    },
    {
        articleTitle: "Building Bridge Through Books: Tikii's Mission to Unite Readers Across Indonesia",
        articleImage: "/images/cards_picture_28.png",
        postDate: "5 Dec 2024",
        readLength: "2 min read"
    },
    {
        articleTitle: "Building Bridge Through Books: Tikii's Mission to Unite Readers Across Indonesia",
        articleImage: "/images/cards_picture_28.png",
        postDate: "5 Dec 2024",
        readLength: "2 min read"
    }];
    return (
        <div className='flex flex-row min-h-screen bg-[#EFE8DA]'>
            <div className='w-full'>

                {/* Navbar */}
                <Navbar />

                {/* Heading Text */}
                <div className='bg-[#EFE8DA] items-center justify-center flex'>
                    <div className='w-full mx-16 mt-16 mb-10'>
                        <div className=' w-full league-spartan-bold text-[#4A2C23] text-[48px]'>
                            Our Latest News
                        </div>

                        <div className=' w-full text-[18px] mt-2 text-black'>
                            At Tikii, there’s always something exciting happening! Whether it’s
                            launching new initiatives, expanding our collections, or connecting
                            with communities across Indonesia, we’re dedicated to keeping you in
                            the loop.
                        </div>


                        {/* Border */}
                        <div className='flex justify-center items-center'>
                            <div className="border-t border-[#B8B094] text-[18px] w-full mt-10 mb-20" />
                        </div>

                        {/* Cards : Article */}
                        <div className='w-full flex flex-wrap gap-x-8 gap-y-20'>
                            {articleInfo.map((article, index) => (
                                <CardsArticle
                                    key={index}
                                    articleTitle={article.articleTitle}
                                    articleImage={article.articleImage}
                                    datePosted={article.postDate}
                                    readLength={article.readLength}
                                />
                            ))}
                        </div>

                    </div>
                </div>

                {/* Pagination */}
                <div className='flex flex-row justify-between items-center px-16'>
                    <div className='text-black text-[18px]'>
                        Results 1 - 24 of 89
                    </div>
                    <div className='text-black text-[18px]'>
                        <Pagination
                            currPage={1}
                            totPage={4}
                        />
                    </div>
                </div>

                {/* Footer */}
                <Footer />
            </div>

        </div>

    )
}