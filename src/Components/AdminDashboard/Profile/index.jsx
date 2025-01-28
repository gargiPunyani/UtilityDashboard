import React from "react";
import { Link } from "react-router-dom";
import SuperAdmin from "./SuperAdmin";
import KycDetails from "./Kyc";
import Footer from "../../SharedComponent/Footer";
import UpdateForm from "./UpdateProfile";
import SideNavbar from "../../SharedComponent/SideNavbar";
import MainNav from "../../SharedComponent/MainNavbar";

const ProfileView = () => {
  return (
    <div className="profileOuterMost">
      <div className="profileOuter">
        <div className="w-full">

              <div className="profileOuterMost p-5">
                <div className="dashboardBtn button mb-2">
                  <button className="dahsboardButton relative p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                    <span>
                      <Link to={"/dashboard"}> Dashboard </Link>
                      {">"} My Profile
                    </span>
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
        </div>
 
  );
};

export default ProfileView;
