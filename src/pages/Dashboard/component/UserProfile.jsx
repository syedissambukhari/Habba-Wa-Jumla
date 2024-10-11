import React from 'react';

const UserProfile = () => {
  return (
    <div className="flex justify-between p-8 bg-gray-100 h-screen">
      {/* User Information Section */}
      <div className="flex flex-col space-y-6 w-2/3">
        {/* Account Info Card */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Profile"
              className="w-16 h-16 rounded-full"
            />
            <div className="ml-4">
              <h2 className="text-lg font-bold">Kevin Gilbert</h2>
              <p className="text-gray-600">Dhaka - 1207, Bangladesh</p>
            </div>
          </div>
          <div>
            <p className="text-gray-600">
              <strong>Email:</strong> kevin.gilbert@gmail.com
            </p>
            <p className="text-gray-600">
              <strong>Sec Email:</strong> kevin12345@gmail.com
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong> +1-202-555-0118
            </p>
          </div>
          <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500">
            Edit Account
          </button>
        </div>

        {/* Billing Address Card */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <div className="mb-4">
            <h2 className="text-lg font-bold">Billing Address</h2>
            <p className="text-gray-600">
              East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat No. 5D
            </p>
            <p className="text-gray-600">Dhaka - 1200, Bangladesh</p>
          </div>
          <div>
            <p className="text-gray-600">
              <strong>Phone Number:</strong> +1-202-555-0118
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> kevin.gilbert@gmail.com
            </p>
          </div>
          <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500">
            Edit Address
          </button>
        </div>
      </div>

      {/* Order Stats Section */}
      <div className="space-y-4 w-1/3">
        <div className="p-4 bg-blue-100 rounded-lg text-center">
          <p className="text-2xl font-bold text-blue-600">154</p>
          <p>Total Orders</p>
        </div>
        <div className="p-4 bg-yellow-100 rounded-lg text-center">
          <p className="text-2xl font-bold text-yellow-600">05</p>
          <p>Pending Orders</p>
        </div>
        <div className="p-4 bg-green-100 rounded-lg text-center">
          <p className="text-2xl font-bold text-green-600">149</p>
          <p>Completed Orders</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
