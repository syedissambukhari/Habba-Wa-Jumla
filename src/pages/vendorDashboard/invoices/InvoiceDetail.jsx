import React from 'react'


export const InvoiceDetail = () => {
    return (
        <div className="bg-gray-100 w-full py-10">
            
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
           
            <div>
              <h1 className="text-3xl font-bold">INV-0019</h1>
              <p className="text-gray-600">ACME SRL</p>
            </div>
            <div>
              <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2">Preview</button>
              <button className="bg-green-600 text-white px-4 py-2 rounded">Download</button>
            </div>
          </div>
  
          {/* Invoice Body */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            <div>
              <p className="text-gray-600 font-medium">www.devias.io</p>
              <p>Street King William, 123</p>
              <p>Level 2, C, 442456</p>
              <p>San Francisco, CA, USA</p>
            </div>
            <div>
              <p>Company No. 4675933</p>
              <p>EU VAT No. 949 67545 45</p>
            </div>
            <div>
              <p>accounts@devias.io</p>
              <p>(+40) 652 3456 23</p>
            </div>
          </div>
  
          <div className="mt-8 flex justify-between">
            <div className="text-right">
              <p className="text-4xl font-bold text-green-600">PAID</p>
              <p className="text-gray-600">INV-0019</p>
            </div>
          </div>
  
          {/* Billing Information */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><span className="font-semibold">Due date:</span> 06 Feb 2024</p>
              <p><span className="font-semibold">Date of issue:</span> 01 Feb 2024</p>
            </div>
            <div>
              <p className="font-semibold">Billed to:</p>
              <p>ACME SRL</p>
              <p>Countdown Grey Lynn</p>
              <p>693465584231</p>
              <p>271 Richmond Rd, Grey Lynn, Auckland 1022, New Zealand</p>
            </div>
          </div>
  
          {/* Invoice Items */}
          <div className="mt-8">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase">#</th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase">Qty</th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase">Unit Price</th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">1</td>
                  <td className="px-6 py-4 whitespace-nowrap">Freelancer Subscription (12/05/2019 - 11/06/2019)</td>
                  <td className="px-6 py-4 whitespace-nowrap">1</td>
                  <td className="px-6 py-4 whitespace-nowrap">$55.50</td>
                  <td className="px-6 py-4 whitespace-nowrap">$55.50</td>
                </tr>
              </tbody>
            </table>
          </div>
  
          {/* Invoice Summary */}
          <div className="mt-8 text-right">
            <p className="font-semibold">Subtotal: $50.00</p>
            <p className="font-semibold">Taxes: $5.50</p>
            <p className="font-bold text-lg">Total: $55.50</p>
          </div>
  
          {/* Notes Section */}
          <div className="mt-8">
            <p className="text-gray-600 text-sm">
              Notes: Please make sure you have the right bank registration number as I had issues before and make sure you guys cover transfer expenses.
            </p>
          </div>
        </div>
      </div>
       )
     }
     