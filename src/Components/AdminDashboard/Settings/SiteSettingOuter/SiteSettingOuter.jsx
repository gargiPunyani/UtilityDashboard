import React from "react";
import { Link } from "react-router-dom";
import GuestRegistraion from "./GuestRegistion/GuestRegistraion";
import MailSet from "./MailSetting/MailSet";
import SiteSet from "./SiteSetting/SiteSet";

const SiteSettingOuter = () => {
  return (
    <div className="siteSetOuterMost">
      <div className="siteSetOuter">
        <div className="siteSetInner">
          
              <div className="siteSettingOuter p-5">
                <div className="dashboardBtn button mb-2">
                  <button className="dahsboardButton  p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                    <span>
                      <Link to={"/dashboard"}> Dashboard </Link>
                      {">"} Site Setting
                    </span>
                  </button>
                </div>
                <SiteSet/>
                <GuestRegistraion/>
                <MailSet/>
                
            </div>
            </div>
          </div>
          </div>
  );
};

export default SiteSettingOuter;
