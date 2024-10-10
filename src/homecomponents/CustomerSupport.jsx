import React from 'react';
import customerImage from '../assets/customer-laddy.jpeg';


const CustomerSupport = () => {
    return (
        <div className="w-[70%] flex items-center justify-between p-10 bg-white ">
            {/* Left side - Help Center text and search bar */}
            <div className="flex flex-col space-y-6">
                <div>
                    <button className="bg-yellow-500 text-black font-semibold py-2 px-4 rounded">
                        HELP CENTER
                    </button>
                </div>
                <div className="text-3xl font-semibold text-gray-800">
                    How we can help you!
                </div>
                <div className="flex space-x-2 items-center">
                    <div className="relative w-full max-w-md">
                        <input
                            type="text"
                            placeholder="Enter your question or keyword"
                            className="w-full py-3 pl-10 pr-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg
                                className="h-5 w-5 text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 10a5 5 0 100-10 5 5 0 000 10zm2 10l6 6"
                                />
                            </svg>
                        </div>
                    </div>
                    <button className="bg-green-600 text-white font-semibold py-3 px-6 rounded">
                        SEARCH
                    </button>
                </div>
            </div>

            {/* Right side - Image */}
            <div className="hidden md:block">
                <img
                    src={customerImage}
                    alt="Support"
                    className="object-cover w-96 h-auto"
                />
            </div>
        </div>
    );
};

export default CustomerSupport;
