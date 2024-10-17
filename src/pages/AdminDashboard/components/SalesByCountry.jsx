import React from 'react'

const SalesByCountry = () => {

    const data = {
        // total: 152000, // Adjust the total amount as needed
        countries: [
          { name: "United States",flagUrl:'/flag-us.svg', percentage: 60 },
          { name: "Spain",flagUrl:'/flag-spain.svg', percentage: 20 },
          { name: "United Kingdom",flagUrl:'/flag-uk.svg.svg', percentage: 10 },
          { name: "Germany",flagUrl:'/flaf-germ.svg',percentage: 5 },
          { name: "Canada",flagUrl:'/flag-ca.svg', percentage: 5 },
        ],
      };
  return (
    <div className='w-[778px] h-[507px] mt-8 ml-8 rounded-[20px] shadow-[0_5px_25px_0_rgba(11,93,81,0.5)] p-6 '>
       <h1 className='font-plusjakartasans font-bold text-[16.7px] leading-5 text-[#111927]  pt-2'>
       Sales By Country
       </h1>  
       <div className='flex '>
         <div className='pt-[120px] pl-6'>
            <img src="/map.svg" alt="" />
         </div>
              {/* data */}
              <div className="bg-white p-4 ">
            <p className="text-[14px]  font-inter font-normal text-[#6C737F]">Total</p>
             <h1 className='text-[#111927] font-plusjakartasans font-bold text-[23.3px] mb-4'>$152k</h1>
            <ul className="space-y-8">
              {data.countries.map((country) => (
             <li key={country.name} className="flex items-center font-inter font-[500] text-[14px]  text-[#111927] ">
                
            <img src={country.flagUrl} alt={country.name} className="w-9 h-9 mr-2" />
            
            <div className="flex-1 ml-3">
            <p className='mb-3 '>{country.name}</p>
             
              <div className="bg-[#C3C4F9] w-[169px] h-[4px] rounded-full">
                <div
                  className="bg-[#6366F1] h-1 rounded-l"
                  style={{ width: `${country.percentage}%` }}
                ></div>
              </div>
            </div>
            <p className="ml-4 pt-4">{country.percentage}%</p>
            
          </li>
        ))}
      </ul>
    </div>
     </div>
        
    </div>
  )
}

export default SalesByCountry