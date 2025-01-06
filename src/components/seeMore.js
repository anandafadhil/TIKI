import React, { useState } from "react";

export default function SeeMore({ title }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const MAX_LENGTH = 50; // Adjust this to set the character limit

    const toggleExpanded = () => setIsExpanded(!isExpanded);

    return (
        <div className="flex flex-row text-black xs:text-[14px] lg:text-[18px]">
            <div className="w-full">
                {title.length > MAX_LENGTH && !isExpanded ? (
                    <>
                        {title.slice(0, MAX_LENGTH)}...
                        <button
                            onClick={toggleExpanded}
                            className="text-blue-500 hover:underline ml-1"
                        >
                            See More
                        </button>
                    </>
                ) : (
                    <>
                        {title}
                        {title.length > MAX_LENGTH && (
                            <button
                                onClick={toggleExpanded}
                                className="text-blue-500 hover:underline ml-1"
                            >
                                See Less
                            </button>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}