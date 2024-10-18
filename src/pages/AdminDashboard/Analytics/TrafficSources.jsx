import React from "react";

const TrafficSources = () => {
  // Simulating traffic sources data
  const data = [
    { label: "Source 1", value: 50 },
    { label: "Source 2", value: 40 },
    { label: "Source 3", value: 60 },
    { label: "Source 4", value: 30 },
    { label: "Source 5", value: 55 },
    { label: "Source 6", value: 45 },
  ];

  return (
    <div className="bg-white rounded-lg  shadow-md p-4 w-full h-[499.9px]">
      {/* Chart Title */}
      <h2 className="text-xl font-semibold pl-4">Traffic Sources</h2>

      {/* Chart Container */}
      <div className="p-4 h-full">
        {/* Bars */}
        {data.map((item, index) => (
          <div key={index} className="mb-4">
            <div className="w-full bg-gray-200 h-14">
              
              <div
                className="bg-teal-600 h-14 "
                style={{ width: `${item.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrafficSources;
