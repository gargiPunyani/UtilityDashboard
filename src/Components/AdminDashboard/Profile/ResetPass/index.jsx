import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SuperAdmin from "../SuperAdmin";
import Reset from "./reset";

const ResetPassword = () => {
  const naviagte= useNavigate()
  const handleNavigate=()=>{
    const username= localStorage.getItem("userName:")
    if (username=== "Retail User") naviagte("/retailer-dashboard")
    else naviagte('/dashboard')
  }
  return (
    <div className="w-full">
          <div className="resetOuterMost text-xs sm:text-sm p-5">
            <div className="resetOuter">
              <div className="dashboardBtn button mb-2">
                <button className="dahsboardButton relative p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                  <span onClick={handleNavigate}>
                     Dashboard </span>
                     <span>
                    {">"} Reset Password
                  </span>
                </button>
              </div>
              <div className="resetInner">
                <div className="resetPassword lg:grid lg:grid-cols-2 justify-between gap-6">
                  <div className="superAdim bg-white rounded-md shadow-lg p-3">
                    <SuperAdmin />
                  </div>
                  <div className="resetPasswordDetails bg-white rounded-md shadow-lg mt-3 lg:mt-0 p-5">
                    <Reset />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};
export default ResetPassword;
