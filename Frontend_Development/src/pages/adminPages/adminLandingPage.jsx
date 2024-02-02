
import React, { useState } from "react";
import LeftMenu from "../../components/adminPanel/LeftMenu";
import RecentActivities from "../../components/adminPanel/RecentActivities";
import FeaturedCars from "../../components/adminPanel/FeaturedCar";
import TransactionDetails from "../../components/adminPanel/TransactionDetails";
import UserTable from "../../components/adminPanel/UserTable";

const AdminLandingPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState("dashboard");

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  const handleSelectMenu = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div className="scrollbar-hide">
      <div className="flex">
        <div className="w-1/5 h-full">
          <LeftMenu
            onSelectMenu={handleSelectMenu}
            selectedMenu={selectedMenu}
          />
        </div>

        {selectedMenu === "dashboard" && (
          <div className="w-2/3  h-full">
            <UserTable onSelectUser={handleSelectUser} />
          </div>
        )}
        {selectedMenu === "featuredCars" && (
          <div className="w-4/5 h-full">
            <FeaturedCars />
          </div>
        )}
         {selectedMenu === "transactionDetails" && (
          <div className="w-4/5 h-full">
            <TransactionDetails  onSelectUser={handleSelectUser} />
          </div>
        )}

        {selectedMenu === "dashboard" && (
          <div className="w-1/5 m-2">
            {selectedUser && <RecentActivities selectedUser={selectedUser} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminLandingPage;
