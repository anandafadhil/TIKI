"use client";
import Image from "next/image";

export default function ModalBuy({ onBuy, onClose }) {
    return (
        <>
            <div className="relative z-10 " aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500/25 transition-opacity" aria-hidden="true"></div>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-[#F2EEE5] text-left shadow-xl transition-all sm:my-8 ">

                            {/* Modal Body */}
                            <div className="bg-[#F2EEE5] w-[944px]">
                                <div className="bg-[#F2EEE5]">

                                    {/* <div className="bg-[#fff]"> */}
                                    {/* Close Button */}
                                    <div className='flex justify-end py-4 px-10'>
                                        <button
                                            onClick={onClose}
                                            className="text-black hover:text-gray-400 text-[32px]"
                                        >
                                            ×
                                        </button>
                                    </div>

                                    {/* Border */}
                                    <div className="border-t border-[#B8B094] text-[18px]" />

                                    {/* Selling Walktrough */}
                                    <div className="text-center justify-center items-center flex">
                                        <figure className="h-[877px] w-[877px]">
                                            <Image
                                                src="/modals/buy-walktrough.jpg"
                                                alt="buy-walktrough"
                                                className="object-cover w-full h-full"
                                                width={877}
                                                height={877}
                                            />
                                        </figure>
                                    </div>
                                </div>
                            </div>

                            {/* Continue Button */}
                            <div className="flex justify-center bg-[#F2EEE5] mt-12 mb-12">
                                <button
                                    type="button"
                                    onClick={onBuy}
                                    className="bg-[#2A230F] w-[178px] h-[44px] text-white py-3 px-6 rounded-md hover:bg-[#3A3118]">
                                    Continue to Buy
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}