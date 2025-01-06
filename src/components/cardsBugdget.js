"use client";
import Image from "next/image";
import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../app/globals.css';
import Cards from "./cards";
import Link from 'next/link';

export default function CardsBudget({ booksBudget }) {
    const [sliderState, setSliderState] = useState({
        Budget: { isBeginning: true, isLast: false },
    });
    const handleSlideChange = (category) => (swiper) => {
        setSliderState((prevState) => ({
            ...prevState,
            [category]: {
                isBeginning: swiper.isBeginning,
                isLast: swiper.isEnd,
            },
        }));
    };

    return (
        <>
            <div className='xs:h-[556px] lg:h-[718px] xs:px-4 lg:px-16 xs:mt-6 lg:mt-36'>
                {/* Title */}
                <div className='xs:justify-between xs:flex xs:flex-row'>
                    <div className=' text-[#4A2c23] league-spartan-bold font-bold xs:text-[40px] lg:text-[48px] ml-2 leading-10 line-clamp-2'>Budget Reads</div>
                    <div className='xs:flex lg:hidden underline items-center font-[18px] text-[#0F172A] underline-offset-4 justify-end pr-2'>
                        <Link href='/budget/'>
                            View all
                        </Link>
                    </div>
                </div>


                {/* Desc */}
                <div className='flex'>
                    <div className='w-full justify-start flex items-center xs:text-[14px] font-medium lg:text-[18px] ml-2'>Unbeatable prices under Rp50.000</div>
                    <div className='xs:hidden lg:flex underline items-center font-[18px] text-[#0F172A] underline-offset-4 justify-end w-1/2 pr-2'>
                        <Link href='/budget/'>
                            View all
                        </Link>
                    </div>
                </div>

                {/* Cards */}
                <div className='xs:h-[408px] lg:h-[570px] xs:mt-8 lg:mt-12 relative flex items-center'>

                    {/* Custom Navigation Buttons */}
                    <div className='xs:hidden lg:flex'>
                        <button
                            className={`custom-button-prev ${sliderState.Budget.isBeginning ? "opacity-0 pointer-events-none" : ""}`}
                            id="custom-prev-3"
                            disabled={sliderState.Budget.isBeginning}
                        >
                            <Image src="/icons/chevron-left.svg" alt="arrow-right" width={60} height={60} />
                        </button>
                        <button
                            className={`custom-button-next ${sliderState.Budget.isLast ? "opacity-0 pointer-events-none" : ""}`}
                            id="custom-next-3"
                            disabled={sliderState.Budget.isLast}
                        >
                            <Image src="/icons/chevron-right.svg" alt="arrow-right" width={60} height={60} />
                        </button>
                    </div>
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={6}
                        spaceBetween={20}
                        freeMode={true}
                        centeredSlides={false}
                        preventClicks={false} // Allow click events
                        preventClicksPropagation={false} // Allow event propagation
                        navigation={{
                            nextEl: "#custom-next-3",
                            prevEl: "#custom-prev-3",
                        }}
                        onSlideChange={handleSlideChange('Budget')}
                        breakpoints={{
                            1538: {
                                slidesPerView: 6,
                            },
                            1280: {
                                slidesPerView: 4,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            200: {
                                slidesPerView: 2,
                            },
                        }}
                        loop={false} // Optional loop
                        className="swiper-container"
                    >
                        {booksBudget.map((book, index) => (
                            <SwiperSlide key={index} className="flex justify-center">
                                <Link key={book.id} className="" href={`/books/${book.id}`}>
                                    <Cards
                                        bookTitle={book.submission.title}
                                        bookAuthor={book.submission.author}
                                        bookPrice={book.book.finalPrice}
                                        bookImage={book.submission.images[0]}
                                        bookPostedDate={book.book.createdAt}
                                    />
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}