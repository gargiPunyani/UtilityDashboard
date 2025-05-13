import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExecutiveTable from "../../AdminDashboard/Members/FieldExecutive/FieldExecutiveTable/ExecutiveTable";
import StatusDownload from "../../SharedComponent/StatusDownload/StatusDownload";
import Commission from "./Commision/Commission";

const CommissionBal = () => {
  const columns = [{}];
  const rows = [];
  const [record, setRecords] = useState(rows);
  const handleChange = (e) => {
    const newRecords = rows.filter((row) => {
      console.log(e.target.value, "DateSearch");
      return (
        row.date.includes(e.target.value) ||
        row.id.includes(e.target.value) ||
        row.user.toLowerCase().includes(e.target.value) ||
        row.mobile.includes(e.target.value)
      );
    });
    setRecords(newRecords);
  };
  const handleSearch= (e)=>{
    const newData= rows.filter((row)=>{
      return(row.date.includes(e.target.value))
    })
    setRecords(newData)
  }
  return (
    <div className="commissionBalOutMost">
      <div className="commissionBalOuter">
            <div className="dashboardBtn button mb-2 p-3">
              <button className="dahsboardButton  p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                <span>
                  <Link to={"/dashboard"}> Dashboard </Link>
                  {">"} Move Commission Balance to Main Wallet
                </span>
              </button>
            </div>
      
            <div className=" commissionBalance m-3 sm:m-7 ">
              <div className="commissionBalanceSearch bg-white shadow-lg sm:p-3 rounded-lg" onChange={handleSearch}>
                <StatusDownload/>
              </div>
              <div className="commisionBal">
              <Commission />
              </div>
              <div
                className="commissionBalanceTable mt-5 rounded-lg text-xs sm:text-sm md:text-md bg-white shadow-lg p-3"
                onChange={handleChange} >
                <div className="fieldList uppercase font-medium mb-5">
                  <h3>Move Commission Balance to Main Wallet</h3>
                </div>
                <hr />
                <ExecutiveTable columns={columns} rows={record} />
              </div>
            </div>
          </div>
  
    </div>
  );
};

export default CommissionBal;
