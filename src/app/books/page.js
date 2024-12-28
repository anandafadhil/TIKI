'use client';
import * as React from 'react';
import { useState } from 'react';
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Cards from "../../components/cards";
import ModalBuy from "../../components/modalBuy";
import "../globals.css";
import Image from "next/image";
import ModalPayment from '@/components/modalPayment';

export default function Books() {
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

    return (
        <div className='flex flex-row min-h-screen bg-[#EFE8DA]'>
            <div className='w-full'>

                {/* Navbar */}
                <Navbar />

                {/* Header */}
                <div className='mt-4 relative'>

                    {/* Container */}
                    <div>

                        {/* Image */}
                        <div className='z-10 absolute left-0 mt-8 mx-16'>
                            <Image
                                src="/images/book_photo_1.png"
                                alt="background"
                                className="w-[304px] h-full"
                                width={304}
                                height={304}
                            />
                        </div>

                        {/* Brown Box */}
                        <div className='h-[282px] bg-[#847060] relative z-0 flex flex-row'>
                            <div className='w-[342px]' />
                            <div className='flex items-center mx-16'>
                                <div className='flex flex-col gap-2 text-[#F2EEE5] text-[18px]'>
                                    <div className='text-[48px] league-spartan-bold mb-2'>
                                        The Song of Achilles
                                    </div>
                                    <div className=''>
                                        Author: Madeline Miller
                                    </div>
                                    <div className=''>
                                        Condition: Good
                                    </div>
                                    <div className=''>
                                        1 in stock
                                    </div>
                                    <div className='mt-1 text-[24px] '>
                                        Rp 120.000
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* About */}
                        <div className='h-[262px] relative z-0 flex flex-row mx-16'>
                            <div className='w-[342px]' />
                            <div className='flex items-center w-[1380px]'>
                                <div className='flex flex-col gap-2 text-black text-[18px]'>
                                    <div className='text-[24px] font-semibold mb-4'>
                                        About The Song of Achilles
                                    </div>
                                    <div>
                                        Achilles, the best of all the Greeks, son of the cruel
                                        sea goddess Thetis and the legendary king Peleus, is
                                        strong, swift, and beautiful, irresistible to all who
                                        meet him. Patroclus is an awkward young prince, exiled
                                        from his homeland after an act of shocking violence.
                                        Brought together by chance, they forge an inseparable
                                        bond, despite risking the gods wrath.
                                    </div>
                                    <div>
                                        They are trained by the centaur Chiron in the arts of war
                                        and medicine, but when word comes that Helen of Sparta has
                                        been kidnapped, all the heroes of Greece are called upon
                                        to lay siege to Troy in her name. Seduced by the promise
                                        of a glorious destiny, Achilles joins their cause, and
                                        torn between love and fear for his friend, Patroclus
                                        follows. Little do they know that the cruel Fates will
                                        test them both as never before and demand a terrible
                                        sacrifice.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Button and Tags */}
                        <div className='h-[76px] flex flex-row items-center mx-16'>

                            {/* Button */}
                            <div className='w-[342px]'>
                                <button
                                    onClick={handleModalBuyOpen}
                                    className="bg-[#2A230F] w-[304px] h-[44px] text-white py-3 px-6 rounded-md hover:bg-[#3A3118]">
                                    Buy This Book
                                </button>
                            </div>

                            {/* Modal */}
                            {isModalBuyOpen && <ModalBuy onBuy={handleModalPaymentOpen} onClose={handleModalBuyClose} />}

                            {isModalPaymentOpen && <ModalPayment onClose={handleModalPaymentClose} />}

                            {/* Tags */}
                            <div className='flex flex-row items-center justify-center text-black text-[16px] text-medium gap-4'>
                                <div className='border border-[#B8B094] rounded-md px-2 py-1'>
                                    Fantasy
                                </div>
                                <div className='border border-[#B8B094] rounded-md px-2 py-1'>
                                    Romance
                                </div>
                                <div className='border border-[#B8B094] rounded-md px-2 py-1'>
                                    Fiction
                                </div>
                                <div className='border border-[#B8B094] rounded-md px-2 py-1'>
                                    Drama
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Additional Information */}
                <div className='-200 h-[792px] mt-16 flex flex-row mx-16'>
                    <div className='w-[342px]' />

                    <div className='-200 flex flex-col w-[1380px]'>
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
                                        9 December 2024
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
                                        Yogyakarta
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
                                        1538742578
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
                                        The Song of Achilles
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
                                        Madeline Miller
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
                                        Good
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
                                        English
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
                                        Paperback
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
                                        Grand Central Publishing
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
                                        23 August 2023
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
                                        336
                                    </div>
                                </div>
                                {/* Border */}
                                <div className="border-t border-[#B8B094] text-[18px] mt-4 mb-6" />
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
        </div >
    )
}