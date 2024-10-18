import React from 'react';

const Analytics = () => {
  return (
    <div className="container mx-auto p-4 w-full ">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-6">Analytics</h2>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-between">
        {/* Card 1: Impressions */}
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between w-full md:w-[32%] m-2">
          <div>
            <h3 className="text-gray-500 text-sm font-medium">Impressions</h3>
            <p className="text-2xl font-semibold text-black mt-2">36,6K</p>
          </div>
          <div className="mt-4">
            <a href="#" className="text-sm text-teal-600 flex items-center">
              See sources
              <span className="ml-1">→</span>
            </a>
          </div>
        </div>

        {/* Card 2: Engagements */}
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between w-full md:w-[32%] m-2">
          <div>
            <h3 className="text-gray-500 text-sm font-medium">Engagements</h3>
            <p className="text-2xl font-semibold text-black mt-2">19K</p>
          </div>
          <div className="mt-4">
            <a href="#" className="text-sm text-teal-600 flex items-center">
              See traffic
              <span className="ml-1">→</span>
            </a>
          </div>
        </div>

        {/* Card 3: Spent */}
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between w-full md:w-[32%] m-2">
          <div>
            <h3 className="text-gray-500 text-sm font-medium">Spent</h3>
            <p className="text-2xl font-semibold text-black mt-2">$41.2K</p>
          </div>
          <div className="mt-4">
            <a href="#" className="text-sm text-teal-600 flex items-center">
              See campaigns
              <span className="ml-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
