import React, { useEffect, useState } from "react";
import logo from "../../../Assests/webwiseLogo.png";
import logo2 from "../../../Assests/webwiseLogoAlphabet.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { retailerSidebar, sidebarItems } from "../../constant";

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [isRetailer, setIsRetailer] = useState(false);

  useEffect(() => {
    const userName = localStorage.getItem("userName:");
    if (userName === "Retail User") {
      setIsRetailer(true); 
    } else {
      setIsRetailer(false); 
    }
  }, []);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleDropdown = (id) => {
    setActiveDropdown((prev) => (prev === id ? null : id));
    setActiveSubDropdown(null);
  };

  const toggleSubDropdown = (subId) => {
    setActiveSubDropdown((prev) => (prev === subId ? null : subId));
  };

  const handleClickOutside = (event) => {
    const sidebar = document.querySelector(".sideNavOuterMost");
    if (sidebar && !sidebar.contains(event.target)) {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
  
    const handleResize = (event) => {
      requestAnimationFrame(() => {
        setIsOpen(event.matches); // `true` below 640px, `false` above
      });
    };
  
    handleResize(mediaQuery); // Run on mount
    mediaQuery.addEventListener("change", handleResize);
  
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const menuItems = isRetailer ? retailerSidebar : sidebarItems;

  return (
    <div className={`sideNavOuterMost transition-all bg-white ease-in-out duration-500 transform sticky top-0`}>
      <div className="sideNavOuter h-screen relative">
        <div className="sideNavInner cursor-pointer p-2 flex items-center justify-between">
          <div className={`logo h-16 w-40 m-auto  transition-all ease-in-out duration-500   ${isOpen ? "hidden" : "block"}`}>
            <img src={logo} alt="logo" />
          </div>
          <div className={`logoAlphabet w-20 p-2 transition-all duration-500 ease-in-out ${isOpen ? "block" : "hidden"}`}>
            <img src={logo2} alt="logo" />
          </div>
          <div
            className="hideDisplay p-2 cursor-pointer"
            onClick={toggleSidebar}
            style={{
              position: isOpen ? "absolute" : "relative",
              right: isOpen ? "-35px" : "-10px",
            }}>
            <span className="w-7 h-1 mb-1 bg-black block"></span>
            <span className="w-5 h-1 mb-1 bg-black block"></span>
            <span className="w-3 h-1 bg-black block"></span>
          </div>
        </div>

        <div className="sideNavBar">
          {menuItems.map(({ id, label, link, svg }) => (
            <div className="sideNav" key={id}>
              <div
                className={`sideNavStart flex items-center text-center justify-between p-3  transition-all ease-in-out duration-500  cursor-pointer ${
                  activeDropdown === id ? "bg-blue-100 text-blue-600" : "text-black"
                }`}
                onClick={() => toggleDropdown(id)}>
                <div className="sideNavData flex items-center gap-2" style={{ margin: isOpen ? "auto" : "" }}>
                  <div className="sideNavIcon">{svg}</div>
                  <div className="sideNavHeading transition-all duration-500 ease-in-out ">{!isOpen && <span>{label}</span>}</div>
                </div>
                {!isOpen && (
                  <FontAwesomeIcon
                    icon={activeDropdown === id ? faAngleUp : faAngleDown}
                    className="angleUpDown transition-all duration-500 ease-in-out "/>
                )}
              </div>

              {activeDropdown === id && Array.isArray(link) && link.length > 0 ? (
                <div
                  className="dropdownItems w-full text-xs z-10 bg-white shadow-md rounded p-2 absolute max-h-[60vh] overflow-auto"
                  style={{ left: `${isOpen ? "60%" : ""}`, width: `${isOpen ? "200px" : "100%"}` }}>
                  <ul>
                    {link.map(({ to, label, subLinks }, index) => (
                      <li key={index} className="sidebar p-2 text-gray-800 w-full top-0 hover:text-blue-500">
                        {subLinks ? (
                          <>
                            <div
                              className="sidebarData flex justify-between cursor-pointer"
                              onClick={() => toggleSubDropdown(index)}> 
                              <span>{label}</span>
                              <FontAwesomeIcon
                                icon={activeSubDropdown === index ? faAngleUp : faAngleDown}
                                className="angleUpDown ml-2"/>
                            </div>
                            {activeSubDropdown === index && (
                              <ul className="ml-4 mt-2 border-l border-gray-300 pl-2">
                                {subLinks.map((sub, subIndex) => (
                                  <li key={subIndex} className="sidebarList p-2 text-gray-600 hover:text-blue-500">
                                    <Link
                                      to={sub.to}
                                      onClick={() => {
                                        setActiveDropdown(null);
                                        setActiveSubDropdown(null);
                                      }}>
                                      <FontAwesomeIcon icon={faAnglesRight} className="mr-2" />
                                      {sub.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </>
                        ) : (
                          <Link
                            to={to}
                            onClick={() => {
                              setActiveDropdown(null);
                              setActiveSubDropdown(null);
                            }}>
                            <FontAwesomeIcon icon={faAnglesRight} className="mr-2" />
                            {label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                link && link.to && (
                  <li className="sideItems p-2 text-gray-800 w-full top-0 hover:text-blue-500">
                    <Link
                      to={link.to}
                      onClick={() => {
                        setActiveDropdown(null);
                        setActiveSubDropdown(null);
                      }} >
                      <FontAwesomeIcon icon={faAnglesRight} className="mr-2" />
                      {label}
                    </Link>
                  </li>
                ) )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );};

export default SideNavbar;
