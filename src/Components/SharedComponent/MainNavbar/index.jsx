import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { mainMenuItem, profileData, retailerMenuItem, SidebarBalance } from "../../constant";

const MainNav = () => {
  const [accordionData, setAccordionData] = useState({
    one: true,
    two: true,
    three: true,
    four: true,
  });
  const [isRetailer, setIsRetailer] = useState(false);

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

  const showTime = new Date();
  // console.log(showTime);
  var showDate = days[showTime.getDay()] + ", " + showTime.getDate() + ' ' + months[showTime.getMonth()] + ' ' + showTime.getFullYear();
  var displayTime = showTime.getHours() + ":" + showTime.getMinutes();
  // console.log(displayTime, "time")

  const handleOpen = (id) => {
    // console.log(id, "id");
    if (id === 1) {
      setAccordionData({
        ...accordionData, one: !accordionData.one, two: true, three: true,
      });
    }
    if (id === 2) {
      setAccordionData({
        ...accordionData, two: !accordionData.two, one: true, three: true, four: true
      });
    }
    if (id === 3) {
      setAccordionData({
        ...accordionData, three: !accordionData.three, two: true, one: true, four: true
      });
    }
    if (id === 4) {
      setAccordionData({
        ...accordionData, four: !accordionData.four, two: true, one: true, three: true
      });
    }}
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion((prev) => (prev === id ? null : id));
  };
  const navigate = useNavigate();

  const handleApi = (item) => {
    if (item.id === "logout") {
      localStorage.clear()
      navigate("/", { replace: true })
      window.history.pushState(null, null, window.location.href);
    }};

  useEffect(() => {
    const checkAuth = () => {
      if (!localStorage.getItem("token")) {
        navigate("/", { replace: true });
      }}; 
    checkAuth();
    window.history.pushState(null, null, window.location.href);
    window.addEventListener("popstate", () => {
      checkAuth();
    });

    return () => {
      window.removeEventListener("popstate", checkAuth);
    };
  }, [navigate]);
  const userName = localStorage.getItem("userName:");
  useEffect(() => {
    if (userName === "Retail User") {
      setIsRetailer(true);
    } else {
      setIsRetailer(false);
    }
  }, [userName])
  const menuItems = isRetailer ? retailerMenuItem : mainMenuItem;

  return (
    <div className="navOuterMost w-full bg-white">
      <div className="navOuter h-20 shadow-lg shadow-gray-500/10 w-full">
        <div className="navInner flex row justify-between gap-3 py-7 px-11 sm:px-12">
          <div className="navLeftOuter flex gap-6">
            {menuItems?.map((menu) => (
              <div key={menu.id} className="navLeftInner flex gap-1 cursor-pointer">
                <div className="navLeftIcon">{menu.icon}</div>
                {menu.links.length > 1 ? (
                  <>
                    <div
                      className={`navTitle hidden sm:block ${activeAccordion === menu.id ? "text-blue-600" : "text-black"
                        }`} onClick={() => toggleAccordion(menu.id)}>
                      <p>
                        {menu.title}
                      </p>
                    </div>
                    {activeAccordion === menu.id && (
                      <div className="mainNavItems absolute top-[75%] z-10 bg-white p-5 shadow-lg">
                        <ul>
                          {menu.links.map((link) => (
                            <li key={link.path} className="mb-4 hover:text-blue-700"
                            onClick={() => setActiveAccordion(null)}>
                              <Link to={link.path}>{link.label}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                ) : (
                  <Link to={menu.links[0].path} className="hidden sm:block">
                    {menu.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="navRight cursor-pointer flex gap-2 xs:gap-4 ">
            <div className="darkMode hover:text-blue-700"><svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="27px" fill="#00000"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" /></svg>
            </div>
            <div className="notification hidden md:block hover:text-blue-700">
              <svg xmlns="http://www.w3.org/2000/mdvg" height="27px" viewBox="0 -960 960 960" width="27px" fill="#00000"> <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" /> </svg>
            </div>
            <div className="People hover:text-blue-700" onClick={() => handleOpen(4)}>
              <svg xmlns="http://www.w3.org/2000/svg" height="27px" viewBox="0 -960 960 960" width="27px" fill="#00000"> <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" /> </svg>
              <div className={`profileViewOption absolute z-10 h-screen right-0 top-0 w-full xs:w-[250px] sm:w-[350px] left-0 sm:left-[65%] xs:left-[50%] lg:left-auto bg-white hidden transition-all text-gray-600 `} style={{ display: accordionData.four ? "none" : "block" }} id={4}>
                <div className="profileDropdown w-full ">
                  <div className="profileOptions text-white text-center bg-blue-700 p-5">
                    <div className="close absolute right-5 top-3 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#fff"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                    </div>
                    <div className="profileImage flex justify-center items-center w-[100px] m-auto">
                      <img src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1735284149/businessman-character-avatar-isolated_24877-60111-removebg-preview_epql6n.png" alt="profileAdmin" />
                    </div>
                    <div className="adminDetialsOut">
                      <div className="adminDetials">
                        <h3>{userName}</h3>
                      </div>
                      <div className="adminType">
                        (CBS)
                      </div>
                    </div>
                  </div>
                  <div className="profileData bg-white">
                    {profileData?.map((item) => {
                      return (
                        <div className="profilePrviewer" key={item.id} onClick={() => handleApi(item)}>
                          {item.href ? (
                            <a href={item.href}>
                              <div className="profilePrview hover:text-blue-700 flex m-4 gap-6">
                                <div className="profileIcon">
                                  {item.icon}
                                </div>
                                <div className="profileName">
                                  {item.data}
                                </div>
                              </div>
                            </a>
                          ) : (
                            <div className="profilePrview flex m-4 gap-6" key={item.id}>
                              <div className="profileIcon">
                                {item.icon}
                              </div>
                              <div className="profileLink">
                                {item.data}
                              </div>
                            </div>
                          )}
                        </div>
                      );})}
                  </div>
                </div>
              </div>
            </div>
            <div className="moreInfo hover:text-blue-700" onClick={() => handleOpen(3)}>
              <svg xmlns="http://www.w3.org/2000/svg" height="27px" viewBox="0 -960 960 960" width="27px" fill="#00000"> <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
              <div className={`moreInfoLeftOuter transition-all ease-in-out duration-700 shadow-lg h-screen w-full absolute xs:w-1/2 lg:w-1/4 z-10 left-[0%] xs:left-[50%] md:left-auto bg-white top-0 right-0 ${accordionData.three ? "opacity-0 pointer-events-none " : "opacity-100 pointer-events-auto  "}`}
                style={{ transform: accordionData.three ? "translateX(100%)" : "translateX(0)", display: accordionData.three ? "none" : "block" }}
                id={3}>
                <div className="moreInfoLeft bg-blue-700 p-5 text-white">
                  <div className="close absolute right-5 top-3 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#fff">
                      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    </svg>
                  </div>
                  <div className="time text-7xl font-semibold mt-6">{displayTime}</div>
                  <div className="date mt-5 text-xl">{showDate}</div>
                </div>
                <div className="balanceOuterMost text-black">
                  {SidebarBalance?.map((item) => {
                    return (
                      <div className="balanceOuter" key={item.id}>
                        <div className="balanceDetails flex justify-between font-semibold p-5">
                          <div className="balanceType">
                            <p>{item.type}</p>
                          </div>
                          <div className="balanceAmt">
                            <p>₹{item.amount}</p>
                          </div>
                        </div>
                        <hr />
                      </div>
                    ); })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) };

export default MainNav;
