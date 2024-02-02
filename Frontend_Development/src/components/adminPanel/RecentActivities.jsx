import React from "react";

const RecentActivities = ({ selectedUser }) => {
  return (
    <div className="h-full  p-2 rounded-lg border-2 border-[#707070]">
      {selectedUser && (
        <div className="h-full flex flex-col">
          <div className="flex  items-center justify-center mb-4">
            <img
              src={selectedUser?.image}
              alt={`${selectedUser?.name}'s Profile`}
              className="w-48 h-48 rounded-full mr-4 drop-shadow-2xl"
              onError={(e) => {
                e.target.src = "/assets/images/Logo.png";
                e.target.alt = "Error loading image";
              }}
            />
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold text-[#A64AC9]">
              {selectedUser?.name}
            </h2>
            {/* Add additional user details if needed */}
          </div>
          <div className="flex-grow">
            <h3 className="text-sm  mb-2 text-center text-[#A64AC9]">
              {selectedUser?.email}
            </h3>
            <div className="rounded-lg mt-10">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xs md:text-sm font-semibold text-[#A64AC9]">
                    RECENT ACTIVITIES
                  </h2>
                </div>
                <button className="bg-[#A64AC9] rounded-xl text-white px-2">Click Me</button>
              </div>
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex items-center">
                  <table className="border-separate border-spacing-y-2 text-sm  w-full">
                    <tbody className="text-gray-500">
                      <tr className="">
                        <td className="px-1 py-1 text-gray-900 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg border-2 border-r-0 border-[#707070]">
                          <div className="flex items-center justify-center">
                            <div className="h-6 w-6 flex-shrink-0 flex items-center drop-shadow-2xl">
                              <img
                                className="h-full w-full rounded-full"
                                src={selectedUser?.image}
                                alt=""
                                onError={(e) => {
                                  e.target.src = "/assets/images/Logo.png";
                                  e.target.alt = "Error loading image";
                                }}
                              />
                            </div>
                            <div className="ml-1 text-[0.75rem]">
                              <p className="whitespace-no-wrap">
                                {selectedUser?.name}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-2 py-2   text-gray-900 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg text-sm border-2 border-r-0 border-l-0 border-[#707070]">
                          <p className="whitespace-no-wrap">
                            {selectedUser?.email}
                          </p>
                        </td>
                        <td className="px-2 py-2 text-gray-900 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg text-sm border-2 border-l-0 border-[#707070]">
                          <p className="whitespace-no-wrap">
                            {selectedUser?.price}
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Add your recent activities data if available in your user object */}
            {/* <p className="text-center">
              No recent activities available for {selectedUser?.name}.
            </p> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentActivities;
