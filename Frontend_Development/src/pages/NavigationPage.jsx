import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const NavigationPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredLeft, setIsHoveredLeft] = useState(false);
  const [isHoveredRight, setIsHoveredRight] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={`relative h-full w-full bg-center left-0 right-0 top-0 bottom-0 bg-cover bg-no-repeat scrollbar-hide flex items-center justify-center  ${
        isHovered
          ? "bg-navigation_right_page_bg"
          : !isHovered
          ? "bg-navigation_left_page_bg"
          : "bg-navigation_page_bg"
      }`}
    >
      {/* <p className="absolute top-8 max-lg:mt-12 text-xl sm:text-xl lg:text-5xl md:text-4xl xl:text-5xl 2xl:text-5xl font-bold text-[#023863]">
        RENTIF
        <span className="ml-3 max-lg:ml-2 bg-[#A64AC9] px-1  rounded-md text-white">
          AI
        </span>
      </p> */}
      <img
        src="/assets/images/Logo.png"
        alt=""
        className="absolute top-8 max-lg:mt-12"
      />
      <div className="absolute w-full h-full flex items-center justify-center">
        <div
          onMouseEnter={() => setIsHovered(false)}
          onMouseLeave={() => setIsHovered(true)}
          className="w-1/2 h-full"
        ></div>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-1/2 h-full"
        ></div>
      </div>
      <div className="2xl:mt-[120px] max-sm:mt-[92px] max-lg:mt-20 max-2xl:mt-24 flex gap-12 max-sm:gap-8 font-bold z-50">
        <div
          onMouseEnter={() => setIsHovered(false)}
          onMouseLeave={() => setIsHovered(true)}
          onClick={() => navigate("/user-rent/home")}
          className={`flex items-center gap-2 cursor-pointer ease-in-out duration-75 ${
            isHovered && "invisible"
          }`}
        >
          <FaArrowLeft className="bg-white w-6 h-6 p-1 max-sm:w-4 max-sm:h-4 max-sm:p-0.5 rounded-full mt-1 max-sm:mt-0" />
          <p className="text-white text-3xl max-sm:text-lg max-xl:text-2xl">
            RENT A CAR
          </p>
        </div>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => navigate("/owner-list")}
          className={`flex items-center gap-2 cursor-pointer ease-in-out duration-75 ${
            !isHovered && "invisible"
          }`}
        >
          <p className="text-white text-3xl max-sm:text-lg max-xl:text-2xl">
            LIST A CAR
          </p>
          <FaArrowRight className="bg-white w-6 h-6 p-1 max-sm:w-4 max-sm:h-4 max-sm:p-0.5 rounded-full mt-1 max-sm:mt-0" />
        </div>
      </div>
    </div>
  );
};

export default NavigationPage;
