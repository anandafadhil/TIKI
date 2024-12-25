"use client";

import React from "react";

export default function Pagination({ currPage, totPage, onPageChange }) {
    return (
        <>
            <div className="flex space-x-1">

                {/* Previous */}
                <button
                    className={`px-2 py-1 text-[36px]  rounded ${currPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-black"
                        }`}
                    onClick={() => currPage > 1 && onPageChange(currPage - 1)}
                    disabled={currPage === 1}
                >
                    &lt;
                </button>

                {/* Numbers */}
                {[...Array(totPage)].map((_, index) => (
                    <button
                        key={index + 1}
                        className={`px-3 py-1 text-[18px]] rounded ${currPage === index + 1
                                ? "font-bold"
                                : "text-[#5B5959] hover:bg-gray-100"
                            }`}
                        onClick={() => onPageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}

                {/* Next Button */}
                <button
                    className={`px-2 py-1 text-[36px] rounded ${currPage === totPage
                            ? "text-gray-400 cursor-not-allowed"
                            : "text-black"
                        }`}
                    onClick={() => currPage < totPage && onPageChange(currPage + 1)}
                    disabled={currPage === totPage}
                >
                    &gt;
                </button>
            </div>
        </>
    )
}