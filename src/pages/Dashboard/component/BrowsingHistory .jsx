import React, { useState } from 'react'

export const BrowsingHistory  = () => {

  const products = [
    {
      id: 1,
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphones",
      image: "https://example.com/product1.jpg",
      price: "$70",
      reviews: 738,
      rating: 5,
      label: "HOT"
    },
    {
      id: 2,
      title: "Samsung Electronics Samsung Galaxy S21 5G",
      image: "https://example.com/product2.jpg",
      price: "$2,300",
      reviews: 536,
      rating: 5,
    },
    {
      id: 3,
      title: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/60Hz)",
      image: "https://example.com/product3.jpg",
      price: "$360",
      reviews: 423,
      rating: 5,
      label: "BEST DEALS"
    },
    {
      id: 4,
      title: "Portable Washing Machine, 11lbs capacity Model 18NMF",
      image: "https://example.com/product4.jpg",
      price: "$80",
      reviews: 816,
      rating: 4
    }
  ];
  
 
    const [currentPage, setCurrentPage] = useState(0);
  
    const handleNext = () => {
      setCurrentPage((prev) => (prev + 1) % products.length);
    };
  
    const handlePrevious = () => {
      setCurrentPage((prev) => (prev === 0 ? products.length - 1 : prev - 1));
    }
  
  return (
    <div className="max-w-6xl mx-auto my-8 border ">
      <div className="flex justify-between border items-center mb-4 p-4">

        <h2 className="text-lg font-semibold">BROWSING HISTORY</h2>
        <a href="#" className="text-sm text-green-700">View All</a>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border-r-2 rounded-lg p-4 relative">
            {product.label && (
              <span className={`  top-2 left-2 bg-${product.label === "HOT" ? "red" : "green"}-500 text-white text-xs font-semibold px-2 py-1 rounded`}>
                {product.label}
              </span>
            )}
            <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-2" />
            <h3 className="text-sm font-semibold mb-1">{product.title}</h3>
            <div className="flex items-center mb-2">
              <div className="flex text-[#0B5D51]">
                {[...Array(product.rating)].map((_, index) => (
                  <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-gray-600 text-xs">({product.reviews})</span>
            </div>
            <p className="text-[#0B5D51] font-semibold">{product.price}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center space-x-2 mt-4 pb-2">
        <button onClick={handlePrevious} className="text-[#0B5D51] px-4  p-2 border border-green-700 rounded-full">
          &lt;
        </button>
        <div className="flex space-x-2">
          {[...Array(products.length)].map((_, index) => (
            <span key={index} className={`w-2 h-2 rounded-full ${index === currentPage ? 'bg-[#0B5D51]' : 'bg-gray-300'}`}></span>
          ))}
        </div>
        <button onClick={handleNext} className="text-[#0B5D51] p-2  px-4 border border-green-700 rounded-full">
          &gt;
        </button>
      </div>
    </div>
  )
}
