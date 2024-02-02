import React, { useState, useEffect } from "react";

const UserTable = ({ onSelectUser }) => {
  // Sample data, replace with your actual user data
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Select the first user by default when component mounts
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
      {/* <h2 className="text-4xl font-bold mb-4 text-[#A64AC9]  top-0 bg-white z-10 ">
        DASHBOARD
      </h2> */}
      <div className="sticky top-0 left-0 w-full bg-white z-10 p-4">
        <h2 className="text-4xl md:text-3xl font-bold mb-4 text-[#A64AC9]">DASHBOARD</h2>
      </div>
      <div className="p-4">
        <h2 className="text-2xl md:text-xl font-bold mb-4 mt-40 text-[#A64AC9]">
          LISTED CARS
        </h2>

        <div className="overflow-y-hidden rounded-lg ">
          <div className="overflow-x-auto">
            <div className="flex items-center justify-center">
              <table className="border-separate border-spacing-y-2 text-sm  w-full">
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} onClick={() => handleUserClick(user)}>
                      <td className="px-4 py-3 text-gray-900 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg border-2 border-r-0 border-[#707070]">
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
                      <td className="px-4 py-3 text-gray-900 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg border-r-0  border-2 border-l-0 border-[#707070]">
                        <p className="whitespace-no-wrap">{user.email}</p>
                      </td>
                      <td className="px-4 py-3 text-gray-900 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg border-r-0 border-2 border-l-0 border-[#707070]">
                        <p className="whitespace-no-wrap">{user.price}</p>
                      </td>
                      <td className="px-4 py-3 text-gray-900 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg border-r-0 border-2 border-l-0 border-[#707070]">
                        <p className="whitespace-no-wrap">{user.paidStatus}</p>
                      </td>

                      <td className="px-4 py-3 text-gray-900 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg border-l-0 border-2 border-[#707070]">
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

export default UserTable;
