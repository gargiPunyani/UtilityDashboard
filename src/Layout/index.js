import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import MainNav from "../Components/SharedComponent/MainNavbar/MainNav";
import SideNavbar from "../Components/SharedComponent/SideNavbar/SideNavbar";

const Layout = () => {
  const [openPopup, setOpenPopup] = useState(null);
  const navbarRef = useRef(null);
  const sidebarRef = useRef(null);;
  
  const handleTogglePopup = (id) => {
    setOpenPopup((prev) => (prev === id ? null : id));
  };

  const handleClickOutside = (e) => {
    if (
      (navbarRef.current && navbarRef.current.contains(e.target)) ||
      (sidebarRef.current && sidebarRef.current.contains(e.target))
    ) {
      return; 
    }
    setOpenPopup(null);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="layoutOuterMost">
      <div className="layoutOut">
        <div className="layoutInner w-full flex">
          <div className="layoutSide bg-white " ref={sidebarRef}>
            <SideNavbar
              openPopup={openPopup}
              handleTogglePopup={handleTogglePopup}
            />
          </div>

          <div className="layoutMain w-full" >
          <div className="mainNav " ref={navbarRef}>
              <MainNav openPopup={openPopup} handleTogglePopup={handleTogglePopup} />
            </div>

            {/* content or child components */}
            <main className="outlet flex-1 bg-gray-100">
              <Outlet />
            </main>
            {/* <div className="footerSection bg-white bottom-0 w-full absolute left-[50%] translate-x-[-50%]  p-3">
              <Footer/>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
