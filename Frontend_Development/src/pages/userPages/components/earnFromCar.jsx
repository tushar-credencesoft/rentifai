// src/components/UserTable.js
import React, { useState, useEffect } from "react";

const EarnFromCar = () => {
  return (
    <div className="p-10">
      <h5 className="mb-2 lg:text-5xl md:text-3xl font-bold text-gray-900 dark:text-white text-center">
        WANT TO EARN FROM <span className="text-[#A64AC9]">YOUR CAR?</span>
      </h5>
      <video className="w-full p-10" autoPlay controls>
        <source
          src="/assets/images/userPanel/car-driving.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default EarnFromCar;
