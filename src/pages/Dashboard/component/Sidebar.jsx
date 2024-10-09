import { FaTachometerAlt, FaHistory, FaShoppingCart, FaHeart, FaSyncAlt, FaCreditCard, FaClock, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-[380px] h-full bg-white shadow-lg ">
      <ul className="space-y-2 mt-8">
        <li className="font-semibold p-4 bg-[#0B5D51] text-white flex items-center">
          <FaTachometerAlt className="mr-3" />
          <span>Dashboard</span>
        </li>
        <li className="text-gray-700 hover:bg-gray-100 cursor-pointer p-4 flex items-center">
          <FaHistory className="mr-3" />
          <span>Order History</span>
        </li>
        <li className="text-gray-700 hover:bg-gray-100 cursor-pointer p-4 flex items-center">
          <FaShoppingCart className="mr-3" />
          <span>Track Order</span>
        </li>
        <li className="text-gray-700 hover:bg-gray-100 cursor-pointer p-4 flex items-center">
          <FaShoppingCart className="mr-3" />
          <span>Shopping Cart</span>
        </li>
        <li className="text-gray-700 hover:bg-gray-100 cursor-pointer p-4 flex items-center">
          <FaHeart className="mr-3" />
          <span>Wishlist</span>
        </li>
        <li className="text-gray-700 hover:bg-gray-100 cursor-pointer p-4 flex items-center">
          <FaSyncAlt className="mr-3" />
          <span>Compare</span>
        </li>
        <li className="text-gray-700 hover:bg-gray-100 cursor-pointer p-4 flex items-center">
          <FaCreditCard className="mr-3" />
          <span>Cards & Address</span>
        </li>
        <li className="text-gray-700 hover:bg-gray-100 cursor-pointer p-4 flex items-center">
          <FaClock className="mr-3" />
          <span>Browsing History</span>
        </li>
        <li className="text-gray-700 hover:bg-gray-100 cursor-pointer p-4 flex items-center">
          <FaCog className="mr-3" />
          <span>Setting</span>
        </li>
        <li className="text-red-500 hover:bg-red-100 cursor-pointer p-4 flex items-center">
          <FaSignOutAlt className="mr-3" />
          <span>Log-out</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
