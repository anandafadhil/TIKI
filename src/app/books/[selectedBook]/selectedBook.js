'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import { usePathname } from "next/navigation";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import CardsFiction from "../../../components/cardsFiction";
import ModalBuy from "../../../components/modalBuy";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import "../../globals.css";
import Image from "next/image";
import ModalPayment from '@/components/modalPayment';
import SeeMore from '../../../components/seeMore'
export default function SelectedBook({ data, booksFiction }) {
    const [isModalBuyOpen, setIsModalBuyOpen] = useState(false);
    const [isModalPaymentOpen, setIsModalPaymentOpen] = useState(false);
    console.log("dat", data.submission.title);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    }
    const formattedDate = formatDate(data.book.createdAt);
    const formatPrice = data.book.finalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


    const [mainImage, setMainImage] = useState(data.submission.images[0]);

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
        Fiction: { isBeginning: true, isLast: false },
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

            {/* Normal */}
            <div className='relative xs:hidden lg:flex flex-col'>
                {/* Navbar */}
                <Navbar />
                {/* Brown Box */}
                <div className='bg-[#847060] h-[282px] flex items-center 2xl:px-16 lg:px-20 mt-8'>
                    <div className='flex items-center space-x-4'>

                        {/* Main Image */}
                        <img
                            src={mainImage}
                            alt="background"
                            className="lg:h-auto lg:w-auto 2xl:h-[478px] 2xl:w-[478px] translate-y-32 z-0"
                        />

                        {/* Book's Main Info */}
                        <div className='flex flex-col'>
                            <div className='flex items-center mx-12'>
                                <div className='flex flex-col gap-2 text-[#F2EEE5] text-[18px]'>
                                    <div className='text-[48px] league-spartan-bold mb-2'>
                                        {data.submission.title}
                                    </div>
                                    <div className=''>
                                        Author: {data.submission.author}
                                    </div>
                                    <div className=''>
                                        Condition: {data.submission.condition}
                                    </div>
                                    <div className='flex flex-row gap-2'>
                                        <Image src="/icons/circle-red.svg" alt="Instagram Logo" width={12} height={12} />
                                        <div>
                                            1 in stock
                                        </div>
                                    </div>
                                    <div className='mt-1 text-[24px] '>
                                        Rp {formatPrice}
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
                                    Goodreads Rating: {data.submission.rating}/5
                                </div>
                            </div>
                            <div className='text-[14px]'>
                                {data.submission.review}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Images and Tags */}
                <div className='flex flex-row px-16 mt-4'>
                    {/* Small Image */}
                    <div className='relative flex lg:w-[390px] 2xl:w-[478px] justify-center'>
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
                                {data.submission.images.map((image, index) => (
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
                    <div className='flex flex-row items-start justify-center text-black text-[16px] text-medium gap-4 lg:px-12 2xl:px-16 p-3'>
                        {data.submission.genre.map((genre, index) => (
                            <div key={index} className='border border-[#B8B094] rounded-md px-2 py-1'>
                                {genre.name}
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
                            className="bg-[#2A230F] lg:w-[390px] 2xl:w-[478px] h-[44px] text-white py-3 px-6 rounded-md hover:bg-[#3A3118]">
                            Buy This Book
                        </button>
                    </div>

                    {/* Modal */}
                    {isModalBuyOpen && <ModalBuy onBuy={handleModalPaymentOpen} onClose={handleModalBuyClose} />}

                    {isModalPaymentOpen && <ModalPayment onClose={handleModalPaymentClose} />}

                    {/* Additional Info */}
                    <div className='h-[820px] w-full flex flex-row lg:px-12 2xl:px-16'>
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
                                        <div className='w-[23%] font-semibold'>
                                            Date Posted
                                        </div>
                                        <div className='w-[77%] ml-4'>
                                            {formattedDate}
                                        </div>
                                    </div>
                                    {/* Border */}
                                    <div className="border-t border-[#B8B094] text-[18px] mt-4 mb-6" />
                                </div>

                                {/* Seller Domicile */}
                                <div>
                                    <div className='-100 flex flex-row text-black text-[18px]'>
                                        <div className='w-[23%] font-semibold'>
                                            Seller Domicile
                                        </div>
                                        <div className='w-[77%] ml-4'>
                                            {data.submission.user.domicile}
                                        </div>
                                    </div>
                                    {/* Border */}
                                    <div className="border-t border-[#B8B094] text-[18px] mt-4 mb-6" />
                                </div>

                                {/* ISBN */}
                                <div>
                                    <div className='-100 flex flex-row  text-black text-[18px]'>
                                        <div className='w-[23%] font-semibold'>
                                            ISBN
                                        </div>
                                        <div className='w-[77%] ml-4'>
                                            {data.submission.isbn}
                                        </div>
                                    </div>
                                    {/* Border */}
                                    <div className="border-t border-[#B8B094] text-[18px] mt-4 mb-6" />
                                </div>

                                {/* Title */}
                                <div>
                                    <div className='-100 flex flex-row  text-black text-[18px]'>
                                        <div className='w-[23%] font-semibold'>
                                            Title
                                        </div>
                                        <div className='w-[77%] ml-4'>
                                            {data.submission.title}
                                        </div>
                                    </div>
                                    {/* Border */}
                                    <div className="border-t border-[#B8B094] text-[18px] mt-4 mb-6" />
                                </div>

                                {/* Author */}
                                <div>
                                    <div className='-100 flex flex-row  text-black text-[18px]'>
                                        <div className='w-[23%] font-semibold'>
                                            Author
                                        </div>
                                        <div className='w-[77%] ml-4'>
                                            {data.submission.author}
                                        </div>
                                    </div>
                                    {/* Border */}
                                    <div className="border-t border-[#B8B094] text-[18px] mt-4 mb-6" />
                                </div>

                                {/* Condition */}
                                <div>
                                    <div className='flex flex-row  text-black text-[18px]'>
                                        <div className='w-[23%] font-semibold'>
                                            Condition
                                        </div>
                                        <div className='w-[77%] ml-4'>
                                            <SeeMore title={data.submission.condition} />
                                        </div>
                                    </div>
                                    {/* Border */}
                                    <div className="border-t border-[#B8B094] text-[18px] mt-4 mb-6" />
                                </div>

                                {/* Language */}
                                <div>
                                    <div className='flex flex-row  text-black text-[18px]'>
                                        <div className='w-[23%] font-semibold'>
                                            Language
                                        </div>
                                        <div className='w-[77%] ml-4'>
                                            {data.submission.language}
                                        </div>
                                    </div>
                                    {/* Border */}
                                    <div className="border-t border-[#B8B094] text-[18px] mt-4 mb-6" />
                                </div>

                                {/* Binding */}
                                <div>
                                    <div className='-100 flex flex-row  text-black text-[18px]'>
                                        <div className='w-[23%] font-semibold'>
                                            Binding Type
                                        </div>
                                        <div className='w-[77%] ml-4'>
                                            {data.submission.bindingType}
                                        </div>
                                    </div>
                                    {/* Border */}
                                    <div className="border-t border-[#B8B094] text-[18px] mt-4 mb-6" />
                                </div>

                                {/* Publisher */}
                                <div>
                                    <div className='-100 flex flex-row  text-black text-[18px]'>
                                        <div className='w-[23%] font-semibold'>
                                            Publisher
                                        </div>
                                        <div className='w-[77%] ml-4'>
                                            {data.submission.publisher}
                                        </div>
                                    </div>
                                    {/* Border */}
                                    <div className="border-t border-[#B8B094] text-[18px] mt-4 mb-6" />
                                </div>

                                {/* Year Publish */}
                                <div>
                                    <div className='-100 flex flex-row  text-black text-[18px]'>
                                        <div className='w-[23%] font-semibold'>
                                            Year Published
                                        </div>
                                        <div className='w-[77%] ml-4'>
                                            {data.submission.yearPublished}
                                        </div>
                                    </div>
                                    {/* Border */}
                                    <div className="border-t border-[#B8B094] text-[18px] mt-4 mb-6" />
                                </div>

                                {/* Page Num */}
                                <div>
                                    <div className='-100 flex flex-row  text-black text-[18px]'>
                                        <div className='w-[23%] font-semibold'>
                                            Number of Pages
                                        </div>
                                        <div className='w-[77%] ml-4'>
                                            {data.numberOfPage}
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
                <div className='text-black'>
                    <CardsFiction booksFiction={booksFiction} />

                </div>

                {/* Footer */}
                <Footer />
            </div>

            {/* Small */}
            <div className='relative xs:flex lg:hidden flex-col'>
                {/* Navbar */}
                <Navbar />
                {/* Brown Box */}
                <div className='bg-[#EFE8DA] w-full h-[642px] flex justify-center mt-8'>
                    <div className='text-center flex w-full'>

                        {/* Book's Main Info */}
                        <div className='flex flex-col bg-[#847060] w-full h-[300px]'>
                            <div className='flex items-center justify-center'>
                                <div className='flex flex-col gap-4 text-[#F2EEE5] text-[14px] py-4'>
                                    <div className='text-[40px] league-spartan-bold mb-2'>
                                        {data.submission.title}
                                    </div>
                                    <div className=''>
                                        Author: {data.submission.author}
                                    </div>
                                    <div className=''>
                                        Condition: {data.submission.condition}
                                    </div>
                                    <div className='flex flex-row justify-center gap-2'>
                                        <Image src="/icons/circle-red.svg" alt="Instagram Logo" width={12} height={12} />
                                        <div>
                                            1 in stock
                                        </div>
                                    </div>
                                    <div className='mt-1 text-[20px] font-semibold'>
                                        Rp {formatPrice}
                                    </div>
                                    {/* Main Image */}
                                    <img
                                        src={mainImage}
                                        alt="background"
                                        className="h-full translate-y-2 z-0 w-[271px] h-[400px]"
                                        width={271}
                                        height={400}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Images and Tags */}
                <div className='flex flex-row mt-4 mb-2 w-full justify-center'>
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
                                {data.submission.images.map((image, index) => (
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
                </div>

                {/* Button */}
                <div className='w-full justify-center flex'>
                    <button
                        onClick={handleModalBuyOpen}
                        className="bg-[#2A230F] w-[80%] h-[44px] text-white py-3 px-6 rounded-md hover:bg-[#3A3118]">
                        Buy This Book
                    </button>
                </div>

                {/* Review Section */}
                <div className='text-center flex mt-12 justify-center px-4'>
                    <div className='w-full'>
                        <div className='flex flex-col gap-2 text-black text-[18px]'>
                            <div className='text-[24px] font-semibold'>
                                Review From Seller
                            </div>
                            <div className='flex flex-row justify-center gap-2 mt-4'>
                                <Image src="/icons/star.svg" alt="Instagram Logo" width={24} height={24} />

                                <div>
                                    Goodreads Rating: {data.submission.rating}/5
                                </div>
                            </div>
                            <div>
                                {data.submission.review}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Images and Tags */}
                <div className='flex flex-row mt-4 w-full justify-center'>

                    {/* Tags */}
                    <div className='flex flex-row items-center justify-center text-black text-[16px] text-medium gap-4'>
                        {data.submission.genre.map((genre, index) => (
                            <div key={index} className='border border-[#B8B094] rounded-md px-2 py-1'>
                                {genre.name}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Info */}
                <div className='flex flex-row mt-16 text-left'>

                    {/* Modal */}
                    {isModalBuyOpen && <ModalBuy onBuy={handleModalPaymentOpen} onClose={handleModalBuyClose} />}

                    {isModalPaymentOpen && <ModalPayment onClose={handleModalPaymentClose} />}

                    {/* Additional Info */}
                    <div className='h-[860px] w-full flex flex-row px-4'>
                        <div className='flex flex-col w-full'>
                            {/* Title */}
                            <div className='text-black text-[24px] font-semibold mb-8'>
                                Additional Information
                            </div>

                            {/* Info */}
                            <div className='w-full'>

                                {/* Date Posted */}
                                <div className='w-full'>
                                    <div className='flex flex-row text-black text-[14px]'>
                                        <div className='text-left w-[20%] font-semibold'>
                                            Date Posted
                                        </div>
                                        <div className='w-[80%] ml-4'>
                                            {formattedDate}
                                        </div>
                                    </div>
                                    {/* Border */}
                                    <div className="border-t border-[#B8B094] text-[18px] mt-4 mb-6" />
                                </div>

                                {/* Seller Domicile */}
                                <div className='w-full'>
                                    <div className='flex flex-row text-black text-[14px]'>
                                        <div className='text-left w-[20%] font-semibold'>
                                            Seller Domicile
                                        </div>
                                        <div className='w-[80%] ml-4'>
                                            {data.submission.user.domicile}
                                        </div>
                                    </div>
                                    {/* Border */}
                                    <div className="border-t border-[#B8B094] text-[18px] mt-4 mb-6" />
                                </div>

                                {/* ISBN */}
                                <div className='w-full'>
                                    <div className='flex flex-row text-black text-[14px]'>
                                        <div className='text-left w-[20%] font-semibold'>
                                            ISBN
                                        </div>
                                        <div className='w-[80%] ml-4'>
                                            {data.submission.isbn}
                                        </div>
                                    </div>
                                    {/* Border */}
                                    <div className="border-t border-[#B8B094] text-[18px] mt-4 mb-6" />
                                </div>

                                {/* Title */}
                                <div className='w-full'>
                                    <div className='flex flex-row text-black text-[14px]'>
                                        <div className='text-left w-[20%] font-semibold'>
                                            Title
                                        </div>
                                        <div className='w-[80%] ml-4'>
                                            {data.submission.title}
                                        </div>
                                    </div>
                                    {/* Border */}
                                    <div className="border-t border-[#B8B094] text-[18px] mt-4 mb-6" />
                                </div>

                                {/* Author */}
                                <div className='w-full'>
                                    <div className='flex flex-row text-black text-[14px]'>
                                        <div className='text-left w-[20%] font-semibold'>
                                            Author
                                        </div>
                                        <div className='w-[80%] ml-4'>
                                            {data.submission.author}
                                        </div>
                                    </div>
                                    {/* Border */}
                                    <div className="border-t border-[#B8B094] text-[18px] mt-4 mb-6" />
                                </div>

                                {/* Condition */}
                                <div className='w-full'>
                                    <div className='flex flex-row text-black text-[14px]'>
                                        <div className='text-left w-[20%] font-semibold'>
                                            Condition
                                        </div>
                                        <div className='w-[80%] ml-4'>
                                            <SeeMore title={data.submission.condition} />
                                        </div>
                                    </div>
                                    {/* Border */}
                                    <div className="border-t border-[#B8B094] text-[18px] mt-4 mb-6" />
                                </div>

                                {/* Language */}
                                <div className='w-full'>
                                    <div className='flex flex-row text-black text-[14px]'>
                                        <div className='text-left w-[20%] font-semibold'>
                                            Language
                                        </div>
                                        <div className='w-[80%] ml-4'>
                                            {data.submission.language}
                                        </div>
                                    </div>
                                    {/* Border */}
                                    <div className="border-t border-[#B8B094] text-[18px] mt-4 mb-6" />
                                </div>

                                {/* Binding */}
                                <div className='w-full'>
                                    <div className='flex flex-row text-black text-[14px]'>
                                        <div className='text-left w-[20%] font-semibold'>
                                            Binding Type
                                        </div>
                                        <div className='w-[80%] ml-4'>
                                            {data.submission.bindingType}
                                        </div>
                                    </div>
                                    {/* Border */}
                                    <div className="border-t border-[#B8B094] text-[18px] mt-4 mb-6" />
                                </div>

                                {/* Publisher */}
                                <div className='w-full'>
                                    <div className='flex flex-row text-black text-[14px]'>
                                        <div className='text-left w-[20%] font-semibold'>
                                            Publisher
                                        </div>
                                        <div className='w-[80%] ml-4'>
                                            {data.submission.publisher}
                                        </div>
                                    </div>
                                    {/* Border */}
                                    <div className="border-t border-[#B8B094] text-[18px] mt-4 mb-6" />
                                </div>

                                {/* Year Publish */}
                                <div className='w-full'>
                                    <div className='flex flex-row text-black text-[14px]'>
                                        <div className='text-left w-[20%] font-semibold'>
                                            Year Published
                                        </div>
                                        <div className='w-[80%] ml-4'>
                                            {data.submission.yearPublished}
                                        </div>
                                    </div>
                                    {/* Border */}
                                    <div className="border-t border-[#B8B094] text-[18px] mt-4 mb-6" />
                                </div>

                                {/* Page Num */}
                                <div className='w-full'>
                                    <div className='flex flex-row text-black text-[14px]'>
                                        <div className='text-left w-[20%] font-semibold'>
                                            Number of Pages
                                        </div>
                                        <div className='w-[80%] ml-4'>
                                            {data.submission.numberOfPage}
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
                <CardsFiction booksFiction={booksFiction} />

                {/* Footer */}
                <Footer />
            </div>
        </div>

    )
}