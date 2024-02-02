// src/components/UserTable.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

const CarAtYouFingerTips = () => {
  return (
    <div>
      <div className="w-full p-4 text-center bg-white  sm:p-8 dark:bg-gray-800 ">
        <h5 className="mb-2 lg:text-5xl md:text-3xl font-bold text-gray-900 dark:text-white">
          ALWAYS A CAR AT YOUR{" "}
          <span className="text-[#A64AC9]">FINGERTIPS</span>
        </h5>
        <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400 2xl:px-96 xl:px-96 lg:px-40 md:px-40 sm:px-10 px-10">
          Discover the many benefits of the app yourself! Around 1 million
          satisfied users have already done so.
        </p>
        <div className='flex flex-wrap justify-center'>
                <Link to="/" target="_blank" className='md:w-64 w-32 sm:mr-2 mr-2 md:mr-0 lg:mr-0 xl:mr-0 mb-6 md:m-0' rel="noopener noreferrer"><img src={"/app-store.svg"} className='mx-auto md:ms-auto md:mr-[15px]' /></Link>
                <Link to="/" target="_blank" className='md:w-64 w-32' rel="noopener noreferrer"><img src={"/play-store.svg"} className='mx-auto md:ml-[15px]' /></Link>
            </div>
      </div>
    </div>
  );
};

export default CarAtYouFingerTips;
