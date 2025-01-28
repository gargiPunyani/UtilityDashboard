import React, { useState } from "react";
import SideNavbar from "../../SharedComponent/SideNavbar";
import MainNav from "../../SharedComponent/MainNavbar";
import { Link } from "react-router-dom";
import ExecutiveTable from "../../AdminDashboard/Members/FieldExecutive/FieldExecutiveTable";
import StatusSearch from "../../SharedComponent/StatusSearch";

const PaymentMethod = () => {
  const columns = [
    {
      name: "ID",
     id:"id",
    },
    {
      name: "Created At",
     id:"createdAt",
    },
    {
      name: "Type",
     id:"type",
    },
    {
      name: "Status",
     id:"status",
    },
    {
      name: "Action",
     id:"action",
    },
  ];
  const rows = [
    {
      id: "1",
      createdAt: "12-12-24",
      type: "Cash Payment",
      status: "Enabled",
      action: (
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }} >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#0056DC">
            <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
          </svg>
          <span style={{ marginLeft: "8px", fontSize: "14px", color: "#000" }}>
            Edit
          </span>
        </div>
      ),
    },
    {
      id: "3",
      createdAt: "10-08-24",
      type: "UPI/ Barcode",
      status: "Enabled",
      action: (
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }} >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#0056DC">
            <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
          </svg>
          <span style={{ marginLeft: "8px", fontSize: "14px", color: "#000" }}>
            Edit
          </span>
        </div>
      ),
    },
    {
      id: "2",
      createdAt: "30-05-24",
      type: "IMPS",
      status: "Enabled",
      action: (
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }} >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#0056DC">
            <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
          </svg>
          <span style={{ marginLeft: "8px", fontSize: "14px", color: "#000" }}>
            Edit
          </span>
        </div>
      ),
    },
    {
      id: "4",
      createdAt: "26-09-24",
      type: "Others",
      status: "Enabled",
      action: (
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }} >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#0056DC">
            <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
          </svg>
          <span style={{ marginLeft: "8px", fontSize: "14px", color: "#000" }}>
            Edit
          </span>
        </div>
      ),
    },
    {
      id: "5",
      createdAt: "26-05-24",
      type: "NEFT",
      status: "Disabled",
      action: (
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }} >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#0056DC">
            <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
          </svg>
          <span style={{ marginLeft: "8px", fontSize: "14px", color: "#000" }}>
            Edit
          </span>
        </div>
      ),
    },
  ];

  const [records, setRecords] = useState(rows);
  const handleChange = (e) => {
    // console.log(e.target.value, "servic-master")
    const newData = rows.filter((row) => {
      return (
        row.createdAt.includes(e.target.value) ||
        row.type.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setRecords(newData);
  };
  const handleSearch=(e)=>{
    const newRecord = rows.filter((row) => {
        return (
          row.status.toLowerCase().includes(e.target.value.toLowerCase())
        );
      });
      setRecords(newRecord);
  }
  return (
    <div className="payMethodOutMost">
      <div className="payMethodOuter">
            <div className="dashboardBtn button mb-2 p-3">
              <button className="dahsboardButton relative p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                <span>
                  <Link to={"/dashboard"}> Dashboard </Link>
                  {">"} Payout Beneficiary Master
                </span>
              </button>
            </div>
            <div className="payoutInner m-5 p-3 bg-white shadow-xl rounded-md" onChange={handleSearch}>
              <StatusSearch />
            </div>
            <div className="packageSettingInner m-5 rounded-lg text-xs sm:text-sm md:text-md p-3 bg-white shadow-xl">
              <div className="fieldList uppercase font-medium mb-5">
                <h3>Payout Beneficiary Master </h3>
              </div>
              <hr />
              <div className="AepsTableData" onChange={handleChange}>
                <ExecutiveTable columns={columns} rows={records} />
              </div>
            </div>
          </div>
        </div>
  );
};

export default PaymentMethod;
