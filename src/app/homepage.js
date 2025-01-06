'use client';
import React from 'react';
import Select from 'react-select';
import { useState, useRef } from 'react';
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import CardsNonFiction from "../components/cardsNonFiction";
import CardsClassics from "../components/cardsClassics";
import CardsBudget from "../components/cardsBugdget";
import CardsNew from "../components/cardsNew";
import CardsFiction from "../components/cardsFiction";
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
import Swal from 'sweetalert2';

export default function HomePage({
    allBookData,
    dataHomePage,
    booksNew,
    booksClassics,
    booksBudget,
    booksFiction,
    booksNonFiction,
    discoverGenre,
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
    const [showOutline, setShowOutline] = useState(false);

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setInputValue(inputValue);
        setIsSHowOptions(false);

        if (inputValue.length >= 3) {
            setIsShowDrop(true);

            const uniqueLabels = new Set();
            const filteredBooks = allBookData.data.filter((book) => {
                const lowerCaseInput = inputValue.toLowerCase();

                return (
                    book.submission.title.toLowerCase().includes(lowerCaseInput) ||
                    book.submission.isbn.includes(lowerCaseInput) ||
                    book.submission.author.toLowerCase().includes(lowerCaseInput)
                );
            }).filter((book) => {

                const label = `${book.submission.title} by ${book.submission.author}`;
                if (!uniqueLabels.has(label)) {
                    uniqueLabels.add(label);
                    return true;
                }
                return false;
            }).map((book) => ({
                value: book.id,
                label: `${book.submission.title} by ${book.submission.author}`,
            }));
            setFilteredOptions(filteredBooks);

        } else {
            setIsShowDrop(false);
        }
    }

    const handleInputFocus = () => {
        setIsSHowOptions(true);
        setShowOutline(true);
    }

    const handleInputBlur = () => {
        setIsSHowOptions(false);
        setShowOutline(false);
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

    const handleSearchClick = async () => {
        if (inputValue.length >= 3) {
            router.push(`/search?query=${inputValue}`);

            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } else {
            console.error("Please type at least 3 characters to search.");
        }
    }

    return (

        <div className="flex flex-row min-h-screen bg-[#EFE8DA] text-gray-800">
            <div className='relative w-full'>
                {/* Navbar */}
                <Navbar />

                {/* Search and Logo */}
                <div className="h-[132px] lg:h-[118px] bg-[#EFE8DA]">

                    {/* Search and Logo */}
                    <div className="items-center justify-center flex lg:flex-row xs:flex-col h-full lg:gap-4 xs:gap-1">
                        <img src="/icons/tikii-logo-1.svg" className="xs:w-[60px] md:h-[60px] lg:w-[100px] lg:h-[100px] xl:mr-12 xl:w-[113px] xl:h-[113px]" alt="" />

                        {/* Search Bar and Button */}
                        <div className='w-full xs:px-4 sm:w-auto flex flex-row gap-2 xs:mb-4 lg:mb-0'>
                            {/* Search Bar and Dropdown */}
                            <div className='w-full'>
                                <div className={`z-0 bg-[#F2EEE5] relative sm:w-[500px] lg:w-[500px] xl:w-[825px] h-[40px] flex items-center rounded-md outline outline-1 outline-[#B8B094] ${showOutline ? 'outline outline-2 outline-black outline-[#847060]' : ''}`}>
                                    {/* Search Bar */}
                                    <img src="/icons/search.svg" className="ml-2" width={24} height={24} alt="" />
                                    <input
                                        ref={inputRef}
                                        type="search"
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        onFocus={handleInputFocus}
                                        onBlur={handleInputBlur}
                                        placeholder={selectedLabel || 'Find the title, ISBN, or author of the book'}
                                        className="xs:text-[12px] lg:text-[16px] outline-none text-black w-full p-2 ml-2 bg-[#F2EEE5] rounded-md"
                                    />

                                    {/* Dropdown Alert */}
                                    {showOptions && (
                                        <div className="bg-[#F2EEE5] top-[50px] text-gray-400 xs:text-[12px] lg:text-[16px] xs:h-[40px] lg:h-[50px] items-center flex justify-center absolute border border-gray-300 shadow-lg rounded-md w-full max-h-[200px] overflow-auto">
                                            Type at least 3 characters to search
                                        </div>
                                    )}

                                    {/* Dropdown Item */}
                                    {showDrop && (
                                        <div ref={dropdownRef} className="bg-[#F2EEE5] flex flex-col absolute top-[50px] border border-gray-300 shadow-lg rounded-md w-full max-h-[300px] overflow-auto">
                                            {filteredOptions.map((book, index) => (
                                                <button
                                                    key={index}
                                                    className="text-black xs:text-[12px] lg:text-[16px]  px-6 py-2 text-left hover:bg-gray-200 transition-colors"
                                                    onClick={() => handleBookClick(book)}
                                                >
                                                    {book.label}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Button */}
                            <button
                                onClick={handleSearchClick}
                                className='bg-black text-white w-[96px] h-[40px] rounded-md'>
                                Search
                            </button>
                        </div>

                    </div>
                </div>

                {/* Carousel 1 : Payday Sale */}
                <div className='bg-[#4A2C23] flex items-center m-0 p-0'>
                    <img src="/icons/tikii-banner-1.png" className="object-contain mr-10 h-[200px] lg:h-full" alt="banner" />
                </div>

                {/* Text 1 */}
                <div id="mission" className='bg-[#EFE8DA] items-center justify-center flex'>
                    <div className="w-full mx-4 xs:mt-16 xs:mb-16 lg:mt-20 lg:mb-20 lg:mx-16 lg:mt-44 lg:mb-40">
                        <div className=' w-full font-semibold text-[#4A2C23] text-[20px] lg:text-[30px] text-center'>
                            Rediscover Stories, Relive Adventures
                        </div>

                        <div className=' w-full xs:text-[14px] lg:text-[18px] mt-2 text-center poppins-medium'>
                            Welcome to Your Next Chapter, where every book has a tale to tell, and every reader finds a story worth cherishing.
                            Unlike traditional bookstores, we believe books are meant to be shared, not shelved. Each preloved book in our collection
                            has traveled its own journey and is ready to spark joy and inspiration in a new home. By rehoming these literary treasures, we’re giving stories a second life and making sustainable reading accessible for everyone.
                        </div>
                    </div>

                </div>

                {/* Carousel 2 : Sell Your Book */}
                <div id="sell" className="relative h-[562px] lg:h-[384px] flex flex-col lg:flex-row items-center">
                    
                    {/* Full-Width Banner Image */}
                    <img src="/icons/tikii-banner-2.png" alt="Banner" className="xs:hidden lg:flex w-full h-full" />
                    <img src="/icons/tikii-banner-2-1.png" alt="Banner" className="xs:flex lg:hidden w-full h-[562px]" />


                    {/* Overlay Text Box */}
                    <div className="lg:h-full sm:justify-end lg:justify-center absolute right-0 lg:w-[650px] xl:w-[950px] 2xl:w-[1120px] w-full px-6 xs:bottom-0 xl:px-20 py-4 sm:mb-8 lg:mb-0 lg:py-12 flex flex-col items-center text-[#4A2C23]">
                        {/* Main Heading */}
                        <h1 className="text-[24px] lg:[24px] xl:text-[30px] font-semibold mt-1 mb-3">
                            Sell Your Book Now!
                        </h1>

                        {/* Description */}
                        <p className="text-[14px] lg:text-[12px] xl:text-[18px] text-center font-medium leading-relaxed xs:mb-2 lg:mb-9">
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
                <CardsNew booksNew={booksNew} />

                {/* Card: Classics*/}
                <CardsClassics booksClassics={booksClassics} />

                {/* Card: Budget Reads*/}
                <CardsBudget booksBudget={booksBudget} />

                {/* Carousel 3 : Buy a Book */}
                <div className="xs:mb-16 xs:mt-16 relative xs:h-[562px] lg:h-[384px] flex flex-col lg:flex-row items-center">
                    {/* Full-Width Banner Image */}
                    <img src="/icons/tikii-banner-3.png" alt="Banner" className="xs:hidden lg:flex w-full h-full" />
                    <img src="/icons/tikii-banner-buy-mobile.png" alt="Banner" className="xs:flex lg:hidden w-full h-[562px]" />


                    {/* Overlay Text Box */}
                    <div className="lg:h-full sm:justify-end lg:justify-center absolute right-0 lg:w-[650px] xl:w-[950px] 2xl:w-[1120px] w-full px-6 xs:bottom-0 xl:px-20 py-4 sm:mb-8 lg:mb-0 lg:py-12 flex flex-col items-center text-[#4A2C23]">
                        {/* Main Heading */}
                        <h1 className="text-2xl lg:text-4xl text-center font-bold mt-1 mb-3">
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
                <CardsFiction booksFiction={booksFiction} />

                {/* Card: Non Fiction*/}
                <CardsNonFiction booksNonFiction={booksNonFiction} />

                {/* Card: Discover*/}
                <div className=' xs:px-4 lg:px-16 xs:mt-10 lg:mt-36'>
                    {/* Title */}
                    <div className='xs:justify-between xs:flex xs:flex-row'>
                        <div className=' text-[#4A2c23] league-spartan-bold font-bold xs:text-[34px] lg:text-[48px] ml-2 leading-10 line-clamp-2'>Discover Your Favorite Genre</div>
                        <div className='xs:flex lg:hidden mb-2 underline w-[40%] items-end font-[18px] text-[#0F172A] underline-offset-4 justify-end pr-2'>
                            <Link href='/all/'>
                                View all
                            </Link>
                        </div>
                    </div>


                    {/* Desc */}
                    <div className='flex'>
                        <div className='w-full justify-start flex items-center xs:text-[14px] font-medium lg:text-[18px] ml-2'>Discover books across genres that fit your every mood</div>
                        <div className='xs:hidden lg:flex underline items-center font-[18px] text-[#0F172A] underline-offset-4 justify-end w-1/2 pr-2'>
                            <Link href='/all/'>
                                View all
                            </Link>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className='mt-12 w-full justify-center items-center gap-[38px] grid place-items-center md:grid-cols-2 xs:grid-cols-1 xl:flex xl:flex-row'>
                        {discoverGenre.map((genre, index) => (
                            <Link
                                key={index}
                                href={`/${genre.slug.toLowerCase()}/`}
                                className="block h-full"
                            >
                                <CardsGenre
                                    key={index}
                                    genreTitle={genre.name}
                                    genreImage={genre.image}
                                />
                            </Link>
                        ))}

                    </div>

                    {/* Pages */}

                </div>

                {/* Carousel 4 : Join Our Community */}
                <div className="xs:mb-16 xs:mt-16 lg:mt-40 relative xs:h-[562px] lg:h-[384px] flex flex-col lg:flex-row items-center">
                    {/* Full-Width Banner Image */}
                    <img src="/icons/tikii-banner-4.png" alt="Banner" className="xs:hidden lg:flex w-full h-full" />
                    <img src="/icons/tikii-banner-community-mobile.png" alt="Banner" className="xs:flex lg:hidden w-full h-[562px]" />


                    {/* Overlay Text Box */}
                    <div className="lg:h-full sm:justify-end lg:justify-center absolute right-0 lg:w-[650px] xl:w-[950px] 2xl:w-[1120px] w-full px-6 xs:bottom-0 xl:px-20 py-4 sm:mb-8 lg:mb-0 lg:py-12 flex flex-col items-center text-[#4A2C23]">
                        {/* Main Heading */}
                        <h1 className="text-2xl lg:text-4xl text-center font-bold mt-1 mb-3">
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
                <div className='w-full xs:px-4 lg:px-16 xs:mt-0 lg:mt-36'>
                    {/* Title */}
                    <div className='xs:justify-between xs:flex xs:flex-row'>
                        <div className=' text-[#4A2c23] league-spartan-bold font-bold xs:text-[40px] lg:text-[48px] ml-2 leading-10 line-clamp-2'>Beyond Tikii</div>
                        <div className='lg:flex xs:hidden underline items-center font-[18px] text-[#0F172A] underline-offset-4 justify-end pr-2'>
                            <a
                                className='cursor-pointer text-gray-400'
                                // href='/article/'
                                onClick={(e) => {
                                    e.preventDefault();
                                    Swal.fire({
                                        title: 'Coming Soon!',
                                        text: 'This feature will be available soon.',
                                        icon: 'info',
                                        confirmButtonText: 'OK',
                                    });
                                }}
                            >
                                View all
                            </a>
                        </div>
                    </div>
                    {/* Desc */}
                    <div className='flex'>
                        <div className='w-full justify-start flex items-center xs:text-[14px] font-medium lg:text-[18px] ml-2'>See why Tikii stands out as a trusted home for preloved and passionate readers</div>
                        <div className='xs:flex lg:hidden mb-2 underline w-[40%] items-end font-[18px] text-[#0F172A] underline-offset-4 justify-end pr-2'>
                            <a
                                className='cursor-pointer text-gray-400'
                                // href='/article/'
                                onClick={(e) => {
                                    e.preventDefault();
                                    Swal.fire({
                                        title: 'Coming Soon!',
                                        text: 'This feature will be available soon.',
                                        icon: 'info',
                                        confirmButtonText: 'OK',
                                    });
                                }}
                            >
                                View all
                            </a>
                        </div>
                    </div>

                    {/* Pages */}
                </div>

                <div className='xs:hidden lg:flex mt-20 relative h-[384px] flex-col lg:flex-row items-center w-full'>
                    <img src="/icons/tikii-banner-coming.png" alt="Banner" className="w-full h-full" />
                </div>

                <div className='xs:flex lg:flex mt-4 relative h-[384px] flex-col lg:hidden items-center w-full'>
                    <img src="/icons/tikii-banner-coming-2.png" alt="Banner" className="w-full h-full" />
                </div>

                {/* Text 2 */}
                <div className='bg-[#EFE8DA] items-center justify-center flex'>
                    <div className='w-full xs:px-4 lg:px-16 xs:mt-10 lg:mt-40'>
                        <div className=' w-full font-semibold text-[#4A2C23] xs:text-[18px] lg:text-[30px] text-center'>
                            Endless Choices at Unbeatable Prices
                        </div>

                        <div className=' w-full xs:text-[14px] xs:font-medium lg:text-[18px] mt-2 text-center'>
                            Explore our vast collection today, from page-turning thrillers to heartwarming romance,
                            thought-provoking non-fiction to timeless classics. Whether you’re a devoted bookworm or
                            just looking for your next great read, you’ll find incredible value here. Plus, enjoy
                            affordable prices and eco-conscious shopping all in one place.<br />
                            So, let’s turn the page and embrace a world where stories never end. Your next adventure
                            starts here at Your Next Chapter!
                        </div>
                    </div>

                </div>

                {/* Carousel 5 : Donate */}
                <div
                    className="xs:mt-10 lg:mt-40 relative h-[384px] flex items-center justify-center bg-cover bg-center"
                    style={{
                        backgroundColor: 'rgba(239, 232, 218, 0.8)', // Hex color #EFE8DA with 40% opacity
                        backgroundBlendMode: 'overlay',
                        backgroundImage: "url('/icons/tikii-banner-5.png')"
                    }}
                >

                    {/* Overlay Text Box */}
                    <div className="bg-opacity-20 w-full lg:w-[1120px] px-12 lg:px-20 py-6 lg:py-12 flex flex-col items-center text-black">
                        {/* Main Heading */}
                        <h1 className="text-2xl lg:text-4xl font-bold mt-1 mb-3 text-center">
                            Donate to Our Charity!
                        </h1>

                        {/* Description */}
                        <p className="text-sm lg:text-lg text-center leading-relaxed mb-9">
                            Help us spread the joy of reading to underserved communities.
                            Your donations enable Tikii to distribute preloved books, build
                            community libraries, and support readers across Indonesia. Donate
                            today and create lasting change!
                        </p>

                        {/* Button */}
                        <button
                            onClick={() => window.open("https://bit.ly/DonasiTIKII", "_blank")}
                            className="bg-[#2A230F] w-[330px] h-[44px] text-white py-3 px-6 rounded-md hover:bg-[#3A3118]"
                        >
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
