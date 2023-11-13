import React from "react";
import SideNavbar from "../../Components/Admin/SideNavbar";
import AdminUser from "../../Components/Admin/AdminUser";
import AdminHeader from "../../Components/Admin/AdminHeader";

const AdminDashboardPage = () => {
  return (
    <div>
      <AdminHeader />
      <div className="flex">
        <SideNavbar />

        <div className="w-full">
          <AdminUser />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
