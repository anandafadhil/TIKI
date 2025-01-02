"use client";

import * as React from 'react';
import { useState, useEffect } from 'react';
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import CardsArticle from "../../components/cardsArticle";
import Pagination from "../../components/pagination";
import "../globals.css";
import Link from "next/link";

export default function Article({ data, currentPage: initialPage, itp, totalPages }) {
    const [currentPage, setCurrentPage] = useState(initialPage);
    const itemPerPage = itp;
    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
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
    const paginatedData = data.slice(startIndex, endIndex);
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage); // Update the current page
    };

    return (
        <div className='flex flex-row min-h-screen bg-[#EFE8DA]'>
            <div className='w-full'>

                {/* Navbar */}
                <Navbar />

                <div className='bg-[#EFE8DA] items-center justify-center flex'>
                    <div className='w-full mx-16 mt-16 mb-10'>
                    
                        {/* Heading Text */}
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
                        <div className='w-full flex flex-wrap justify-center gap-x-8 gap-y-20'>
                            {paginatedData.map((article, index) => (
                                <Link key={article.id} className="" href={`/article/${article.id}`}>
                                    <CardsArticle
                                        key={index}
                                        articleTitle={article.articleTitle}
                                        articleImage={article.articleImage}
                                        datePosted={article.postDate}
                                        readLength={article.readLength}
                                    />
                                </Link>
                            ))}
                        </div>

                    </div>
                </div>

                {/* Pagination */}
                <div className='flex flex-row justify-between items-center px-16'>
                    <div className='text-black text-[18px]'>
                        Results {(currentPage - 1) * itemPerPage + 1} - {Math.min(currentPage * itemPerPage, data.length)} of {data.length}
                    </div>
                    <div className='text-black text-[18px]'>
                        <Pagination
                            currPage={currentPage}
                            totPage={totalPages}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>

                {/* Footer */}
                <Footer />
            </div>

        </div>

    )
}