import React, { useEffect, useState } from "react";
import logo from "../../../Assests/webwiseLogo.png";
import logo2 from "../../../Assests/webwiseLogoAlphabet.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faAnglesRight} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { sidebarItems } from "../../constant";

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleDropdown = (id) => {
    setActiveDropdown((prev) => (prev === id ? null : id));
  };

  const handleClickOutside = (event) => {
    const sidebar = document.querySelector(".sideNavOuterMost");
    if (sidebar && !sidebar.contains(event.target)) {
      setActiveDropdown(null);
    }
  };
  
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`sideNavOuterMost transition-all bg-white ease-in-out duration-500 transform ${
        isOpen ? "translate-x-0" : "translate-x-0"
      }`}
    >
      <div className="sideNavOuter h-screen relative">
        <div className="sideNavInner cursor-pointer p-2 flex items-center justify-between">
          <div
            className={`logo h-16 w-40 m-auto transition-transform ${
              isOpen ? "hidden" : "block"
            }`}
          >
            <img src={logo} alt="logo" />
          </div>
          <div
            className={`logoAlphabet w-20 p-2 transition-transform ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <img src={logo2} alt="logo" />
          </div>
          <div
            className="hideDisplay p-2 cursor-pointer"
            onClick={toggleSidebar}
            style={{
              position: `${isOpen ? "absolute" : "relative"}`,
              right: `${isOpen ? "-35px" : "-10px"}`,
            }}
          >
            <span className="w-7 h-1 mb-1 bg-black block"></span>
            <span className="w-5 h-1 mb-1 bg-black block"></span>
            <span className="w-3 h-1 bg-black block"></span>
          </div>
        </div>

        <div className="sideNavBar ">
          
          {sidebarItems.map(({ id, label, link, svg }) => (
            <div className="sideNav" key={id}>
              <div
                className={`sideNavStart flex items-center text-center justify-between p-3 cursor-pointer ${
                  activeDropdown === id
                    ? "bg-blue-100 text-blue-600"
                    : "text-black"
                }`}
                onClick={() => toggleDropdown(id)}
              >
                <div
                  className="sideNavData flex items-center gap-2"
                  style={{ margin: `${isOpen ? "auto" : ""}` }}
                >
                  <div className="sideNavIcon">{svg}</div>
                  <div className="sideNavHeading">
                    {!isOpen && <span>{label}</span>}
                  </div>
                </div>
                {!isOpen && (
                  <FontAwesomeIcon
                    icon={activeDropdown === id ? faAngleUp : faAngleDown}
                    className="transition-transform"
                  />
                )}
              </div>
              {activeDropdown === id && link.length > 0 && (
                <div
                  className="dropdownItems left-[40%] w-full text-xs z-10 bg-white shadow-md rounded p-2"
                  style={{
                    width: `${activeDropdown ? "250px" : "100%"}`,
                    position: `${activeDropdown ? "absolute" : "absolute"}`,
                  }}
                >
                  <ul>
                    {link.map(({ to, label }, index) => (
                      <li
                        key={index}
                        className="p-2 text-gray-800 w-full top-0 hover:text-blue-500"
                      >
                        <Link to={to}>
                          <FontAwesomeIcon
                            icon={faAnglesRight}
                            className="mr-2"
                          />
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;

// import React, { useEffect, useState } from "react";
// import logo from "../../../Assests/webwiseLogo.png";
// import logo2 from "../../../Assests/webwiseLogoAlphabet.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faAngleDown,
//   faAnglesRight,
//   faAngleUp,
// } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

// const SideNavbar = () => {
//   const [isopen, setIsOpen] = useState(false);
//   // const [ isClickInside ,setIsClickInside] = useState(false)
//   const [dropdown, setDropdown] = useState({
//     one: false,
//     two: false,
//     three: false,
//     four: false,
//     five: false,
//     six: false,
//   });
//   const handleHideShow = () => {
//     setIsOpen(!isopen);
//     // console.log(isopen);
//   };
//   const handleDropdown = (id) => {
//     // console.log(id);
//     if (id === 1) {
//       setDropdown({ ...dropdown, one: !dropdown.one, two: false, three: false, four: false, five: false, six: false, });
//     }
//     if (id === 2) {
//       setDropdown({ ...dropdown, two: !dropdown.two, one: false, three: false, four: false, five: false, six: false, });
//     }
//     if (id === 3) {
//       setDropdown({ ...dropdown, three: !dropdown.three, two: false, one: false, four: false, five: false, six: false, });
//     }
//     if (id === 4) {
//       setDropdown({ ...dropdown, four: !dropdown.four, two: false, three: false, five: false, six: false, one: false, });
//     }
//     if (id === 5) {
//       setDropdown({ ...dropdown, five: !dropdown.five, one: false, three: false, two: false, six: false, four: false, });
//     }
//     if (id === 6) {
//       setDropdown({ ...dropdown, six: !dropdown.six, two: false, one: false, four: false, five: false, three: false,});
//     }
//   };
//   const handleClickOutside = (event) => {
//     const navElement = document.querySelector(".sideNavOuterMost");
//     const dropdownElement = document.querySelector(".dropdownItems");

//     if (
//       navElement &&
//       dropdownElement &&
//       !navElement.contains(event.target) &&
//       !dropdownElement.contains(event.target)
//     ) {
//       setDropdown({
//         one: false,
//         two: false,
//         three: false,
//         four: false,
//         five: false,
//         six: false,
//       });
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div
//       className={`sideNavOuterMost transition-all bg-white ease-in-out duration-700 delay-700 transform ${
//         isopen
//           ? "translateX(0) pointer-events-auto"
//           : "translateX(100deg) pointer-events-auto "
//       }`}
//     >
//       <div className={`sideNavOuter h-screen relative `}>
//         <div
//           className="sideNavInner cursor-pointer  p-1 flex flex-row gap-3 items-center text-xs "
//           style={{ marginTop: `${isopen ? "10px" : "0px"}` }}
//         >
//           <div
//             className="logo h-16 w-40 m-auto transition-all ease-in-out duration-300"
//             style={{
//               display: `${isopen ? "none" : "block"}`,
//               transform: `${isopen ? "translateX(100%)" : "translateX(0) "}`,
//             }} >
//             <img src={logo} alt="logo" />
//           </div>
//           <div
//             className={`logoAlphabet  display ${ isopen ? "block" : "hidden" } w-20 p-2 ease-in-out sm:display ${ isopen ? "block" : "hidden" } duration-300 overflow-hidden transform ${ isopen ? "translateX(100%) block" : "translateX(0) none" }`} >
//             <img src={logo2} alt="logo" />
//           </div>
//           <div
//             className="hideDisplay flex flex-col p-1"
//             onClick={handleHideShow}
//             style={{
//               position: `${isopen ? "absolute" : "relative"}`,
//               right: `${isopen ? "-35px" : "0"}`,
//             }} >
//             <span className="w-7 h-1 mb-1 bg-black"></span>
//             <span className="w-5 h-1 mb-1 bg-black"></span>
//             <span className="w-3 h-1 mb-1 bg-black"></span>
//           </div>
//         </div>
//         <div className="sideNavBar">
//           <div
//             className="sideNavStart relative text-center flex p-3 justify-between cursor-pointer items-center"
//             onClick={() => handleDropdown(1)}
//             style={{
//               justifyContent: `${isopen ? "center" : ""}`,
//               fill: `${dropdown.one ? "#3b82f6b0" : "#0056DC"}`,
//               marginTop: `${isopen ? "10px" : ""}`,
//             }} >
//               <div className="navdata flex gap-2 items-center ml-1">
//             <div className="sideNavIcon">
//               <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill=" "> <path d="M280-400q17 0 28.5-11.5T320-440q0-17-11.5-28.5T280-480q-17 0-28.5 11.5T240-440q0 17 11.5 28.5T280-400Zm0-160q17 0 28.5-11.5T320-600q0-17-11.5-28.5T280-640q-17 0-28.5 11.5T240-600q0 17 11.5 28.5T280-560Zm80 160h360v-80H360v80Zm0-160h360v-80H360v80Zm-40 440v-80H160q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v480q0 33-23.5 56.5T800-200H640v80H320ZM160-280h640v-480H160v480Zm0 0v-480 480Z" />
//               </svg>
//             </div>
//             <div
//               className="sideNavItem ease-in-out duration-300 overflow-hidden transform"
//               style={{ display: `${isopen ? "none" : "block"}`, transform: `${isopen ? "translateX(100%)" : "translateX(0) "}`, color: `${dropdown.one ? "#0056DC" : ""}`,
//               }}>
//               <p> Dashboard</p>
//             </div>
//             </div>
//             <div
//               className="angleDown ease-in-out duration-300 overflow-hidden transform"
//               style={{ display: `${isopen ? "none" : "block"}` }} >
//             <FontAwesomeIcon icon={faAngleDown} className="block" style={{ display: `${dropdown.one ? "none " : "block"}` }}/>
//             <FontAwesomeIcon icon={faAngleUp} className="hidden" style={{   display: `${dropdown.one ? "block " : "none"}`,   color: `${dropdown.one ? "#0056DC " : ""}`, }}/>
//             </div>
//           </div>
//           <div
//             id={1} onClick={(e) => e.stopPropagation()}
//             className=" dropdownItems w-[40vh] absolute left-[70%] shadow-2xl shadow-slate-400 rounded-md h-auto cursor-pointer hidden text-xs z-10 bg-white text-justify p-1 "
//             style={{ display: `${dropdown.one ? "block" : "none"}` }} >
//             {/* {openPopup === "sideItem1" && <div className="popup" > */}
//             <ul>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400  "> <Link to="/dashboard"> <FontAwesomeIcon icon={faAnglesRight} /> Admin Dashboard </Link>
//               </li>
//             </ul>
//             {/* </div>} */}
//           </div>
//           <div
//             className="sideNavStart relative text-center flex p-3 justify-between cursor-pointer items-center"
//             onClick={() => handleDropdown(2)}
//             style={{
//               justifyContent: `${isopen ? "center" : ""}`,
//               fill: `${dropdown.two ? "#3b82f6b0" : "#0056DC"}`,
//               marginTop: `${isopen ? "10px" : "5px"}`,
//             }} >
//               <div className="navdata flex gap-2 items-center ml-1">
//             <div className="sideNavIcon">
//               <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill=" " > <path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z" />
//               </svg>
//             </div>
//             <div
//               className=" sideNavItem transition-all ease-in delay-75"
//               style={{ display: `${isopen ? "none" : "block"}`, color: `${dropdown.two ? "#0056DC" : ""}`,
//               }} >
//               <p> Members</p>
//             </div>
//             </div>
//             <div
//               className="angleDown transition-all ease-in delay-75"
//               style={{ display: `${isopen ? "none" : "block"}` }} >
//             <FontAwesomeIcon icon={faAngleDown} className="block" style={{ display: `${dropdown.two ? "none " : "block"}` }}/>
//             <FontAwesomeIcon icon={faAngleUp} className="hidden" style={{   display: `${dropdown.two ? "block " : "none"}`,   color: `${dropdown.two ? "#0056DC " : ""}`, }}/>
//             </div>
//           </div>
//           <div
//             id={2}onClick={(e) => e.stopPropagation()}
//             className="dropdownItems w-[40vh] absolute left-[70%] shadow-2xl shadow-slate-400 rounded-md h-auto z-10  transition-all text-justify duration-300 text-xs ease-in-out cursor-pointer hidden bg-white p-1"
//             style={{ display: `${dropdown.two ? "inline-block" : "none"}` }} >
//             {/* {openPopup === "sideItem2" && <div className="popup"> */}
//             <ul>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400 "> <Link to="/field-executive"> <FontAwesomeIcon icon={faAnglesRight} /> FieldExecutive(FE) (1) </Link>
//               </li>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400 uppercase "> <Link to="/franchise"> <FontAwesomeIcon icon={faAnglesRight} /> FRANCHISE(FSDS) </Link>
//               </li>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400 uppercase "> <Link to="/super-distributor"> <FontAwesomeIcon icon={faAnglesRight} /> SuperDistributor(SDS) (0) </Link>
//               </li>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400 uppercase "> <Link to="/distributor-ds"> <FontAwesomeIcon icon={faAnglesRight} /> Distributor(DS) (1) </Link>
//               </li>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400 uppercase "> <Link to="/retailer"> <FontAwesomeIcon icon={faAnglesRight} /> RETAILER(RT) (2) </Link>
//               </li>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400  "> <Link to={"/not-working"}> <FontAwesomeIcon icon={faAnglesRight} /> Not Working Members (0) </Link>
//               </li>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400  "> <Link to="/suspended-user"> <FontAwesomeIcon icon={faAnglesRight} /> Suspended User </Link>
//               </li>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400  "> <Link to="/not-working-user-list"> <FontAwesomeIcon icon={faAnglesRight} /> Not Working User (0) </Link>
//               </li>
//             </ul>
//             {/* </div>} */}
//           </div>
//           <div
//             className="sideNavStart relative text-center flex p-3 justify-between cursor-pointer items-center"
//             onClick={() => handleDropdown(3)}
//             style={{
//               justifyContent: `${isopen ? "center" : ""}`,
//               fill: `${dropdown.three ? "#3b82f6b0" : "#0056DC"}`,
//               marginTop: `${isopen ? "10px" : "5px"}`,
//             }} >
//               <div className="navdata flex gap-2 items-center ml-1">
//             <div className="sideNavIcon">
//               <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill=" "> <path d="M320-480v-80h320v80H320Zm0-160v-80h320v80H320Zm-80 240h300q29 0 54 12.5t42 35.5l84 110v-558H240v400Zm0 240h442L573-303q-6-8-14.5-12.5T540-320H240v160Zm480 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80Zm-480-80v-640 640Zm0-160v-80 80Z" />
//               </svg>
//             </div>
//             <div
//               className=" sideNavItem transition-all ease-in delay-75"
//               style={{ display: `${isopen ? "none" : "block"}`, transform: `${isopen ? "translateX(100%)" : "translateX(0) "}`, color: `${dropdown.three ? "#0056DC" : ""}`,
//               }} >
//               <p> Report</p>
//             </div>
//             </div>
//             <div
//               className="angleDown transition ease-in delay-75 transform scale-100 "
//               style={{ display: `${isopen ? "none" : "block"}` }} >
//             <FontAwesomeIcon icon={faAngleDown} className="block" style={{ display: `${dropdown.three ? "none " : "block"}` }}/>
//             <FontAwesomeIcon icon={faAngleUp} className="hidden" style={{   display: `${dropdown.three ? "block " : "none"}`,   color: `${dropdown.three ? "#0056DC " : ""}`, }}/>
//             </div>
//           </div>
//           <div
//             id={3}onClick={(e) => e.stopPropagation()}
//             className="dropdownItems w-[40vh] absolute left-[70%] overflow-y-scroll h-[75vh] top-[22%] shadow-2xl shadow-slate-400 rounded-md bg-white z-10 hidden cursor-pointer text-xs text-justify p-1 "
//             style={{ display: `${dropdown.three ? "block" : "none"}` }} >
//             {/* {openPopup === "sideItem3" && <div className="popup">   */}
//             <ul>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400  "> <Link to={"/mobile-history"}> <FontAwesomeIcon icon={faAnglesRight} /> Recharge </Link>
//               </li>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400  "> <Link to={"/bill-payments"}> <FontAwesomeIcon icon={faAnglesRight} /> Bill Payments </Link>
//               </li>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400  "> <Link to={"/verify"}> <FontAwesomeIcon icon={faAnglesRight} /> Verify </Link>
//               </li>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400  "> <Link to={"/banking"}> <FontAwesomeIcon icon={faAnglesRight} /> Banking </Link>
//               </li>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400  "> <Link to={"/aeps"}> <FontAwesomeIcon icon={faAnglesRight} /> Aeps </Link>
//               </li>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400  "> <Link to={"/payout"}> <FontAwesomeIcon icon={faAnglesRight} /> Payout </Link>
//               </li>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400  "> <Link to={"/pancard"}> <FontAwesomeIcon icon={faAnglesRight} /> Pancard </Link>
//               </li>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400  "> <Link to={"/upi"}> <FontAwesomeIcon icon={faAnglesRight} /> Upi </Link>
//               </li>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400  "> <Link to={"/wallet-transfer"}> <FontAwesomeIcon icon={faAnglesRight} /> Wallet Transfer </Link>
//               </li>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400  "> <Link to={"/investment"}> <FontAwesomeIcon icon={faAnglesRight} /> Investment </Link>
//               </li>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400  "> <Link to={"/qr-collection"}> <FontAwesomeIcon icon={faAnglesRight} /> QR Collection </Link>
//               </li>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400  "> <Link to={"/pending-report"}> <FontAwesomeIcon icon={faAnglesRight} /> Pending Transaction </Link>
//               </li>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400  "> <Link to={"/admin-report"}> <FontAwesomeIcon icon={faAnglesRight} /> Admin Profit Report </Link>
//               </li>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400  "> <Link to={"/refund-manager"}> <FontAwesomeIcon icon={faAnglesRight} /> Refund Manager </Link>
//               </li>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400  "> <Link to={"/api-summary"}> <FontAwesomeIcon icon={faAnglesRight} /> Api Summary </Link>
//               </li>
//               {/* <li className="dropdownList m-4 text-gray-600 hover:text-blue-400  "> <Link to={'/'}> <FontAwesomeIcon icon={faAnglesRight}/> Operator Wise Sale </Link></li> */}
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400  "> <Link to={"/ledger-report"}> <FontAwesomeIcon icon={faAnglesRight} /> Ledger Report </Link>
//               </li>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400  "> <Link to={"/pending-report"}> <FontAwesomeIcon icon={faAnglesRight} /> Payment Report </Link>
//               </li>
//             </ul>
//             {/* </div>} */}
//           </div>
//           <div
//             className="sideNavStart relative text-center flex p-3 justify-between cursor-pointer items-center"
//             onClick={() => handleDropdown(4)}
//             style={{
//               justifyContent: `${isopen ? "center" : ""}`,
//               fill: `${dropdown.four ? "#3b82f6b0" : "#0056DC"}`,
//               marginTop: `${isopen ? "10px" : "5px"}`,
//             }} >
//               <div className="navdata flex gap-2 items-center ml-1">
//             <div className="sideNavIcon">
//               <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill=" "> <path d="M549-120 280-400v-80h140q53 0 91.5-34.5T558-600H240v-80h306q-17-35-50.5-57.5T420-760H240v-80h480v80H590q14 17 25 37t17 43h88v80h-81q-8 85-70 142.5T420-400h-29l269 280H549Z" />
//               </svg>
//             </div>
//             <div
//               className=" sideNavItem transition-all ease-in delay-75"
//               style={{ display: `${isopen ? "none" : "block"}`, color: `${dropdown.four ? "#0056DC" : ""}`, transform: `${isopen ? "translateX(100%)" : "translateX(0) "}`,
//               }} >
//               <p> Payment</p>
//             </div>
//             </div>
//             <div
//               className="angleDown transition-all ease-in delay-75"
//               style={{ display: `${isopen ? "none" : "block"}` }} >
//             <FontAwesomeIcon icon={faAngleDown} className="block" style={{ display: `${dropdown.four ? "none " : "block"}` }}/>
//             <FontAwesomeIcon icon={faAngleUp} className="hidden" style={{   display: `${dropdown.four ? "block " : "none"}`,   color: `${dropdown.four ? "#0056DC " : ""}`, }}/>
//             </div>
//           </div>
//           <div
//             id={4}onClick={(e) => e.stopPropagation()}
//             className=" dropdownItems w-[40vh] absolute left-[70%] shadow-2xl shadow-slate-400 h-auto cursor-pointer hidden z-10 text-xs bg-white text-justify p-1 "
//             style={{ display: `${dropdown.four ? "block" : "none"}` }} >
//             {/* {openPopup === "sideItem4" && <div className="popup"> */}
//             <ul>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400 "> <Link to={"/balance-transfer"}> <FontAwesomeIcon icon={faAnglesRight} /> Balance Transfer </Link>
//               </li>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400 "> <Link to={"/balance-return"}> <FontAwesomeIcon icon={faAnglesRight} /> Balance Return </Link>
//               </li>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400 "> <Link to={"/balance-return-request"}> <FontAwesomeIcon icon={faAnglesRight} /> Balance Return Request </Link>
//               </li>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400 "> <Link to={"/payment-view"}> <FontAwesomeIcon icon={faAnglesRight} /> Payment Request Review </Link>
//               </li>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400 "> <Link to={"/purchase-bal"}> <FontAwesomeIcon icon={faAnglesRight} /> Purchase Balance </Link>
//               </li>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400 "> <Link to={"/commission-detail"}> <FontAwesomeIcon icon={faAnglesRight} /> Commission Wallet Transfer </Link>
//               </li>
//             </ul>
//             {/* </div>} */}
//           </div>
//           <div
//             className="sideNavStart relative text-center flex p-3 justify-between cursor-pointer items-center"
//             onClick={() => handleDropdown(5)}
//             style={{
//               justifyContent: `${isopen ? "center" : ""}`,
//               fill: `${dropdown.five ? "#3b82f6b0" : "#0056DC"}`,
//               marginTop: `${isopen ? "10px" : "5px"}`,
//             }} >
//               <div className="navdata flex gap-2 items-center ml-1">
//             <div className="sideNavIcon">
//               <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill=" "> <path d="M880-80 720-240H320q-33 0-56.5-23.5T240-320v-40h440q33 0 56.5-23.5T760-440v-280h40q33 0 56.5 23.5T880-640v560ZM160-473l47-47h393v-280H160v327ZM80-280v-520q0-33 23.5-56.5T160-880h440q33 0 56.5 23.5T680-800v280q0 33-23.5 56.5T600-440H240L80-280Zm80-240v-280 280Z" />
//               </svg>
//             </div>
//             <div
//               className=" sideNavItem transition-all ease-in delay-75"
//               style={{ display: `${isopen ? "none" : "block"}`, color: `${dropdown.five ? "#0056DC" : ""}`, transform: `${isopen ? "translateX(100%)" : "translateX(0) "}`,
//               }} >
//               <p> Dispute</p>
//             </div>
//             </div>
//             <div
//               className="angleDown transition-all ease-in delay-75"
//               style={{ display: `${isopen ? "none" : "block"}` }} >
//             <FontAwesomeIcon icon={faAngleDown} className="block" style={{ display: `${dropdown.five ? "none " : "block"}` }}/>
//             <FontAwesomeIcon icon={faAngleUp} className="hidden" style={{   display: `${dropdown.five ? "block " : "none"}`,   color: `${dropdown.five ? "#0056DC " : ""}`, }}/>
//             </div>
//           </div>
//           <div
//             id={5}onClick={(e) => e.stopPropagation()}
//             className="dropdownItems w-[40vh] absolute left-[70%] shadow-2xl shadow-slate-400 rounded-md h-auto  cursor-pointer hidden text-xs z-10 bg-white text-justify p-1 "
//             style={{ display: `${dropdown.five ? "block" : "none"}`,  color: `${dropdown.two ? "#0056DC" : ""}`,  top: `${dropdown.five ? "" : "0"}`,   }} >
//             {/* {openPopup === "sideItem5" && <div className="popup"> */}
//             <ul>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400 "> <Link to={"/pending-disputes"}> <FontAwesomeIcon icon={faAnglesRight} /> Pending Dispute </Link>
//               </li>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400 "> <Link to={"/solve-dispute"}> <FontAwesomeIcon icon={faAnglesRight} /> Solved Dispute </Link>
//               </li>
//             </ul>
//             {/* </div>} */}
//           </div>
//           <div
//             className="sideNavStart relative text-center flex p-3 justify-between cursor-pointer items-center"
//             onClick={() => handleDropdown(6)}
//             style={{
//               justifyContent: `${isopen ? "center" : ""}`,
//               fill: `${dropdown.six ? "#3b82f6b0" : "#0056DC"}`,
//               marginTop: `${isopen ? "10px" : "5px"}`,
//             }} >
//               <div className="navdata flex gap-2 items-center ml-1">
//             <div className="sideNavIcon">
//               <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill=" "> <path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z" />
//               </svg>
//             </div>
//             <div
//               className=" sideNavItem transition-all ease-in delay-75"
//               style={{ display: `${isopen ? "none" : "block"}`, color: `${dropdown.six ? "#0056DC" : ""}`, transform: `${isopen ? "translateX(100%)" : "translateX(0) "}`,
//               }} >
//               <p> User Income</p>
//             </div>
//             </div>
//             <div
//               className="angleDown transition-all ease-in delay-75"
//               style={{ display: `${isopen ? "none" : "block"}` }} >
//             <FontAwesomeIcon icon={faAngleDown} className="block" style={{ display: `${dropdown.six ? "none " : "block"}` }}/>
//             <FontAwesomeIcon icon={faAngleUp} className="hidden" style={{   display: `${dropdown.six ? "block " : "none"}`,   color: `${dropdown.six ? "#0056DC " : ""}`, }}/>
//             </div>
//           </div>
//           <div
//             id={6}onClick={(e) => e.stopPropagation()}
//             className="dropdownItems w-[40vh] absolute left-[70%] bottom-0 xs:bottom-auto shadow-2xl shadow-slate-400 rounded-md h-auto cursor-pointer hidden text-xs z-10 bg-white text-justify p-1 "
//             style={{ display: `${dropdown.six ? "block" : "none"}` }} >
//             {/* {openPopup === "sideItem6" && <div className="popup"> */}
//             <ul>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400 "> <Link to="/fe-income"> <FontAwesomeIcon icon={faAnglesRight} /> Field Executive(FE) Income </Link>
//               </li>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400 "> <Link to="/franchise-fsds"> <FontAwesomeIcon icon={faAnglesRight} /> FRANCHISE(FSDS) Income </Link>
//               </li>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400 "> <Link to="/super-admin"> <FontAwesomeIcon icon={faAnglesRight} /> Super Distributor(SDS) Income </Link>
//               </li>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400 "> <Link to="/retailer-income"> <FontAwesomeIcon icon={faAnglesRight} /> RETAILER(RT) Income </Link>
//               </li>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400 "> <Link to="/suspended-user-income"> <FontAwesomeIcon icon={faAnglesRight} /> Suspended User (SU) Income </Link>
//               </li>
//               <li className="dropdownList m-4 text-gray-600 hover:text-blue-400 "> <Link to="/not-working"> <FontAwesomeIcon icon={faAnglesRight} /> Not Working Members Income </Link>
//               </li>
//             </ul>
//             {/* </div>} */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SideNavbar;
