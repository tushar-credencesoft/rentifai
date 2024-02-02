import React, { useState, useEffect } from "react";

const RentedCar = () => {
  // Sample data, replace with your actual user data
  const [selectedUser, setSelectedUser] = useState(null);
  const tabs = [
    {
      id: "equal-width-elements-1",
      label: "ALL",
      images: [
        {
          name: "Car 1",
          url: "/assets/images/Cars/car-2.jpg",
        },
        {
          name: "Car 2",
          url: "/assets/images/Cars/car-2.jpg",
        },
        {
          name: "Car 3",
          url: "/assets/images/Cars/car-2.jpg",
        },
        {
          name: "Car 4",
          url: "/assets/images/Cars/car-2.jpg",
        },
        {
          name: "Car 5",
          url: "/assets/images/Cars/car-2.jpg",
        },
      ],
    },
    {
      id: "equal-width-elements-2",
      label: "SEDAN",
      images: [
        {
          name: "Car 1",
          url: "/assets/images/Cars/car-2.jpg",
        },
        {
          name: "Car 2",
          url: "/assets/images/Cars/car-2.jpg",
        },
        {
          name: "Car 3",
          url: "/assets/images/Cars/car-2.jpg",
        },
        {
          name: "Car 4",
          url: "/assets/images/Cars/car-2.jpg",
        },
      ],
    },
    {
      id: "equal-width-elements-3",
      label: "SUV",
      images: [
        {
          name: "Car 1",
          url: "/assets/images/Cars/car-2.jpg",
        },
        {
          name: "Car 2",
          url: "/assets/images/Cars/car-2.jpg",
        },
        {
          name: "Car 3",
          url: "/assets/images/Cars/car-2.jpg",
        },
      ],
    },
    {
      id: "equal-width-elements-4",
      label: "HATCHBACK",
      images: [
        {
          name: "Car 1",
          url: "/assets/images/Cars/car-2.jpg",
        },
        {
          name: "Car 2",
          url: "/assets/images/Cars/car-2.jpg",
        },
      ],
    },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="">
      <div className=" p-2 md:pt-10 lg:pt-10 xl:pt-10 2xl:pt-10 pt-0">
        <div className="text-center">
          <div className="relative inline-block">
            <h2 className="text-lg lg:text-4xl xl:text-4xl 2xl:text-4xl md:text-2xl font-bold text-center mb-4 ">
              OUR MOST RENTED <span className="text-[#A64AC9]">CARS</span>
            </h2>
            <h2 className="text- lg:text-4xl xl:text-4xl 2xl:text-4xl md:text-2xl font-bold text-center mb-4">
              EXPLORE OUR TOP RENTED CARS
            </h2>
            <div className="absolute inset-x-0 bottom-0 h-4 z-0">
              <div className="h-full bg-gradient-to-t from-gray-300 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mx-auto p-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="/assets/images/Cars/car-2.jpg"
              alt="Mountain"
            />
            <div className="px-2 py-4">
              <div className="font-bold lg:text-xl xl:text-xl 2xl:text-xl sm:text-sm text-sm mb-2 text-center">Mountain</div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="/assets/images/Cars/car-2.jpg"
              alt="Mountain"
            />
            <div className="px-2 py-4">
              <div className="font-bold lg:text-xl xl:text-xl 2xl:text-xl sm:text-sm text-sm mb-2 text-center">Mountain</div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="/assets/images/Cars/car-2.jpg"
              alt="Mountain"
            />
            <div className="px-2 py-4">
              <div className="font-bold lg:text-xl xl:text-xl 2xl:text-xl sm:text-sm text-sm mb-2 text-center">Mountain</div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg text-center">
            <img
              className="w-full"
              src="/assets/images/Cars/car-2.jpg"
              alt="Mountain"
            />
            <div className="px-2 py-4">
              <div className="font-bold lg:text-xl xl:text-xl 2xl:text-xl sm:text-sm text-sm mb-2 text-center">Mountain</div>
            </div>
          </div>
        </div>
      </div>
      <div className=" px-2 md:px-10 lg:px-20 xl:px-20">
        <div className="flex space-x-2" aria-label="Tabs" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`lg:py-5 lg:px-4 md:py-5 md:px-4 xl:py-5 xl:px-4 2xl:py-5 2xl:px-4 py-1 px-1 text-center basis-0 grow inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 
         ${
           activeTab === tab.id
             ? "bg-purple-600 text-white drop-shadow-2xl border border-[#707070]"
             : "bg-transparent text-gray-500 hover:text-blue-600 border border-[#707070] drop-shadow-2xl"
         }`}
              id={tab.id}
              data-hs-tab={`#${tab.id}`}
              aria-controls={tab.id}
              role="tab"
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              id={tab.id}
              className={activeTab === tab.id ? "w-full" : "hidden w-full"}
              role="tabpanel"
              aria-labelledby={tab.id}
            >
              <div className="mx-auto p-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
                {tab.images.map((image, index) => (
                  <div
                    className="rounded-2xl overflow-hidden shadow-lg"
                    key={index}
                  >
                    <img className="w-full" src={image.url} alt="Mountain" />
                    <div className="px-2 py-4">
                      <div className="font-bold lg:text-xl xl:text-xl 2xl:text-xl sm:text-sm text-sm mb-2 text-center">
                        Mountain
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RentedCar;
