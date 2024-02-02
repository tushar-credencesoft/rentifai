import React, { useEffect } from "react";
import CustomDateDropdown from "./components/CustomDateDropdown";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import CarAtYouFingerTips from "./components/carsAtYourFingerTips.jsx";
import EarnFromCar from "./components/earnFromCar.jsx";
import HearFromUsers from "./components/hearFromUsers.jsx";
import RentalCar from "./components/rentalCar.jsx";
import RentedCar from "./components/rentedCars.jsx";
import Footer from "../../components/footer.jsx";

const HomePage = () => {
  const navigate = useNavigate();

  // On Every First Render of the home page it will check for the access token in the query params.
  // This helps us to interact with the access token get through the magic link login.
  useEffect(() => {
    // Function to get access token from URL
    const getAccessTokenFromURL = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const accessToken = urlParams.get("accessToken");
      return accessToken;
    };

    // Get access token from URL
    const accessToken = getAccessTokenFromURL();

    // Check if access token exists and set it in local storage
    if (accessToken) {
      localStorage.setItem("ACCESS_TOKEN", JSON.stringify(accessToken));
    }
  }, []);

  return (
    <div>
      {/* Landing Screen */}
      <div className="relative bg-rent_car_home_page_bg w-full h-screen bg-cover bg-no-repeat bg-top overflow-x-hidden">
        <div className="flex justify-center items-center max-lg:flex-col h-full">
          <div className="w-5/12 max-lg:w-full text-7xl max-sm:text-5xl max-xl:text-6xl font-bebasFont font-medium max-xl:pl-10 xl:pl-16 max-lg:pl-5 max-lg:mt-40 max-sm:mt-24 max-lg:mb-6 xl:mb-24">
            <img
              src="/assets/images/userPanel/HomePage/rectangle.png"
              className="w-32 max-md:w-24 max-md:h-3 h-4.5 pb-2 max-xl:pb-0.5"
              alt=""
            />
            <p className="max-sm:mt-1">
              RENT BEST IN{" "}
              <span className="text-[#A64AC9] leading-[5rem] max-sm:leading-5">
                CLASS
              </span>
            </p>
            <p>
              CARS <span className="text-[#A64AC9]">WITH US</span>
            </p>
          </div>
          <div className="w-7/12 max-lg:w-full flex item-center justify-center lg:mt-24 overflow-x-hidden lg:h-5/6 max-xl:max-h-[600px] max-sm:h-[400px] lg:py-8 max-lg:mb-2">
            <div className="w-7/12 max-sm:w-1/2 bg-car_3 max-lg:bg-navigation_page_bg bg-cover bg-no-repeat bg-top rounded-2xl shadow-lg h-full"></div>
            <div className="w-5/12 max-sm:w-1/2 flex justify-between h-full">
              <div className="relative w-1/2 ml-1 bg-black rounded-2xl h-full">
                <img
                  className="w-full h-full opacity-60"
                  src="/assets/images/userPanel/HomePage/car_2.png"
                  alt=""
                />
                <p className="absolute max-sm:text-sm max-sm:-right-8 -right-14 bottom-28 max-sm:bottom-14 -rotate-90 text-white font-semibold text-2xl">
                  FAMILY CARS
                </p>
              </div>
              <div className="relative w-1/2 -mr-4 max-sm:-mr-3 bg-black rounded-2xl h-full">
                <img
                  className="w-full h-full opacity-60"
                  src="/assets/images/userPanel/HomePage/car_1.png"
                  alt=""
                />
                <p className="absolute max-sm:text-sm max-sm:-right-6 -right-12 bottom-28 max-sm:bottom-14 -rotate-90 text-white font-semibold text-2xl">
                  SPORTS CARS
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Search Section */}
        <div className="absolute bottom-36 w-full left-16 max-xl:left-12 max-lg:hidden">
          <div className="relative">
            <div className="w-48 h-[120px] bg-[#A64AC9] rounded-[39px] shadow-lg font-semibold text-white text-center text-xl pt-1.5">
              Cars For Rent
            </div>
            <div className="bg-white rounded-full w-8/12 max-xl:w-10/12 max-2xl:w-9/12 h-20 absolute bottom-0 shadow-lg flex">
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
        </div>
        <div className="lg:hidden w-full absolute left-4 top-1/2">
          <div className="w-full">
            <div className="w-48 h-[105px] bg-[#A64AC9] rounded-[39px] shadow-lg font-semibold text-white text-center text-xl pt-1.5">
              Cars For Rent
            </div>
            <div className=" w-full">
              <div className="absolute bottom-0 mb-0.5 bg-white rounded-full w-8/12 max-md:w-10/12 max-sm:w-11/12 shadow-lg flex flex-col items-start p-1 justify-center h-16 pl-6">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  id="location"
                  className="outline-none w-11/12"
                  placeholder="City, address , pincode"
                />
              </div>
              <div className="absolute -bottom-16 bg-white rounded-full w-8/12 max-md:w-10/12 max-sm:w-11/12 shadow-lg flex p-1 justify-center items-center h-16 pl-6 max-sm:pl-2">
                <div className="relative w-5/12 max-sm:w-4/12 h-full flex flex-col max-sm:flex-row justify-center items-center">
                  <p className="text-center max-sm:text-xs">Duration</p>
                  <div className="flex max-sm:flex-col justify-center items-center gap-4 max-sm:gap-0 px-2.5">
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
                <div className="w-[5px] h-[60px] rounded-full bg-[#A64AC9]"></div>
                <div className="w-7/12 max-sm:w-8/12 flex items-center justify-center pr-6 max-sm:pr-2">
                  <div className="w-11/12 max-sm:w-full flex flex-col items-center justify-center">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" />
                      <p className="text-gray-700 max-sm:text-xs">
                        Pick Up/drop off
                      </p>
                    </div>
                    <div className="flex justify-center items-center gap-4 max-sm:gap-1 px-2.5 max-sm:px-1">
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
        </div>
      </div>

      {/* Scroll Down Results */}
      <RentedCar />
      <RentalCar />
      <HearFromUsers />
      <EarnFromCar />
      <CarAtYouFingerTips />
      <Footer />
    </div>
  );
};

export default HomePage;
