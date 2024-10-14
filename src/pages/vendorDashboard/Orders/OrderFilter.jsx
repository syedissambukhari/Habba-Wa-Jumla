import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

export const OrderFilter = () => {
  const [featureProduct, setFeatureProduct] = useState(false);

  const handleFeatureProductToggle = () => {
    setFeatureProduct(!featureProduct);
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
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-green-400 focus:border-green-500"
          />
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Issue date
          </label>
          <div className="grid grid-row-2 gap-2">
            <input
              placeholder="From"
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-green-400 focus:border-gray-400"
            />
            <input
              placeholder="To"
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-green-400 focus:border-gray-400"
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
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox text-green-500" />
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
        <div className="p-6 bg-white min-h-screen">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-xl font-semibold">$5,300.00</p>
              <p className="text-sm text-gray-500">from 12 invoices</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-xl font-semibold">$1,439.60</p>
              <p className="text-sm text-gray-500">from 3 invoices</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-xl font-semibold">$276.87</p>
              <p className="text-sm text-gray-500">from 2 invoices</p>
            </div>
          </div>

          {/* Paid Orders */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Paid (3)</h2>
            <div className="space-y-4">
              {/* Order Row */}
              <div className="flex justify-between bg-gray-100 p-4 rounded-lg items-center">
                <div className="flex space-x-4">
                  <div className="bg-green-500 text-white p-2 rounded-full">AS</div>
                  <div>
                    <p className="font-semibold">INV-0019</p>
                    <p className="text-sm text-gray-500">ACME SRL</p>
                    <p className="text-sm text-gray-400">Issued 01/02/2024 · Due 06/02/2024</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="font-semibold">$55.50</p>
                  <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">PAID</span>
                </div>
              </div>
              {/* Order Row */}
              <div className="flex justify-between bg-gray-100 p-4 rounded-lg items-center">
                <div className="flex space-x-4">
                  <div className="bg-blue-500 text-white p-2 rounded-full">BS</div>
                  <div>
                    <p className="font-semibold">INV-0018</p>
                    <p className="text-sm text-gray-500">Blind Spots Inc.</p>
                    <p className="text-sm text-gray-400">Issued 01/02/2024 · Due 07/02/2024</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="font-semibold">$688.90</p>
                  <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">PAID</span>
                </div>
              </div>
              {/* Order Row */}
              <div className="flex justify-between bg-gray-100 p-4 rounded-lg items-center">
                <div className="flex space-x-4">
                  <div className="bg-pink-500 text-white p-2 rounded-full">BC</div>
                  <div>
                    <p className="font-semibold">INV-0017</p>
                    <p className="text-sm text-gray-500">Beauty Clinic SRL</p>
                    <p className="text-sm text-gray-400">Issued 01/02/2024 · Due 10/02/2024</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="font-semibold">$695.20</p>
                  <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">PAID</span>
                </div>
              </div>
            </div>
          </div>

          {/* Unpaid Orders */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Unpaid (2)</h2>
            <div className="space-y-4">
              {/* Order Row */}
              <div className="flex justify-between bg-gray-100 p-4 rounded-lg items-center">
                <div className="flex space-x-4">
                  <div className="bg-yellow-500 text-white p-2 rounded-full">NI</div>
                  <div>
                    <p className="font-semibold">INV-0016</p>
                    <p className="text-sm text-gray-500">Novelty I.S</p>
                    <p className="text-sm text-gray-400">Issued 01/02/2024 · Due 12/02/2024</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="font-semibold">$228.55</p>
                  <span className="bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded">UNPAID</span>
                </div>
              </div>
              {/* Order Row */}
              <div className="flex justify-between bg-gray-100 p-4 rounded-lg items-center">
                <div className="flex space-x-4">
                  <div className="bg-red-500 text-white p-2 rounded-full">DI</div>
                  <div>
                    <p className="font-semibold">INV-0015</p>
                    <p className="text-sm text-gray-500">Dispatcher Inc.</p>
                    <p className="text-sm text-gray-400">Issued 01/02/2024 · Due 11/02/2024</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="font-semibold">$179.55</p>
                  <span className="bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded">UNPAID</span>
                </div>
              </div>
            </div>
          </div>

          {/* Overdue Orders */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Overdue (2)</h2>
            <div className="space-y-4">
              {/* Order Row */}
              <div className="flex justify-between bg-gray-100 p-4 rounded-lg items-center">
                <div className="flex space-x-4">
                  <div className="bg-orange-500 text-white p-2 rounded-full">DI</div>
                  <div>
                    <p className="font-semibold">INV-0014</p>
                    <p className="text-sm text-gray-500">Dispatcher Inc.</p>
                    <p className="text-sm text-gray-400">Issued 01/02/2024 · Due 09/02/2024</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="font-semibold">$227.55</p>
                  <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">OVERDUE</span>
                </div>
              </div>
              {/* Order Row */}
              <div className="flex justify-between bg-gray-100 p-4 rounded-lg items-center">
                <div className="flex space-x-4">
                  <div className="bg-purple-500 text-white p-2 rounded-full">BC</div>
                  <div>
                    <p className="font-semibold">INV-0013</p>
                    <p className="text-sm text-gray-500">Beauty Clinic SRL</p>
                    <p className="text-sm text-gray-400">Issued 01/02/2024 · Due 08/02/2024</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="font-semibold">$276.87</p>
                  <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">OVERDUE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
