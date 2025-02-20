import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SuperAdmin from "./SuperAdmin";
import KycDetails from "./Kyc";
import Footer from "../../SharedComponent/Footer";
import UpdateForm from "./UpdateProfile";

const ProfileView = () => {
  const naviagte= useNavigate()
  const handleNavigate=()=>{
    const username= localStorage.getItem("userName:")
    if (username=== "Retail User") naviagte("/retailer-dashboard")
    else naviagte('/dashboard')
  }
  return (
    <div className="profileOuterMost">
      <div className="profileOuter">
              <div className="profileInner p-5 w-full">
                <div className="dashboardBtn button mb-2">
                  <button className="dahsboardButton relative p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                    <span onClick={handleNavigate}>
                       Dashboard   </span>
                       <span>  {">"} My Profile</span>
                 
                  </button>
                </div>
                <div className="superAdminDetails bg-white w-full shadow-lg">
                  <SuperAdmin />
                </div>
                <div className="kycPanel bg-white mt-10 h-fit shadow-lg">
                  <KycDetails />
                </div>
                <div className="updateForm bg-white mt-10 p-5">
                  <UpdateForm />
                </div>
              </div>
              <div className="footerSection">
                <Footer />
              </div>
            </div>
          </div>
  );
};

export default ProfileView;
