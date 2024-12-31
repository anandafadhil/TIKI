'use client';
import * as React from 'react';
import { useState, useEffect } from 'react';
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

export default function Collections({ data, currentPage: initialPage, itp, totalPages }) {
    const ruter = useRouter();
    const router = usePathname();
    const collectionsType = router.replace('/', '');
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [genreSelected, setGenreSelected] = useState()
    const [isShowMore, setIsShowMore] = useState(false);
    const [isNew, setIsNew] = useState(false);
    const [isClassic, setIsClassic] = useState(false);
    const [isBudget, setIsBudget] = useState(false);
    const [isFiction, setIsFictio] = useState(false);
    const [isNonFiction, setIsNonFiction] = useState(false);
    const [isAll, setIsAll] = useState(false);

    // Pagination
    const itemPerPage = itp;
    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage); // Update the current page
    };

    useEffect(() => {
        if (collectionsType === 'classic') {
            setGenreSelected('Classic');
            setIsClassic(true);
            setIsShowMore(true);
        } else if (collectionsType === 'budget') {
            setGenreSelected('Budget');
            setIsBudget(true);
        } else if (collectionsType === 'new') {
            setGenreSelected('New');
            setIsNew(true);
        } else if (collectionsType === 'non-fiction') {
            setGenreSelected('Non-Fiction');
            setIsNonFiction(true);
        } else if (collectionsType === 'all') {
            setGenreSelected('All');
            setIsAll(true);
        } else {
            setGenreSelected('Fiction');
            setIsFictio(true);
        }

    }, [collectionsType]);


    // New Book Function
    const days = 10
    const top = 10
    const latestBooks = WholeBook
        .filter((book) => {
            const bookDate = new Date(book.postedDate);
            const currentDate = new Date();
            return (currentDate - bookDate) <= days * 24 * 60 * 60 * 1000;
        })
        .sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate))
        .slice(0, top)

    const optionsNew = latestBooks.map((book) => ({
        value: book.id,
        label: book.bookTitle,
    }))

    // Classic Function
    const classicBooks = WholeBook.filter((item) => item.category.genre.includes(genreSelected));
    if (!classicBooks) {
        return console.log("Book Not Found");
    }

    const optionsClassic = WholeBook
        .filter((book) => book.category.genre.includes(genreSelected))
        .map((book) => ({
            value: book.id,
            label: book.bookTitle
        }));

    // Budget Function
    const budgetBooks = WholeBook.filter((item) => {
        const priceNumber = parseInt(item.price.replace("Rp", "").replace(".", "").trim(), 10);
        return priceNumber < 50000;
    });
    if (!budgetBooks) {
        return console.log("Book Not Found");
    }

    const optionsBudget = budgetBooks.map((book) => ({
        value: book.id,
        label: book.bookTitle,
    }))

    // Fiction Function
    const fictionBooks = WholeBook.filter((item) => item.category.name === genreSelected);
    if (!fictionBooks) {
        return console.log("Book Not Found");
    }

    const optionsFiction = WholeBook
        .filter((book) => book.category.name === genreSelected)
        .map((book) => ({
            value: book.id,
            label: book.bookTitle
        }));

    // Non-Fiction Function
    const nonFictionBooks = WholeBook.filter((item) => item.category.name === genreSelected);
    if (!nonFictionBooks) {
        return console.log("Book Not Found");
    }

    const optionsNonFiction = WholeBook
        .filter((book) => book.category.name === genreSelected)
        .map((book) => ({
            value: book.id,
            label: book.bookTitle
        }));

    // All Books Function
    const allBooks = WholeBook

    if (!allBooks) {
        return console.log("Book Not Found");
    }

    const optionsAll = allBooks
        .map((book) => ({
            value: book.id,
            label: book.bookTitle
        }));

    // Mapping Function
    const mapping = isBudget && budgetBooks.length > 0
        ? budgetBooks
        : isClassic && classicBooks.length > 0
            ? classicBooks
            : isNew && latestBooks.length > 0
                ? latestBooks
                : isFiction && fictionBooks.length > 0
                    ? fictionBooks
                    : isNonFiction && nonFictionBooks.length > 0
                        ? nonFictionBooks
                        : isAll && allBooks.length > 0
                            ? allBooks
                            : [];


    const paginatedData = mapping.slice(startIndex, endIndex);

    // Option Function
    const optionSelect = isBudget && budgetBooks.length > 0
        ? optionsBudget
        : isClassic && classicBooks.length > 0
            ? optionsClassic
            : isNew && latestBooks.length > 0
                ? optionsNew
                : isFiction && fictionBooks.length > 0
                    ? optionsFiction
                    : isNonFiction && nonFictionBooks.length > 0
                        ? optionsNonFiction
                        : isAll && allBooks.length > 0
                            ? optionsAll
                            : [];

    const handleSearch = async (event) => {
        const selectedBookId = event.target.value;
        const selectedBook = WholeBook.find((book) => book.id === selectedBookId);
        setSelectedBooks(selectedBook);
    };

    const handleSearchClick = async () => {
        if (selectedBooks) {
            ruter.push(`/books/${selectedBooks.id}`);
        } else {
            console.error('No book selected');
        }
    }

    const handleShowMore = () => {
        setIsShowMore(true);
    }

    const closeShowMore = () => {
        setIsShowMore(false);
    }

    // Search Function
    const [selectedBooks, setSelectedBooks] = useState(null);

    // const optionsBooks = WholeBook.map((book) => ({
    //     value: book.id,
    //     label: book.bookTitle.toLowerCase()
    // }));

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
    return (
        <div className='flex flex-row min-h-screen bg-[#EFE8DA]'>
            <div className='w-full'>

                {/* Navbar */}
                <Navbar />

                {/* Heading Text */}
                <div className='bg-[#EFE8DA] items-center justify-center flex'>
                    <div className='w-full mx-16 mt-16 mb-10'>
                        <div className=' w-full league-spartan-bold text-[#4A2C23] text-[48px]'>
                            {`${genreSelected} Books`}
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
                                    <Image src="/icons/search.svg" className="ml-2" alt="" width={24} height={24} />
                                    <select
                                        className="ml-2 w-[93%] bg-[#F2EEE5] text-gray-800"
                                        name=""
                                        onChange={handleSearch}
                                        placeholder="Find the title of the book"
                                    >
                                        {optionSelect.map((option, index) => (
                                            <option key={`${option.value}-${index}`} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Search Button */}
                            <button
                                className='bg-black text-white w-[96px] h-[40px] rounded-md'
                                onClick={handleSearchClick}
                            >
                                Search
                            </button>
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
                                    <div className={`text-[18px] underline ${isClassic ? 'font-bold text-black' : 'text-gray-400'}`}>Classic</div>
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
                    <div className='flex flex-col w-[90%]'>
                        <div className=''>
                            <div className='text-black text-[18px] italic'>
                                {`${isAll ? `Showing results for ${genreSelected} book(s)` : `Showing results for all ${genreSelected} book(s)`}`}
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
                                        />
                                    </Link>
                                ))}
                            </div>

                            {/* Pagination */}
                            < div className='flex flex-row justify-between items-center' >
                                <div className='text-black text-[18px]'>
                                    Results {(currentPage - 1) * itemPerPage + 1} - {Math.min(currentPage * itemPerPage, WholeBook.length)} of {WholeBook.length}
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