import customerImage from '../assets/customer-laddy.jpeg';
import { useNavigate } from "react-router-dom";

const CustomerSupport = () => {
    const navigate = useNavigate();
    return (
        <div>
            {/* Help Center section */}
            <div className="w-[70%] flex items-center justify-between p-10 bg-white m-auto  h-[332px]">
                {/* Left side - Help Center text and search bar */}
                <div className="flex flex-col space-y-6">
                    <div>
                        <button className="bg-yellow-500 text-black font-semibold py-2 px-4 rounded">
                            HELP CENTER
                        </button>
                    </div>
                    <div className="text-[32px] font-semibold text-black-600">
                        How we can help you!
                    </div>
                    <div className="flex space-x-2 items-center">
                        <div className="flex gap-2 w-full max-w-md">
                            <div className="relative flex-grow">
                                <input
                                    type="text"
                                    placeholder="Enter your question or keyword"
                                    className="w-full py-3 pl-10 pr-3 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
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
//                             <button className="bg-green-600 text-white font-semibold py-3 px-6">SEARCH</button>
                            <button onClick={() => navigate('/not-found')} className="bg-[#0B5D51] text-white font-semibold py-3 px-6">SEARCH</button>
                        </div>


                        {/* <button className="bg-green-600 text-white font-semibold py-2 px-6">SEARCH</button> */}
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

            {/* Assistance section */}
            <div className="text-center py-16 h-[408px] ">
                <h2 className="text-[32px] font-semibold mb-8">What can we assist you with today?</h2>
                <div className="flex items-center justify-center ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Assistance options */}
                        <button
                            className="border-2 h-[80px] text-[16px] w-[312px] py-4 px-6 rounded-md text-black font-semibold flex items-center justify-start"
                            style={{ borderColor: '#0B5D51', paddingLeft: '10%' }}
                        >
                            <span className="mr-2">📦</span> Track Order
                        </button>
                        <button
                            className="border-2 h-[80px] text-[16px] w-[312px] py-4 px-6 rounded-md text-black font-semibold flex items-center justify-start"
                            style={{ borderColor: '#0B5D51', paddingLeft: '10%' }}
                        >
                            <span className="mr-2">🔐</span> Reset Password
                        </button>
                        <button
                            className="border-2 h-[80px] text-[16px] w-[312px] py-4 px-6 rounded-md text-black font-semibold flex items-center justify-start"
                            style={{ borderColor: '#0B5D51', paddingLeft: '10%' }}
                        >
                            <span className="mr-2">💳</span> Payment Option
                        </button>
                        <button
                            className="border-2 h-[80px] text-[16px] w-[312px] py-4 px-6 rounded-md text-black font-semibold flex items-center justify-start"
                            style={{ borderColor: '#0B5D51', paddingLeft: '10%' }}
                        >
                            <span className="mr-2">👤</span> User & Account
                        </button>
                        <button
                            className="border-2 h-[80px] text-[16px] w-[312px] py-4 px-6 rounded-md text-black font-semibold flex items-center justify-start"
                            style={{ borderColor: '#0B5D51', paddingLeft: '10%' }}
                        >
                            <span className="mr-2">📝</span> Wishlist & Compare
                        </button>
                        <button
                            className="border-2 h-[80px] text-[16px] w-[312px] py-4 px-6 rounded-md text-black font-semibold flex items-center justify-start"
                            style={{ borderColor: '#0B5D51', paddingLeft: '10%' }}
                        >
                            <span className="mr-2">🚚</span> Shipping & Billing
                        </button>
                        <button
                            className="border-2 h-[80px] text-[16px] w-[312px] py-4 px-6 rounded-md text-black font-semibold flex items-center justify-start"
                            style={{ borderColor: '#0B5D51', paddingLeft: '10%' }}
                        >
                            <span className="mr-2">🛒</span> Shopping Cart & Wallet
                        </button>
                        <button
                            className="border-2 h-[80px] text-[16px] w-[312px] py-4 px-6 rounded-md text-black font-semibold flex items-center justify-start"
                            style={{ borderColor: '#0B5D51', paddingLeft: '10%' }}
                        >
                            <span className="mr-2">🛍️</span> Sell on Clicon
                        </button>
                    </div>
                </div>

            </div>
            <div className="w-[70%] m-auto py-10">
                {/* Popular Topics Title */}
                <h2 className="text-center text-[24px] font-semibold mb-6">Popular Topics</h2>

                {/* Popular Topics Links */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    {/* Column 1 */}
                    <ul className="space-y-2 w-[424px]">
                        <li>
                            <a
                                href="#"
                                className="text-black hover:text-[#0B5D51] transition-colors duration-200 text-[16px]"
                            >
                                • How do I return my item?
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-black hover:text-[#0B5D51] transition-colors duration-200 text-[16px]"
                            >
                                • What is Clicons Returns Policy?
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-black hover:text-[#0B5D51] transition-colors duration-200 text-[16px]"
                            >
                                • How long is the refund process?
                            </a>
                        </li>
                    </ul>

                    {/* Column 2 */}
                    <ul className="space-y-2 w-[424px]">
                        <li>
                            <a
                                href="#"
                                className="text-black hover:text-[#0B5D51] transition-colors duration-200 text-[16px]"
                            >
                                • What are the 'Delivery Timelines'?
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-black hover:text-[#0B5D51] transition-colors duration-200 text-[16px]"
                            >
                                • What is 'Discover Your Daraz Campaign 2022'?
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-black hover:text-[#0B5D51] transition-colors duration-200 text-[16px]"
                            >
                                • What is the Voucher & Gift Offer in this Campaign?
                            </a>
                        </li>
                    </ul>

                    {/* Column 3 */}
                    <ul className="space-y-2 w-[424px]">
                        <li>
                            <a
                                href="#"
                                className="text-black hover:text-[#0B5D51] transition-colors duration-200 text-[16px]"
                            >
                                • How to cancel Clicon Order?
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-black hover:text-[#0B5D51] transition-colors duration-200 text-[16px]"
                            >
                                • Ask the Digital and Device Community
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-black hover:text-[#0B5D51] transition-colors duration-200 text-[16px]"
                            >
                                • How to change my shop name?
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="w-full py-10 bg-gray-100">
                <div className="text-center mb-8">
                    <button className="bg-blue-500 text-white font-semibold py-2 px-4 mb-4 rounded">CONTACT US</button>
                    <h2 className="text-[32px] font-semibold">Don't find your answer. <br /> Contact with us</h2>
                </div>
                <div className="flex justify-center space-x-8">
                    {/* Call us now */}
                    <div className="border border-gray-300 rounded-md p-6 w-[320px]">
                        <h3 className="text-lg font-semibold mb-2">Call us now</h3>
                        <p className="text-sm mb-4">We are available online from 9:00 AM to 5:00 PM (GMT+5:45). Talk with us now</p>
                        <p className="text-lg font-semibold mb-4">+1-202-555-0126</p>
                        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded">CALL NOW</button>
                    </div>

                    {/* Chat with us */}
                    <div className="border border-gray-300 rounded-md p-6 w-[320px]">
                        <h3 className="text-lg font-semibold mb-2">Chat with us</h3>
                        <p className="text-sm mb-4">We are available online from 9:00 AM to 5:00 PM (GMT+5:45). Talk with us now</p>
                        <p className="text-lg font-semibold mb-4">Support@clicon.com</p>
                        <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded">CONTACT US</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CustomerSupport;
