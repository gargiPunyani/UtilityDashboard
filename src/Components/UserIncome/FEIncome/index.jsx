import React, { useState } from "react";
import SideNavbar from "../../SharedComponent/SideNavbar";
import MainNav from "../../SharedComponent/MainNavbar";
import { Link } from "react-router-dom";
import SearchWallet from "../../SharedComponent/SearchWallet";
import ExecutiveTable from "../../AdminDashboard/Members/FieldExecutive/FieldExecutiveTable";

const FEIncome = () => {
  const columns = [{
      name: "UserID",
     id:"id",
    },{
      name: "Name",
     id:"name",
    },{
      name: "Opening Balance",
     id:"openingBalance",
    },{
      name: "Credit Amount",
     id:"credit",
    },{
      name: "Debit Amount",
     id:"debit",
    },{
      name: "Sales",
     id:"sales",
    },{
      name: "Profit",
     id:"profit",
    },{
      name: "Charges",
     id:"charge",
    },{
      name: "Pending",
     id:"pending",
    },];
  const rows = [{
      id: "101",
      name: "Vinod",
      credit: "0.00",
      debit: "0.00",
      profit: "20.00",
      sales: "0.0",
      charge: "200000",
      pending: "0.00",
      openingBalance: "20000",
    },{
      id: "103",
      name: "Suresh",
      credit: "0.00",
      debit: "0.00",
      profit: "20.00",
      sales: "0.0",
      charge: "0.00",
      pending: "0.00",
      openingBalance: "20000",
    },{
      id: "102",
      name: "Ramesh",
      credit: "0.00",
      debit: "0.00",
      profit: "20.00",
      sales: "0.0",
      charge: "0.00",
      pending: "0.00",
      openingBalance: "1000",
    },{
      id: "104",
      name: "Vinod Pal",
      credit: "0.00",
      debit: "0.00",
      profit: "20.00",
      sales: "0.00",
      charge: "20000",
      pending: "0.00",
      openingBalance: "20000",
    },{
      id: "105",
      name: "Jassu",
      credit: "0.00",
      debit: "0.00",
      profit: "20.00",
      sales: "0.00",
      charge: "100000",
      pending: "0.00",
      openingBalance: "20000",
    },];
  const [records, setRecords] = useState(rows);
  const handleChange = (e) => {
    const newData = rows.filter ((row) => {
      console.log(e.target.value, " HEloooo");
      return (
        row.id.includes(e.target.value) ||
        row.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row.profit.includes(e.target.value)
      );
    });
    setRecords(newData);
  };
  const handleSearch = (e) => {
    const newRecords = rows.filter((row)=>{
        return row.openingBalance.includes(e.target.value)
    }) 
    
    setRecords(newRecords);
  };
    return (
    <div className="fEIncomeOutMost">
      <div className="fEIncomeOuter">
       
            <div className="dashboardBtn button mb-2 p-3">
              <button className="dahsboardButton  p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                <span>
                  <Link to={"/dashboard"}> Dashboard </Link>
                  {">"} Income Report
                </span>
              </button>
            </div>
            <div className="Aeps mx-3 sm:mx-5">
              <div className="AepsInner rounded-lg bg-white p-3 shadow-lg" onChange={handleSearch} >
                <SearchWallet />
              </div>
              <div className="aeps mt-5 rounded-lg text-xs sm:text-sm md:text-md bg-white shadow-lg p-3 ">
                <div className="fieldList uppercase font-medium mb-5">
                  <h3>Income Report</h3>
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

export default FEIncome;
