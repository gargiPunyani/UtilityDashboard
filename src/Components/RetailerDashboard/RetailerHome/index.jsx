import React from "react";
import { Link } from "react-router-dom";
import RetailerHomeCard from "./Cards";
import RDataTable from "./DataTable";
// import Footer from "../../SharedComponent/Footer"

const RetialerHome = () => {
  return (
    <div className="retHomeOuterMost p-5">
      <div className="retHomeOuter">
        <div className="dashboardBtn button mb-3">
          <button className="dahsboardButton  p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
            <span>
              <Link to={"/retailer-dashboard"}> Dashboard </Link>
              {">"} Dashboard
            </span>
          </button>
        </div>
        <div className="retHomeInner bg-white p-5 mb-5">
          <div className="retHomeHead uppercase text-sm font-semibold mb-3">
            <h3>Services</h3>
          </div>
          <hr />
          <div className="retHomeBody">
            <div className="RetailerHomeCard">
              <RetailerHomeCard />
            </div>
          </div>
        </div>
        <div className="dataTable bg-white p-3 mt-5">
          <RDataTable />
        </div>
      </div>
      {/* <div className="footerSection mt-6 ">
        <Footer/>
      </div> */}
    </div>
  );
};

export default RetialerHome;
