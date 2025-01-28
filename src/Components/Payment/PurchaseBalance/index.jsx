import React, { useState } from "react";
import SideNavbar from "../../SharedComponent/SideNavbar";
import MainNav from "../../SharedComponent/MainNavbar";
import { Link } from "react-router-dom";
import ExecutiveTable from "../../AdminDashboard/Members/FieldExecutive/FieldExecutiveTable";
import DateWiseSearch from "../../SharedComponent/DateWiseSearch";

const PurchaseBal = () => {
  const columns = [{
      name: "ID",
     id:"id",
    },{
      name: "Date Time",
     id:"date",
    },{
      name: "TXIND",
     id:"tax",
    },{
      name: "Description",
     id:"description",
    },{
      name: "Provider Name",
     id:"provider",
    },{
      name: "OP",
     id:"op",
    },{
      name: "Debit",
     id:"debit",
    },{
      name: "Credit",
     id:"credit",
    },{
      name: "Profit",
     id:"profit",
    },{
      name: "CL",
     id:"cl",
    },
  ];
  const rows = [{}];
  const [records, setRecords] = useState(rows);

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const handleSearch = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="purchaseBalOutMost">
      <div className="purchaseBalOuter">
            <div className="dashboardBtn button mb-2 p-3">
              <button className="dahsboardButton relative p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                <span>
                  <Link to={"/dashboard"}> Dashboard </Link>
                  {">"} Purchase Balance
                </span>
              </button>
            </div>
            <div className="Aeps mx-3 sm:mx-5">
              <div
                className="AepsInner rounded-lg bg-white p-3 shadow-lg"
                onChange={handleSearch}>
                <DateWiseSearch />
              </div>
              <div className="aeps mt-5 rounded-lg text-xs sm:text-sm md:text-md bg-white shadow-lg p-3 ">
                <div className="fieldList uppercase font-medium mb-5">
                  <h3>Purchase Balance </h3>
                </div>
                <hr />
                <div className="AepsTableData" onChange={handleChange}>
                  <ExecutiveTable columns={columns} rows={records} />
                </div>
              </div>
            </div>
          </div>
    </div>
  );
};

export default PurchaseBal;
