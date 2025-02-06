import React from "react";
import { Link } from "react-router-dom";
import ProviderForm from "../ProviderForm";

const DMT = () => {
  return (
    <div className="dmtOuterMost">
      <div className="dmtOut">
        <div className="dashboardBtn button mt-3 px-5">
          <button className="dahsboardButton relative p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
            <span>
              <Link to={"/retailer-dashboard"}> Dashboard </Link>
              {">"} DMT
              </span>
          </button>
        </div>
       
      </div>
    </div>
  );
};

export default DMT;
