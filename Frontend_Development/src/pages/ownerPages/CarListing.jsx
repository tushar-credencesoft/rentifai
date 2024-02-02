import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";

const CarListing = () => {
  return (
    <>
      <div>
        <div className="flex flex-wrap dashboard-list justify-end">
          <DashboardSidebar />
          <div className="lg:w-[70%] xl:w-[75%] right-sidebar bg-[#ECECEC] w-full px-5 lg:py-[25px] pt-24">
            <h2 className="text-[26px] leading-8 md:text-[40px] md:leading-10 2xl:text-[58px] uppercase 2xl:leading-[81px] font-bold pb-[5px]">
              CAR LISTINGS
            </h2>
            <div className="border-[1px] border-[#707070] rounded-[36px] bg-white md:px-[29px] md:pt-[40px] md:pb-[43px] p-5 h-[400px] sm:h-[693px]">
              <div className="overflow-scroll sm:overflow-visible no-scrollbar">
                <table className="w-[500px] sm:w-full" cellPadding={0}>
                  <thead>
                    <tr className="border-b-[1px] border-[#707070]">
                      <th className="text-start text-md leading-2 md:text-[24px] xl:text-[36px] text-[#A64AC9] sm:leading-[51px] font-bold inline-flex">
                      Cars
                      </th>
                      <th className="text-center text-md leading-2 md:text-[24px] xl:text-[36px] text-[#A64AC9] sm:leading-[51px] font-bold">
                      Car Number
                      </th>
                      <th className="text-center text-md leading-2 md:text-[24px] xl:text-[36px] text-[#A64AC9] sm:leading-[51px] font-bold">
                      Tsl
                      </th>
                      <th className="text-end text-md leading-2 md:text-[24px] xl:text-[36px] text-[#A64AC9] sm:leading-[51px] font-bold">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold pt-[34px] xl:text-[30px] md:text-[25px] leading-[34px] text-center inline-flex">
                      Toyota Supra
                      </td>
                      <td className="font-bold pt-[34px] xl:text-[30px] md:text-[25px] leading-[34px] text-center">
                      Hr 14 9909
                      </td>
                      <td className="font-bold pt-[34px] xl:text-[30px] md:text-[25px] leading-[34px] text-center">
                      Approved
                      </td>
                      <td className="text-[#1D99CE] xl:text-[30px] md:text-[25px] leading-[34px] text-[17px] text-end leading-[24px] font-bold pt-[34px]">
                        On Going
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarListing;
