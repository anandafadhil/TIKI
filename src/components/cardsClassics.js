'use client';
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

export default function CardsClassics({ booksClassics }) {
    const [sliderState, setSliderState] = useState({
        Classic: { isBeginning: true, isLast: false },
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
                    <div className=' text-[#4A2c23] league-spartan-bold font-bold xs:text-[40px] lg:text-[48px] ml-2 leading-10 line-clamp-2'>Classic in Fiction</div>
                    <div className='xs:flex lg:hidden underline w-[50%] items-end mb-2 font-[18px] text-[#0F172A] underline-offset-4 justify-end pr-2'>
                        <Link href='/classic/'>
                            View all
                        </Link>
                    </div>
                </div>


                {/* Desc */}
                <div className='flex'>
                    <div className='w-full justify-start flex items-center xs:text-[14px] font-medium lg:text-[18px] ml-2'>Timeless tales that never go out of style</div>
                    <div className='xs:hidden lg:flex underline items-center font-[18px] text-[#0F172A] underline-offset-4 justify-end w-1/2 pr-2'>
                        <Link href='/classic/'>
                            View all
                        </Link>
                    </div>
                </div>

                {/* Cards */}
                <div className='xs:h-[408px] lg:h-[570px] xs:mt-8 lg:mt-12 relative flex items-center'>
                    {/* Custom Navigation Buttons */}
                    <div className='xs:hidden lg:flex'>
                        <button
                            className={`custom-button-prev ${sliderState.Classic.isBeginning ? "opacity-0 pointer-events-none" : ""}`}
                            id="custom-prev-2"
                            disabled={sliderState.Classic.isBeginning}
                        >
                            <Image src="/icons/chevron-left.svg" alt="arrow-right" width={60} height={60} />
                        </button>
                        <button
                            className={`custom-button-next ${sliderState.Classic.isLast ? "opacity-0 pointer-events-none" : ""}`}
                            id="custom-next-2"
                            disabled={sliderState.Classic.isLast}
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
                            nextEl: "#custom-next-2",
                            prevEl: "#custom-prev-2",
                        }}
                        onSlideChange={handleSlideChange('Classic')}
                        breakpoints={{
                            1538: {
                                slidesPerView: 6, // 3 slides per view for screens larger than 992px
                            },
                            1280: {
                                slidesPerView: 4, // 3 slides per view for screens larger than 992px
                            },
                            1024: {
                                slidesPerView: 3, // 3 slides per view for screens larger than 992px
                            },
                            768: {
                                slidesPerView: 2, // 2 slides per view for screens larger than 768px
                            },
                            200: {
                                slidesPerView: 2,
                            },
                        }}
                        loop={false} // Optional loop
                        className="swiper-container"
                    >
                        {booksClassics.map((book, index) => (
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
                        ))
                        }
                    </Swiper>
                </div>

                {/* Pages */}
            </div>
        </>
    )
}