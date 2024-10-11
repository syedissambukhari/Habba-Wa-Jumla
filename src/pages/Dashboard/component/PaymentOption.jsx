import { useState, useEffect, useRef } from "react";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { MdContentCopy } from "react-icons/md";

const PaymentOption = () => {
  const [showMenu, setShowMenu] = useState(null); // store menu state for the cards
  const menuRef1 = useRef(null); // Ref for the first menu
  const menuRef2 = useRef(null); // Ref for the second menu

  const toggleMenu = (menuId) => {
    // if the menu is already open, close it. If it's a different menu, open the new one
    setShowMenu(showMenu === menuId ? null : menuId);
  };

  useEffect(() => {
    // Add event listener for clicks outside the menu
    const handleClickOutside = (event) => {
      // If clicking outside of either menu, close the menus
      if (
        showMenu !== null &&
        menuRef1.current &&
        !menuRef1.current.contains(event.target) &&
        menuRef2.current &&
        !menuRef2.current.contains(event.target)
      ) {
        setShowMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <div className="bg-white mt-4 w-full h-[296px] border">
      <div className="flex justify-between items-center border border-gray-200 py-4 px-6">
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

      <div className="flex space-x-4 p-4">
        {/* First Card */}
        <div className="text-white p-5 rounded-lg w-80 relative shadow-md bg-gradient-to-r from-[#1B6392] to-[#124261]">
          <div className="text-2xl font-bold ">$95,400.00 USD</div>

          <div className="text-sm mt-2">
            <div>CARD NUMBER</div>
            <div className="mt-1 flex items-center">
              <span>**** **** **** 3814</span>
              <MdContentCopy className="ml-2 cursor-pointer" />
            </div>
          </div>

          <div className="flex mt-4 justify-between items-center text-lg font-semibold">
            <img src="/path-to-visa-logo.png" alt="Visa" className="w-12" />
            Kevin Gilbert
          </div>

          <div className="absolute top-4 right-4" ref={menuRef1}>
            <button onClick={() => toggleMenu(1)} className="text-white">
              <IoEllipsisHorizontal size={24} />
            </button>
            {showMenu === 1 && (
              <div className="bg-white text-black rounded-lg shadow-lg mt-2 w-32 absolute right-0 z-10">
                <div className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Edit Card</div>
                <div className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Delete Card</div>
              </div>
            )}
          </div>
        </div>

        {/* Second Card */}
        <div className="text-white p-5 rounded-lg w-80 relative shadow-md bg-gradient-to-r from-[#248E1D] to-[#2DB224]">
          <div className="text-2xl font-bold">$95,400.00 USD</div>

          <div className="text-sm mt-2">
            <div>CARD NUMBER</div>
            <div className="mt-1 flex items-center">
              <span>**** **** **** 3814</span>
              <MdContentCopy className="ml-2 cursor-pointer" />
            </div>
          </div>

          <div className="flex mt-4 justify-between items-center text-lg font-semibold">
            <img src="/path-to-visa-logo.png" alt="Visa" className="w-12" />
            Kevin Gilbert
          </div>

          <div className="absolute top-4 right-4" ref={menuRef2}>
            <button onClick={() => toggleMenu(2)} className="text-white">
              <IoEllipsisHorizontal size={24} />
            </button>
            {showMenu === 2 && (
              <div className="bg-white text-black rounded-lg shadow-lg mt-2 w-32 absolute right-0 z-10">
                <div className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Edit Card</div>
                <div className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Delete Card</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOption;
