const RecentOrder = () => {
    const orders = [
      { id: '#96459761', status: 'IN PROGRESS', date: 'Dec 30, 2019 05:18', total: '$1,500 (5 Products)', color: 'text-blue-500' },
      { id: '#71667167', status: 'COMPLETED', date: 'Feb 2, 2019 19:28', total: '$80 (11 Products)', color: 'text-green-500' },
      { id: '#95214362', status: 'CANCELED', date: 'Mar 20, 2019 23:14', total: '$160 (3 Products)', color: 'text-red-500' },
    ];
  
    return (
      <div className="my-6">
        <h2 className="font-semibold text-lg mb-4">Recent Order</h2>
        <table className="min-w-full bg-white shadow rounded-lg">
          <thead>
            <tr>
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
                <td className="border px-4 py-2">{order.id}</td>
                <td className={`border px-4 py-2 ${order.color}`}>{order.status}</td>
                <td className="border px-4 py-2">{order.date}</td>
                <td className="border px-4 py-2">{order.total}</td>
                <td className="border px-4 py-2">
                  <button className="text-blue-500">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default RecentOrder;
  