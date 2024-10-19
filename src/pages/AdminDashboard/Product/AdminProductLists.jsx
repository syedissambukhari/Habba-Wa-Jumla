import { FaPlus } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import productcategory from "../../../assets/CategoryImage.png";

const AdminProductLists = () => {
  const products = [
    {
      name: "Healthcare Erbology",
      description: "in healthcare",
      stock: "85 in stock",
      price: "$23.99",
      sku: "401.1BXBK",
      status: "PUBLISHED",
      image: productcategory, // Use the imported image
    },
    {
      name: "Makeup Lancome Rouge",
      description: "in makeup",
      stock: "0 in stock",
      price: "$95.00",
      sku: "978_UBFGJC",
      status: "PUBLISHED",
      image: productcategory,
    },
    {
      name: "Layering Bracelets Collection",
      description: "in jewelry",
      stock: "48 in jewelry",
      price: "$155.00",
      sku: "211_QFEXJO",
      status: "DRAFT",
      image: productcategory,
    },
    {
      name: "Skincare Necessaire",
      description: "in Skin Care",
      stock: "5 in stock",
      price: "$17.99",
      sku: "321_UWEAJT",
      status: "PUBLISHED",
      image: productcategory,
    },
    {
      name: "Skincare Soja CO",
      description: "in Skin Care",
      stock: "10 in stock",
      price: "$65.99",
      sku: "592_LDKDI",
      status: "DRAFT",
      image: productcategory,
    },
  ];
  const MAX_STOCK = 100;
  return (
    <div className="mt-[50px] flex flex-col space-y-3 px-[30px]">
      <div className="flex items-center justify-between">
        <h1 className="text-[33.3px] font-[700]">Products</h1>
        <button className="flex items-center gap-2 bg-[#0B5D51] rounded-xl px-3 py-2 text-white">
          <span>
            <FaPlus color="white" size={15} />
          </span>
          Add
        </button>
      </div>
      <div className=" flex items-center gap-3  ">
        <div className="flex gap-2 items-center">
          <p className="text-[#111927] text-[14px] font-[500]">Dashboard</p>
        </div>
        <div className="flex gap-3 items-center">
          <GoDotFill color="#5F6C72" />
          <p className="text-[#111927] text-[14px] font-[500]">Products</p>
        </div>
        <div className="flex gap-3 items-center">
          <GoDotFill color="#5F6C72" />
          <p className="text-[#6C737F] text-[14px]">List</p>
        </div>
      </div>
      <div className="mt-[20px] py-4 bg-white shadow-custom-1 shadow-custom-2 rounded-lg flex flex-col space-y-5">
        <div className="flex items-center gap-4 px-4">
          <IoSearch size={24.4} color="#0B5D51" />
          <input
            type="text"
            placeholder="Search by product name"
            className="outline-none border-none focus:outline-none w-full"
          />
        </div>
        <hr />

        <p className="px-4 text-[14px] text-[#6C737F]">No filters applied</p>
        <hr />
        <div className="flex items-center gap-3 px-4">
          <div className="flex items-center gap-1">
            <p className="font-[600] text-[14px] text-[#111927]"> Category</p>
            <span>
              <FaAngleDown size={15} />
            </span>
          </div>
          <div className="flex items-center gap-1">
            <p className="font-[600] text-[14px] text-[#111927]"> Status</p>
            <span>
              <FaAngleDown size={15} className="text-[#6C737F]" />
            </span>
          </div>
          <div className="flex items-center gap-1">
            <p className="font-[600] text-[14px] text-[#111927]"> Stock</p>
            <span>
              <FaAngleDown size={15} />
            </span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="w-full bg-[#F8F9FA]">
                <th className="py-2 px-4 text-left text-gray-700"></th>{" "}
                {/* Empty heading for the button column */}
                <th className="py-2 px-4  text-[12px] text-left text-[#2F3746]">
                  NAME
                </th>
                <th className="py-2 px-4  text-[12px] text-left text-[#2F3746]">
                  STOCK
                </th>
                <th className="py-2 px-4 text-[12px] text-left text-[#2F3746]">
                  PRICE
                </th>
                <th className="py-2 px-4 text-[12px] text-left text-[#2F3746]">
                  SKU
                </th>
                <th className="py-2   px-4  text-[12px] text-left text-[#2F3746]">
                  STATUS
                </th>
                <th className="py-2 px-4 text-[12px] text-left text-[#2F3746]">
                  ACTIONS
                </th>{" "}
                {/* Actions header */}
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="py-2 px-4">
                    <FaAngleRight className="text-gray-500" />
                  </td>
                  <td className="py-2 px-4 flex items-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-10 h-10 mr-2"
                    />{" "}
                    <div className="flex flex-col space-y-2">
                      <span className="text-[14px] font-[500]">
                        {product.name}
                      </span>
                      <span className="text-[14px] text-[#6C737F]">
                        {product.description}
                      </span>{" "}
                    </div>
                  </td>
                  <td className="py-2 px-4">
                    {/* Stock Bar */}
                    <div className="relative h-2 w-[70px] bg-gray-200 rounded">
                      <div
                        className={`absolute h-full rounded ${
                          product.stock > 20 ? "bg-green-600" : "bg-[#F9B7B3]"
                        }`}
                        style={{
                          width: `${(product.stock / MAX_STOCK) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="text-[14px] text-[#6C737F]">
                      {product.stock}
                    </span>
                  </td>
                  <td className="py-2 px-4 text-[14px]">{product.price}</td>
                  <td className="py-2 px-4 text-[14px]">{product.sku}</td>
                  <td className="py-2 px-4">
                    <span
                      className={`py-1 px-2 rounded-2xl text-[14px] ${
                        product.status === "PUBLISHED"
                          ? "bg-green-200 text-green-800"
                          : "bg-yellow-200 text-yellow-800"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="py-2 px-4">
                    <button className="text-gray-600 hover:text-gray-800">
                      ...
                    </button>{" "}
                    {/* Actions Button */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center justify-end gap-3 py-4 pr-4">
            <span className="flex items-center text-[14px] ">
              Rows per page: 5{" "}
              <span>
                <IoMdArrowDropdown className="text-[#6C737F]" />
              </span>
            </span>
            <span className="text-[14px]">1-5 of 7</span>
            <button className="flex items-center  text-gray-600 hover:text-gray-800">
              <FaChevronLeft className="text-[#6C737F]" />
            </button>
            <button className="flex items-  text-gray-600 hover:text-gray-800">
              <FaChevronRight className="text-[#6C737F]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProductLists;
