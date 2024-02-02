import React from "react";
import Footer from "../../components/footer";
import CustomDateDropdown from "./components/CustomDateDropdown";
import { IoIosSearch } from "react-icons/io";

const SearchResultPage = () => {
  return (
    <div className="mt-28 max-xl:mt-32">
      <div className="mb-12">
        {/* Main Heading */}
        <div className="relative flex items-center justify-center pt-20">
          <div className="absolute left-0 mb-12 bg-[#A64AC9] px-3 h-12 flex items-center justify-center gap-2 text-white font-semibold text-2xl">
            <p>FILTERS</p>
            <img
              className="w-8"
              src="/assets/images/userPanel/SearchResultPage/icon.png"
              alt=""
            />
          </div>
          <p className="text-8xl font-medium font-bebasFont">
            LET'S FIND THE BEST <span className="text-[#A64AC9]">CAR</span>
          </p>
        </div>

        <div className="flex items-center justify-center mt-8">
          <div className="bg-white border rounded-full w-8/12 h-20 shadow-lg flex">
            <div className="relative w-1/2 h-full flex flex-col justify-center pl-8">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                className="outline-none"
                placeholder="City, address , pincode"
              />
              <div className="absolute right-0 w-[6px] h-[68px] rounded-full bg-[#A64AC9]"></div>
            </div>
            <div className="w-1/2 flex">
              <div className="relative w-5/12 h-full flex items-center">
                <div>
                  <p className="text-center">Duration</p>
                  <div className="flex justify-center items-center gap-4 px-2.5">
                    <div className="w-1/2">
                      {" "}
                      <CustomDateDropdown />
                    </div>
                    <div className="w-1/2">
                      {" "}
                      <CustomDateDropdown />
                    </div>
                  </div>
                </div>
                <div className="absolute right-0 w-[6px] h-[68px] rounded-full bg-[#A64AC9]"></div>
              </div>
              <div className="w-7/12 flex items-center justify-center pr-8">
                <div className="w-11/12 flex flex-col items-center justify-center">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" />
                    <p className="text-gray-700">Pick Up/drop off</p>
                  </div>
                  <div className="flex justify-center items-center gap-4 px-2.5">
                    <div className="w-1/2">
                      {" "}
                      <CustomDateDropdown />
                    </div>
                    <div className="w-1/2">
                      {" "}
                      <CustomDateDropdown />
                    </div>
                  </div>
                </div>
                <div className="text-4xl text-gray-600">
                  <IoIosSearch
                    className="cursor-pointer hover:text-gray-800 duration-100"
                    onClick={() => {
                      navigate("/user-rent/search-result");
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-around text-3xl font-medium font-bebasFont mt-20">
          <p className="text-white px-24 py-4 rounded-2xl border bg-[#A64AC9] shadow-lg cursor-pointer">
            ALL
          </p>
          <p className="text-[#A64AC9] px-24 py-4 rounded-2xl border-2 shadow-lg cursor-pointer">
            SEDAN
          </p>
          <p className="text-[#A64AC9] px-24 py-4 rounded-2xl border-2 shadow-lg cursor-pointer">
            SUV
          </p>
          <p className="text-[#A64AC9] px-24 py-4 rounded-2xl border-2 shadow-lg cursor-pointer">
            HATCHBACK
          </p>
        </div>

        {/* Result Cars */}
        <div className="mt-12">
          <div>
            <div className="mx-auto p-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src="/assets/images/Cars/car-2.jpg"
                  alt="Mountain"
                />
                <div className="px-2 py-4">
                  <div className="font-bold lg:text-xl xl:text-xl 2xl:text-xl sm:text-sm text-sm mb-2 text-center">
                    Mountain
                  </div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src="/assets/images/Cars/car-2.jpg"
                  alt="Mountain"
                />
                <div className="px-2 py-4">
                  <div className="font-bold lg:text-xl xl:text-xl 2xl:text-xl sm:text-sm text-sm mb-2 text-center">
                    Mountain
                  </div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src="/assets/images/Cars/car-2.jpg"
                  alt="Mountain"
                />
                <div className="px-2 py-4">
                  <div className="font-bold lg:text-xl xl:text-xl 2xl:text-xl sm:text-sm text-sm mb-2 text-center">
                    Mountain
                  </div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg text-center">
                <img
                  className="w-full"
                  src="/assets/images/Cars/car-2.jpg"
                  alt="Mountain"
                />
                <div className="px-2 py-4">
                  <div className="font-bold lg:text-xl xl:text-xl 2xl:text-xl sm:text-sm text-sm mb-2 text-center">
                    Mountain
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchResultPage;
