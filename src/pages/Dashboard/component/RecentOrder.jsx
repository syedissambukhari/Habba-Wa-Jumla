
import { FaArrowRight } from "react-icons/fa";
const RecentOrder = () => {
    const orders = [
      { id: '#96459761', status: 'IN PROGRESS', date: 'Dec 30, 2019 05:18', total: '$1,500 (5 Products)', color: 'text-blue-500' },
      { id: '#71667167', status: 'COMPLETED', date: 'Feb 2, 2019 19:28', total: '$80 (11 Products)', color: 'text-green-500' },
      { id: '#95214362', status: 'CANCELED', date: 'Mar 20, 2019 23:14', total: '$160 (3 Products)', color: 'text-red-500' },
      { id: '#95214362', status: 'CANCELED', date: 'Mar 20, 2019 23:14', total: '$160 (3 Products)', color: 'text-red-500' },
      { id: '#95214362', status: 'CANCELED', date: 'Mar 20, 2019 23:14', total: '$160 (3 Products)', color: 'text-red-500' },
      { id: '#95214362', status: 'CANCELED', date: 'Mar 20, 2019 23:14', total: '$160 (3 Products)', color: 'text-red-500' },
      { id: '#95214362', status: 'CANCELED', date: 'Mar 20, 2019 23:14', total: '$160 (3 Products)', color: 'text-red-500' },
    ];
  
    return (
      <div className="my-6 border border-gray-200">
        <div className="flex justify-between items-center  py-4 px-6">
  <p className="text-xs font-medium text-gray-700">PAYMENT OPTION</p>
  <div className="flex items-center gap-2 cursor-pointer">
    <p className="text-xs font-medium text-green-800">Add Card</p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="w-4 h-4 text-green-800"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      />
    </svg>
  </div>

</div>
        <table className="min-w-full bg-white shadow rounded-lg">
          <thead>
            <tr className="bg-[#E4E7E9]">
              <th className="px-4 py-2 text-left">Order ID</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Total</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className=" px-4 py-2">{order.id}</td>
                <td className={` px-4 py-2 ${order.color}`}>{order.status}</td>
                <td className=" px-4 py-2">{order.date}</td>
                <td className=" px-4 py-2">{order.total}</td>
                <td className=" px-4 py-2">
                  <button className="text-[#0B5D51] flex items-center gap-6">View Details <FaArrowRight />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default RecentOrder;
  