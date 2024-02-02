import React from "react";
import { Link } from "react-router-dom";

const LeftMenu = ({ onSelectMenu, selectedMenu }) => {
  return (
    <div className="bg-white text-gray-800 p-4 h-full flex flex-col border-r-2 border-gray-300 max-h-screen overflow-y-auto scrollbar-hide">
      <div className="mb-10">
        <img src="/assets/images/Logo.png" alt="" className="" />
      </div>
      <ul className="h-full">
        <li className={`mb-6 text-xl md:text-sm font-bold hover:text-#A64AC9 hover:text-[#A64AC9] ${selectedMenu === 'dashboard' ? 'text-[#A64AC9] font-bold' : ''}`}>
          <Link to="/admin-dash" onClick={() => onSelectMenu('dashboard')}>
            DASHBOARD
          </Link>
        </li>
        <li className={`mb-6 text-xl md:text-sm font-bold hover:text-#A64AC9 hover:text-[#A64AC9] ${selectedMenu === 'featuredCars' ? 'text-[#A64AC9] font-bold' : ''}`}>
          <Link to="/admin-dash" onClick={() => onSelectMenu('featuredCars')}>
            FEATURED CARS
          </Link>
        </li>
        <li className={`mb-6 text-xl md:text-sm font-bold hover:text-#A64AC9 hover:text-[#A64AC9] ${selectedMenu === 'transactionDetails' ? 'text-[#A64AC9] font-bold' : ''}`}>
          <Link to="/admin-dash" onClick={() => onSelectMenu('transactionDetails')}>
            TRANSACTION DETAILS
          </Link>
        </li>
        <li className="md:fixed md:bottom-0 md:left-0">
          <button
            type="button"
            className="font-bold rounded-lg text-xl md:text-sm px-5 py-2.5 text-left inline-flex items-center  me-2 mb-2"
          >
            <svg
              className="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 8 19"
            >
              <path
                fill-rule="evenodd"
                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                clip-rule="evenodd"
              />
            </svg>
            <p className=" text-[#FF0000] font-poppins">Logout</p>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default LeftMenu;
