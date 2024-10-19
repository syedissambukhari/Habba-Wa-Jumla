import React from "react";
import { LiaFlagUsaSolid } from "react-icons/lia";

const VisitsByCountry = () => {
  const data = [
    {
      country: "United States",
      value: "31,200",
      seo: "40%",
      flag: <LiaFlagUsaSolid />,
    },
    {
      country: "United Kingdom",
      value: "12,700",
      seo: "47%",
      flag: <LiaFlagUsaSolid />,
    },
    {
      country: "Russia",
      value: "10,360",
      seo: "65%",
      flag: <LiaFlagUsaSolid />,
    },
    {
      country: "Canada",
      value: "5,749",
      seo: "23%",
      flag: <LiaFlagUsaSolid />,
    },
    {
      country: "Germany",
      value: "2,932",
      seo: "45%",
      flag: <LiaFlagUsaSolid />,
    },
    { country: "Spain", value: "200", seo: "56%", flag: <LiaFlagUsaSolid /> },
  ];

  return (
    <div
      className="bg-white h-[499.9px] rounded-[20px] pl-4"
      style={{
        boxShadow: "0px 0px 0px 0.5px #00000008, 0px 5px 25px 0px #0B5D5180",
      }}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Visits by Country</h2>
        <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
          <i className="fas fa-info-circle text-sm text-gray-500"></i>
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-left text-[#FFFFFF] bg-[#0B5D51] h-[48px]">
            <th>Country</th>
            <th>Value</th>
            <th>SEO</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-t h-[60px]">
              <td className="py-2 flex items-center space-x-2">
                <span>{item.flag}</span>
                <span> {item.country}</span>
              </td>
              <td>{item.value}</td>
              <td>{item.seo}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-blue-500 hover:underline cursor-pointer h-[52.8px]">
        See more →
      </div>
    </div>
  );
};

export default VisitsByCountry;
