import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExecutiveTable from "../../../AdminDashboard/Members/FieldExecutive/FieldExecutiveTable/ExecutiveTable";
import DateWiseSearch from "../../../SharedComponent/DateWiseSearch/DateWiseSearch";

const CreditReport = () => {
  const columns = [
    {
      name: "ID",
      id: "id",
    },
    {
      name: "Date Time",
      id: "date",
    },
    ,
    {
      name: "User Name",
      id: "uName",
    },
    {
      name: "Transfer To",
      id: "transferTo",
    },
    {
      name: "Provider Name",
      id: "pName",
    },
    {
      name: "Number",
      id: "number",
    },
    {
      name: "TXIND",
      id: "tax",
    },
    {
      name: "Profit",
      id: "profit",
    },
    {
      name: "Balance",
      id: "balance",
    },
    {
      name: "Status",
      id: "status",
    },
  ];
  const rows = [
    {
      id: 1,
      uName: "alpha",
      date: "20-12-24 21:54:23",
      transferTo: "xyz",
      pName: "Ajay",
      number: "90025003214",
      tax: "18%",
      profit: "9% ",
      balance: 200,
      status: "Enabled",
    },
    {
      id: 2,
      uName: "beta",
      date: "10-08-24 11:04:20",
      transferTo: "xyz",
      pName: "Abhay",
      number: "88562210036",
      tax: "18%",
      profit: "9% ",
      balance: 3000,
      status: "Disable",
    },
    {
      id: 3,
      uName: "sigma",
      date: "23-02-24 13:45:53",
      transferTo: "xyz",
      pName: "Aksay",
      number: "90025003214",
      tax: "18%",
      profit: "9% ",
      balance: 13000,
      status: "Enabled",
    },
    {
      id: 4,
      uName: "gamma",
      date: "05-10-24 22:24:23",
      transferTo: "xyz",
      pName: "Ajay",
      number: "77566322011",
      tax: "18%",
      profit: "9% ",
      balance: 1200,
      status: "Enabled",
    },
  ];
  const [records, setRecords] = useState(rows);
  const handleSearch = (e) => {
    const newData = rows.filter((row) => {
      console.log(e.target.value);
      return (
        row.id.includes(e.target.value) ||
        row.uName.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row.pName.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row.number.includes(e.target.value)
      );
    });
    setRecords(newData);
  };
  const handleChange = (e) => { 
    const newData = rows.filter((row) => {
    console.log(e.target.value);
    return (
      row.uName.toLowerCase().includes(e.target.value.toLowerCase()) ||
      row.pName.toLowerCase().includes(e.target.value.toLowerCase()) ||
      row.number.includes(e.target.value)
    );
  });
  setRecords(newData);};

  return (
    <div className="debitReportOutMost">
      <div className="debitReportOuter">
            <div className="dashboardBtn button mb-2 p-3">
              <button className="dahsboardButton  p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                <span>
                  <Link to={"/dashboard"}> Dashboard </Link>
                  {">"} Credit Report
                </span>
              </button>
            </div>
            <div className="Aeps mx-3 sm:mx-5">
              <div
                className="AepsInner rounded-lg bg-white p-3 shadow-lg"
                onChange={handleSearch}
              >
                <DateWiseSearch />
              </div>
              <div className="aeps mt-5 rounded-lg text-xs sm:text-sm md:text-md bg-white shadow-lg p-3 ">
                <div className="fieldList uppercase font-medium mb-5">
                  <h3>Credit Report</h3>
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

export default CreditReport;
