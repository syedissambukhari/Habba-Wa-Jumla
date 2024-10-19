import React from 'react'
import SVG from "../../../../public/SVG.png"
export const AdminInoviceDetail = () => {
    return (
      <div className="p-8 bg-gray-100  mt-9">
        <div className="flex space-x-[600px] justify-center items-center mb-6">
          <div>
            <h1 className="text-xl font-bold">INV-0019</h1>
            <p className="text-gray-500">ACME SRL</p>
          </div>
          <div className="flex space-x-4">
            <button className="text-blue-500">Preview</button>
            <button className="bg-[#0B5D51] text-white px-4 py-2 rounded">Download</button>
          </div>
        </div>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Header */}
       
        {/* Company and Invoice Details */}
        <div className="grid grid-cols-2 gap-6 border-b pb-6 mb-6">
          <div>
            <img src={SVG} className="w-10 h-10 mb-5" alt="image" />
            <p className="font-bold mb-6">www.devias.io</p>
            <p>Street King William, 123</p>
            <p>Level 2, C, 442456</p>
            <p>San Francisco, CA, USA</p>
          </div>
          <div>
            <p>Company No. 4675933</p>
            <p>EU VAT No. 949 67545 45</p>
            <p>account@devias.io</p>
            <p>+1 (650) 3456 23</p>
          </div>
          <div>
            <p className="font-bold">Due date</p>
            <p>08 Feb 2024</p>
          </div>
          <div>
            <p className="font-bold">Date of issue</p>
            <p>01 Feb 2024</p>
          </div>
          <div>
            <p className="font-bold">Billed to</p>
            <p>ACME SRL</p>
            <p>Countdown Grey Lynn</p>
            <p>623456854231</p>
            <p>271 Richmond Rd, Grey Lynn, Auckland 1022, New Zealand</p>
          </div>
          <div>
            <p className="font-bold">Number</p>
            <p>INV-0019</p>
          </div>
        </div>

        {/* Product/Service Details */}
        <table className="w-full text-left mb-8">
          <thead className="border-b">
            <tr>
              <th className="py-2">#</th>
              <th className="py-2">DESCRIPTION</th>
              <th className="py-2">QTY</th>
              <th className="py-2">UNIT PRICE</th>
              <th className="py-2">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-4">1</td>
              <td className="py-4">Freelancer Subscription (12/05/2019 - 11/06/2019)</td>
              <td className="py-4">1</td>
              <td className="py-4">$55.50</td>
              <td className="py-4">$55.50</td>
            </tr>
          </tbody>
        </table>

        {/* Total Calculation */}
        <div className="flex justify-end space-x-4 mb-6">
          <div className="w-1/3">
            <div className="flex justify-between border-t pt-4">
              <span>Subtotal</span>
              <span>$50.00</span>
            </div>
            <div className="flex justify-between border-t pt-4">
              <span>Taxes</span>
              <span>$5.50</span>
            </div>
            <div className="flex justify-between border-t pt-4 font-bold">
              <span>Total</span>
              <span>$55.50</span>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="border-t pt-6">
          <p className="text-gray-500 text-sm">
            Please make sure you have the right bank registration number as I had issues before and make sure you guys cover transfer expenses.
          </p>
        </div>
      </div>
    </div>
       )
     }
     