'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import { usePathname } from "next/navigation";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import Cards from "../../../components/cards";
import ModalBuy from "../../../components/modalBuy";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import "../../globals.css";
import Image from "next/image";
import ModalPayment from '@/components/modalPayment';
import { WholeBook } from "../../data/bookData";

export default function SelectedBook({ data }) {
    const [isModalBuyOpen, setIsModalBuyOpen] = useState(false);
    const [isModalPaymentOpen, setIsModalPaymentOpen] = useState(false);

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

    const router = usePathname();
    const id = router.replace('/books/', '');

    // Real API
    // const book = data.find((item) => {
    //     return item.id === parseInt(id);
    // });

    // const [mainImage, setMainImage] = useState(book.submission.coverUrl);


    const book = WholeBook.find((item) => item.id === id)
    if (!book) {
        console.log("Book Not Found");
    }

    const [mainImage, setMainImage] = useState(book.images[0]);

    const handleModalPaymentOpen = () => {
        setIsModalBuyOpen(false);
        setIsModalPaymentOpen(true);
    }

    const handleModalPaymentClose = () => {
        setIsModalPaymentOpen(false);
    }
    const handleModalBuyOpen = () => {
        setIsModalBuyOpen(true);
    }

    const handleModalBuyClose = () => {
        setIsModalBuyOpen(false);
    }

    const [sliderState, setSliderState] = useState({
        SmallImage: { isBeginning: true, isLast: false },
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
        <div className='flex flex-col min-h-screen bg-[#EFE8DA]'>
            <div className='relative flex flex-col'>
                {/* Navbar */}
                <Navbar />
                {/* Brown Box */}
                <div className='bg-[#847060] h-[282px] flex items-center px-16 mt-8'>
                    <div className='flex items-center space-x-4'>

                        {/* Main Image */}
                        <Image
                            src={mainImage}
                            alt="background"
                            className="h-full translate-y-32"
                            width={478}
                            height={478}
                        />

                        {/* Book's Main Info */}
                        <div className='flex flex-col'>
                            <div className='flex items-center mx-12'>

                                {/* Real API */}
                                {/* <div className='flex flex-col gap-2 text-[#F2EEE5] text-[18px]'>
                                    <div className='text-[48px] league-spartan-bold mb-2'>
                                        {book.submission.title}
                                    </div>
                                    <div className=''>
                                        Author: {book.submission.author}
                                    </div>
                                    <div className=''>
                                        Condition: {book.submission.condition}
                                    </div>
                                    <div className='flex flex-row gap-2'>
                                        <Image src="/icons/circle-red.svg" alt="Instagram Logo" width={12} height={12} />
                                        <div>
                                            1 in stock
                                        </div>
                                    </div>
                                    <div className='mt-1 text-[24px] '>
                                        {book.finalPrice}
                                    </div>
                                </div> */}

                                <div className='flex flex-col gap-2 text-[#F2EEE5] text-[18px]'>
                                    <div className='text-[48px] league-spartan-bold mb-2'>
                                        {book.bookTitle}
                                    </div>
                                    <div className=''>
                                        Author: {book.author}
                                    </div>
                                    <div className=''>
                                        Condition: {book.condition}
                                    </div>
                                    <div className='flex flex-row gap-2'>
                                        <Image src="/icons/circle-red.svg" alt="Instagram Logo" width={12} height={12} />
                                        <div>
                                            1 in stock
                                        </div>
                                    </div>
                                    <div className='mt-1 text-[24px] '>
                                        {book.price}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Review Section */}
                <div className='h-[184px] flex mt-12 px-16'>
                    <div className='w-[790px]' />
                    <div className='w-full'>
                        <div className='flex flex-col gap-2 text-black text-[18px]'>
                            <div className='text-[24px] font-semibold'>
                                Review From Seller
                            </div>
                            <div className='flex flex-row gap-2 mt-4'>
                                <Image src="/icons/star.svg" alt="Instagram Logo" width={24} height={24} />

                                <div>
                                    Goodreads Rating: {book.sellerReviewNum}/5
                                </div>
                            </div>
                            <div>
                                {book.sellerReviewText}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Images and Tags */}
                <div className='flex flex-row px-16 mt-4'>
                    {/* Small Image */}
                    <div className='relative flex w-[478px] justify-center'>
                        <div className='w-[300px]'>
                            <Swiper
                                modules={[Navigation]}
                                slidesPerView={3}
                                spaceBetween={10}
                                freeMode={true}
                                navigation={{
                                    nextEl: "#custom-next-6",
                                    prevEl: "#custom-prev-6",
                                }}
                                loop={false}
                                onSlideChange={handleSlideChange('SmallImage')}
                                className='swiper-container'
                            >
                                {/* Real API */}
                                {/* {book.submission.images.map((image, index) => ( */}
                                {book.images.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <button onClick={() => setMainImage(image)}>
                                            <img
                                                src={image}
                                                alt={`Small Image ${index + 1}`}
                                                className='object-cover rounded-md border-2 border-gray-300 hover:border-gray-500'

                                            />
                                        </button>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <button
                            className={`custom-button-prev-image ${sliderState.SmallImage.isBeginning ? "opacity-0 pointer-events-none" : ""}`}
                            id="custom-prev-6"
                            disabled={sliderState.SmallImage.isBeginning}
                        >
                            <Image src="/icons/chevron-left.svg" alt="arrow-right" width={40} height={40} />
                        </button>
                        <button
                            className={`custom-button-next-image ${sliderState.SmallImage.isLast ? "opacity-0 pointer-events-none" : ""}`}
                            id="custom-next-6"
                            disabled={sliderState.SmallImage.isLast}
                        >
                            <Image src="/icons/chevron-right.svg" alt="arrow-right" width={40} height={40} />
                        </button>
                    </div>

                    {/* Tags */}
                    <div className='flex flex-row items-start justify-center text-black text-[16px] text-medium gap-4 px-16 p-3'>

                        {/* Real API */}
                        {/* {book.submission.category.map((genre, index) => (
                            <div key={index} className='border border-[#B8B094] rounded-md px-2 py-1'>
                                {genre}
                            </div>
                        ))} */}

                        {/* <div className='border border-[#B8B094] rounded-md px-2 py-1'>
                            {book.submission.category}
                        </div> */}

                        {book.category.genre.map((genre, index) => (
                            <div key={index} className='border border-[#B8B094] rounded-md px-2 py-1'>
                                {genre}
                            </div>
                        ))}
                    </div>


                </div>

                {/* Button and Additional Info */}
                <div className='flex flex-row px-16 mt-4'>
                    {/* Button */}
                    <div className='w-[478]'>
                        <button
                            onClick={handleModalBuyOpen}
                            className="bg-[#2A230F] w-[478px] h-[44px] text-white py-3 px-6 rounded-md hover:bg-[#3A3118]">
                            Buy This Book
                        </button>
                    </div>

                    {/* Modal */}
                    {isModalBuyOpen && <ModalBuy onBuy={handleModalPaymentOpen} onClose={handleModalBuyClose} />}

                    {isModalPaymentOpen && <ModalPayment onClose={handleModalPaymentClose} />}

                    {/* Additional Info */}
                    <div className='h-[792px] w-full flex flex-row px-16'>
                        <div className='flex flex-col w-full'>
                            {/* Title */}
                            <div className='text-black text-[24px] font-semibold mb-8'>
                                Additional Information
                            </div>

                            {/* Info */}
                            <div>

                                {/* Date Posted */}
                                <div>
                                    <div className='-100 flex flex-row  text-black text-[18px]'>
                                        <div className='w-[184px] font-semibold'>
                                            Date Posted
                                        </div>
                                        <div>
                                            {book.postedDate}
                                        </div>
                                    </div>
                                    {/* Border */}
                                    <div className="border-t border-[#B8B094] text-[18px] mt-4 mb-6" />
                                </div>

                                {/* Seller Domicile */}
                                <div>
                                    <div className='-100 flex flex-row text-black text-[18px]'>
                                        <div className='w-[184px] font-semibold'>
                                            Seller Domicile
                                        </div>
                                        <div>
                                            {book.sellerDomicile}
                                        </div>
                                    </div>
                                    {/* Border */}
                                    <div className="border-t border-[#B8B094] text-[18px] mt-4 mb-6" />
                                </div>

                                {/* ISBN */}
                                <div>
                                    <div className='-100 flex flex-row  text-black text-[18px]'>
                                        <div className='w-[184px] font-semibold'>
                                            ISBN
                                        </div>
                                        <div>
                                            {book.id}
                                        </div>
                                    </div>
                                    {/* Border */}
                                    <div className="border-t border-[#B8B094] text-[18px] mt-4 mb-6" />
                                </div>

                                {/* Title */}
                                <div>
                                    <div className='-100 flex flex-row  text-black text-[18px]'>
                                        <div className='w-[184px] font-semibold'>
                                            Title
                                        </div>
                                        <div>
                                            {book.bookTitle}
                                        </div>
                                    </div>
                                    {/* Border */}
                                    <div className="border-t border-[#B8B094] text-[18px] mt-4 mb-6" />
                                </div>

                                {/* Author */}
                                <div>
                                    <div className='-100 flex flex-row  text-black text-[18px]'>
                                        <div className='w-[184px] font-semibold'>
                                            Author
                                        </div>
                                        <div>
                                            {book.author}
                                        </div>
                                    </div>
                                    {/* Border */}
                                    <div className="border-t border-[#B8B094] text-[18px] mt-4 mb-6" />
                                </div>

                                {/* Condition */}
                                <div>
                                    <div className='-100 flex flex-row  text-black text-[18px]'>
                                        <div className='w-[184px] font-semibold'>
                                            Condition
                                        </div>
                                        <div>
                                            {book.condition}
                                        </div>
                                    </div>
                                    {/* Border */}
                                    <div className="border-t border-[#B8B094] text-[18px] mt-4 mb-6" />
                                </div>

                                {/* Language */}
                                <div>
                                    <div className='-100 flex flex-row  text-black text-[18px]'>
                                        <div className='w-[184px] font-semibold'>
                                            Language
                                        </div>
                                        <div>
                                            {book.language}
                                        </div>
                                    </div>
                                    {/* Border */}
                                    <div className="border-t border-[#B8B094] text-[18px] mt-4 mb-6" />
                                </div>

                                {/* Binding */}
                                <div>
                                    <div className='-100 flex flex-row  text-black text-[18px]'>
                                        <div className='w-[184px] font-semibold'>
                                            Binding Type
                                        </div>
                                        <div>
                                            {book.bindingType}
                                        </div>
                                    </div>
                                    {/* Border */}
                                    <div className="border-t border-[#B8B094] text-[18px] mt-4 mb-6" />
                                </div>

                                {/* Publisher */}
                                <div>
                                    <div className='-100 flex flex-row  text-black text-[18px]'>
                                        <div className='w-[184px] font-semibold'>
                                            Publisher
                                        </div>
                                        <div>
                                            {book.publisher}
                                        </div>
                                    </div>
                                    {/* Border */}
                                    <div className="border-t border-[#B8B094] text-[18px] mt-4 mb-6" />
                                </div>

                                {/* Year Publish */}
                                <div>
                                    <div className='-100 flex flex-row  text-black text-[18px]'>
                                        <div className='w-[184px] font-semibold'>
                                            Year Published
                                        </div>
                                        <div>
                                            {book.yearPublished}
                                        </div>
                                    </div>
                                    {/* Border */}
                                    <div className="border-t border-[#B8B094] text-[18px] mt-4 mb-6" />
                                </div>

                                {/* Page Num */}
                                <div>
                                    <div className='-100 flex flex-row  text-black text-[18px]'>
                                        <div className='w-[184px] font-semibold'>
                                            Number of Pages
                                        </div>
                                        <div>
                                            {book.numberOfPage}
                                        </div>
                                    </div>
                                    {/* Border */}
                                    <div className="border-t border-[#B8B094] text-[18px] mt-4 mb-6" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Card: Fiction*/}
                <div className=' h-[718px] px-20 mt-40'>
                    {/* Title and View all */}
                    <div className='flex'>
                        <div className='justify-start w-full text-[#4A2c23] league-spartan-bold font-bold text-[48px]'>Fiction Book You Might Also Like</div>
                        <div className='flex underline items-center font-[18px] text-[#0F172A] underline-offset-4 justify-end w-1/2 pr-4'>
                            View all
                        </div>
                    </div>

                    {/* Cards */}
                    <div className='h-[570px] mt-12 flex w-full justify-center gap-24 text-black'>
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
                {/* Footer */}
                <Footer />
            </div>
        </div>

    )
}