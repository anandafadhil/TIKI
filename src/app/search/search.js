'use client';
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import CardsCollection from "../../components/cardsCollection";
import Pagination from "../../components/pagination";
import Image from "next/image";
import "../globals.css"
import { usePathname } from "next/navigation";
import { WholeBook } from "../data/bookData";
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation';

export default function Search({ data, query, currentPage: initialPage, itemsPerPage, totalPages }) {
    const ruter = useRouter();
    const dropdownRef = useRef(null);
    const inputRef = useRef(null);

    const { pathname } = ruter;
    const router = usePathname();
    
    // const searchParams = useSearchParams();
    // const query = searchParams.get('query');
    const collectionsType = router.replace('/', '');
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [isShowMore, setIsShowMore] = useState(false);


    // Pagination
    const itemPerPage = itemsPerPage;
    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage); // Update the current page
    };  

    
    const paginatedData = data.slice(startIndex, endIndex);    

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
            const filteredBooks = WholeBook.filter((book) => {
                const lowerCaseInput = inputValue.toLowerCase();
                return (
                    book.bookTitle.toLowerCase().includes(lowerCaseInput) ||
                    book.id.toLowerCase().includes(lowerCaseInput) ||
                    book.author.toLowerCase().includes(lowerCaseInput)
                );
            }).filter((book) => {
                const label = `${book.bookTitle} by ${book.author}`;
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
            ruter.push(`/search?query=${inputValue}`);
            
            setTimeout(() => {
                window.location.reload();
            }, 100);
        } else {
            console.error("Please type at least 3 characters to search.");
        }
    }

    const handleShowMore = () => {
        setIsShowMore(true);
    }

    const closeShowMore = () => {
        setIsShowMore(false);
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
    //         ruter.push(`/books/${selectedBooks.id}`);
    //     } else {
    //         console.error('No book selected');
    //     }
    // }

    // Genre 
    const alwaysVisibleGenres = [
        { name: 'Action', path: '/action/' },
        { name: 'Classic', path: '/classic/' },
        { name: 'Comedy', path: '/comedy/' },
        { name: 'Contemporary', path: '/contemporary/' },
        { name: 'Drama', path: '/drama/' },
        { name: 'Family', path: '/family/' },
    ];

    const additionalGenres = [
        { name: 'Fantasy', path: '/fantasy/' },
        { name: 'Horror', path: '/horror/' },
        { name: 'Mystery', path: '/mystery/' },
        { name: 'Romance', path: '/romance/' },
        { name: 'Sci-Fi', path: '/sci-fi/' },
        { name: 'Thriller', path: '/thriller/' },
    ];

    return (
        <div className='flex flex-row min-h-screen bg-[#EFE8DA]'>
            <div className='w-full'>

                {/* Navbar */}
                <Navbar />

                {/* Heading Text */}
                <div className='bg-[#EFE8DA] items-center justify-center flex'>
                    <div className='w-full mx-16 mt-16 mb-10'>
                        <div className=' w-full league-spartan-bold text-[#4A2C23] text-[48px]'>
                            Discover Your Books
                        </div>

                    </div>
                </div>

                {/* Border */}
                <div className='flex justify-center items-center mb-16'>
                    <div className="border-t border-[#B8B094] text-[18px] w-[93%]" />
                </div>

                {/* Search */}
                <div className='mb-14 bg-[#EFE8DA]'>
                    {/* Search and Logo */}
                    <div className="items-center justify-center flex flex-row h-full gap-4">

                        {/* Search Bar and Dropdown */}
                        <div>
                            <div className="z-1 bg-[#F2EEE5] w-[300px] lg:w-[825px] h-[40px] flex items-center rounded-md outline outline-1 outline-[#B8B094]">
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
                                    <div className="bg-[#F2EEE5] text-gray-400 h-[50px] items-center flex justify-center absolute top-[350px] border border-gray-300 shadow-lg rounded-md w-[300px] lg:w-[825px] max-h-[200px] overflow-auto">
                                        Type at least 3 characters to search
                                    </div>
                                )}

                                {/* Dropdown Ttem */}
                                {showDrop && (
                                    <div ref={dropdownRef} className="bg-[#F2EEE5] z-40 ml-10 flex flex-col absolute top-[350px] border border-gray-300 shadow-lg rounded-md w-[300px] lg:w-[790px] max-h-[300px] overflow-auto">
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

                {/* Cards and Genre */}
                <div className='w-full flex flex-row px-16'>

                    {/* Genre */}
                    <div className='w-[12%]'>
                        <div className='px-2 flex flex-col justify-start gap-2'>
                            <div className='font-bold text-[18px] text-black'>Genres</div>
                            {alwaysVisibleGenres.map((genre) => (
                                <Link key={genre.path} href={genre.path}>
                                    <div
                                        className={`text-[18px] underline ${pathname === genre.path ? 'font-bold text-black' : 'text-gray-400'
                                            }`}
                                    >
                                        {genre.name}
                                    </div>
                                </Link>
                            ))}



                            {/* Rest of the Genre */}
                            {isShowMore && (
                                <div className="flex flex-col gap-2">
                                    {additionalGenres.map((genre) => (
                                        <Link key={genre.path} href={genre.path}>
                                            <div
                                                className={`text-[18px] underline ${pathname === genre.path ? 'font-bold text-black' : 'text-gray-400'
                                                    }`}
                                            >
                                                {genre.name}
                                            </div>
                                        </Link>
                                    ))}
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
                                            <Image src="/icons/plus.svg" className="" alt="" height={24} width={24} />
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
                                                <Image src="/icons/minus.svg" alt="" width={24} height={24} />
                                            </div>
                                        </div>
                                    </div>
                                )}

                        </div>
                    </div>

                    {/* Cards */}
                    <div className='flex flex-col w-[88%]'>
                        <div className=''>
                            <div className='text-black text-[18px] italic'>
                                Showing results for '{query}'
                            </div>
                            <div className='my-8 flex flex-wrap text-black justify-start gap-x-[23px] gap-y-20'>
                                {paginatedData.map((book, index) => (
                                    <Link key={book.id} className="" href={`/books/${book.id}`}>
                                        <CardsCollection
                                            key={index}
                                            bookTitle={book.bookTitle}
                                            bookAuthor={book.author}
                                            bookPrice={book.price}
                                            bookImage={book.images[0]}
                                            bookPostedDate={book.postedDate}
                                        />
                                    </Link>
                                ))}
                            </div>

                            {/* Pagination */}
                            < div className='flex flex-row justify-between items-center' >
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
                        </div>

                    </div>
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </div>
    )
}