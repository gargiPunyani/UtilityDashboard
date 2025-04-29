import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExecutiveTable from "../../AdminDashboard/Members/FieldExecutive/FieldExecutiveTable";
import DateWiseSearch from "../../SharedComponent/DateWiseSearch";

const PendingReport = () => {
  const columns = [
    {
      name: "ID",
      id:"id",
    },{
      name: "Date Time",
      id:"date",
    }, {
      name: "User Name",
      id:"user",
    }, {
        name: "Provider ",
        id:"provider",
    },{
      name: "Number",
      id:"mobile",
    }, {
      name: "Amount",
      id:"amount",
    },{
      name: "Vendor",
      id:"vendor",
    },{
      name: "Satus",
      id:"status",
    }, {
      name: "Action",
      id:"action",
    },
  ];
  const rows = [{
      id: "101",
      date: "10-03-2021 15:26:23",
      user: "Vinod",
      mobile: "9876543210",
      provider: "FieldExecutive",
      profit: "20.00",
      wallet: "SuperAdmin",
      package: "",
      status: "Enabled",
      openingBalance: "20000",
    },{
      id: "103",
      date: "10-03-2021 15:26:23",
      user: "Suresh",
      mobile: "78965043011",
      provider: "FieldExecutive",
      profit: "20.00",
      wallet: "SuperAdmin",
      package: "",
      status: "Enabled",
      openingBalance: "20000",
    },{
      id: "102",
      date: "01-01-2025 15:26:23",
      user: "Ramesh",
      mobile: "9108700945",
      provider: "FieldExecutive",
      profit: "20.00",
      wallet: "SuperAdmin",
      package: "",
      status: "Enabled",
      openingBalance: "20000",
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
  return (
    <div className="PendingReportOuterMost">
      <div className="PendingReportOuter">
        
            <div className="dashboardBtn button mb-2 p-3">
              <button className="dahsboardButton  p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                <span>
                  <Link to={"/dashboard"}> Dashboard </Link>
                  {">"} Pending Report
                </span>
              </button>
            </div>
            <div className="PendingReport mx-2 xs:mx-5">
              <div
                className="PendingReportInner rounded-lg bg-white p-3 shadow-lg"
                onClick={handleChange} >
                <DateWiseSearch />
              </div>
              <div className="PendingReport mt-5 rounded-lg text-xs sm:text-sm md:text-md bg-white shadow-lg p-3 ">
                <div className="updateAndList flex px-3 mb-3 items-center text-center justify-between ">
                <div className="fieldList uppercase font-medium ">
                  <h3>Pending Report</h3>
                </div>
                <div className="updateReport">
                    <button className="updateReportBtn rounded-lg p-2  bg-red-600 text-white text-xs sm:text-sm">Update Transaction</button>
                </div>
                </div>
                <hr />
                <div className="PendingReportTableData" onChange={handleChange}>
                  <ExecutiveTable columns={columns} rows={records} />
                </div>
              </div>
            </div>
          </div>
        </div>
      
  );
};

export default PendingReport;
