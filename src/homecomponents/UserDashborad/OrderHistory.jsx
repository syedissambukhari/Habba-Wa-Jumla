import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import DashboardSider from "../../../homecomponents/DashboardSider";
// import { Link } from "react-router-dom";
// import {OrderDetails} from "../Orders/OrderDetail";

const OrderHistory = () => {
    // const navigate = useNavigate();

    // const handleClick = () => {
    //     console.log({OrderDetails})
    //   navigate({OrderDetails});
    // };

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6;

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  

  const orders = [
    {
      id: "#96459761",
      status: "IN PROGRESS",
      date: "Dec 30, 2019 07:52",
      total: "$80 (5 Products)",
    },
    {
      id: "#71667167",
      status: "COMPLETED",
      date: "Dec 7, 2019 23:26",
      total: "$70 (4 Products)",
    },
    {
      id: "#95214362",
      status: "CANCELED",
      date: "Dec 7, 2019 23:26",
      total: "$2,300 (2 Products)",
    },
    {
      id: "#71667167",
      status: "COMPLETED",
      date: "Feb 2, 2019 19:28",
      total: "$250 (1 Products)",
    },
    {
      id: "#51746385",
      status: "COMPLETED",
      date: "Dec 30, 2019 07:52",
      total: "$360 (2 Products)",
    },
    {
      id: "#51746385",
      status: "CANCELED",
      date: "Dec 4, 2019 21:42",
      total: "$220 (7 Products)",
    },
    {
      id: "#673971743",
      status: "COMPLETED",
      date: "Feb 2, 2019 19:28",
      total: "$80 (1 Products)",
    },
    {
      id: "#673971743",
      status: "COMPLETED",
      date: "Feb 2, 2019 19:28",
      total: "$80 (1 Products)",
    },
    {
      id: "#673971743",
      status: "COMPLETED",
      date: "Feb 2, 2019 19:28",
      total: "$80 (1 Products)",
    },
    {
      id: "#673971743",
      status: "COMPLETED",
      date: "Feb 2, 2019 19:28",
      total: "$80 (1 Products)",
    },
    {
      id: "#673971743",
      status: "COMPLETED",
      date: "Feb 2, 2019 19:28",
      total: "$80 (1 Products)",
    },
    // Add more orders as needed
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "IN PROGRESS":
        return "text-blue-500";
      case "COMPLETED":
        return "text-green-500";
      case "CANCELED":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="flex p-[7%]">
      <div className="w-full h-full  flex gap-10">
        <div className="h-full basis-1/4">
          <DashboardSider />
        </div>
        <div className="h-full basis-3/4 border-solid border-2 border-gray-300">
          <div className="border-b-2">
            <table className="w-full table-auto text-left">
              <thead>
                <tr className="border-b-2">
                  <th className="px-4 py-2">ORDER HISTORY</th>
                </tr>
              </thead>
              <thead className="bg-[#F2F4F5]">
                <tr className="border-b-2 border-[#E4E7E9]">
                  <th className="px-4 py-2">ORDER ID</th>
                  <th className="px-4 py-2">STATUS</th>
                  <th className="px-4 py-2">DATE</th>
                  <th className="px-4 py-2">TOTAL</th>
                  <th className="px-4 py-2">ACTION</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2">{order.id}</td>
                    <td className={`px-4 py-2 ${getStatusColor(order.status)}`}>
                      {order.status}
                    </td>
                    <td className="px-4 py-2">{order.date}</td>
                    <td className="px-4 py-2">{order.total}</td>
                    <td className="px-4 py-2 text-teal-800">
                        {/* <Link to="OrderDetails">OrderDetails</Link>                         */}
                    

                      {/* <button className="flex items-center">
                        <span className="ml-2">→</span>
                      </button> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            {/* Pagination */}
            <div className="flex items-center justify-center space-x-2 mt-4 mb-4">
              <button
                onClick={handlePrevious}
                className={`w-[40px] h-[40px] flex items-center justify-center border-[1.5px] border-[#0B5D51] bg-white rounded-full
      ${
        currentPage === 1
          ? "text-gray-300 cursor-not-allowed"
          : "text-green-600 hover:bg-green-50 hover:text-green-800"
      } 
      transition-colors duration-200 ease-in-out`}
                disabled={currentPage === 1}
              >
                ←
              </button>

              {[...Array(totalPages)].map((_, index) => {
                const page = index + 1;
                return (
                  <button
                    key={page}
                    onClick={() => handlePageClick(page)}
                    className={`w-[40px] h-[40px] flex items-center justify-center border-[1.5px] border-[#E4E7E9] rounded-full 
          ${
            currentPage === page
              ? "bg-[#0B5D51] text-white border-[#0B5D51]"
              : "text-gray-500 hover:bg-[#0B5D51] hover:text-white hover:border-[#0B5D51]"
          } 
          transition-colors duration-200 ease-in-out`}
                  >
                    {page < 10 ? `0${page}` : page}
                  </button>
                );
              })}

              <button
                onClick={handleNext}
                className={`w-[40px] h-[40px] flex items-center justify-center border-[1.5px] border-[#0B5D51] bg-white rounded-full
      ${
        currentPage === totalPages
          ? "text-gray-300 cursor-not-allowed"
          : "text-green-600 hover:bg-green-50 hover:text-green-800"
      } 
      transition-colors duration-200 ease-in-out`}
                disabled={currentPage === totalPages}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;