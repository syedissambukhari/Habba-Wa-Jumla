const Dashboard = () => {
    return (
      <div className="p-5 w-full">
        <h1 className="text-2xl font-semibold mb-4">Hello, Kevin</h1>
        <p className="text-gray-600 mb-6">From your account dashboard, you can view your recent orders...</p>
  
        {/* Account Info & Billing Address */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {/* Account Info */}
          <div className="bg-white p-4 shadow-md rounded">
            <h2 className="font-semibold text-lg mb-2">Account Info</h2>
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/50"
                alt="User"
                className="rounded-full mr-4"
              />
              <div>
                <p className="font-semibold">Kevin Gilbert</p>
                <p className="text-gray-500">kevin@example.com</p>
              </div>
            </div>
            <button className="mt-4 text-blue-500">Edit Account</button>
          </div>
  
          {/* Billing Address */}
          <div className="bg-white p-4 shadow-md rounded">
            <h2 className="font-semibold text-lg mb-2">Billing Address</h2>
            <p>Kevin Gilbert</p>
            <p>1234 Main St, Dhaka, Bangladesh</p>
            <p>Phone: +1-202-555-018</p>
            <p>Email: kevin@example.com</p>
            <button className="mt-4 text-blue-500">Edit Address</button>
          </div>
        </div>
  
        {/* Payment Options */}
        <div className="bg-white p-4 shadow-md rounded mb-8">
          <h2 className="font-semibold text-lg mb-4">Payment Option</h2>
          <div className="flex items-center space-x-4">
            {/* Card 1 */}
            <div className="flex items-center space-x-2 p-4 border rounded shadow-md bg-blue-50">
              <div className="text-xl">💳</div>
              <div>
                <p className="text-gray-700">Visa **** 3814</p>
                <p className="text-sm text-gray-500">Kevin Gilbert</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex items-center space-x-2 p-4 border rounded shadow-md bg-green-50">
              <div className="text-xl">💳</div>
              <div>
                <p className="text-gray-700">Mastercard **** 1761</p>
                <p className="text-sm text-gray-500">Kevin Gilbert</p>
              </div>
            </div>
          </div>
          <button className="mt-4 text-blue-500">Add Card</button>
        </div>
  
        {/* Recent Orders */}
        <div className="bg-white p-4 shadow-md rounded">
          <h2 className="font-semibold text-lg mb-4">Recent Orders</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="pb-2">Order ID</th>
                <th className="pb-2">Status</th>
                <th className="pb-2">Date</th>
                <th className="pb-2">Total</th>
                <th className="pb-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td>#964596791</td>
                <td className="text-blue-500">In Progress</td>
                <td>Dec 30, 2019</td>
                <td>$1,500</td>
                <td><button className="text-blue-500">View Details</button></td>
              </tr>
              {/* Repeat for other orders */}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  