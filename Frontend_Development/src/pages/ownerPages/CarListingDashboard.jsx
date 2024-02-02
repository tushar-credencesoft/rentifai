import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";
import LicenseModal from "../LicenceModal";
import "./CarListingDashboard.css";

const CarListingDashboard = () => {
  const [modalState, setModalState] = useState({
    isLicenseModalOpen: false,
  });
  const location = useLocation();
  useEffect(() => {
    if (location.state) {
      setModalState((prev) => {
        return { ...prev, isLicenseModalOpen: true };
      });
    }
  }, []);

  return (
    <>
      <div>
        <div className="flex flex-wrap dashboard-list justify-end">
          <DashboardSidebar />
          <div className="bg-[#ECECEC] lg:w-[70%] xl:w-[75%] right-sidebar w-full  px-5 py-10 2xl:px-[63px]">
            <h2 className="text-[26px] leading-8 md:text-[40px] md:leading-10 2xl:text-[58px] uppercase 2xl:leading-[81px] font-bold pb-[5px]">
              Dashboard Overview
            </h2>
            <div className="block 2xl:flex 2xl:flex-wrap 2xl:pt-0 pt-[15px] justify-between">
              <div className="2xl:max-w-[65.87%] max-w-full">
                <div className="md:pb-[33px] pb-10">
                  <div className="border-[1px] border-[#707070] flex flex-wrap sm:flex-nowrap flex-col-reverse sm:flex-row rounded-[36px] bg-white md:ps-[42px] md:pe-[42px] md:pt-3.5 md:pb-3.5  p-5 items-center justify-between 2xl:justify-start">
                    <div className="w-full sm:max-w-[531px] max-w-full sm:me-[37px] me-0">
                      <h4 className="text-[25px] sm:text-[30px] leading-8 lg:text-[41px] lg:leading-[47px] md:text-[35px] md:leading-[40px] font-bold 2xl:pb-1.5 pb-[15px] 2xl:pt-0 pt-[15px]">
                        Get where you need to go with our{" "}
                        <span className="text-[#A64AC9]">Service</span>
                      </h4>
                      <p className="md:text-xl leading-6 sm:leading-[23px] text-lg">
                        Budget-friendly car rental for road trips, city visits
                        and more. Book now and start exploring
                      </p>
                      <div className="text-center sm:text-start">
                        <Link
                          to="#"
                          className="sign-up inline-block font-bold capitalize mt-[15px] bg-[#A64AC9] py-[6px] px-3 rounded-[10px] hover:bg-transparent hover:text-[#A64AC9] text-[22px] leading-[25px] text-white border-[4px] border-[#A64AC9] transition-all ease-in-out duration-[300ms]"
                        >
                          Start Exploring
                        </Link>
                      </div>
                    </div>
                    <div className="">
                      <img src={"/road-trip.png"} className="" />
                    </div>
                  </div>
                </div>
                <div className="border-[1px] border-[#707070] rounded-[36px] bg-white md:px-[29px] md:pt-[45px] md:pb-[43px] p-5 h-[400px] sm:h-[693px]">
                  <div className="flex items-center justify-between md:pe-[51px] pe-0">
                    <h4 className="sm:leading-[43px] text-[20px] sm:text-[37px] leading-8 font-bold max-w-[531px]">
                      Car listings
                    </h4>
                    <select
                      name=""
                      id=""
                      className='text-[14px] sm:text-xl leading-7 rounded-[15px] border-[1px] border-[#707070] py-2 ps-[7px] max-w-[170px] w-full focus:outline-0 cursor-pointer bg-[url("/chevron-down.svg")] bg-no-repeat bg-[95%_55%] bg-[length:23px] appearance-none'
                    >
                      <option value="">This week</option>
                      <option value="">Today</option>
                      <option value="">Yesterday</option>
                      <option value="">This Month</option>
                    </select>
                  </div>
                  <div className="pt-[33px] overflow-scroll sm:overflow-visible no-scrollbar">
                    <table className="w-[700px] sm:w-full" cellPadding={0}>
                      <thead>
                        <tr className="border-b-[1px] border-[#707070]">
                          <th className="text-start font-normal text-md leading-2 sm:text-[19px] text-[#707070] sm:leading-[27px] inline-flex">
                            No
                          </th>
                          <th className="text-center font-normal text-md leading-2 sm:text-[19px] text-[#707070] sm:leading-[27px]">
                            Client Name
                          </th>
                          <th className="text-center font-normal text-md leading-2 sm:text-[19px] text-[#707070] sm:leading-[27px]">
                            Car type
                          </th>
                          <th className="text-center font-normal text-md leading-2 sm:text-[19px] text-[#707070] sm:leading-[27px]">
                            Car Number
                          </th>
                          <th className="text-center font-normal text-md leading-2 sm:text-[19px] text-[#707070] sm:leading-[27px]">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="font-bold pt-4 text-[17px] leading-6 text-center inline-flex px-[8px]">
                            1.
                          </td>
                          <td className="font-bold pt-4 text-[17px] leading-6 text-center">
                            Jin kazama
                          </td>
                          <td className="font-bold pt-4 text-[17px] leading-6 text-center">
                            Toyota Supra
                          </td>
                          <td className="font-bold pt-4 text-[17px] leading-6 text-center">
                            1234567
                          </td>
                          <td className="text-[#025CA3] text-[17px] text-center leading-[24px] font-bold pt-4">
                            On Going
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="2xl:max-w-[34.13%] income-box max-w-full ps-0 pt-10 2xl:pt-0 flex flex-wrap 2xl:block gap-5 user-side">
                <div className="border-[1px] border-[#707070] w-full md:w-[calc(50%-10px)] 2xl:w-auto text-center rounded-[36px] bg-white 2xl:px-[69px] md:px-[35px] md:py-[13px] p-5 user-profile">
                  <div className="border-[1px] border-[#707070] 2xl:h-[171px] 2xl:w-[171px] h-[100px] w-[100px] rounded-full mx-auto mb-2.5"></div>
                  <p className="2xl:text-[33px] text-[25px] leading-[41px]">
                    Ashwani Kumar
                  </p>
                  <Link
                    to="#"
                    className="sign-up inline-block capitalize mt-[15px] bg-[#A64AC9] py-[6px] px-[35px] 2xl:px-[70px] rounded-[10px] hover:bg-transparent hover:text-[#A64AC9] text-[21px] leading-[25px] text-white border-[4px] border-[#A64AC9] transition-all ease-in-out duration-[300ms]"
                  >
                    Edit profile
                  </Link>
                </div>
                <div className="border-[1px] border-[#707070] w-full md:w-[calc(50%-10px)] 2xl:w-auto rounded-[36px] mt-0 2xl:mt-[46px] bg-white md:px-[25px] md:pt-[15px] md:pb-10 p-5">
                  <p className="text-[25px] leading-[35px] font-bold">
                    Total INCOME
                  </p>
                  <div className="border-b-[1px] border-[#707070] w-full h-[1px] mb-[20px]">
                    {" "}
                  </div>
                  <p className="text-[25px] leading-[35px] font-bold">
                    $7435.25
                  </p>
                  <p className="text-lg leading-[21px] font-bold pt-3">
                    +72 from last month
                  </p>
                </div>
                <div className="border-[1px] border-[#707070] w-full md:w-[calc(50%-10px)] 2xl:w-auto rounded-[36px] mt-0 2xl:mt-[46px] bg-white md:px-[25px] md:pt-[17px] md:pb-[17px] p-5">
                  <p className="text-[25px] leading-[35px] font-bold">INCOME</p>
                  <div className="border-b-[1px] border-[#707070] w-full h-[1px] mb-[20px]">
                    {" "}
                  </div>
                  <p className="text-[25px] leading-[35px] font-bold">
                    $7435.25
                  </p>
                  <div className="text-center pt-[30px]">
                    <Link
                      to="#"
                      className="text-[21px] leading-[31px] inline-block uppercase text-white px-8 py-1 rounded-[21px] font-bold bg-[#0BD476] shadow-[6px_9px_6px_#00000029] border-[1px] border-[#0BD476] hover:bg-transparent hover:text-[#0BD476] transition-all ease-in-out duration-[300ms]"
                    >
                      Withdraw
                    </Link>
                  </div>
                </div>
                <div className="border-[1px] border-[#707070] w-full md:w-[calc(50%-10px)] 2xl:max-w-[400px] 2xl:w-full rounded-[36px] mt-0 2xl:mt-[46px] bg-white h-[200px] p-5"></div>
              </div>
            </div>
          </div>
        </div>
        {modalState.isLicenseModalOpen && (
          <LicenseModal state={modalState} setState={setModalState} />
        )}
      </div>
    </>
  );
};

export default CarListingDashboard;
