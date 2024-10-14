import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const OrderList = () => {
  const orders = [
    { id: 'DEV-102', total: '$500.00', status: 'PENDING', date: 'JAN 31' },
    { id: 'DEV-101', total: '$324.50', status: 'COMPLETE', date: 'JAN 31' },
    { id: 'DEV-103', total: '$450.00', status: 'REJECTED', date: 'FEB 01' },
    { id: 'DEV-104', total: '$524.00', status: 'COMPLETE', date: 'FEB 02' },
    { id: 'DEV-105', total: '$230.50', status: 'REJECTED', date: 'FEB 03' },
    { id: 'DEV-106', total: '$300.00', status: 'CANCELED', date: 'FEB 04' },
    { id: 'DEV-107', total: '$400.00', status: 'PENDING', date: 'FEB 05' },
    { id: 'DEV-108', total: '$250.00', status: 'COMPLETE', date: 'FEB 06' },
    { id: 'DEV-109', total: '$600.00', status: 'REJECTED', date: 'FEB 07' },
    { id: 'DEV-110', total: '$700.00', status: 'CANCELED', date: 'FEB 08' },
    { id: 'DEV-111', total: '$800.00', status: 'COMPLETE', date: 'FEB 09' },
    { id: 'DEV-112', total: '$900.00', status: 'PENDING', date: 'FEB 10' },
    { id: 'DEV-103', total: '$450.00', status: 'REJECTED', date: 'FEB 01' },
    { id: 'DEV-104', total: '$524.00', status: 'COMPLETE', date: 'FEB 02' },
    { id: 'DEV-105', total: '$230.50', status: 'REJECTED', date: 'FEB 03' },
    { id: 'DEV-106', total: '$300.00', status: 'CANCELED', date: 'FEB 04' },
    { id: 'DEV-107', total: '$400.00', status: 'PENDING', date: 'FEB 05' },
    { id: 'DEV-108', total: '$250.00', status: 'COMPLETE', date: 'FEB 06' },
    { id: 'DEV-109', total: '$600.00', status: 'REJECTED', date: 'FEB 07' },
    { id: 'DEV-110', total: '$700.00', status: 'CANCELED', date: 'FEB 08' },
    { id: 'DEV-111', total: '$800.00', status: 'COMPLETE', date: 'FEB 09' },
    { id: 'DEV-112', total: '$900.00', status: 'PENDING', date: 'FEB 10' },   { id: 'DEV-103', total: '$450.00', status: 'REJECTED', date: 'FEB 01' },
    { id: 'DEV-104', total: '$524.00', status: 'COMPLETE', date: 'FEB 02' },
    { id: 'DEV-105', total: '$230.50', status: 'REJECTED', date: 'FEB 03' },
    { id: 'DEV-106', total: '$300.00', status: 'CANCELED', date: 'FEB 04' },
    { id: 'DEV-107', total: '$400.00', status: 'PENDING', date: 'FEB 05' },
    { id: 'DEV-108', total: '$250.00', status: 'COMPLETE', date: 'FEB 06' },
    { id: 'DEV-109', total: '$600.00', status: 'REJECTED', date: 'FEB 07' },
    { id: 'DEV-110', total: '$700.00', status: 'CANCELED', date: 'FEB 08' },
    { id: 'DEV-111', total: '$800.00', status: 'COMPLETE', date: 'FEB 09' },
    { id: 'DEV-112', total: '$900.00', status: 'PENDING', date: 'FEB 10' },   { id: 'DEV-103', total: '$450.00', status: 'REJECTED', date: 'FEB 01' },
    { id: 'DEV-104', total: '$524.00', status: 'COMPLETE', date: 'FEB 02' },
    { id: 'DEV-105', total: '$230.50', status: 'REJECTED', date: 'FEB 03' },
    { id: 'DEV-106', total: '$300.00', status: 'CANCELED', date: 'FEB 04' },
    { id: 'DEV-107', total: '$400.00', status: 'PENDING', date: 'FEB 05' },
    { id: 'DEV-108', total: '$250.00', status: 'COMPLETE', date: 'FEB 06' },
    { id: 'DEV-109', total: '$600.00', status: 'REJECTED', date: 'FEB 07' },
    { id: 'DEV-110', total: '$700.00', status: 'CANCELED', date: 'FEB 08' },
    { id: 'DEV-111', total: '$800.00', status: 'COMPLETE', date: 'FEB 09' },
    { id: 'DEV-112', total: '$900.00', status: 'PENDING', date: 'FEB 10' },   { id: 'DEV-103', total: '$450.00', status: 'REJECTED', date: 'FEB 01' },
    { id: 'DEV-104', total: '$524.00', status: 'COMPLETE', date: 'FEB 02' },
    { id: 'DEV-105', total: '$230.50', status: 'REJECTED', date: 'FEB 03' },
    { id: 'DEV-106', total: '$300.00', status: 'CANCELED', date: 'FEB 04' },
    { id: 'DEV-107', total: '$400.00', status: 'PENDING', date: 'FEB 05' },
    { id: 'DEV-108', total: '$250.00', status: 'COMPLETE', date: 'FEB 06' },
    { id: 'DEV-109', total: '$600.00', status: 'REJECTED', date: 'FEB 07' },
    { id: 'DEV-110', total: '$700.00', status: 'CANCELED', date: 'FEB 08' },
    { id: 'DEV-111', total: '$800.00', status: 'COMPLETE', date: 'FEB 09' },
    { id: 'DEV-112', total: '$900.00', status: 'PENDING', date: 'FEB 10' },   { id: 'DEV-103', total: '$450.00', status: 'REJECTED', date: 'FEB 01' },
    { id: 'DEV-104', total: '$524.00', status: 'COMPLETE', date: 'FEB 02' },
    { id: 'DEV-105', total: '$230.50', status: 'REJECTED', date: 'FEB 03' },
    { id: 'DEV-106', total: '$300.00', status: 'CANCELED', date: 'FEB 04' },
    { id: 'DEV-107', total: '$400.00', status: 'PENDING', date: 'FEB 05' },
    { id: 'DEV-108', total: '$250.00', status: 'COMPLETE', date: 'FEB 06' },
    { id: 'DEV-109', total: '$600.00', status: 'REJECTED', date: 'FEB 07' },
    { id: 'DEV-110', total: '$700.00', status: 'CANCELED', date: 'FEB 08' },
    { id: 'DEV-111', total: '$800.00', status: 'COMPLETE', date: 'FEB 09' },
    { id: 'DEV-112', total: '$900.00', status: 'PENDING', date: 'FEB 10' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(''); 
  const rowsPerPage = 10;
  const totalPages = Math.ceil(orders.length / rowsPerPage);
  const visibleRange = 2;

  const filteredOrders = orders.filter((order) =>
    order.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastOrder = currentPage * rowsPerPage;
  const indexOfFirstOrder = indexOfLastOrder - rowsPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);

      for (let i = Math.max(currentPage - visibleRange, 2); i <= Math.min(currentPage + visibleRange, totalPages - 1); i++) {
        pageNumbers.push(i);
      }

      if (currentPage < totalPages - visibleRange) {
        pageNumbers.push('...', totalPages);
      }
    }

    return pageNumbers;
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); 
    setCurrentPage(1); 
  };

  return (
    <div className="bg-white min-h-screen text-white p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl text-black font-bold">Orders</h1>
        <Link to="/vendor/OrderFilter" className="flex items-center bg-[#0B5D51] hover:bg-gray-400 text-white font-semibold py-1 px-4 rounded-2xl">
          <span className="text-[24px] flex pb-1 mr-1 ">+</span>
          <span className="text-[20px]">Filter</span>
        </Link>
      </div>

      <div className="flex space-x-4 mb-4">
        <button className="text-[#0B5D51] border-b-4 border-[#0B5D51] pb-1">All</button>
        <button className="text-gray-500 hover:text-[#0B5D51]">Canceled</button>
        <button className="text-gray-500 hover:text-[#0B5D51]">Completed</button>
        <button className="text-gray-500 hover:text-[#0B5D51]">Pending</button>
        <button className="text-gray-500 hover:text-[#0B5D51]">Rejected</button>
      </div>

      <div className="flex items-center justify-between bg-white p-4 rounded mb-4 gap-2">
        <div className="relative w-full bg-white">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-black border border-[#E5E7EB] rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search by order"
            value={searchQuery}
            onChange={handleSearchChange} 
            required
          />
        </div>

        <div className="inline-flex items-center px-4 py-2 border border-green-600 rounded-lg">
          <div className="flex flex-col items-start">
            <span className="text-black text-xs font-medium">Sort By</span>
            <span className="text-black text-sm font-medium">Newest</span>
          </div>
          <svg className="ml-2 w-4 h-4 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
          </svg>
        </div>
      </div>

      <div>
        {currentOrders.length > 0 ? (
          currentOrders.map((order, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white p-4 hover:bg-gray-200 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-[#0B5D51] text-center py-2 px-4 rounded-3xl text-white">
                  <span className="block text-sm">{order.date.split(' ')[0]}</span>
                  <span className="block text-lg font-bold">{order.date.split(' ')[1]}</span>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-black hover:text-black">{order.id}</h2>
                  <p className="text-black hover:text-black">Total of {order.total}</p>
                </div>
              </div>
              <div
                className={`font-semibold ${
                  order.status === 'PENDING'
                    ? 'text-blue-500 bg-[#06AED41F] px-3 rounded-3xl'
                    : order.status === 'COMPLETE'
                    ? 'text-[#0B5D51] bg-[#10b9813f] px-3 rounded-3xl' 
                    : order.status === 'REJECTED'
                    ? 'text-[#B42318] bg-[#F044381F] px-3 rounded-3xl'
                    : order.status === 'CANCELED'
                    ? 'text-[#B54708] bg-[#F790091F] px-3 rounded-3xl' 
                    : 'text-black'
                }`}
              >
                {order.status}
              </div>
            </div>
          ))
        ) : (
          <p className="text-black text-center">No orders found</p>
        )}
      </div>

      <div className="flex justify-center items-center space-x-4 mt-4 text-black">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-2 rounded-lg ${
            currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 hover:bg-[#0B5D51] hover:text-white'
          }`}
        >
          &lt;
        </button>

        {renderPageNumbers().map((number, index) => (
          <button
            key={index}
            onClick={() => typeof number === 'number' && handlePageChange(number)}
            disabled={typeof number !== 'number'}
            className={`px-3 py-2 rounded-lg ${currentPage === number ? 'bg-[#0B5D51] text-white' : 'bg-gray-200 hover:bg-[#0B5D51] hover:text-white'}`}
          >
            {number}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-2 rounded-lg ${
            currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 hover:bg-[#0B5D51] hover:text-white'
          }`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};
