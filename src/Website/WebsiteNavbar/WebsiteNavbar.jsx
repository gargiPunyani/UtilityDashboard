import React, { useState } from "react";
import logo from "../../Assests/webwiseLogo.png";
import {  NavLink, useNavigate } from "react-router-dom";

const WebsiteNavbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();
  const handleSideNabar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className="websiteNavbarOuter bg-white shadow-2xl p-1 border-b-2 whitespace-wrap">
      <div className="websiteNavbarInner flex justify-between items-center px-5 py-2 ">
        <div
          className="navLogo h-16 w-40 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden md:flex">
          <ul className="flex gap-5 text-lg">
            <li className="relative cursor-pointer group">
              < NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
                <span className="group-hover:text-blue-600 transition-colors duration-300">
                  Home
                </span>
                <span className="absolute left-0 bottom-0 w-1/2 h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </NavLink>
            </li>
            <li className="relative cursor-pointer group">
              < NavLink to="/about-us" className={({ isActive }) => isActive ? "text-blue-600" : "text-black"} >
                <span className="group-hover:text-blue-600 transition-colors duration-300">
                  About Us
                </span>

                <span className="absolute left-0 bottom-0 w-1/2 h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </NavLink>
            </li>
            <li className="relative cursor-pointer group">
              < NavLink to="/services" className={({ isActive }) => isActive ? "text-blue-600" : "text-black"} >
                <span className="group-hover:text-blue-600 transition-colors duration-300">
                  Services
                </span>
                <span className="absolute left-0 bottom-0 w-1/2 h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </NavLink>
            </li>
            <li className="relative cursor-pointer group">
              <NavLink to="/contact-us" className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
                <span className="group-hover:text-blue-600 transition-colors duration-300">
                  Contact
                </span>
                <span className={`absolute left-0 bottom-0 w-1/2 h-[2px] bg-blue-600 transition-transform duration-300 origin-left ${window.location.pathname === "/contact-us" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex gap-5 items-center">
          <div className="siginButton">
            <button
              className="bg-blue-600 text-white px-3 py-2 xs:px-5 text-sm xs:text-base rounded-md outline-none hover:bg-white hover:text-blue-600 hover:outline-blue-600"
              onClick={() => navigate("/login")}
            >
              Sign in
            </button>
          </div>
          <div className="flex md:hidden">
            <div onClick={handleSideNabar}>
              <p className="text-black h-2 w-7 border-b-4 border-slate-700 "></p>
              <p className="text-black h-2 w-5 border-b-4 border-slate-700 "></p>
              <p className="text-black h-2 w-3 border-b-4 border-slate-700 "></p>
            </div>
            {sidebar && (
              <div className="absolute bg-white transition-all top-[11%] w-full z-50 p-3 left-0">
                <ul className=" leading-10 gap-5 text-lg">
                  <li className="relative  cursor-pointer group">
                    < NavLink className={({ isActive }) => isActive ? "text-blue-600" : "text-black"} to="/">
                      <span className="group-hover:text-blue-600 transition-colors duration-300">
                        Home
                      </span>
                      <span className="absolute left-0 bottom-0 w-1/2  h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </NavLink>
                  </li>
                  <li className="relative cursor-pointer group">
                    < NavLink className={({ isActive }) => isActive ? "text-blue-600" : "text-black"} to="/about-us">
                      <span className="group-hover:text-blue-600 transition-colors duration-300">
                        About Us
                      </span>
                      <span className="absolute left-0 bottom-0 w-1/2  h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </NavLink>
                  </li>
                  <li className="relative cursor-pointer group">
                    < NavLink className={({ isActive }) => isActive ? "text-blue-600" : "text-black"} to="/services">
                      <span className="group-hover:text-blue-600 transition-colors duration-300">
                        Services
                      </span>
                      <span className="absolute left-0 bottom-0 w-1/2  h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </NavLink>
                  </li>
                  <li className="relative cursor-pointer group">
                    < NavLink className={({ isActive }) => isActive ? "text-blue-600" : "text-black"} to="/contact-us">
                      <span className="group-hover:text-blue-600 transition-colors duration-300">
                        Contact
                      </span>
                      <span className="absolute left-0 bottom-0 w-1/2  h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteNavbar;
