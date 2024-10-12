import React from 'react';
import { RxCrossCircled } from "react-icons/rx";
import { FiShoppingCart } from "react-icons/fi";

const Wishlist = () => {
  const products = [
    {
      id: 1,
      name: 'Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear Headphones',
      image: 'https://example.com/bose-earbuds.jpg', // Add actual image URL
      originalPrice: '$1299',
      discountedPrice: '$999',
      stockStatus: 'IN STOCK',
      inStock: true,
    },
    {
      id: 2,
      name: 'Simple Mobile 5G LTE Galaxy 12 Mini 512GB Gaming Phone',
      image: 'https://example.com/galaxy-phone.jpg',
      originalPrice: '',
      discountedPrice: '$2300',
      stockStatus: 'IN STOCK',
      inStock: true,
    },
    {
      id: 3,
      name: 'Portable Washing Machine, 11lbs capacity Model 18NMFIAM',
      image: 'https://example.com/washing-machine.jpg',
      originalPrice: '',
      discountedPrice: '$70',
      stockStatus: 'IN STOCK',
      inStock: true,
    },
    {
      id: 4,
      name: 'TOZO T6 True Wireless Earbuds Bluetooth Headphones',
      image: 'https://example.com/tozo-earbuds.jpg',
      originalPrice: '$250',
      discountedPrice: '$220',
      stockStatus: 'OUT OF STOCK',
      inStock: false,
    },
    {
      id: 5,
      name: 'Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smart Home Camera',
      image: 'https://example.com/wyze-cam.jpg',
      originalPrice: '',
      discountedPrice: '$1499.99',
      stockStatus: 'IN STOCK',
      inStock: true,
    },
  ];

  return (
    <div className="container mx-auto  border border-gray-200">
      <h1 className="text-2xl font-bold mb-4 p-4">Wishlist</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className='bg-[#E4E7E9] '>
            <th className="py-2 px-4 text-left font-medium text-gray-600">Products</th>
            <th className="py-2 px-4 text-left font-medium text-gray-600">Price</th>
            <th className="py-2 px-4 text-left font-medium text-gray-600">Stock Status</th>
            <th className="py-2 px-4 text-left font-medium text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-t">
              <td className="py-2 px-4 flex items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover mr-4"
                />
                <span>{product.name}</span>
              </td>
              <td className="py-2 px-4">
                {product.originalPrice && (
                  <span className="line-through text-gray-500 mr-2">
                    {product.originalPrice}
                  </span>
                )}
                <span className="text-green-600 font-semibold">{product.discountedPrice}</span>
              </td>
              <td className="py-2 px-4">
                <span
                  className={`${
                    product.inStock ? 'text-green-500' : 'text-red-500'
                  } font-semibold`}
                >
                  {product.stockStatus}
                </span>
              </td>
              <td className="py-2  flex gap-5 items-center  ">
                <button
                  className={`${
                    product.inStock
                      ? 'bg-[#0B5D51] hover:bg-[#ADB7BC]'
                      : 'bg-gray-400 cursor-not-allowed'
                  } text-white text-[14px]  gap-2 flex px-[24px] py-[24px] rounded`}
                  disabled={!product.inStock}
                >
                  Add to Cart
                  <FiShoppingCart className=' text-[20px]' />
                </button>
                <RxCrossCircled className='ml-3 text-[24px] text-[#929FA5]' />
              </td>
             

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Wishlist;
