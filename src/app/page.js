'use client';
import * as React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Cards from "../components/cards";
import CardsGenre from "../components/cardsGenre";
import CardsBeyond from "../components/cardsBeyond";
import ModalSell from "../components/modalSell";

import './globals.css';


export default function Home() {
    const router = useRouter();

    const booksNew = [{
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
    }];

    const booksClassics = [{
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
    }];

    const booksBudget = [{
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
    }];

    const booksFiction = [{
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
    }];

    const booksNonFiction = [{
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
    }];

    const discoverGenre = [{
        bookTitle: "Fantasy",
        image: "/images/cards_picture_21.png"
    },
    {
        bookTitle: "Self-Development",
        image: "/images/cards_picture_22.png"
    },
    {
        bookTitle: "Romance",
        image: "/images/cards_picture_23.png"
    },
    {
        bookTitle: "Mystery",
        image: "/images/cards_picture_24.png"

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


    const [isModalSellOpen, setIsModalSellOpen] = useState(false);

    console.log("status", isModalSellOpen);

    const handleModalSellOpen = () => {
        setIsModalSellOpen(true);
    }

    const handleModalSellClose = () => {
        setIsModalSellOpen(false);
    }

    return (

        <div className="flex flex-row min-h-screen bg-[#EFE8DA] text-gray-800">
            {/* <div className="flex-1 p-6">abc</div> */}
            <div className='w-full'>
                {/* Navbar */}
                <Navbar />

                {/* Search and Logo */}
                <div className='h-[118px] bg-[#EFE8DA]'>
                    <div className="flex h-full w-full items-center justify-center">

                        {/* Logo */}
                        <img src="/icons/tikii-logo-1.svg" className="mr-10 w-[113px]" />

                        <div className='flex gap-2 mr-10'>
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

                {/* Carousel 1 : Payday Sale */}
                <div className='bg-[#4A2C23] h-[378px] flex items-center m-0 p-0'>
                    <img src="/icons/tikii-banner-1.png" className="mr-10" />
                </div>

                {/* Text 2 */}
                <div className='bg-[#EFE8DA] h-[620px] items-center justify-center flex'>
                    <div className='w-full mx-16 mb-44 mt-48'>
                        <div className=' w-full font-bold text-[#4A2C23] text-[22px]'>
                            Rediscover Stories, Relive Adventures
                        </div>

                        <div className=' w-full text-[18px] mt-2'>
                            Welcome to Your Next Chapter, where every book has a tale to tell, and every reader finds a story worth cherishing.
                            Unlike traditional bookstores, we believe books are meant to be shared, not shelved. Each preloved book in our collection
                            has traveled its own journey and is ready to spark joy and inspiration in a new home. By rehoming these literary treasures, we’re giving stories a second life and making sustainable reading accessible for everyone.
                        </div>
                        <div className=' w-full font-bold text-[#4A2C23] text-[22px] mt-8'>
                            Endless Choices at Unbeatable Prices
                        </div>

                        <div className=' w-full text-[18px] mt-2'>
                            Explore our vast collection today, from page-turning thrillers to heartwarming romance, thought-provoking non-fiction to timeless classics. Whether you’re a devoted bookworm or just looking for your next great read,
                            you’ll find incredible value here. Plus, enjoy affordable prices and eco-conscious shopping all in one place.
                        </div>

                        <div className='w-full text-[18px]'>
                            So, let’s turn the page and embrace a world where stories never end. Your next adventure starts here at Your Next Chapter!
                        </div>
                    </div>

                </div>

                {/* Carousel 2 : Sell Your Book */}
                <div className="relative h-[384px] bg-red-400 flex flex-col lg:flex-row items-center">
                    {/* Full-Width Banner Image */}
                    <img src="/icons/tikii-banner-2.png" alt="Banner" className="w-full h-full" />


                    {/* Overlay Text Box */}
                    <div className="bg-red-100 h-full justify-center bg-opacity-20 absolute right-0 lg:w-[1120px] w-full px-12 lg:px-20 py-6 lg:py-12 flex flex-col items-center text-[#4A2C23]">
                        {/* Main Heading */}
                        <h1 className="text-2xl lg:text-4xl font-bold mt-1 mb-3">
                            Sell Your Book Now!
                        </h1>

                        {/* Description */}
                        <p className="text-sm lg:text-lg text-center leading-relaxed mb-9">
                            Got books gathering dust on your shelves? It's time to give them a second life and share the joy of reading!
                            At Tiiki, we make it easy to sell your preloved books. Whether they're gripping novels, insightful non-fiction,
                            or cherished classics, your books deserve to be read and loved again.
                        </p>

                        {/* Button */}
                        <button
                            onClick={handleModalSellOpen}
                            className="bg-[#2A230F] w-[330px] h-[44px] text-white py-3 px-6 rounded-md hover:bg-[#3A3118]">
                            Sell Now
                        </button>
                        {/* Modal */}
                        {isModalSellOpen && <ModalSell onClose={handleModalSellClose} />}
                    </div>
                </div>

                {/* Card: New Items*/}
                <div className='h-[718px] px-20 mt-36'>
                    {/* Title */}
                    <div className='text-[#4A2c23] league-spartan-bold font-bold text-[48px]'>Just Arrived</div>

                    {/* Desc */}
                    <div className='flex'>
                        <div className='w-full justify-start flex items-center text-[18px]'>Freshly added treasures this batch for our curious readers</div>
                        <div className='flex underline items-center font-[18px] text-[#0F172A] underline-offset-4 justify-end w-1/2 pr-4'>
                            View all
                        </div>
                    </div>

                    {/* Cards */}
                    <div className='h-[570px] mt-12 flex justify-center gap-24'>
                        {booksNew.map((book, index) => (
                            <Cards
                                key={index}
                                bookTitle={book.bookTitle}
                                bookAuthor={book.author}
                                bookPrice={book.price}
                                bookImage={book.image}
                            />
                        ))}

                    </div>
                </div>

                {/* Card: Classics*/}
                <div className=' h-[718px] px-20 mt-36'>
                    {/* Title */}
                    <div className='text-[#4A2c23] league-spartan-bold font-bold text-[48px]'>Classics</div>

                    {/* Desc */}
                    <div className='flex'>
                        <div className='w-full justify-start flex items-center text-[18px]'>Timeless tales that never go out of style</div>
                        <div className='flex underline items-center font-[18px] text-[#0F172A] underline-offset-4 justify-end w-1/2 pr-4'>
                            View all
                        </div>
                    </div>

                    {/* Cards */}
                    <div className='h-[570px] mt-12 flex w-full justify-center gap-24'>
                        {booksClassics.map((book, index) => (
                            <Cards
                                key={index}
                                bookTitle={book.bookTitle}
                                bookAuthor={book.author}
                                bookPrice={book.price}
                                bookImage={book.image}
                            />
                        ))}
                    </div>

                    {/* Pages */}
                </div>

                {/* Card: Budget Reads*/}
                <div className=' h-[718px] px-20 mt-36'>
                    {/* Title */}
                    <div className='text-[#4A2c23] league-spartan-bold font-bold text-[48px]'>Budget Reads</div>

                    {/* Desc */}
                    <div className='flex'>
                        <div className='w-full justify-start flex items-center text-[18px]'>Unbeatable prices under Rp50.000</div>
                        <div className='flex underline items-center font-[18px] text-[#0F172A] underline-offset-4 justify-end w-1/2 pr-4'>
                            View all
                        </div>
                    </div>

                    {/* Cards */}
                    <div className='h-[570px] mt-12 flex w-full justify-center gap-24'>
                        {booksBudget.map((book, index) => (
                            <Cards
                                key={index}
                                bookTitle={book.bookTitle}
                                bookAuthor={book.author}
                                bookPrice={book.price}
                                bookImage={book.image}
                            />
                        ))}
                    </div>

                    {/* Pages */}
                </div>

                {/* Card: Fiction*/}
                <div className=' h-[718px] px-20 mt-36'>
                    {/* Title*/}
                    <div className='text-[#4A2c23] league-spartan-bold font-bold text-[48px]'>Fiction Favorites</div>

                    {/* View all */}
                    <div className='flex'>
                        <div className='w-full justify-start flex items-center text-[18px]'>Immerse yourself in captivating stories</div>
                        <div className='flex underline items-center font-[18px] text-[#0F172A] underline-offset-4 justify-end w-1/2 pr-4'>
                            View all
                        </div>
                    </div>

                    {/* Cards */}
                    <div className='h-[570px] mt-12 flex w-full justify-center gap-24'>
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

                    {/* Pages */}
                </div>

                {/* Card: Non Fiction*/}
                <div className=' h-[718px] px-20 mt-36'>
                    {/* Title */}
                    <div className='text-[#4A2c23] league-spartan-bold font-bold text-[48px]'>Non-Fiction Shelves</div>

                    {/* Desc */}
                    <div className='flex'>
                        <div className='w-full justify-start flex items-center text-[18px]'>Learn, grow, and get inspired</div>
                        <div className='flex underline items-center font-[18px] text-[#0F172A] underline-offset-4 justify-end w-1/2 pr-4'>
                            View all
                        </div>
                    </div>

                    {/* Cards */}
                    <div className='h-[570px] mt-12 flex w-full justify-center gap-24'>
                        {booksNonFiction.map((book, index) => (
                            <Cards
                                key={index}
                                bookTitle={book.bookTitle}
                                bookAuthor={book.author}
                                bookPrice={book.price}
                                bookImage={book.image}
                            />
                        ))}
                    </div>

                    {/* Pages */}
                </div>

                {/* Card: Discover*/}
                <div className=' h-[718px] px-20 mt-36'>
                    {/* Title */}
                    <div className='text-[#4A2c23] league-spartan-bold font-bold text-[48px]'>Discover Your Favorite Genre</div>

                    {/* Desc */}
                    <div className='flex'>
                        <div className='w-full justify-start flex items-center text-[18px]'>Discover books across genres that fit your every mood</div>
                        <div className='flex underline items-center font-[18px] text-[#0F172A] underline-offset-4 justify-end w-1/2 pr-4'>
                            View all
                        </div>
                    </div>

                    {/* Cards */}
                    <div className='h-[570px] mt-12 flex w-full justify-center gap-20'>
                        {discoverGenre.map((book, index) => (
                            <CardsGenre
                                key={index}
                                bookTitle={book.bookTitle}
                                bookImage={book.image}
                            />
                        ))}
                    </div>

                    {/* Pages */}

                </div>

                {/* Carousel 3 */}
                <div className="relative h-[384px] bg-red-400 flex flex-col lg:flex-row items-center">
                    {/* Full-Width Banner Image */}
                    <img src="/icons/tikii-banner-2.png" alt="Banner" className="w-full h-full" />


                    {/* Overlay Text Box */}
                    <div className="bg-red-100 h-full justify-center bg-opacity-20 absolute right-0 lg:w-[1120px] w-full px-12 lg:px-20 py-6 lg:py-12 flex flex-col items-center text-[#4A2C23]">
                        {/* Main Heading */}
                        <h1 className="text-2xl lg:text-4xl font-bold mt-1 mb-3">
                            Join Our Community of Readers!
                        </h1>

                        {/* Description */}
                        <p className="text-sm lg:text-lg text-center leading-relaxed mb-9">
                            By joining us, you will connect with people who share your passion for books
                            and sustainability. Together, we’re creating a world where every story gets a
                            second chance to inspire and every reader finds their next favorite tale.
                        </p>

                        {/* Button */}
                        <button className="bg-[#2A230F] w-[330px] h-[44px] text-white py-3 px-6 rounded-md hover:bg-[#3A3118]">
                            Join Now
                        </button>
                    </div>
                </div>

                {/* Card: Beyond Tikii*/}
                <div className='px-20 mt-36'>
                    {/* Title */}
                    <div className='text-[#4A2c23] league-spartan-bold font-bold text-[48px]'>Beyond Tikii</div>

                    {/* Desc */}
                    <div className='flex'>
                        <div className='w-full justify-start flex items-center text-[18px]'>See why Tikii stands out as a trusted home for preloved and passionate readers</div>
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

                    {/* Pages */}
                </div>

                {/* Carousel 4 */}
                <div className="mt-40 relative h-[384px] bg-red-400 flex flex-col lg:flex-row items-center">
                    {/* Full-Width Banner Image */}
                    <img src="/icons/tikii-banner-3.png" alt="Banner" className="w-full h-full" />


                    {/* Overlay Text Box */}
                    <div className="h-full justify-center bg-opacity-20 absolute right-0 lg:w-[1120px] w-full px-12 lg:px-20 py-6 lg:py-12 flex flex-col items-center text-[#4A2C23]">
                        {/* Main Heading */}
                        <h1 className="text-2xl lg:text-4xl font-bold mt-1 mb-3">
                            Donate to Our Charity!
                        </h1>

                        {/* Description */}
                        <p className="text-sm lg:text-lg text-center leading-relaxed mb-9">
                            Help us spread the joy of reading to underserved communities.
                            Your  donations enable Tikii to distribute preloved books, build
                            community libraries, and support readers across Indonesia. Donate
                            today and create lasting change!
                        </p>

                        {/* Button */}
                        <button className="bg-[#2A230F] w-[330px] h-[44px] text-white py-3 px-6 rounded-md hover:bg-[#3A3118]">
                            Donate Now
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <Footer />
            </div>

        </div >
    );
}
