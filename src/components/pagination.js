"use client";

import React from "react";

export default function Pagination({ currPage, totPage, onPageChange }) {
    const renderPageNumbers = () => {
        if (totPage <= 6) {
            // If total pages are 6 or fewer, show all page numbers.
            return [...Array(totPage)].map((_, index) => (
                <button
                    key={index + 1}
                    className={`px-3 py-1 text-[18px] rounded ${currPage === index + 1
                        ? "font-bold"
                        : "text-[#5B5959] hover:bg-gray-100"
                        }`}
                    onClick={() => onPageChange(index + 1)}
                >
                    {index + 1}
                </button>
            ));
        }

        const pages = [];
        if (currPage <= 4) {
            // Show the first 6 pages if the current page is 4 or less.
            for (let i = 1; i <= 6; i++) {
                pages.push(
                    <button
                        key={i}
                        className={`px-3 py-1 text-[18px] rounded ${currPage === i
                            ? "font-bold"
                            : "text-[#5B5959] hover:bg-gray-100"
                            }`}
                        onClick={() => onPageChange(i)}
                    >
                        {i}
                    </button>
                );
            }
        } else if (currPage > totPage - 4) {
            // Show the last 6 pages if the current page is close to the last page.
            for (let i = totPage - 5; i <= totPage; i++) {
                pages.push(
                    <button
                        key={i}
                        className={`px-3 py-1 text-[18px] rounded ${currPage === i
                            ? "font-bold"
                            : "text-[#5B5959] hover:bg-gray-100"
                            }`}
                        onClick={() => onPageChange(i)}
                    >
                        {i}
                    </button>
                );
            }
        } else {
            // Show 3 pages before and 2 pages after the current page.
            for (let i = currPage - 2; i <= currPage + 3; i++) {
                pages.push(
                    <button
                        key={i}
                        className={`px-3 py-1 text-[18px] rounded ${currPage === i
                            ? "font-bold"
                            : "text-[#5B5959] hover:bg-gray-100"
                            }`}
                        onClick={() => onPageChange(i)}
                    >
                        {i}
                    </button>
                );
            }
        }
        return pages;
    };

    return (
        <div className="flex xs:space-x-2 lg:space-x-1">
            {/* Previous Button */}
            <button
                className={`px-2 py-1 text-[36px] rounded ${currPage === 1
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-black"
                    }`}
                onClick={() => currPage > 1 && onPageChange(currPage - 1)}
                disabled={currPage === 1}
            >
                &lt;
            </button>

            {/* Page Numbers */}
            {renderPageNumbers()}

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
    );
}
