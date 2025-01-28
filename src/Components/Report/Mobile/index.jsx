import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideNavbar from "../../SharedComponent/SideNavbar";
import MainNav from "../../SharedComponent/MainNavbar";
import DateWiseSearch from "../../SharedComponent/DateWiseSearch";
import ExecutiveTable from "../../AdminDashboard/Members/FieldExecutive/FieldExecutiveTable";

const MobileHistory = () => {
  const columns = [
    {
      name: "userID",
      id: "id",
    },
    {
      name: "Date Time",
      id: "date",
    },
    {
      name: "User",
      id: "user",
    },
    {
      name: "Number",
      id: "mobile",
    },
    {
      name: "Provider",
      id: "provider",
    },
    {
      name: "TXNID",
      id: "tax",
    },
    {
      name: "Opening Balance",
      id: "openingBalance",
    },
    {
      name: "Amount",
      id: "amount",
    },
    {
      name: "Profit",
      id: "profit",
    },
    {
      name: "Closing Balance",
      id: "closingBalance",
    },
    {
      name: "Wallet",
      id: "wallet",
    },
    {
      name: "Satus",
      id: "status",
    },
    {
      name: "Action",
      id: "action",
    },
  ];

  const rows = [
    {
      id: "101",
      date: "10-03-2021 15:26:23",
      user: "Vinod",
      mobile: "9876543210",
      provider: "Retailer",
      profit: "20.00",
      closingBalance:"1000.00",
      amount:"4000",
      wallet: "SuperAdmin",
     tax:"13%",
      status: "Enabled",
      openingBalance: "20000",
      action: ( <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5985E1" > <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" /></svg>
          <span style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}>
            Edit
          </span>
        </div>)

    },
    {
      id: "103",
      date: "10-03-2021 15:26:23",
      user: "Suresh",
      mobile: "78965043011",
      provider: "SuperAdmin",
      profit: "20.00",
      closingBalance:"1000.00",
      amount:"13000",
      wallet: "SuperAdmin",
     tax:"02%",
      status: "Enabled",
      openingBalance: "20000",
      action: ( <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5985E1" >
            <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
          </svg>
          <span style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}>
            Edit
          </span>
        </div>)
    },
    {
      id: "102",
      date: "01-01-2025 15:26:23",
      user: "Ramesh",
      mobile: "9108700945",
      provider: "FieldExecutive",
      profit: "20.00",
      closingBalance:"15000.00",
      amount:"4000",
      wallet: "SuperAdmin",
     tax:"08%",
      status: "Enabled",
      openingBalance: "20000",
      action: ( <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5985E1" > <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" /> </svg>
          <span style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}>
            Edit
          </span>
        </div>)
    },
  ];

  const [records, setRecords] = useState(rows);

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
  const handleDownload = (rows) => {};
  return (
    <div className="mobileHistoryOuterMost">
      <div className="mobileHistoryOuter">

            <div className="dashboardBtn button mb-2 p-3">
              <button className="dahsboardButton relative p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                <span>
                  <Link to={"/dashboard"}> Dashboard </Link>
                  {">"} Mobile History
                </span>
              </button>
            </div>
            <div className="mobileHistory mx-2  xs:mx-5">
              <div
                className="mobileHistoryInner rounded-lg bg-white p-3 shadow-lg"
                onClick={handleDownload}
                onChange={handleChange}
              >
                <DateWiseSearch />
              </div>
              <div className="mobileRecharge mt-5 rounded-lg text-xs sm:text-sm md:text-md bg-white shadow-lg p-3 ">
                <div className="fieldList uppercase font-medium mb-5">
                  <h3>Mobile History</h3>
                </div>
                <hr />
                <div className="mobileHistoryTableData" onChange={handleChange}>
                  <ExecutiveTable columns={columns} rows={records} />
                </div>
              </div>
            </div>
          </div>
        </div>
   
  );
};

export default MobileHistory;
