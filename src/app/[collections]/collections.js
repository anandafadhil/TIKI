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

export default function Collections({ data, currentPage: initialPage, itemsPerPage, totalPages }) {
    const [currentPage, setCurrentPage] = useState(initialPage);
    const ruter = useRouter();
    const dropdownRef = useRef(null);
    const inputRef = useRef(null);
    const router = usePathname();
    const collectionsType = router.replace('/', '');
    const pathname = collectionsType
    const [genreSelected, setGenreSelected] = useState()
    const [isShowMore, setIsShowMore] = useState(false);
    const [isNew, setIsNew] = useState(false);
    const [isClassic, setIsClassic] = useState(false);
    const [isBudget, setIsBudget] = useState(false);
    const [isFiction, setIsFiction] = useState(false);
    const [isNonFiction, setIsNonFiction] = useState(false);
    const [isAll, setIsAll] = useState(false);
    const [isOther, setIsOther] = useState(false);
    const [isOtherNon, setIsOtherNon] = useState(false);
    // Pagination
    const itemPerPage = itemsPerPage;
    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;


    const handlePageChange = (newPage) => {
        setCurrentPage(newPage); // Update the current page
    };

    const isNon = collectionsType.includes("-non");
    const genreNon = collectionsType.replace('-non', '')
    const formatText = (text) => {
        const words = text.split('-').map(word => {
            return `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`;
        });

        let result;
        if (words.length > 2 && words[1] != 'And') {
            result = `${words.slice(0, -1).join(', ')}, and ${words[words.length - 1]}`;
        } else if (words.length === 3) {
            result = `${words[0]} and ${words[2]}`;
        } else if (words.length === 2) {
            result = `${words[0]}-${words[1]}`
        }
        else {
            result = `${text.charAt(0).toUpperCase()}${text.slice(1)}`
        }
        return result;
    };

    useEffect(() => {
        if (collectionsType === 'budget') {
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
        } else if (collectionsType === 'fiction') {
            setGenreSelected('Fiction');
            setIsFiction(true);
        } else if (isNon) {
            setGenreSelected(formatText(genreNon))
            setIsOtherNon(true);
        } else {
            setGenreSelected(`${collectionsType.charAt(0).toUpperCase()}${collectionsType.slice(1)}`);
            setIsOther(true);
        }

    }, [collectionsType]);

    // New Book Function
    const days = 10
    const top = 10
    const latestBooks = data
        .filter((book) => {
            const bookDate = new Date(book.postedDate);
            const currentDate = new Date();
            return (currentDate - bookDate) <= days * 24 * 60 * 60 * 1000;
        })
        .sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate))
        .slice(0, top)

    const otherGenres = data;
    if (!otherGenres) {
        return console.log("Book Not Found");
    }

    // Other Genre with Non Function
    const otherGenresNon = data;
    if (!otherGenresNon) {
        return console.log("Book Not Found");
    }

    // Budget Function
    const budgetBooks = data.filter((item) => {
        return item.price < 50000;
    });

    if (!budgetBooks) {
        return console.log("Book Not Found");
    }

    // Fiction Function
    const fictionBooks = data.filter((item) => item.category.name === genreSelected);
    if (!fictionBooks) {
        return console.log("Book Not Found");
    }

    // Non-Fiction Function
    const nonFictionBooks = data.filter((item) => item.category.name === genreSelected);
    if (!nonFictionBooks) {
        return console.log("Book Not Found");
    }

    // All Books Function
    const allBooks = data

    if (!allBooks) {
        return console.log("Book Not Found");
    }

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
                            : isOther && otherGenres.length > 0
                                ? otherGenres
                                : isOtherNon && otherGenresNon.length > 0
                                    ? otherGenresNon
                                    : [];

    const paginatedData = mapping.slice(startIndex, endIndex);
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
            ruter.push(`/search?query=${inputValue}`);

            setTimeout(() => {
                window.location.reload();
            }, 1000);
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

    // Search Function
    const [selectedBooks, setSelectedBooks] = useState(null);

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

    const alwaysVisibleGenresNon = [
        { name: 'Art', path: '/art-non/' },
        { name: 'Biography', path: '/biography-non/' },
        { name: 'Business, Finance, & Economics', path: '/business-finance-economics-non/' },
        { name: 'Culinary', path: '/culinary-non/' },
        { name: 'Education', path: '/education-non/' },
        { name: 'Essay', path: '/essay-non/' },
    ];

    const additionalGenresNon = [
        { name: 'Health & Welness', path: '/health-and-wellness-non/' },
        { name: 'History', path: '/history-non/' },
        { name: 'Parenting & Family', path: '/parenting-and-family-non/' },
        { name: 'Philosophy', path: '/philosophy-non/' },
        { name: 'Religion & Spirituality', path: '/religion-and-spirituality-non/' },
        { name: 'Science', path: '/science-non/' },
        { name: 'Self-Help', path: '/self-help-non/' },
        { name: 'Travel', path: '/travel-non/' },
    ];


    return (
        <div className='flex flex-row min-h-screen bg-[#EFE8DA]'>
            <div className='w-full'>

                {/* Navbar */}
                <Navbar />

                {/* Heading Text */}
                <div className='bg-[#EFE8DA] items-center justify-center flex'>
                    <div className='w-full mx-16 mt-16 mb-10'>
                        {isAll ? (
                            <div className=' w-full league-spartan-bold text-[#4A2C23] text-[48px]'>
                                Explore All Genres
                            </div>

                        ) : (
                            <div className=' w-full league-spartan-bold text-[#4A2C23] text-[48px]'>
                                {`${genreSelected} Books`}
                            </div>
                        )}

                        <div className=' w-full text-[18px] mt-2 text-black'>
                            {isFiction ? (
                                <>
                                    Step into worlds where imagination knows no bounds, and every
                                    page invites you to dream, wonder, and explore. Our Fiction Collection
                                    is a treasure trove of gripping tales, unforgettable characters, and
                                    boundless creativity. Whether you crave heart-racing adventures,
                                    soul-stirring dramas, or magical realms beyond your wildest dreams,
                                    we’ve got the stories that will keep you turning pages late into the night.
                                </>
                            ) : isNonFiction ? (
                                <>
                                    Dive into a world of knowledge and inspiration with our curated collection
                                    of preloved non-fiction books. From insightful biographies to powerful
                                    self-help guides and groundbreaking business strategies, these books are
                                    packed with wisdom at a fraction of the price. Shop now and turn every page
                                    into a step toward growth!
                                </>
                            ) : null}
                        </div>
                    </div>
                </div>

                {/* Border */}
                <div className='flex justify-center items-center'>
                    <div className="border-t border-[#B8B094] text-[18px] w-[93%]" />
                </div>

                {/* Search */}
                <div className='h-[152px] bg-[#EFE8DA]'>
                    {/* Search and Logo */}
                    <div className="items-center justify-center flex flex-row h-full gap-4">

                        {/* Search Bar and Dropdown */}
                        <div>
                            <div className=" bg-[#F2EEE5] w-[300px] lg:w-[825px] h-[40px] flex items-center rounded-md outline outline-1 outline-[#B8B094] ">
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
                                    <div className="bg-[#F2EEE5] text-gray-400 h-[50px] items-center flex justify-center absolute top-[430px] border border-gray-300 shadow-lg rounded-md w-[300px] lg:w-[825px] max-h-[200px] overflow-auto">
                                        Type at least 3 characters to search
                                    </div>
                                )}

                                {/* Dropdown Ttem */}
                                {showDrop && (
                                    <div ref={dropdownRef} className="z-30 bg-[#F2EEE5] ml-10 flex flex-col absolute top-[430px] border border-gray-300 shadow-lg rounded-md w-[300px] lg:w-[790px] max-h-[300px] overflow-auto">
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
                            {isAll ? (
                                [
                                    ...alwaysVisibleGenres,
                                    ...alwaysVisibleGenresNon
                                ].map((genre) => (
                                    <Link key={genre.path} href={genre.path}>
                                        <div
                                            className={`text-[18px] underline ${pathname === genre.name.toLowerCase() ? 'font-bold text-black' : 'text-gray-400'
                                                }`}
                                        >
                                            {genre.name}
                                        </div>
                                    </Link>
                                ))
                            ) : !isNonFiction && !isNon ? (
                                [
                                    ...alwaysVisibleGenres.filter(genre => pathname === genre.name.toLowerCase()),
                                    ...additionalGenres.filter(genre => pathname === genre.name.toLowerCase()),
                                    ...alwaysVisibleGenres.filter(genre => pathname !== genre.name.toLowerCase()),
                                ].map((genre) => (
                                    <Link key={genre.path} href={genre.path}>
                                        <div
                                            className={`text-[18px] underline ${pathname === genre.name.toLowerCase() ? 'font-bold text-black' : 'text-gray-400'
                                                }`}
                                        >
                                            {genre.name}
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                [
                                    ...alwaysVisibleGenresNon.filter(genre => pathname === genre.name.toLowerCase()),
                                    ...additionalGenresNon.filter(genre => pathname === genre.name.toLowerCase()),
                                    ...alwaysVisibleGenresNon.filter(genre => pathname !== genre.name.toLowerCase()),
                                ].map((genre) => (
                                    <Link key={genre.path} href={genre.path}>
                                        <div
                                            className={`text-[18px] underline ${pathname === genre.name.toLowerCase() ? 'font-bold text-black' : 'text-gray-400'
                                                }`}
                                        >
                                            {genre.name}
                                        </div>
                                    </Link>
                                ))
                            )}

                            {/* Additional Genres */}
                            {isShowMore && (
                                <div className="flex flex-col gap-2">
                                    {(isAll
                                        ? [...additionalGenres, ...additionalGenresNon]
                                        : isNonFiction && isNon
                                            ? additionalGenresNon
                                            : additionalGenres
                                    )
                                        .filter(genre => pathname !== genre.name.toLowerCase()) // Exclude the current genre
                                        .map((genre) => (
                                            <Link key={genre.path} href={genre.path}>
                                                <div
                                                    className={`text-[18px] underline ${pathname === genre.name.toLowerCase() ? 'font-bold text-black' : 'text-gray-400'
                                                        }`}
                                                >
                                                    {genre.name}
                                                </div>
                                            </Link>
                                        ))}
                                </div>
                            )}

                            {/* Show More/Less */}
                            {!isShowMore ? (
                                <div>
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
                            ) : (
                                <div>
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
                                            bookPostedDate={book.postedDate}
                                        />
                                    </Link>
                                ))}
                            </div>

                            {/* Pagination */}
                            < div className='flex flex-row justify-between items-center' >
                                <div className='text-black text-[18px]'>
                                    Results {(currentPage - 1) * itemPerPage + 1} - {Math.min(currentPage * itemPerPage, mapping.length)} of {mapping.length}
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