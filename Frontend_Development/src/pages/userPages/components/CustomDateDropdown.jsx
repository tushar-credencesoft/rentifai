import React, { useState, useEffect, useRef } from 'react';

const CustomDateDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedDate, setSelectedDate] = useState('27/01/24');
  const dropdownRef = useRef(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setShowDropdown(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative text-sm max-xl:text-xs inline-block text-gray-700" ref={dropdownRef}>
      <div
        className="bg-white py-2 cursor-pointer flex items-center"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <span>{selectedDate}</span>
        <svg
          className={`fill-current h-4 w-4 ml-2 transform ${
            showDropdown ? 'rotate-180' : ''
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6z" />
        </svg>
      </div>
      {showDropdown && (
        <div className="absolute mt-2 bg-white border rounded shadow-md z-50">
          {/* Replace with your own date options */}
          <div
            className="px-4 py-2 cursor-pointer hover:bg-gray-200"
            onClick={() => handleDateClick('27/01/24')}
          >
            27/01/24
          </div>
          <div
            className="px-4 py-2 cursor-pointer hover:bg-gray-200"
            onClick={() => handleDateClick('28/01/24')}
          >
            28/01/24
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDateDropdown;
