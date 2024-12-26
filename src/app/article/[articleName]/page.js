"use client";

import * as React from 'react';
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import CardsBeyond from '../../../components/cardsBeyond';
import CardsArticle from "../../../components/cardsArticle";
import Pagination from "../../../components/pagination";
import "../../globals.css";

export default function Article() {
    const articleInfo = [{
        articleTitle: "Building Bridges Through Books: Tikii's Mission to Unite Readers Across Indonesia",
        articleSub: "At Tikii, we believe that books have the power to connect, inspire, and transform lives. That’s why we’re committed to creating a community of readers that spans every corner of Indonesia—from bustling cities to remote villages in Papua",
        articleImage: "/images/cards_picture_28.png",
        postDate: "5 Dec 2024",
        readLength: "2 min read"
    }];

    const byondTikii = [{
        title: "Wide Selection",
        paragraph: "Tikii offers an incredible selection of books across all genres, catering to every taste and preference. Rare and sought-after titles are easy to find, all at unbeatable prices and in excellent condition—perfectly ready for their next reader to enjoy.",
        image: "/images/cards_picture_25.png"
    },
    {
        title: "Sustainability",
        paragraph: "What sets Tikii apart is its dedication to sustainability and the joy of rehoming books. Customers appreciate the positive environmental impact while enjoying the thrill of discovering hidden treasures. The process is simple, and the customer support team is always friendly and responsive, making every experience enjoyable.",
        image: "/images/cards_picture_26.png"
    },
    {
        title: "Build Community",
        paragraph: "Through Tikii, readers find a platform where books are just the beginning. It’s a space to celebrate literature, share insights, and inspire one another. The vibrant community built around Tikii is filled with people eager to exchange stories, give life to preloved books, and create lasting memories through shared experiences.",
        image: "/images/cards_picture_27.png"
    }];
    return (
        <div className='flex flex-row min-h-screen bg-[#EFE8DA]'>
            <div className='w-full'>

                {/* Navbar */}
                <Navbar />

                {/* Brown Box */}
                <div className='bg-[#847060] items-center justify-center flex h-[1105px]'>

                    {/* Content Box */}
                    <div className='flex flex-col justify-center items-center px-80'>

                        {/* Date and Read Length */}
                        <div className=' flex flex-row gap-6 items-center text-[#EFE8DA] text-[18px] justify-center mb-6'>
                            <div className="">
                                Posted {articleInfo[0].postDate}
                            </div>
                            <div>
                                <img src="/icons/circle.svg" />
                            </div>
                            <div className="">
                                {articleInfo[0].readLength}
                            </div>
                        </div>

                        {/* Title */}
                        <div className='text-[#F2EEE5] text-[48px] league-spartan-bold text-center leading-[48px] mb-6'>
                            {articleInfo[0].articleTitle}
                        </div>

                        {/* Sub Title */}
                        <div className='text-[#F2EEE5] text-[18px] italic text-center mb-20'>
                            {articleInfo[0].articleSub}
                        </div>

                        {/* Image */}
                        <div className='h-[675px] w-[1185px] flex justify-center items-center'>
                            <img src="/images/article/tikii-article-heading.png" className=' h-[675px] w-[1185px]'/>
                        </div>
                    </div>
                </div>

                {/* Border */}
                <div className='flex justify-center items-center'>
                    <div className="border-t border-[#B8B094] text-[18px] w-full mt-10 mb-2" />
                </div>

                {/* Card: Beyond Tikii*/}
                <div className='px-20 mt-36'>
                    {/* Title */}
                    <div className='text-[#4A2c23] league-spartan-bold font-bold text-[48px]'>Recent Post</div>

                    {/* Desc */}
                    <div className='flex'>
                        <div className='w-full justify-start flex items-center text-[18px] text-black'>Check out other treasures you might be interested in</div>
                        <div className='flex underline items-center font-[18px] text-[#0F172A] underline-offset-4 justify-end w-1/2 pr-4'>
                            View all
                        </div>
                    </div>

                    {/* Cards */}
                    <div className='h-[620px] mt-12 flex w-full justify-center gap-8'>
                        {byondTikii.map((info, index) => (
                            <CardsBeyond
                                key={index}
                                title={info.title}
                                paragraph={info.paragraph}
                                image={info.image}
                            />
                        ))}
                    </div>

                </div>

                {/* Footer */}
                <Footer />
            </div>

        </div>

    )
}