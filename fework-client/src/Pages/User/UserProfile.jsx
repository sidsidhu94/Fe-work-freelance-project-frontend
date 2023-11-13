import React from "react";
import Profile from "../../Components/User/Profile";
import HomePageHeader from "../../Components/User/HomePageHeader";
import AddWork from "../../Components/User/AddWork";
import UserWorkCard from "../../Components/User/UserWorkCard";

const UserProfile = () => {
  return (
    <div>
      <HomePageHeader />
      <div className="flex w-screen">
        <div>
          <Profile />
        </div>
        <div className="flex-wrap  w-full gap-10 mt-16 ml-20 ">
          <AddWork />

          <div className="w-full mt-10">
            <UserWorkCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
