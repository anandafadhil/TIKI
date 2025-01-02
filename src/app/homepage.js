'use client';
import React from 'react';
import Select from 'react-select';
import { useState, useRef } from 'react';
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Cards from "../components/cards";
import CardsGenre from "../components/cardsGenre";
import CardsBeyond from "../components/cardsBeyond";
import ModalSell from "../components/modalSell";
import ModalBuy from "../components/modalBuy";
import ModalPayment from '@/components/modalPayment';
import Link from 'next/link';
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './globals.css';
import { useRouter } from 'next/navigation'

export default function HomePage({
    allBookData,
    booksNew,
    booksClassics,
    booksBudget,
    booksFiction,
    booksNonFiction,
    discoverGenre,
    beyondTikii
}) {
    const router = useRouter();
    const dropdownRef = useRef(null);
    const inputRef = useRef(null);

    // Slider Function
    const [sliderState, setSliderState] = useState({
        New: { isBeginning: true, isLast: false },
        Classic: { isBeginning: true, isLast: false },
        Budget: { isBeginning: true, isLast: false },
        Fiction: { isBeginning: true, isLast: false },
        NonFiction: { isBeginning: true, isLast: false },
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

    // Sell Modal
    const [isModalSellOpen, setIsModalSellOpen] = useState(false);

    const handleModalSellOpen = () => {
        setIsModalSellOpen(true);
    }

    const handleModalSellClose = () => {
        setIsModalSellOpen(false);
    }

    // Buy Modal
    const [isModalBuyOpen, setIsModalBuyOpen] = useState(false);
    const [isModalPaymentOpen, setIsModalPaymentOpen] = useState(false);

    const handleModalBuyOpen = () => {
        setIsModalBuyOpen(true);
    }

    const handleModalBuyClose = () => {
        setIsModalBuyOpen(false);
    }

    const handleModalPaymentOpen = () => {
        setIsModalBuyOpen(false);
        setIsModalPaymentOpen(true);
    }

    const handleModalPaymentClose = () => {
        setIsModalPaymentOpen(false);
    }

    // Search Functionality
    const [inputValue, setInputValue] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [showOptions, setIsSHowOptions] = useState(false)
    const [showDrop, setIsShowDrop] = useState(false);
    const [selectedLabel, setSelectedLabel] = useState();

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setInputValue(inputValue);
        setIsSHowOptions(false);

        if (inputValue.length >= 3) {
            setIsShowDrop(true);

            const uniqueLabels = new Set();
            const filteredBooks = allBookData.filter((book) => {
                const lowerCaseInput = inputValue.toLowerCase();
                return (
                    book.bookTitle.toLowerCase().includes(lowerCaseInput) ||
                    book.id.toLowerCase().includes(lowerCaseInput) ||
                    book.author.toLowerCase().includes(lowerCaseInput)
                );
            }).filter((book) => {
                const label = `${book.bookTitle} by ${book.author}`;
                // Only add the book if the label is not already in the set
                if (!uniqueLabels.has(label)) {
                    uniqueLabels.add(label);
                    return true;
                }
                return false;
            }).map((book) => ({
                value: book.id,
                label: `${book.bookTitle} by ${book.author}`,
            }));
            setFilteredOptions(filteredBooks);

        } else {
            setIsShowDrop(false);
        }
    }

    const handleInputFocus = () => {
        setIsSHowOptions(true);
    }

    const handleInputBlur = () => {
        setIsSHowOptions(false);
        setTimeout(() => {
            if (!dropdownRef.current || !dropdownRef.current.contains(document.activeElement)) {
                setIsShowDrop(false);
            }
        }, 100);
    };

    const handleBookClick = (book) => {
        setInputValue(book.label.split(" by ")[0]);
        setSelectedLabel(book.label);
        setIsShowDrop(false);
    }

    const handleSearchClick = () => {
        if (inputValue.length >= 3) {
            router.push(`/search?query=${inputValue}`);
        } else {
            console.error("Please type at least 3 characters to search.");
        }
    }

    // Real API
    // const optionsBooks = data.map((book) => ({
    //     value: book.id,
    //     label: book.submission.title
    // }));

    // const handleSearchBooks = async (event) => {
    //     console.log("masuk", event.target.value)
    //     const selectedBookId = parseInt(event.target.value);
    //     const selectedBook = data.find((book) => book.id === selectedBookId);
    //     setSelectedBooks(selectedBook);
    // };

    // const handleSearchClick = async () => {
    //     if (selectedBooks) {
    //         router.push(`/books/${selectedBooks.id}`);
    //     } else {
    //         console.error('No book selected');
    //     }
    // }
    // const [isMobile, setIsMobile] = useState(true)
    return (

        <div className="flex flex-row min-h-screen bg-[#EFE8DA] text-gray-800">

            {/* <div className="flex-1 p-6">abc</div> */}
            <div className='relative w-full'>
                {/* Navbar */}
                <Navbar />

                {/* Search and Logo */}
                <div className="h-[118px] bg-[#EFE8DA]">

                    {/* Search and Logo */}
                    <div className="items-center justify-center flex flex-row h-full gap-4">
                        <Image src="/icons/tikii-logo-1.svg" className="mr-12" width={113} height={113} alt="" />

                        {/* Search Bar and Dropdown */}
                        <div>
                            <div className=" z-0 bg-[#F2EEE5] w-[300px] lg:w-[825px] h-[40px] flex items-center rounded-md outline outline-1 outline-[#B8B094]">
                                {/* Search Bar */}
                                <Image src="/icons/search.svg" className="ml-2" width={24} height={24} alt="" />
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    onFocus={handleInputFocus}
                                    onBlur={handleInputBlur}
                                    placeholder={selectedLabel || 'Find the title, ISBN, or author of the book'}
                                    className="text-black w-full p-2 ml-2 bg-[#F2EEE5] rounded-md"
                                />

                                {/* Dropdown Alert */}
                                {showOptions && (
                                    <div className="bg-[#F2EEE5] text-gray-400 h-[50px] items-center flex justify-center absolute top-[150px] border border-gray-300 shadow-lg rounded-md w-[300px] lg:w-[825px] max-h-[200px] overflow-auto">
                                        Type at least 3 characters to search
                                    </div>
                                )}

                                {/* Dropdown Ttem */}
                                {showDrop && (
                                    <div ref={dropdownRef} className="bg-[#F2EEE5] flex flex-col absolute top-[150px] border border-gray-300 shadow-lg rounded-md w-[300px] lg:w-[790px] max-h-[300px] overflow-auto">
                                        {filteredOptions.map((book, index) => (
                                            <button
                                                key={index}
                                                className="text-black text-[18px] px-6 py-2 text-left hover:bg-gray-200 transition-colors"
                                                onClick={() => handleBookClick(book)}
                                            >
                                                {book.label}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <button
                            onClick={handleSearchClick}
                            className='bg-black text-white w-[96px] h-[40px] rounded-md'>
                            Search
                        </button>
                    </div>
                </div>

                {/* Carousel 1 : Payday Sale */}
                <div className='bg-[#4A2C23] flex items-center m-0 p-0'>
                    <img src="/icons/tikii-banner-1.png" className="object-contain mr-10 h-[200px] lg:h-full" alt="banner" />
                </div>

                {/* Text 1 */}
                <div id="mission" className='bg-[#EFE8DA] items-center justify-center flex'>
                    <div className="w-full mx-4 mt-20 mb-20 lg:mx-16 lg:mt-44 lg:mb-40">
                        <div className=' w-full font-semibold text-[#4A2C23] text-[20px] lg:text-[30px] text-center'>
                            Rediscover Stories, Relive Adventures
                        </div>

                        <div className=' w-full text-[18px] mt-2 text-center'>
                            Welcome to Your Next Chapter, where every book has a tale to tell, and every reader finds a story worth cherishing.
                            Unlike traditional bookstores, we believe books are meant to be shared, not shelved. Each preloved book in our collection
                            has traveled its own journey and is ready to spark joy and inspiration in a new home. By rehoming these literary treasures, we’re giving stories a second life and making sustainable reading accessible for everyone.
                        </div>
                    </div>

                </div>

                {/* Carousel 2 : Sell Your Book */}
                <div id="sell" className="relative h-[384px] flex flex-col lg:flex-row items-center">
                    {/* Full-Width Banner Image */}
                    <Image src="/icons/tikii-banner-2.png" fill alt="Banner" className="w-full h-full" />


                    {/* Overlay Text Box */}
                    <div className="h-full justify-center bg-opacity-20 absolute right-0 lg:w-[1120px] w-full px-12 lg:px-20 py-6 lg:py-12 flex flex-col items-center text-[#4A2C23]">
                        {/* Main Heading */}
                        <h1 className="text-2xl lg:text-4xl font-bold mt-1 mb-3">
                            Sell Your Book Now!
                        </h1>

                        {/* Description */}
                        <p className="text-sm lg:text-lg text-center leading-relaxed mb-9">
                            Got books gathering dust on your shelves? Its time to give them a second life and share the joy of reading!
                            At Tiiki, we make it easy to sell your preloved books. Whether theyre gripping novels, insightful non-fiction,
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
                <div className='h-[718px] px-16 mt-36'>
                    {/* Title */}
                    <div className='text-[#4A2c23] league-spartan-bold font-bold text-[48px] ml-2'>Just Arrived</div>

                    {/* Desc */}
                    <div className='flex'>
                        <div className='w-full justify-start flex items-center text-[18px] ml-2'>Freshly added treasures this batch for our curious readers</div>
                        <div className='flex underline items-center font-[18px] text-[#0F172A] underline-offset-4 justify-end w-1/2 pr-2'>
                            <Link href='/new/'>
                                View all
                            </Link>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className='h-[570px] mt-12 relative flex items-center'>
                        {/* Custom Navigation Buttons */}
                        <button
                            className={`custom-button-prev ${sliderState.New.isBeginning ? "opacity-0 pointer-events-none" : ""}`}
                            id="custom-prev-1"
                            disabled={sliderState.New.isBeginning}
                        >
                            <Image src="/icons/chevron-left.svg" alt="arrow-right" width={60} height={60} />
                        </button>
                        <button
                            className={`custom-button-next ${sliderState.New.isLast ? "opacity-0 pointer-events-none" : ""}`}
                            id="custom-next-1"
                            disabled={sliderState.New.isLast}
                        >
                            <Image src="/icons/chevron-right.svg" alt="arrow-right" width={60} height={60} />
                        </button>

                        <Swiper
                            modules={[Navigation]}
                            slidesPerView={6}
                            spaceBetween={20}
                            freeMode={true}
                            centeredSlides={false}
                            preventClicks={false} // Allow click events
                            preventClicksPropagation={false} // Allow event propagation
                            navigation={{
                                nextEl: "#custom-next-1",
                                prevEl: "#custom-prev-1",
                            }}
                            onSlideChange={handleSlideChange('New')}
                            // breakpoints={{
                            //     992: {
                            //         slidesPerView: 2, // 3 slides per view for screens larger than 992px
                            //     },
                            //     768: {
                            //         slidesPerView: 2, // 2 slides per view for screens larger than 768px
                            //     },
                            //     480: {
                            //         slidesPerView: 1, // 1 slide per view for screens smaller than 480px
                            //     },
                            // }}
                            // navigation={true} // Optional navigation arrows
                            loop={false} // Optional loop
                            className="swiper-container"
                        >
                            {
                                booksNew.map((book, index) => (
                                    <SwiperSlide key={index} className="flex justify-center">
                                        <Link key={book.id} className="" href={`/books/${book.id}`}>
                                            <Cards
                                                bookTitle={book.bookTitle}
                                                bookAuthor={book.author}
                                                bookPrice={book.price}
                                                bookImage={book.images[0]}
                                                bookPostedDate={book.postedDate}
                                            />
                                        </Link>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>

                {/* Card: Classics*/}
                <div className=' h-[718px] px-16 mt-36'>
                    {/* Title */}
                    <div className='text-[#4A2c23] league-spartan-bold font-bold text-[48px] ml-2'>Classic in Fiction</div>

                    {/* Desc */}
                    <div className='flex'>
                        <div className='w-full justify-start flex items-center text-[18px] ml-2'>Timeless tales that never go out of style</div>
                        <div className='flex underline items-center font-[18px] text-[#0F172A] underline-offset-4 justify-end w-1/2 pr-2'>
                            <Link href='/classic/'>
                                View all
                            </Link>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className='h-[570px] mt-12 relative flex items-center'>
                        {/* Custom Navigation Buttons */}
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
                            // onSwiper={(swiper) => setIsBeginning(swiper.isBeginning)}
                            onSlideChange={handleSlideChange('Classic')}
                            // breakpoints={{
                            //     992: {
                            //         slidesPerView: 2, // 3 slides per view for screens larger than 992px
                            //     },
                            //     768: {
                            //         slidesPerView: 2, // 2 slides per view for screens larger than 768px
                            //     },
                            //     480: {
                            //         slidesPerView: 1, // 1 slide per view for screens smaller than 480px
                            //     },
                            // }}
                            // navigation={true} // Optional navigation arrows
                            loop={false} // Optional loop
                            className="swiper-container"
                        >
                            {booksClassics.map((book, index) => (
                                <SwiperSlide key={index} className="flex justify-center">
                                    <Link key={book.id} className="" href={`/books/${book.id}`}>
                                        <Cards
                                            bookTitle={book.bookTitle}
                                            bookAuthor={book.author}
                                            bookPrice={book.price}
                                            bookImage={book.images[0]}
                                            bookPostedDate={book.postedDate}
                                        />
                                    </Link>
                                </SwiperSlide>
                            ))
                            }
                        </Swiper>
                    </div>

                    {/* Pages */}
                </div>

                {/* Card: Budget Reads*/}
                <div className=' h-[718px] px-16 mt-36 mb-40 '>
                    {/* Title */}
                    <div className='text-[#4A2c23] league-spartan-bold font-bold text-[48px] ml-2'>Budget Reads</div>

                    {/* Desc */}
                    <div className='flex'>
                        <div className='w-full justify-start flex items-center text-[18px] ml-2'>Unbeatable prices under Rp50.000</div>
                        <div className='flex underline items-center font-[18px] text-[#0F172A] underline-offset-4 justify-end w-1/2 pr-2'>
                            <Link href='/budget'>
                                View all
                            </Link>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className='h-[570px] mt-12 relative flex items-center'>
                        {/* Custom Navigation Buttons */}
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
                            // onSwiper={(swiper) => setIsBeginning(swiper.isBeginning)}
                            onSlideChange={handleSlideChange('Budget')}
                            // breakpoints={{
                            //     992: {
                            //         slidesPerView: 2, // 3 slides per view for screens larger than 992px
                            //     },
                            //     768: {
                            //         slidesPerView: 2, // 2 slides per view for screens larger than 768px
                            //     },
                            //     480: {
                            //         slidesPerView: 1, // 1 slide per view for screens smaller than 480px
                            //     },
                            // }}
                            // navigation={true} // Optional navigation arrows
                            loop={false} // Optional loop
                            className="swiper-container"
                        >
                            {booksBudget.map((book, index) => (
                                <SwiperSlide key={index} className="flex justify-center">
                                    <Link key={index} className="" href='/books/'>
                                        <Cards
                                            bookTitle={book.bookTitle}
                                            bookAuthor={book.author}
                                            bookPrice={book.price}
                                            bookImage={book.images[0]}
                                            bookPostedDate={book.postedDate}
                                        />
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                {/* Carousel 3 : Buy a Book */}
                <div className="relative h-[384px] flex flex-col lg:flex-row items-center">
                    {/* Full-Width Banner Image */}
                    <Image src="/icons/tikii-banner-3.png" fill alt="Banner" className="w-full h-full" />


                    {/* Overlay Text Box */}
                    <div className=" h-full justify-center bg-opacity-20 absolute right-0 lg:w-[1120px] w-full px-12 lg:px-20 py-6 lg:py-12 flex flex-col items-center text-[#4A2C23]">
                        {/* Main Heading */}
                        <h1 className="text-2xl lg:text-4xl font-bold mt-1 mb-3">
                            Own Your Next Great Read for Less!
                        </h1>

                        {/* Description */}
                        <p className="text-sm lg:text-lg text-center leading-relaxed mb-9">
                            Discover hidden treasures in our preloved book collection and give stories a second home.
                            From timeless classics to modern must-reads, our consignment bookstore has something for
                            every book lover. Shop now and let the next chapter of these books unfold with you!
                        </p>

                        {/* Button */}
                        <button
                            onClick={handleModalBuyOpen}
                            className="bg-[#2A230F] w-[330px] h-[44px] text-white py-3 px-6 rounded-md hover:bg-[#3A3118]">
                            Buy Now
                        </button>
                        {/* Modal */}
                        {isModalBuyOpen && <ModalBuy onBuy={handleModalPaymentOpen} onClose={handleModalBuyClose} />}

                        {isModalPaymentOpen && <ModalPayment onClose={handleModalPaymentClose} />}

                    </div>
                </div>

                {/* Card: Fiction*/}
                <div className=' h-[718px] px-16 mt-36'>
                    {/* Title*/}
                    <div className='text-[#4A2c23] league-spartan-bold font-bold text-[48px] ml-2'>Fiction Favorites</div>

                    {/* View all */}
                    <div className='flex'>
                        <div className='w-full justify-start flex items-center text-[18px] ml-2'>Immerse yourself in captivating stories</div>
                        <div className='flex underline items-center font-[18px] text-[#0F172A] underline-offset-4 justify-end w-1/2 pr-2'>
                            <Link href='/fiction/'>
                                View all
                            </Link>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className='h-[570px] mt-12 relative flex items-center'>
                        {/* Custom Navigation Buttons */}
                        <button
                            className={`custom-button-prev ${sliderState.Fiction.isBeginning ? "opacity-0 pointer-events-none" : ""}`}
                            id="custom-prev-4"
                            disabled={sliderState.Fiction.isBeginning}
                        >
                            <Image src="/icons/chevron-left.svg" alt="arrow-right" width={60} height={60} />
                        </button>
                        <button
                            className={`custom-button-next ${sliderState.Fiction.isLast ? "opacity-0 pointer-events-none" : ""}`}
                            id="custom-next-4"
                            disabled={sliderState.Fiction.isLast}
                        >
                            <Image src="/icons/chevron-right.svg" alt="arrow-right" width={60} height={60} />
                        </button>
                        <Swiper
                            modules={[Navigation]}
                            slidesPerView={6}
                            spaceBetween={20}
                            freeMode={true}
                            centeredSlides={false}
                            preventClicks={false} // Allow click events
                            preventClicksPropagation={false} // Allow event propagation
                            navigation={{
                                nextEl: "#custom-next-4",
                                prevEl: "#custom-prev-4",
                            }}
                            // onSwiper={(swiper) => setIsBeginning(swiper.isBeginning)}
                            onSlideChange={handleSlideChange('Fiction')}
                            // breakpoints={{
                            //     992: {
                            //         slidesPerView: 2, // 3 slides per view for screens larger than 992px
                            //     },
                            //     768: {
                            //         slidesPerView: 2, // 2 slides per view for screens larger than 768px
                            //     },
                            //     480: {
                            //         slidesPerView: 1, // 1 slide per view for screens smaller than 480px
                            //     },
                            // }}
                            // navigation={true} // Optional navigation arrows
                            loop={false} // Optional loop
                            className="swiper-container"
                        >
                            {booksFiction.map((book, index) => (
                                <SwiperSlide key={index} className="flex justify-center">

                                    <Link key={index} className='' href='/books/'>
                                        <Cards
                                            key={index}
                                            bookTitle={book.bookTitle}
                                            bookAuthor={book.author}
                                            bookPrice={book.price}
                                            bookImage={book.images[0]}
                                            bookPostedDate={book.postedDate}
                                        />
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Pages */}
                </div>

                {/* Card: Non Fiction*/}
                <div className=' h-[718px] px-16 mt-36'>
                    {/* Title */}
                    <div className='text-[#4A2c23] league-spartan-bold font-bold text-[48px] ml-2'>Non-Fiction Shelves</div>

                    {/* Desc */}
                    <div className='flex'>
                        <div className='w-full justify-start flex items-center text-[18px] ml-2'>Learn, grow, and get inspired</div>
                        <div className='flex underline items-center font-[18px] text-[#0F172A] underline-offset-4 justify-end w-1/2 pr-2'>
                            <Link href='/non-fiction/'>
                                View all
                            </Link>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className='h-[570px] mt-12 relative flex items-center'>
                        {/* Custom Navigation Buttons */}
                        <button
                            className={`custom-button-prev ${sliderState.NonFiction.isBeginning ? "opacity-0 pointer-events-none" : ""}`}
                            id="custom-prev-5"
                            disabled={sliderState.NonFiction.isBeginning}
                        >
                            <Image src="/icons/chevron-left.svg" alt="arrow-right" width={60} height={60} />
                        </button>
                        <button
                            className={`custom-button-next ${sliderState.NonFiction.isLast ? "opacity-0 pointer-events-none" : ""}`}
                            id="custom-next-5"
                            disabled={sliderState.NonFiction.isLast}
                        >
                            <Image src="/icons/chevron-right.svg" alt="arrow-right" width={60} height={60} />
                        </button>
                        <Swiper
                            modules={[Navigation]}
                            slidesPerView={6}
                            spaceBetween={20}
                            freeMode={true}
                            centeredSlides={false}
                            preventClicks={false}
                            preventClicksPropagation={false}
                            navigation={{
                                nextEl: "#custom-next-5",
                                prevEl: "#custom-prev-5",
                            }}
                            onSlideChange={handleSlideChange('NonFiction')}
                            // breakpoints={{
                            //     992: {
                            //         slidesPerView: 2, // 3 slides per view for screens larger than 992px
                            //     },
                            //     768: {
                            //         slidesPerView: 2, // 2 slides per view for screens larger than 768px
                            //     },
                            //     480: {
                            //         slidesPerView: 1, // 1 slide per view for screens smaller than 480px
                            //     },
                            // }}
                            // navigation={true} // Optional navigation arrows
                            loop={false} // Optional loop
                            className="swiper-container"
                        >
                            {booksNonFiction.map((book, index) => (
                                <SwiperSlide key={index} className="flex justify-center">
                                    <Link key={index} className='' href='/books/'>
                                        <Cards
                                            key={index}
                                            bookTitle={book.bookTitle}
                                            bookAuthor={book.author}
                                            bookPrice={book.price}
                                            bookImage={book.images[0]}
                                            bookPostedDate={book.postedDate}
                                        />
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Pages */}
                </div>

                {/* Card: Discover*/}
                <div className='h-[718px] px-16 mt-36'>
                    {/* Title */}
                    <div className='text-[#4A2c23] league-spartan-bold font-bold text-[48px] ml-2'>Discover Your Favorite Genre</div>

                    {/* Desc */}
                    <div className='flex'>
                        <div className='w-full justify-start flex items-center text-[18px] ml-2'>Discover books across genres that fit your every mood</div>
                        <div className='flex underline items-center font-[18px] text-[#0F172A] underline-offset-4 justify-end w-1/2 pr-2'>
                            <Link href='/all/'>
                                View all
                            </Link>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className='h-[570px] mt-12 flex w-full justify-center gap-[38px]'>
                        {discoverGenre.map((book, index) => (
                            <Link
                                key={index}
                                // href={`/collections/${genre}`}
                                href='/collections/'
                                className="block w-[404px] h-full"
                            >
                                <CardsGenre
                                    key={index}
                                    bookTitle={book.bookTitle}
                                    bookImage={book.image}
                                />
                            </Link>
                        ))}
                    </div>

                    {/* Pages */}

                </div>

                {/* Carousel 4 : Join Our Community */}
                <div className="relative h-[384px] flex flex-col lg:flex-row items-center">
                    {/* Full-Width Banner Image */}
                    <Image src="/icons/tikii-banner-2.png" fill alt="Banner" className="w-full h-full" />


                    {/* Overlay Text Box */}
                    <div className="h-full justify-center bg-opacity-20 absolute right-0 lg:w-[1120px] w-full px-12 lg:px-20 py-6 lg:py-12 flex flex-col items-center text-[#4A2C23]">
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
                        <button
                            onClick={() => window.open("https://chat.whatsapp.com/J6QIhUqIlHT1ELmtT8FFKb", "_blank")}
                            className="bg-[#2A230F] w-[330px] h-[44px] text-white py-3 px-6 rounded-md hover:bg-[#3A3118]">
                            Join Now
                        </button>
                    </div>
                </div>

                {/* Card: Beyond Tikii*/}
                <div className='px-16 mt-36'>
                    {/* Title */}
                    <div className='text-[#4A2c23] league-spartan-bold font-bold text-[48px] ml-2'>Beyond Tikii</div>

                    {/* Desc */}
                    <div className='flex'>
                        <div className='w-full justify-start flex items-center text-[18px] ml-2'>See why Tikii stands out as a trusted home for preloved and passionate readers</div>
                        <div className='flex underline items-center font-[18px] text-[#0F172A] underline-offset-4 justify-end w-1/2 pr-2'>
                            <Link href='/article/'>
                                View all
                            </Link>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className='h-[620px] mt-12 flex w-full justify-center gap-8'>
                        {beyondTikii.map((info, index) => (
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

                {/* Carousel 5 : Donate */}
                <div className="mt-40 relative h-[384px] flex flex-col lg:flex-row items-center">
                    {/* Full-Width Banner Image */}
                    <Image src="/icons/tikii-banner-4.png" fill alt="Banner" className="w-full h-full" />


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
                        <button
                            onClick={() => window.open("https://bit.ly/DonasiTIKII", "_blank")}
                            className="bg-[#2A230F] w-[330px] h-[44px] text-white py-3 px-6 rounded-md hover:bg-[#3A3118]">
                            Donate Now
                        </button>
                    </div>
                </div>

                {/* Text 2 */}
                <div className='bg-[#EFE8DA] items-center justify-center flex'>
                    <div className='w-full mx-16 mt-40'>
                        <div className=' w-full font-semibold text-[#4A2C23] text-[30px] text-center'>
                            Endless Choices at Unbeatable Prices
                        </div>

                        <div className=' w-full text-[18px] mt-2 text-center'>
                            Explore our vast collection today, from page-turning thrillers to heartwarming romance,
                            thought-provoking non-fiction to timeless classics. Whether you’re a devoted bookworm or
                            just looking for your next great read, you’ll find incredible value here. Plus, enjoy
                            affordable prices and eco-conscious shopping all in one place.<br />
                            So, let’s turn the page and embrace a world where stories never end. Your next adventure
                            starts here at Your Next Chapter!
                        </div>
                    </div>

                </div>

                {/* Footer */}
                <Footer />
            </div>

        </div >
    );
}
