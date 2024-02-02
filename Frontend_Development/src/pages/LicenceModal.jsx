import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const LicenseModal = ({ state, setState }) => {
  const [selectedFileTL01, setSelectedFileTL01] = useState(null);
  const [selectedFileTL02, setSelectedFileTL02] = useState(null);

  const openLicenceModal = () => {
    setState((prev) => ({
      ...prev,
      isLicenseModalOpen: false,
    }));
  };

  const handleFileChangeTL01 = (event) => {
    setSelectedFileTL01(event.target.files[0]);
  };

  const handleFileChangeTL02 = (event) => {
    setSelectedFileTL02(event.target.files[0]);
  };

  const handleRemoveTL01 = () => {
    setSelectedFileTL01(null);
  };

  const handleRemoveTL02 = () => {
    setSelectedFileTL02(null);
  };

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden transition-opacity duration-300 ${
        state.isLicenseModalOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={(e) => {
        const modalContent = document.querySelector(".bg-white");
        if (modalContent && !modalContent.contains(e.target)) {
          setState((prev) => ({
            ...prev,
            isLicenseModalOpen: false,
          }));
        }
      }}
    >
      <div className="fixed inset-0 transition-transform transform">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="bg-white rounded-3xl absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-0 border-2 border-purple-400 w-full ">
          <div className="bg-white p-6 py-11 mt-10 rounded-lg flex flex-col items-center">
            <h1 className="text-4xl font-black text-[#A64AC9] mb-5 text-center">
              Application for Transport Service Licence (TSL)
            </h1>

            <p className="text-[30px] font-black text-[#A64AC9] mb-12 text-center">
              Please enter your details
            </p>

            <div className="grid grid-cols-2 grid-rows-1 gap-10 justify-center items-center">
              <div className="text-center">
                <div className="grid grid-cols-1 grid-rows-2 justify-center mr-10">
                  <div>
                    <p className="text-center text-[#A64AC9] font-bold text-[20px]">
                      TL 01
                    </p>
                  </div>

                  <div className="justify-center">
                    <button className="bg-[#A64AC9] text-white font-bold text-[20px] lg:px-14 px-5 py-4 -mt-2 rounded-3xl items-center">
                      Download
                    </button>
                  </div>

                  <div className="justify-center">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChangeTL01}
                      style={{ display: "none" }}
                      id="fileInputTL01"
                    />
                    <button
                      className="bg-[#A64AC9] text-white font-bold text-[20px] lg:px-14 px-5 py-4 mt-4 rounded-3xl items-center"
                      onClick={() =>
                        document.getElementById("fileInputTL01").click()
                      }
                    >
                      Upload
                    </button>
                  </div>
                  <div className="mt-2">
                    {selectedFileTL01 && (
                      <div className="flex items-center">
                        <p className="mr-2">
                          Selected File:{selectedFileTL01.name}
                        </p>
                        <FaTimes
                          onClick={handleRemoveTL01}
                          className="cursor-pointer text-[#A64AC9]"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="grid grid-cols-1 grid-rows-2 justify-center">
                  <div>
                    <p className="text-center text-[#A64AC9] font-bold text-[20px]">
                      TL 02
                    </p>
                  </div>
                  <div className="justify-center">
                    <button className="bg-[#A64AC9] text-white font-bold text-[20px] lg:px-14 px-5 py-4 -mt-2 rounded-3xl items-center">
                      Download
                    </button>
                  </div>
                  <div className="justify-center">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChangeTL02}
                      style={{ display: "none" }}
                      id="fileInputTL02"
                    />
                    <button
                      className="bg-[#A64AC9] text-white font-bold text-[20px] lg:px-14 px-5 py-4 mt-4 rounded-3xl items-center"
                      onClick={() =>
                        document.getElementById("fileInputTL02").click()
                      }
                    >
                      Upload
                    </button>
                  </div>
                  <div className="mt-2">
                    {selectedFileTL02 && (
                      <div className="flex items-center">
                        <p className="mr-2">{selectedFileTL02.name}</p>
                        <FaTimes
                          onClick={handleRemoveTL02}
                          className="cursor-pointer text-[#A64AC9]"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <button
              className="bg-[#A64AC9] text-white font-bold text-[20px] lg:px-14 px-5 py-3 mt-4 rounded-3xl items-center mt-[90px]"
              onClick={openLicenceModal}
            >
              Submit
            </button>

            <p
              className="text-center mt-5 text-gray-500 cursor-pointer"
              onClick={openLicenceModal}
            >
              SKIP
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LicenseModal;
