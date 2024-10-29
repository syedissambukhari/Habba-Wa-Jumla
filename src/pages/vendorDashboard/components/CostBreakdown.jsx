import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const CostBreakdown = () => {
  const data = {
    // labels: ['Strategy', 'Outsourcing', 'Marketing', 'Others'],
    datasets: [
      {
        label: 'Cost Breakdown',
        data: [14859, 35690, 45120, 25486], // Values
        backgroundColor: [
          '#E5E7EB', // Gray for Strategy
          '#0B5D51',  // Blue for marketing
          '#6366F1',  // Green for outsourcing
          '#F79009',    // Orange for Others
        ],
        hoverOffset: 2,
      },
    ],
  };

  return (
    <div className=' w-full h-auto mt-8 ml-8 rounded-[20px] shadow-[0_5px_25px_0_rgba(11,93,81,0.5)] p-4'>
      <div className='pl-6 pt-4'>
        <h1 className='font-plusjakartasans font-bold text-[16.7px] leading-5 text-[#111927]'>
          Cost Breakdown
        </h1>
        <p className='text-[#6C737F] font-inter font-normal text-[14px]'>
          Based on selected period
        </p>
      </div>
      <div className="flex justify-center mt-10">
        <div className="w-[216px] h-[209px]">
          <Doughnut data={data} />
        </div>
      </div>
      <div className="mt-6 flex justify-between">
        <table className='w-full text-left'>
          <thead>
            <tr className=' '>
              <th className='pb-2 pl-4 font-semibold font-inter text-[12px] flex items-center text-[#111927]'>Top Channel</th>
              <th className=' pb-2 font-semibold font-inter text-[12px] text-[#111927]'>Value</th>
            </tr>
          </thead>
          <tbody >
            {/* <tr className='border-b border-[#E2E3E6] '> */}
              <td className='py-2 flex items-center space-y-2 '>
                <div className='w-3 h-3 mr-2 bg-[#E5E7EB] rounded-full'></div>
                <p className='font-inter font-[500] text-[14px]'> Strategy</p> 
              </td>
              <td className='py-2 font-inter font-normal text-[14px] text-[#6C737F]'>$14859.00</td>
            {/* </tr> */}
            <tr className=''>
              <td className='py-2 flex items-center'>
                <div className='w-3 h-3 mr-2 bg-[#6366F1] rounded-full'></div>
               <p className='font-inter font-[500] text-[14px]'> Outsourcing </p>
              </td>
              <td className='py-2 font-inter font-normal text-[14px] text-[#6C737F]'>$35690.00</td>
            </tr>
            <tr className=''>
              <td className='py-2 flex items-center'>
                <div className='w-3 h-3 mr-2 bg-[#0B5D51] rounded-full'></div>
                <p className='font-inter font-[500] text-[14px]'>Marketing</p>
              </td>
              <td className='py-2 font-inter font-normal text-[14px] text-[#6C737F]'>$45120.00</td>
            </tr>
            <tr>
              <td className='py-2 flex items-center'>
                <div className='w-3 h-3 mr-2 bg-[#F79009] rounded-full'></div>
                <p className='font-inter font-[500] text-[14px]'>Others</p>
              </td>
              <td className='py-2 font-inter font-normal text-[14px] text-[#6C737F]'>$25486.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CostBreakdown;
