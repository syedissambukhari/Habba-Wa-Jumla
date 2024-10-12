// Breadcrumb.js
import React from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { useLocation, Link } from 'react-router-dom';

const Breadcrumb = ({ isSignIn }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x); // Get current path segments

  return (
    <nav className="flex h-[72px] py-3 text-gray-700 bg-[#F2F4F5] rounded-lg w-full px-[120px]" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {/* Home link */}
        <li className="inline-flex items-center">
          <Link to="/" className="text-[14px] font-medium text-[#5F6C72] flex items-center justify-center gap-1">
            <GoHome size={18} className='text-[#5F6C72]' />
            Home
          </Link>
        </li>

        {/* Loop through the path segments and display them */}
        {pathnames.map((value, index) => {
          const decodedValue = decodeURIComponent(value); // Decode the value
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to} className="flex items-center">
              <FaAngleRight className="w-4 h-4 text-gray-400" />
              {isLast ? (
                <span className="ml-1 text-[14px] font-medium text-[#0B5D51] md:ml-2">
                  {isSignIn ? 'Sign In' : 'Sign Up'}
                </span>
              ) : (
                <Link to={to} className="ml-1 text-[14px] font-medium text-[#5F6C72] md:ml-2">
                  {decodedValue.charAt(0).toUpperCase() + decodedValue.slice(1)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
