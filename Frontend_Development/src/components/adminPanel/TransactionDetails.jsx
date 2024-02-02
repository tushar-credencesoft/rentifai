// src/components/UserTable.js
import React, { useState, useEffect } from "react";

const TransactionDetails = ({ onSelectUser }) => {
  // Sample data, replace with your actual user data
  const [selectedUser, setSelectedUser] = useState(null);
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    if (users.length > 0) {
      handleUserClick(users[0]);
    }
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    onSelectUser(user);
  };

  const users = [
    {
      id: 1,
      name: "John Doe",
      image: "/assets/images/adminPanel/pic-1.jpg",
      email: "john@gmail.com",
      price: "1000",
      paidStatus: "pre-paid",
      staus: "Completed",
    },
    {
      id: 2,
      name: "Apurba Ray",
      image: "/assets/images/adminPanel/pic-2.jpg",
      email: "abc@gmail.com",
      price: "1000",
      paidStatus: "paid",
      staus: "Completed",
    },
    {
      id: 2,
      name: "Rekha Baitharu",
      image: "/assets/images/adminPanel/pic-3.jpg",
      email: "def@gmail.com",
      price: "1000",
      paidStatus: "pre-paid",
      staus: "Completed",
    },
    {
      id: 2,
      name: "Ibtessam Fatma",
      image: "/assets/images/adminPanel/pic-4.jpg",
      email: "ghi@gmail.com",
      price: "1000",
      paidStatus: "paid",
      staus: "Completed",
    },
    {
      id: 2,
      name: "Amit Satapathy",
      image: "/assets/images/adminPanel/pic-5.jpg",
      email: "jkl@gmail.com",
      price: "1000",
      paidStatus: "pre-paid",
      staus: "Not Started",
    },
    {
      id: 2,
      name: "Priyabrata Dash",
      image: "/assets/images/adminPanel/pic-6.jpeg",
      email: "mno@gmail.com",
      price: "1000",
      paidStatus: "not-paid",
      staus: "Pending",
    },
    {
      id: 2,
      name: "Manish Singh",
      image: "/assets/images/adminPanel/pic-7.png",
      email: "pqr@gmail.com",
      price: "1000",
      paidStatus: "not-paid",
      staus: "Pending",
    },
    {
      id: 2,
      name: "Shaktiswarupa Jena",
      image: "/assets/images/adminPanel/pic-8.png",
      email: "stu@gmail.com",
      price: "1000",
      paidStatus: "pre-paid",
      staus: "Completed",
    },
    {
      id: 2,
      name: "Rajesh Biswal",
      image: "/assets/images/adminPanel/pic-9.jpeg",
      email: "duv@gmail.com",
      price: "1000",
      paidStatus: "pre-paid",
      staus: "Completed",
    },
    {
      id: 2,
      name: "Tushar Doe",
      image: "/assets/images/adminPanel/pic-10.jpg",
      email: "wxy@gmail.com",
      price: "1000",
      paidStatus: "pre-paid",
      staus: "Completed",
    },
    // Add more user data as needed
  ];

  return (
    <div className=" max-h-screen overflow-y-auto scrollbar-hide border-l-2 border-gray-300 max-h-screen">
      <div className="sticky top-0 left-0 w-full bg-white z-10 p-4">
        <h2 className="text-4xl md:text-3xl text-center font-bold mb-4 text-[#A64AC9]">
          TRANSACTION DETAILS
        </h2>
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul
            className="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="default-tab"
            data-tabs-toggle="#default-tab-content"
            role="tablist"
          >
            <li className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 text-[#A64AC9] rounded-t-lg ${
                  activeTab === "all" ? "border-[#A64AC9]" : ""
                }`}
                id="all-tab"
                onClick={() => handleTabClick("all")}
                type="button"
                role="tab"
                aria-controls="all"
                aria-selected={activeTab === "all"}
              >
                All
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 text-[#A64AC9] rounded-t-lg ${
                  activeTab === "received" ? "border-[#A64AC9]" : ""
                }`}
                id="received-tab"
                onClick={() => handleTabClick("received")}
                type="button"
                role="tab"
                aria-controls="received"
                aria-selected={activeTab === "received"}
              >
                Received
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className={`inline-block p-4 text-[#A64AC9] border-b-2 rounded-t-lg ${
                  activeTab === "transfer" ? "border-[#A64AC9]" : ""
                }`}
                id="transfer-tab"
                onClick={() => handleTabClick("transfer")}
                type="button"
                role="tab"
                aria-controls="transfer"
                aria-selected={activeTab === "transfer"}
              >
                Transfer
              </button>
            </li>
            {/* Add similar buttons for other tabs */}
          </ul>
        </div>
      </div>
      <div className="p-4">
        <div id="default-tab-content">
          {/* Profile Tab */}
          {activeTab === "all" && (
            <div
              className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="all"
              role="tabpanel"
              aria-labelledby="all-tab"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <strong className="font-medium text-gray-800 dark:text-white">
                  All Transaction
                </strong>
              </p>
            </div>
          )}
          {/* Dashboard Tab */}
          {activeTab === "received" && (
            <div
              className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="received"
              role="tabpanel"
              aria-labelledby="received-tab"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <strong className="font-medium text-gray-800 dark:text-white">
                  Received Transaction
                </strong>
              </p>
            </div>
          )}

          {activeTab === "transfer" && (
            <div
              className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="transfer"
              role="tabpanel"
              aria-labelledby="transfer-tab"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <strong className="font-medium text-gray-800 dark:text-white">
                  Transfer Transaction
                </strong>
              </p>
            </div>
          )}
          {/* Add similar divs for other tabs */}
        </div>

        <div className="overflow-y-hidden rounded-lg ">
          <div className="overflow-x-auto">
            <div className="flex items-center justify-center">
              <table className="border-separate border-spacing-y-2 text-sm  w-full">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-left">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      User name
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Payment Status
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Transaction
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} onClick={() => handleUserClick(user)}>
                      <td className="text-gray-900  border border-r-0 border-gray-200">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img
                              className="h-full w-full rounded-full  drop-shadow-2xl"
                              src={user.image}
                              alt=""
                              onError={(e) => {
                                e.target.src = "/assets/images/Logo.png";
                                e.target.alt = "Error loading image";
                              }}
                            />
                          </div>
                          <div className="ml-3">
                            <p className="whitespace-no-wrap">{user.name}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-gray-900  border-r-0  border border-l-0 border-gray-200">
                        <p className="whitespace-no-wrap">{user.email}</p>
                      </td>
                      <td className="px-4 py-3 text-gray-900 border-r-0 border-l-0 border border-gray-200r-[#707070]">
                        <p className="whitespace-no-wrap">{user.price}</p>
                      </td>
                      <td className="px-4 py-3 text-gray-900 border-r-0 border-l-0 border border-gray-200r-[#707070]">
                        <p className="whitespace-no-wrap">{user.paidStatus}</p>
                      </td>

                      <td className="px-4 py-3 text-gray-900 border-l-0 border border-gray-200">
                        <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">
                          {user.staus}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
