import React from "react";
import logo from "../../Assests/webwiseLogo.png";
import { Link, useNavigate } from "react-router-dom";

const WebsiteNavbar = () => {
  const navigate = useNavigate();
  return (
    <div className="websiteNavbarOuter bg-white shadow-lg ">
      <div className="websiteNavbarInner flex justify-between items-center px-5 py-2 ">
        <div className="navLogo h-16 w-40 cursor-pointer">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <ul className="flex gap-5 text-lg">
            <li className="relative cursor-pointer group">
              <Link to="/">
                <span className="text-black group-hover:text-blue-600 transition-colors duration-300">
                  Home
                </span>
                <span className="absolute left-0 bottom-0 w-1/2 h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </li>
            <li className="relative cursor-pointer group">
              <Link to="/about-us">
                <span className="text-black group-hover:text-blue-600 transition-colors duration-300">
                  About Us
                </span>

                <span className="absolute left-0 bottom-0 w-1/2 h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </li>
            <li className="relative cursor-pointer group">
              <Link to="/services">
                <span className="text-black group-hover:text-blue-600 transition-colors duration-300">
                  Services
                </span>
                <span className="absolute left-0 bottom-0 w-1/2 h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </li>
            <li className="relative cursor-pointer group">
              <Link to="/">
                <span className="text-black group-hover:text-blue-600 transition-colors duration-300">
                  Contact
                </span>
                <span className="absolute left-0 bottom-0 w-1/2 h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="siginButton">
          <button
            className="bg-blue-600 text-white py-2 px-5 text-base rounded-md outline-none hover:bg-white hover:text-blue-600 hover:outline-blue-600"
            onClick={() => navigate("/login")}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebsiteNavbar;
