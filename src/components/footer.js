export default function Footer() {
    return (
        <>
            <div className="bg-[#847060] h-[452px] text-white mt-44">
                <div className="px-4 flex flex-row gap-24 justify-center items-center h-full">

                    {/* Logo and Contact Section */}
                    <div className="flex flex-col items-center mb-4">
                        <img src="/icons/tikii-logo-2.svg" alt="Tiki Logo" className="w-[180px] mt-8" />
                        <div className="flex space-x-4 mt-8 mb-10">
                            <a href="https://www.instagram.com/tikii_bookstore/" className="text-lg" target="_blank">
                                <img src="/icons/instagram.svg" alt="Tiki Logo" className="w-[32px]" />
                            </a>
                            <a href="tel:+123456789" className="text-lg">
                                <img src="/icons/phone.svg" alt="Tiki Logo" className="w-[32px]" />
                            </a>
                        </div>
                        <p className="text-sm mt-2 mb-20">2024 Tiki. All rights reserved.</p>
                    </div>

                    {/* About Tiki Section */}
                    <div className="items-center justify-center h-full flex flex-row">
                        <div className='mb-14'>
                            <div className="font-bold text-[24px]">About Tikii</div>
                            <div className="border-t border-[#fff] w-[275px] text-[18px] mt-6" />
                            <div href="#" className="text-sm hover:underline mt-8">
                                About Us
                            </div>
                            <div className="text-sm hover:underline mt-8">
                                <a href="/article/" >
                                    Our Mission
                                </a>
                            </div>
                        </div>


                    </div>

                    {/* Support Section */}
                    <div className="flex flex-row justify-center items-center h-full">
                        <div className='mb-14'>
                            <div className="font-bold text-[24px]">Support</div>
                            <div className="border-t border-[#fff] w-[275px] text-[18px] mt-6" />
                            <div className="text-sm hover:underline mt-8">
                                <a href="http://bit.ly/consigntikii" target="_blank">
                                    Sell Book
                                </a>
                            </div>
                            <div href="#" className="text-sm hover:underline mt-8">
                                Join Community
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}