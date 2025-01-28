import React from "react";
import { Link } from "react-router-dom";
import SuperAdmin from "../SuperAdmin";
import Reset from "./reset";
import Footer from "../../../SharedComponent/Footer";
import SideNavbar from "../../../SharedComponent/SideNavbar";
import MainNav from "../../../SharedComponent/MainNavbar";

const ResetPassword = () => {
  return (
    <div className="w-full">
          <div className="resetOuterMost text-xs sm:text-sm p-5">
            <div className="resetOuter">
              <div className="dashboardBtn button mb-2">
                <button className="dahsboardButton relative p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                  <span>
                    <Link to={"/"}> Dashboard </Link>
                    {">"} Reset Password{" "}
                  </span>
                </button>
              </div>
              <div className="resetInner">
                <div className="resetPassword lg:grid lg:grid-cols-2 justify-between gap-6">
                  <div className="superAdim shadow-lg p-3">
                    <SuperAdmin />
                  </div>
                  <div className="resetPasswordDetails shadow-lg p-5">
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
