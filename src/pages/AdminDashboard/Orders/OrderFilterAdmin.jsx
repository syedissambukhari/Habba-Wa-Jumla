import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { BsBookmarkCheck } from "react-icons/bs";

 const OrderFilterAdmin = () => {
  const [featureProduct, setFeatureProduct] = useState(false);
  const [featureProduct2, setFeatureProduct2] = useState(false);
  const handleFeatureProductToggle = () => {
    setFeatureProduct(!featureProduct);

  };
  const handleFeatureProductToggle2 = () => {
    setFeatureProduct2(!featureProduct2);

  };
  return (
    <div className="flex p-10 space-x-10">
      {/* Sidebar */}
      <div className="max-w-sm w-[380px] p-7 bg-white shadow-2xl rounded-lg">
        <div className="flex items-center gap-2 mb-4">
          <span>
            <CiSearch />
          </span>
          <label
            htmlFor="order-number"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Order number
          </label>
        </div>

        <div className="mb-4">
          <input
            id="order-number"
            type="text"
            placeholder="Order number"
            className="w-full px-4 py-2 border  rounded-md  "
          />
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Issue date
          </label>
          <div className="grid grid-row-2 gap-2">
            <input
              placeholder="From"
              className="px-4 py-2 border  rounded-md  "
            />
            <input
              placeholder="To"
              className="px-4 py-2 border  rounded-md   "
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            From customer
          </label>
          <div className="bg-gray-100 p-2 rounded-lg h-32 overflow-y-auto">
            <label className="flex items-center mb-2">
              <input type="checkbox" className="form-checkbox text-green-500 h-4 w-4" />
              <span className="ml-2 text-gray-700">Blind Spots Inc.</span>
            </label>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="form-checkbox text-green-500 h-4 w-4" />
              <span className="ml-2 text-gray-700">Dispatcher Inc.</span>
            </label>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="form-checkbox text-green-500 h-4 w-4" />
              <span className="ml-2 text-gray-700">ACME SRL</span>
            </label>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="form-checkbox text-green-500 h-4 w-4" />
              <span className="ml-2 text-gray-700">Novelty I.S</span>
            </label>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="form-checkbox text-green-500 h-4 w-4" />
              <span className="ml-2 text-gray-700">Beauty Clinic SRL</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
        <div className="flex items-center space-x-2 mt-4">
            <button
              onClick={handleFeatureProductToggle2}
              className={`relative inline-flex items-center w-14 h-6 rounded-full transition-colors duration-200 focus:outline-none ${
                featureProduct2 ? 'bg-[#0B5D51]' : 'bg-[#939393]'
              }`}
            >
              <span
                className={`absolute left-0 w-3 h-3 rounded-full transition-transform duration-200 ${
                  featureProduct2 ? 'transform translate-x-9 bg-white' : 'bg-white'
                }`}
              />
              <span
                className={`px-1 absolute text-xs text-white transition-opacity duration-200 ${
                  featureProduct2 ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ marginLeft: '10px' }}
              >
                ON
              </span>
              <span
                className={`px-1 absolute text-xs text-white transition-opacity duration-200 ${
                  featureProduct2 ? 'opacity-0' : 'opacity-100'
                }`}
                style={{ marginLeft: '10px' }}
              >
                OFF
              </span>
            </button>
            <span className="text-gray-700">Paid only</span>
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <button
              onClick={handleFeatureProductToggle}
              className={`relative inline-flex items-center w-14 h-6 rounded-full transition-colors duration-200 focus:outline-none ${
                featureProduct ? 'bg-[#0B5D51]' : 'bg-[#939393]'
              }`}
            >
              <span
                className={`absolute left-0 w-3 h-3 rounded-full transition-transform duration-200 ${
                  featureProduct ? 'transform translate-x-9 bg-white' : 'bg-white'
                }`}
              />
              <span
                className={`px-1 absolute text-xs text-white transition-opacity duration-200 ${
                  featureProduct ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ marginLeft: '10px' }}
              >
                ON
              </span>
              <span
                className={`px-1 absolute text-xs text-white transition-opacity duration-200 ${
                  featureProduct ? 'opacity-0' : 'opacity-100'
                }`}
                style={{ marginLeft: '10px' }}
              >
                OFF
              </span>
            </button>
            <span className="text-gray-700">Group by status</span>
          </div>
        </div>
      </div>

      {/* Orders Section */}
      <div className="w-full">
        <div className="p-6 bg-white ">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
           
            <div className="bg-white shadow-xl p-4 items-center space-x-3 flex rounded-lg  ">
              <div className=' flex items-center text-[20px] w-[40px] justify-center rounded-3xl text-white   h-[40px] bg-[#0B5D51] '>
              <BsBookmarkCheck />
              </div>
            
           <div className="flex-col" >
            <span>Total</span>
              <p className="text-xl font-semibold">$5,300.00</p>
              <p className="text-sm text-gray-500">from 12 invoices</p>
            </div>
            </div>
            <div className="bg-white shadow-xl p-4 items-center space-x-3 flex rounded-lg">
              <div className=' flex items-center text-[20px] w-[40px] justify-center rounded-3xl  text-white  h-[40px] bg-[#0B5D51] '>
              <BsBookmarkCheck />
              </div>
            
           <div className="flex-col" >
            <span>Total</span>
              <p className="text-xl font-semibold">$5,300.00</p>
              <p className="text-sm text-gray-500">from 12 invoices</p>
            </div>
            </div>
            <div className="bg-white shadow-xl p-4 items-center space-x-3 flex rounded-lg">
              <div className=' flex items-center text-[20px] w-[40px] justify-center rounded-3xl  text-white   h-[40px] bg-[#0B5D51] '>
              <BsBookmarkCheck />
              </div>
            
           <div className="flex-col" >
            <span>Total</span>
              <p className="text-xl font-semibold">$5,300.00</p>
              <p className="text-sm text-gray-500">from 12 invoices</p>
            </div>
            </div>
          </div>
          </div>
          {/* Paid Orders */}
          <div class="w-full bg-white rounded-xl overflow-hidden  ">
   
    <div class="p-4">
        <h3 class="text-lg font-semibold">Paid (3)</h3>
        <div className='shadow-xl rounded-xl'>
        <div class=" space-y-4 ">
       
            <div class="flex items-center justify-between bg-white p-4 ">
                <div class="flex items-center space-x-4">
                    <div class="flex items-center justify-center w-10 h-10 bg-[#0B5D51] text-white font-bold rounded-full">
                        AS
                    </div>
                    <div>
                        <div class="text-sm font-medium">INV-0019</div>
                        <div class="text-gray-600 text-sm">ACME SRL</div>
                    </div>
                </div>
                <div class="text-sm font-semibold">$55.50</div>
                <div class="text-gray-500 text-sm flex flex-col">
                  <span> Issued:</span>
                  <span> 01/02/2024</span>
                 
                  </div>
                <div class="">
                    
                 
                    <div class="text-gray-500 text-sm flex flex-col">
                      
                    <span>Due:</span>
                    <span> 06/02/2024</span>
                    </div>
                </div>
                <div class="ml-4">
                    <span class="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">PAID</span>
                </div>
                <div class="ml-2">
                    <button>
                        <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>

       
        </div>
        <div class="space-y-4">
       
            <div class="flex items-center justify-between bg-white p-4 ">
                <div class="flex items-center space-x-4">
                    <div class="flex items-center justify-center w-10 h-10 bg-[#0B5D51] text-white font-bold rounded-full">
                        AS
                    </div>
                    <div>
                        <div class="text-sm font-medium">INV-0019</div>
                        <div class="text-gray-600 text-sm">ACME SRL</div>
                    </div>
                </div>
                <div class="text-sm font-semibold">$55.50</div>
                <div class="text-gray-500 text-sm flex flex-col">
                  <span> Issued:</span>
                  <span> 01/02/2024</span>
                 
                  </div>
                <div class="">
                    
                 
                    <div class="text-gray-500 text-sm flex flex-col">
                      
                    <span>Due:</span>
                    <span> 06/02/2024</span>
                    </div>
                </div>
                <div class="ml-4">
                    <span class="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">PAID</span>
                </div>
                <div class="ml-2">
                    <button>
                        <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>

       
        </div>
        <div class=" space-y-4">
       
            <div class="flex items-center justify-between bg- p-white p-4 ">
                <div class="flex items-center space-x-4">
                    <div class="flex items-center justify-center w-10 h-10 bg-[#0B5D51] text-white font-bold rounded-full">
                        AS
                    </div>
                    <div>
                        <div class="text-sm font-medium">INV-0019</div>
                        <div class="text-gray-600 text-sm">ACME SRL</div>
                    </div>
                </div>
                <div class="text-sm font-semibold">$55.50</div>
                <div class="text-gray-500 text-sm flex flex-col">
                  <span> Issued:</span>
                  <span> 01/02/2024</span>
                 
                  </div>
                <div class="">
                    
                 
                    <div class="text-gray-500 text-sm flex flex-col">
                      
                    <span>Due:</span>
                    <span> 06/02/2024</span>
                    </div>
                </div>
                <div class="ml-4">
                    <span class="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">PAID</span>
                </div>
                <div class="ml-2">
                    <button>
                        <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>

       
        </div>
    </div>
    </div>


<div class="p-4">
        <h3 class="text-lg font-semibold">Pending (4)</h3>
        <div className='shadow-xl rounded-xl'>
        <div class=" space-y-4 ">
       
            <div class="flex items-center justify-between bg-white p-4 ">
                <div class="flex items-center space-x-4">
                    <div class="flex items-center justify-center w-10 h-10 bg-[#0B5D51] text-white font-bold rounded-full">
                        AS
                    </div>
                    <div>
                        <div class="text-sm font-medium">INV-0019</div>
                        <div class="text-gray-600 text-sm">ACME SRL</div>
                    </div>
                </div>
                <div class="text-sm font-semibold">$55.50</div>
                <div class="text-gray-500 text-sm flex flex-col">
                  <span> Issued:</span>
                  <span> 01/02/2024</span>
                 
                  </div>
                <div class="">
                    
                 
                    <div class="text-gray-500 text-sm flex flex-col">
                      
                    <span>Due:</span>
                    <span> 06/02/2024</span>
                    </div>
                </div>
                <div class="ml-4">
                    <span class="bg-[#F790091F] text-[#B54708] text-xs px-3 py-1 rounded-full">pending</span>
                </div>
                <div class="ml-2">
                    <button>
                        <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>

       
        </div>
        <div class="space-y-4">
       
            <div class="flex items-center justify-between bg-white p-4 ">
                <div class="flex items-center space-x-4">
                    <div class="flex items-center justify-center w-10 h-10 bg-[#0B5D51] text-white font-bold rounded-full">
                        AS
                    </div>
                    <div>
                        <div class="text-sm font-medium">INV-0019</div>
                        <div class="text-gray-600 text-sm">ACME SRL</div>
                    </div>
                </div>
                <div class="text-sm font-semibold">$55.50</div>
                <div class="text-gray-500 text-sm flex flex-col">
                  <span> Issued:</span>
                  <span> 01/02/2024</span>
                 
                  </div>
                <div class="">
                    
                 
                    <div class="text-gray-500 text-sm flex flex-col">
                      
                    <span>Due:</span>
                    <span> 06/02/2024</span>
                    </div>
                </div>
                <div class="ml-4">
                    <span class="bg-[#F790091F] text-[#B54708] text-xs px-3 py-1 rounded-full">pending </span>
                </div>
                <div class="ml-2">
                    <button>
                        <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>

       
        </div>
        <div class=" space-y-4">
       
            <div class="flex items-center justify-between bg- p-white p-4 ">
                <div class="flex items-center space-x-4">
                    <div class="flex items-center justify-center w-10 h-10 bg-[#0B5D51] text-white font-bold rounded-full">
                        AS
                    </div>
                    <div>
                        <div class="text-sm font-medium">INV-0019</div>
                        <div class="text-gray-600 text-sm">ACME SRL</div>
                    </div>
                </div>
                <div class="text-sm font-semibold">$55.50</div>
                <div class="text-gray-500 text-sm flex flex-col">
                  <span> Issued:</span>
                  <span> 01/02/2024</span>
                 
                  </div>
                <div class="">
                    
                 
                    <div class="text-gray-500 text-sm flex flex-col">
                      
                    <span>Due:</span>
                    <span> 06/02/2024</span>
                    </div>
                </div>
                <div class="ml-4">
                    <span class="bg-[#F790091F] text-[#B54708] text-xs px-3 py-1 rounded-full">pending</span>
                </div>
                <div class="ml-2">
                    <button>
                        <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>

       
        </div>
    </div>
    </div>

        
        </div>
      </div>
    </div>
  );
};


export default OrderFilterAdmin