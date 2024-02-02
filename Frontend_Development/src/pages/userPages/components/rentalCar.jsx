// src/components/UserTable.js
import React, { useState, useEffect } from "react";

const RentalCar = () => {
  return (
    <div className="p-10">
      <section className="relative overflow-hidden">
        <div className="mt-2 md:mt-0 py-12 pb-6 sm:py-16 lg:pb-24 overflow-hidden">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8  relative">
            <div className="text-center">
              <div className="relative inline-block">
                <p className="text-center font-bold text-lg sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl ">
                  LOOKING TO SAVE MORE ON YOUR{" "}
                  <span className="text-[#A64AC9]">RENTAL CAR</span>{" "}
                </p>
                <div className="absolute inset-x-0 bottom-0 h-4 z-0">
                  <div className="h-full bg-gradient-to-t from-gray-300 to-transparent"></div>
                </div>
              </div>
            </div>

            <div className="relative mt-4 md:mt-6 lg:mt-12 xl:mt-12 2xl:mt-12 top-10">
              <div className="absolute inset-x-0 hidden xl:px-44 top-[-5px] md:block md:px-20 lg:px-28 ">
                <svg
                  className="w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  width="875"
                  height="48"
                  viewBox="0 0 875 48"
                  fill="none"
                >
                  <path
                    d="M0 48H875"
                    stroke="rgb(0 0 0)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="1 12"
                  />
                </svg>
              </div>

              <div className="relative grid grid-cols-1 text-center gap-y-8 sm:gap-y-10 md:gap-y-12 md:grid-cols-3 gap-x-12 ">
                <div>
                  <div className="flex items-center justify-center mx-auto">
                    {/* <span className="text-xl font-semibold text-gray-700 dark:text-gray-200 p-10">1</span> */}

                    <img
                      src="/assets/images/userPanel/pic-1.png"
                      alt=""
                      className=" dark:border-gray-700  shadow w-24 h-24 rounded-2xl"
                    />
                  </div>
                  <p className="mt-3 sm:mt-2 text-base font-bold text-gray-600 dark:text-gray-400 text-sm px-2 md:px-4 lg:px-20 sm:px-2 xl:px-20">
                    Best price guaranteed - If you find lower price, we'll
                    refund.
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-center mx-auto ">
                    {/* <span className="text-xl font-semibold text-gray-700 dark:text-gray-200">2</span> */}

                    <img
                      src="/assets/images/userPanel/pic-2.png"
                      alt=""
                      className="dark:border-gray-700  shadow w-24 h-24 rounded-2xl"
                    />
                  </div>
                  <p className="mt-3 sm:mt-2 font-bold text-base text-gray-600 dark:text-gray-400 text-sm  px-2 md:px-4 lg:px-20 sm:px-2 xl:px-20">
                    Best price guaranteed - If you find lower price, we'll
                    refund.
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-center mx-auto">
                    {/* <span className="text-xl font-semibold text-gray-700 dark:text-gray-200">3</span> */}
                    <img
                       className="dark:border-gray-700  shadow w-24 h-24 rounded-2xl"
                      src="/assets/images/userPanel/pic-3.png"
                      alt=""
                    />
                  </div>
                  <p className="mt-3 font-bold sm:mt-2 text-base text-gray-600 dark:text-gray-400 text-sm  px-2 md:px-4 lg:px-20 sm:px-2 xl:px-20">
                    Best price guaranteed - If you find lower price, we'll
                    refund.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RentalCar;
