import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";

const TransactionDetails = () => {
  return (
    <>
      <div>
        <div className="flex flex-wrap dashboard-list justify-end">
          <DashboardSidebar />
          <div className="lg:w-[70%] xl:w-[75%] right-sidebar bg-[#ECECEC] w-full px-5 lg:py-[25px] pt-24">
            <h2 className="text-[26px] leading-8 md:text-[40px] md:leading-10 2xl:text-[58px] uppercase 2xl:leading-[81px] font-bold pb-[5px]">
              TRANSACTION DETAILS
            </h2>
            <div className="border-[1px] border-[#707070] rounded-[36px] bg-white md:px-[29px] md:pt-[40px] md:pb-[43px] p-5 h-[400px] sm:h-[693px]">
              <div className="overflow-scroll sm:overflow-visible no-scrollbar">
                <table className="w-[500px] sm:w-full" cellPadding={0}>
                  <thead>
                    <tr className="border-b-[1px] border-[#707070]">
                      <th className="text-start text-md leading-2 md:text-[24px] xl:text-[36px] text-[#A64AC9] sm:leading-[51px] font-bold inline-flex">
                      Transaction
                      </th>
                      <th className="text-center text-md leading-2 md:text-[24px] xl:text-[36px] text-[#A64AC9] sm:leading-[51px] font-bold">
                        
                      </th>
                      <th className="text-center text-md leading-2 md:text-[24px] xl:text-[36px] text-[#A64AC9] sm:leading-[51px] font-bold">
                        
                      </th>
                      <th className="text-end text-md leading-2 md:text-[24px] xl:text-[36px] text-[#A64AC9] sm:leading-[51px] font-bold">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    
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

export default TransactionDetails;
