"use client";

export default function Navbar() {
    return (
        <>
            <div className="navbar h-[60px] bg-[#F2EEE5] flex justify-center items-center drop-shadow-md rounded-b-lg">
                <div className="">
                    {/* Dropdown System */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        </div>
                    </div>
                    {/* Horizontal Menu */}
                    <div className="gap-20 justify-center text-[16px] h-full w-[1430px] menu menu-horizontal">
                        <li><a className="poppins-bold underline underline-offset-2">Home</a></li>
                        <li><a>New Arrivals</a></li>
                        <li>
                            <details>
                                <summary>Fiction</summary>
                                <div className="p-4 bg-[#fff] border outline outline-1 outline-gray-300 w-64 absolute left-1/2 transform -translate-x-1/2 mt-4">
                                    <p className="ml-6 text-sm font-bold mb-2">Fiction by Genre</p>

                                    <ul className="justify-start text-sm text-gray-500 
                                grid grid-cols-2 gap-2 mt-2 right-4 w-full">
                                        <li><a>Fantasy</a></li>
                                        <li><a>Horror</a></li>
                                        <li><a>Romance</a></li>
                                        <li><a>Drama</a></li>
                                        <li><a>Comedy</a></li>
                                        <li><a>Contemporary</a></li>
                                        <li><a>Thriller</a></li>
                                        <li><a>Mystery</a></li>
                                        <li><a>Action</a></li>
                                        <li><a>Sci-fi</a></li>
                                        <li><a>Classic</a></li>
                                        <li><a>Family</a></li>
                                    </ul>
                                </div>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Non-Fiction</summary>
                                <ul className="p-2 bg-[#fff]">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Sell Your Book</a></li>
                        <li><a>Join Community</a></li>
                        <li><a>Donate to Charity</a></li>
                    </div>

                    {/* <ul className="bg-blue-500 menu menu-horizontal gap-7 px-1 text-[16px] h-full justify-center">
                        <li><a className="poppins-bold underline underline-offset-2">Home</a></li>
                        <li><a>New Arrivals</a></li>
                        <li>
                            <details>
                                <summary>Fiction</summary>
                                <div className="p-4 bg-[#fff] border outline outline-1 outline-gray-300 w-64 absolute left-1/2 transform -translate-x-1/2 mt-4">
                                    <p className="ml-6 text-sm font-bold mb-2">Fiction by Genre</p>

                                    <ul className="justify-start text-sm text-gray-500 
                                grid grid-cols-2 gap-2 mt-2 right-4 w-full">
                                        <li><a>Fantasy</a></li>
                                        <li><a>Horror</a></li>
                                        <li><a>Romance</a></li>
                                        <li><a>Drama</a></li>
                                        <li><a>Comedy</a></li>
                                        <li><a>Contemporary</a></li>
                                        <li><a>Thriller</a></li>
                                        <li><a>Mystery</a></li>
                                        <li><a>Action</a></li>
                                        <li><a>Sci-fi</a></li>
                                        <li><a>Classic</a></li>
                                        <li><a>Family</a></li>
                                    </ul>
                                </div>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Non-Fiction</summary>
                                <ul className="p-2 bg-[#fff]">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Sell Your Book</a></li>
                        <li><a>Join Community</a></li>
                    </ul> */}
                </div>
                <div className="navbar-center hidden lg:flex">

                </div>
            </div>
        </>
    )
}