import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { profileData, SidebarBalance } from "../../constant";
import { Link } from "react-router-dom";
import axiosInstance from "../../../Services/Instance";
import axios from "axios";

const MainNav = ({ openPopup, handleTogglePopup }) => {
  const [accordionData, setAccordionData] = useState({
    one: true,
    two: true,
    three: true,
    four: true,
  });
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

  const showTime = new Date();
  // console.log(showTime);
  var showDate =days[showTime.getDay() ] +", " + showTime.getDate() + ' '+ months[showTime.getMonth() ]+ ' ' +  showTime.getFullYear();
  var displayTime = showTime.getHours() + ":" + showTime.getMinutes();
  // console.log(displayTime, "time")

  const handleOpen = (id) => {
    // console.log(id, "id");
    if (id === 1) {
      setAccordionData({ ...accordionData, one: !accordionData.one, two: true, three: true,
      });
    }
    if (id === 2) {
      setAccordionData({ ...accordionData, two: !accordionData.two, one: true, three: true, four :true
      });
    }
    if (id === 3) {
      setAccordionData({ ...accordionData, three: !accordionData.three, two: true, one: true, four: true
      });
    }
    if (id === 4) {
      setAccordionData({ ...accordionData, four: !accordionData.four, two: true, one: true, three:true
      });
    }
  }
    const resetApi = async(item, api_token)=>{
      try {
        const response= await axios.post(`https://soft.delhitech.in/api/app/password-reset-otp `,{
          api_token: localStorage.getItem("token"),
        })
        // console.log("reset:", response.data )
        sessionStorage.setItem("order_id",  response.data.order_id )
        console.log( response.data.order_id)
        // console.log(api_token, "token" )
      } catch (error) {
        // console.log(error)
        return(error)
      }
    }

    const api_token = localStorage.getItem("token") 
    // console.log("token: ",api_token)
    
    const handleApi= async (item, api_token)=>{
      if(item.id === "reset"){
       
        await resetApi(api_token)
      }
    }
  return (
    <div className="navOuterMost w-full bg-white">
      <div className="navOuter h-20 shadow-lg shadow-gray-500/10 w-full">
        <div className="navInner flex row justify-between gap-3 py-7 px-11 sm:px-12">
          <div className="navLeftOuter flex gap-3 sm:gap-6">
            <div className="navLeftInner flex gap-1 cursor-pointer " onClick={() => handleOpen(1)}>
              <div className="navLeftIcon">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0056DC"><path d="M260-320q47 0 91.5 10.5T440-278v-394q-41-24-87-36t-93-12q-36 0-71.5 7T120-692v396q35-12 69.5-18t70.5-6Zm260 42q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 102 12t96 36q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59ZM280-494Z" /></svg>
              </div>
              <div className="navHead hidden sm:block sm:text-md ">
                <p>Master</p>
              </div>
              <div className="angleDown">
                <FontAwesomeIcon icon={faAngleDown} className="angleDownIcon inline-block" style={{display: `${accordionData.one ?"inline-block ": "none"}` }} />
                <FontAwesomeIcon icon={faAngleUp} className="hiangleUpIcon dden" style={{display: `${accordionData.one ?"none ": "inline-block"}`}} />
                <div  onClick={() => handleTogglePopup("navItem1")}
                  id={1} className="mainNavItems hidden absolute z-10 bg-white p-5 text-justify w-auto shadow-lg shadow-gray-500/50"
                  style={{display: `${accordionData.one ? "none" : "block"}`,top: "50px",}}>
                     {/* {openPopup === "navItem1" && <div className="popup"> */}
                  <ul>
                    <li className="mainNavList mb-4 hover:text-blue-700"><Link to={"/bank-master"}> Bank Master </Link></li>
                    <li className="mainNavList mb-4 hover:text-blue-700"><Link to={"/role-master"}> Role Master </Link></li>
                    <li className="mainNavList mb-4 hover:text-blue-700"><Link to={"/status-master"}> Status Master </Link></li>
                    <li className="mainNavList mb-4 hover:text-blue-700"><Link to={"/service-master"}> Service Master </Link></li>
                    <li className="mainNavList mb-4 hover:text-blue-700"><Link to={"/payment-beneficiary-method"}> Payout Beneficiary Master </Link></li>
                    <li className="mainNavList mb-4 hover:text-blue-700"><Link to={"/agent-onboarding-list"}> Agent Onboarding List </Link></li>
                    <li className="mainNavList mb-4 hover:text-blue-700"><Link to={"/contact-enquiry"}> Contact Enquiry </Link></li>
                    <li className="mainNavList mb-4 hover:text-blue-700"><Link to={"/company-staff-permission"}> Compant Staff Permission </Link></li>
                    <li className="mainNavList mb-4 hover:text-blue-700"><Link to={"/broadcast"}> Broadcast </Link></li>

                  </ul>
                  {/* </div>} */}
                </div>
              </div>
            </div>
            <div className="navLeftInnerOne flex cursor-pointer gap-1" onClick={() => handleOpen(2)}>
              <div className="navLeftIcon">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0056DC"> <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" /></svg>
              </div>
              <div className="navHead hidden sm:inline-block sm:text-md ">
                <p>Settings</p>
              </div>
              <div className="angleDown">
              <FontAwesomeIcon icon={faAngleDown} className="angleDownIcon inline-block" style={{display: `${accordionData.two ?"inline-block ": "none"}` }} />
                <FontAwesomeIcon icon={faAngleUp} className="angleUpIcon hidden xs:inline-block" style={{display: `${accordionData.two ? "none ": "inline-block"}`}} />
                  <div onClick={() => handleTogglePopup("navItem2")}
                  id={2} className="mainNavItems hidden absolute z-10 bg-white p-5 shadow-lg shadow-gray-500/50" style={{ display: `${accordionData.two ? "none" : "block"}`,   top: "50px" }}>
                  {/* {openPopup === "navItem2" && <div className="popup"> */}
                  <ul>
                    <li className="mainNavList mb-4 hover:text-blue-700"><Link to={"/site-settings"}> Site Setting </Link></li>
                    <li className="mainNavList mb-4 hover:text-blue-700"><Link to={"/company-settings"}> Company Setting </Link></li>
                    <li className="mainNavList mb-4 hover:text-blue-700"><Link to={"/package-setting"}> Package Setting </Link></li>
                    <li className="mainNavList mb-4 hover:text-blue-700"><Link to={"/bank-setting"}>Bank Setting </Link></li>
                    <li className="mainNavList mb-4 hover:text-blue-700"><Link to={"/sms-settings"}>SMS Setting </Link></li>
                  </ul>
                  {/* </div>} */}
                </div>
              </div>
            </div>
          </div>
          <div className="navRight cursor-pointer flex gap-2 xs:gap-4 ">
            <div className="darkMode hover:text-blue-700"><svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="27px" fill="#00000"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>
            </div>
            <div className="notification hidden md:block hover:text-blue-700">
              <svg xmlns="http://www.w3.org/2000/mdvg" height="27px" viewBox="0 -960 960 960" width="27px" fill="#00000"> <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" /> </svg>
            </div>
            <div className="People hover:text-blue-700" onClick={()=> handleOpen(4)}>
                <svg xmlns="http://www.w3.org/2000/svg" height="27px" viewBox="0 -960 960 960" width="27px" fill="#00000"> <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" /> </svg>
                <div className={`profileViewOption absolute z-10 h-screen right-0 top-0 w-full xs:w-[300px] sm:left-auto bg-white hidden transition-all text-gray-600 ` } style={{display: accordionData.four ? "none" : "block"}} id={4}>
                <div className="profileDropdown w-full ">
                <div className="profileOptions text-white text-center bg-blue-700 p-5">
                <div className="close absolute right-5 top-3 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#fff"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                </div>
                  <div className="profileImage flex justify-center items-center w-[100px] m-auto">
                  <img src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1735284149/businessman-character-avatar-isolated_24877-60111-removebg-preview_epql6n.png" alt="profileAdmin"/>
                  </div>
                  <div className="adminDetialsOut">
                    <div className="adminDetials">
                    <h3>Super Admin</h3>
                    </div>
                    <div className="adminType">
                      (CBS)
                    </div>
                  </div>

                </div>
                <div className="profileData bg-white">
                {profileData.map((item)=>{
                  return(
                    <div className="profilePrviewer" key={item.id} >
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
          
            <div className={`moreInfoLeftOuter transition-all ease-in-out duration-700 shadow-lg h-screen w-full absolute xs:w-1/2 lg:w-1/4 z-10 bg-white top-0 right-0 ${ accordionData.three ? "opacity-0 pointer-events-none " : "opacity-100 pointer-events-auto  "}`}
    style={{ transform: accordionData.three ? "translateX(100%)" : "translateX(0)" , display: accordionData.three ? "none" :"block" }}
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
      {SidebarBalance.map((item) => {
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
        );
      })}
    </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
