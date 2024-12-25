'use client';
import * as React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Cards from "../../components/cards";
import Pagination from "../../components/pagination";
import CardsGenre from "../../components/cardsGenre";
import CardsBeyond from "../../components/cardsBeyond";
import ModalSell from "../../components/modalSell";
import "../globals.css"

export default function Collections() {
    const booksFiction = [{
        bookTitle: "Beautiful World, Where are You",
        author: "Sally Rooney",
        price: "Rp 120.000",
        image: "/images/cards_picture_1.png"
    },
    {
        bookTitle: "A Little Life",
        author: "Hanya Yanagihara",
        price: "Rp 190.000",
        image: "/images/cards_picture_2.png"
    },
    {
        bookTitle: "Laut Bercerita",
        author: "Leila S. Chudori",
        price: "Rp 90.000",
        image: "/images/cards_picture_3.png"
    },
    {
        bookTitle: "Aister Lake",
        author: "Auryn Vientania",
        price: "Rp 95.000",
        image: "/images/cards_picture_4.png"
    },
    {
        bookTitle: "Pride and Prejudice",
        author: "Jane Austen",
        price: "Rp 140.000",
        image: "/images/cards_picture_5.png"
    },
    {
        bookTitle: "1984",
        author: "George Orwell",
        price: "Rp 127.000",
        image: "/images/cards_picture_6.png"
    },
    {
        bookTitle: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: "Rp 150.000",
        image: "/images/cards_picture_7.png"
    },
    {
        bookTitle: "Moby Dick",
        author: "Herman Melville",
        price: "Rp 90.000",
        image: "/images/cards_picture_8.png"
    },
    {
        bookTitle: "Garis Waktu",
        author: "Fiersa Besari",
        price: "Rp 44.000",
        image: "/images/cards_picture_9.png"
    },
    {
        bookTitle: "All Our Yesterdays",
        author: "Christin Terrill",
        price: "Rp 39.000",
        image: "/images/cards_picture_10.png"
    },
    {
        bookTitle: "Rich People Problems",
        author: "Kevin Kwan",
        price: "Rp 49.000",
        image: "/images/cards_picture_11.png"
    },
    {
        bookTitle: "Hujan Bulan Juni",
        author: "Sapardi Djoko Damono",
        price: "Rp 44.000",
        image: "/images/cards_picture_12.png"
    },
    {
        bookTitle: "Dune",
        author: "Frank Herbert",
        price: "Rp 120.000",
        image: "/images/cards_picture_13.png"
    },
    {
        bookTitle: "Norwegian Wood",
        author: "Murakami",
        price: "Rp 145.000",
        image: "/images/cards_picture_14.png"
    },
    {
        bookTitle: "Crazy Rich Asians",
        author: "Kevin Kwan",
        price: "Rp 72.000",
        image: "/images/cards_picture_15.png"
    },
    {
        bookTitle: "The Song of Achilles",
        author: "Madeline Miller",
        price: "Rp 125.000",
        image: "/images/cards_picture_16.png"
    },
    {
        bookTitle: "Atomic Habits",
        author: "James Clear",
        price: "Rp 52.000",
        image: "/images/cards_picture_17.png"
    },
    {
        bookTitle: "The Alpah Girl's Guide",
        author: "Henry Manamprining",
        price: "Rp 55.000",
        image: "/images/cards_picture_18.png"
    },
    {
        bookTitle: "Becoming",
        author: "Michelle Obama",
        price: "Rp 135.000",
        image: "/images/cards_picture_19.png"
    },
    {
        bookTitle: "The Psychology of Money",
        author: "Morgan Housel",
        price: "Rp 55.000",
        image: "/images/cards_picture_20.png"
    },
    {
        bookTitle: "Beautiful World, Where are You",
        author: "Sally Rooney",
        price: "Rp 120.000",
        image: "/images/cards_picture_1.png"
    },
    {
        bookTitle: "A Little Life",
        author: "Hanya Yanagihara",
        price: "Rp 190.000",
        image: "/images/cards_picture_2.png"
    },
    {
        bookTitle: "Laut Bercerita",
        author: "Leila S. Chudori",
        price: "Rp 90.000",
        image: "/images/cards_picture_3.png"
    },
    {
        bookTitle: "Aister Lake",
        author: "Auryn Vientania",
        price: "Rp 95.000",
        image: "/images/cards_picture_4.png"
    }

    ];

    const [isShowMore, setIsShowMore] = useState(false);

    console.log(isShowMore)
    const handleShowMore = () => {
        setIsShowMore(true);
    }

    const closeShowMore = () => {
        setIsShowMore(false);
    }
    return (
        <div className='flex flex-row min-h-screen bg-[#EFE8DA]'>
            <div className='w-full'>

                {/* Navbar */}
                <Navbar />

                {/* Heading Text */}
                <div className='bg-[#EFE8DA] items-center justify-center flex'>
                    <div className='w-full mx-16 mt-16 mb-10'>
                        <div className=' w-full league-spartan-bold text-[#4A2C23] text-[48px]'>
                            Fiction Books
                        </div>

                        <div className=' w-full text-[18px] mt-2 text-black'>
                            Step into worlds where imagination knows no bounds, and every
                            page invites you to dream, wonder, and explore. Our Fiction Collection
                            is a treasure trove of gripping tales, unforgettable characters, and
                            boundless creativity. Whether you crave heart-racing adventures,
                            soul-stirring dramas, or magical realms beyond your wildest dreams,
                            we’ve got the stories that will keep you turning pages late into the night.
                        </div>
                    </div>
                </div>

                {/* Border */}
                <div className='flex justify-center items-center'>
                    <div className="border-t border-[#B8B094] text-[18px] w-[93%]" />
                </div>

                {/* Search */}
                <div className='h-[152px] bg-[#EFE8DA]'>
                    <div className="flex h-full w-full items-center justify-center">

                        <div className='flex ml-28 gap-2'>
                            {/* Search */}
                            <div className="form-control flex items-center justify-center h-full ">
                                <div className='bg-[#F2EEE5] w-[825px] h-[40px] flex items-center rounded-md outline outline-1 outline-[#B8B094]'>
                                    <img src="/icons/search.svg" className="ml-2 w-[24px]" />
                                    <input type="text" placeholder="Find the title of book" className="ml-3 bg-[#F2EEE5] w-full h-[40px]" />
                                </div>
                            </div>

                            {/* Search Button */}
                            <button className='bg-black text-white w-[96px] h-[40px] rounded-md'>Search</button>
                        </div>
                    </div>
                </div>

                {/* Cards and Genre */}
                <div className='w-full flex flex-row px-16'>

                    {/* Genre */}
                    <div className='w-[10%]'>
                        <div className='px-2 flex flex-col justify-start gap-2'>
                            <div className='font-bold text-[18px] text-black'>Genres</div>
                            <div className='text-[18px] text-gray-400 underline'>Romance</div>
                            <div className='text-[18px] text-gray-400 underline'>Comedy</div>
                            <div className='text-[18px] text-gray-400 underline'>Horror</div>
                            <div className='text-[18px] text-gray-400 underline'>Action</div>
                            <div className='text-[18px] text-gray-400 underline'>Fantasy</div>


                            {/* Rest of the Genre */}
                            {isShowMore && (
                                <div className='flex flex-col justify-start gap-2'>
                                    <div className='text-[18px] text-gray-400 underline'>Thriller</div>
                                    <div className='text-[18px] text-gray-400 underline'>Drama</div>
                                    <div className='text-[18px] text-gray-400 underline'>Contemporary</div>
                                    <div className='text-[18px] text-gray-400 underline'>Mystery</div>
                                    <div className='text-[18px] text-gray-400 underline'>Sci-Fi</div>
                                    <div className='text-[18px] text-gray-400 underline'>Family</div>
                                    <div className='text-[18px] text-gray-400 underline'>Classic</div>
                                </div>
                            )}


                            {/* Additional Genre */}
                            {!isShowMore ? (
                                <div>
                                    {/* Show More */}
                                    <div
                                        className="flex flex-row items-center cursor-pointer"
                                        onClick={handleShowMore}
                                    >
                                        <div className='font-bold text-[18px] text-black underline'>See More</div>
                                        <div className='font-bold text-[18px] text-black ml-6'>
                                            <img src="/icons/plus.svg" className=" w-[24px]" />
                                        </div>
                                    </div>
                                </div>
                            ) :
                                (
                                    <div>
                                        {/* Show Less */}
                                        <div
                                            className="flex flex-row items-center cursor-pointer"
                                            onClick={closeShowMore}
                                        >
                                            <div className='font-bold text-[18px] text-black underline'>See Less</div>
                                            <div className='font-bold text-[18px] text-black ml-6'>
                                                <img src="/icons/minus.svg" className=" w-[24px]" />
                                            </div>
                                        </div>
                                    </div>
                                )}

                        </div>
                    </div>

                    {/* Cards */}
                    <div className='flex flex-col w-[90%]'>
                        <div className=''>
                            <div className='text-black text-[18px] italic'>
                                Showing results for all fiction genres
                            </div>
                            <div className='my-8 flex flex-wrap text-black justify-between gap-y-12'>
                                {booksFiction.map((book, index) => (
                                    <Cards
                                        key={index}
                                        bookTitle={book.bookTitle}
                                        bookAuthor={book.author}
                                        bookPrice={book.price}
                                        bookImage={book.image}
                                    />
                                ))}
                            </div>
                            <div className='flex flex-row justify-between items-center'>
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
                        </div>

                    </div>
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </div>
    )
}