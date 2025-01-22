import React from "react";
import { Outlet } from "react-router-dom";
import SideNavbar from "../SharedComponent/SideNavbar";
import MainNav from "../SharedComponent/MainNavbar";

const Layout = () => {
  return (
    <div className="layoutSide flex bg-white">
      {/* Sidebar */}
      <SideNavbar />
      {/* Main Content */}
      <div className="layoutMain flex-1 flex flex-col">
        {/* Navbar */}
       <MainNav />

        {/* Content */}
        <main className="flex-1 p-2 bg-gray-100">
          <Outlet /> {/* This renders the child components based on the route */}
        </main>
      </div>
    </div>
  );
};

export default Layout;


