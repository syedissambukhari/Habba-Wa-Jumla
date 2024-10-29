import React from 'react';
import { Chart as ChartJS, LineElement, PointElement, Tooltip, Legend, CategoryScale, LinearScale } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, PointElement, Tooltip, Legend, CategoryScale, LinearScale);

const SalesRevenue = () => {
  const data = {
    labels: ['20 Jan', '21 Jan', '22 Jan', '23 Jan', '24 Jan', '25 Jan', '26 Jan', '27 Jan', '28 Jan', '29 Jan', '30 Jan', '31 Jan'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [12, 10, 15, 20, 25, 22, 18, 15, 17, 20, 22, 25],
        borderColor: '#008000', // Green
        borderWidth: 2,
        fill: false,
        tension: 0.4, // Makes the line smooth
      },
      {
        label: 'Dataset 2',
        data: [15, 18, 22, 25, 20, 18, 15, 17, 20, 22, 18, 20],
        borderColor: '#FFA500', // Orange
        borderWidth: 2,
        fill: false,
        tension: 0.4, // Makes the line smooth
        borderDash: [5, 5], // Creates the dotted line effect
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          callback: function() { return ''; } // Removes numbering on the y-axis
        },
        beginAtZero: true, // Ensures Y-axis starts from 0
      },
    },
    plugins: {
      legend: {
        display: false, // Hides the legend (rectangular box)
      },
    },
  };

  return (
    <div className='w-full h-[435px] mt-8 ml-8 rounded-[20px] shadow-[0_5px_25px_0_rgba(11,93,81,0.5)] p-6'>
      <h1 className='font-plusjakartasans font-bold text-[16.7px] leading-5 text-[#111927] pt-2'>
        Sales Revenue
      </h1>
      <div className="mt-20">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default SalesRevenue;
