"use client";
import Image from "next/image";

export default function ModalPayment({ onClose }) {
    return (
        <>
            <div className="relative z-10 " aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500/25 transition-opacity" aria-hidden="true"></div>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full xs:items-center lg:items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative xs:w-[95%] lg:w-[50%] transform overflow-hidden rounded-lg bg-[#F2EEE5] text-left shadow-xl transition-all sm:my-8 ">

                            {/* Modal Body */}
                            <div className="bg-[#F2EEE5] px-4">
                                <div className="bg-[#F2EEE5]">

                                    {/* Close Button */}
                                    <div className='flex justify-end xs:py-0 lg:py-4 xs:px-0 lg:px-10'>
                                        <button
                                            onClick={onClose}
                                            className="text-black hover:text-gray-400 text-[32px]"
                                        >
                                            ×
                                        </button>
                                    </div>

                                    {/* Border */}
                                    <div className="border-t border-[#B8B094] text-[18px]" />

                                </div>

                                {/* Payment Info */}
                                <div className="h-[340px] flex items-center justify-center">
                                    <div>
                                        <div className="text-black font-semibold xs:text-[18px] lg:text-[24px] mb-12">
                                            Where would you like to buy?
                                        </div>
                                        <div className="xs:text-[14px] lg:text-[18px] text-black flex flex-col justify-center items-center gap-12">
                                            <div className="xs:w-[50%] lg:w-[135px] flex flex-row border border-black rounded-md gap-2 p-1 items-center justify-center font-medium">
                                                <img src="/icons/shopping-bag.svg" alt="Shopping Bag" className="w-[24px] h-[24px]" />
                                                <a href="https://shopee.co.id/tikii_consign" target="_blank">Shopee</a>
                                            </div>
                                            <div className="xs:w-[60%] lg:w-[195px] flex flex-row border border-black rounded-md gap-2 p-1 items-center justify-center font-medium">
                                                <img src="/icons/instagram-2.svg" alt="Instagram" className="w-[24px] h-[24px]" />
                                                <a href="https://www.instagram.com/tikii_bookstore/" target="_blank">DM Instagram</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}