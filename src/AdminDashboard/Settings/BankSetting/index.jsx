import React, { useState } from "react";
import SideNavbar from "../../../SharedComponent/SideNavbar";
import MainNav from "../../../SharedComponent/MainNavbar";
import { Link, useNavigate } from "react-router-dom";
import ExecutiveTable from "../../Members/FieldExecutive/FieldExecutiveTable";

const BankSetting = () => {
  const columns = [{
      name: "UserID",
     id:"id",
    },{
      name: "Bank Name",
     id:"bName",
    },{
      name: "Account Number",
     id:"account",
    },{
      name: "Holder Name",
     id:"hName",
    },{
      name: "IFSC Code",
     id:"ifsc",
    },{
      name: "Branch",
     id:"branch",
    },{
      name: "Status",
     id:"status",
    },{
      name: "Action",
     id:"action",
    },
  ];
  const rows = [{
      id: "1",
      bName: "testing",
      hName: "Vinod",
      account: "2314450997133",
      ifsc: "icic20065",
      branch: " Delhi, NCR",
      status: "Pending",
      action:  ( <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5985E1" >
            <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
          </svg>
          <span style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}>
            Edit Bank
          </span>
        </div>),
    },{
      id: "3",
      bName: "testing",
      hName: "Suresh",
      account: "2314450997121",
      ifsc: "icic20065",
      branch: "Delhi, NCR",
      status: "Success",
      action:  ( <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5985E1" >
            <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
          </svg>
          <span style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}>
            Edit Bank
          </span>
        </div>),
    },{
      id: "2",
      bName: "testing",
      hName: "Ramesh",
      account: "2314450909830",
      ifsc: "icic20065",
      branch: "Delhi, NCR",
      status: "Success",
      action:  ( <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5985E1" >
            <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
          </svg>
          <span style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}>
            Edit Bank
          </span>
        </div>),
    },{
      id: "4",
      bName: "testing",
      hName: "Vinod Pal",
      account: "2314450997156",
      ifsc: "karb00877",
      branch: "Delhi, NCR",
      status: "Success",
      action:  ( <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5985E1" >
            <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
          </svg>
          <span style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}>
            Edit Bank
          </span>
        </div>),
    },{
      id: "5",
      bName: "testing",
      hName: "Jassu",
      account: "2314450997100",
      ifsc: "hdfc00098",
      branch: "Delhi, NCR",
      status: "Success",
      action:  ( <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5985E1" >
            <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
          </svg>
          <span style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}>
            Edit Bank
          </span>
        </div>),
    },];
  const navigate = useNavigate();
  const [records, setRecords] = useState(rows);
  const handleChange = (e) => {
    const newData = rows.filter((row) => {
      console.log(e.target.value, " HEloooo");
      return (
        row.bName.toLocaleLowerCase().includes(e.target.value.toLowerCase()) ||
        row.ifsc.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row.account.includes(e.target.value) ||
        row.id.includes(e.target.value)
      ); });
    setRecords(newData);
  };

  const craeteBank = () => {
    navigate("/new-bank-account");
  };
  return (
    <div className="bankSettingOuterMost">
      <div className="bankSettingOuter">
            <div className="dashboardBtn button mb-2 p-3">
              <button className="dahsboardButton relative p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                <span>
                  <Link to={"/dashboard"}> Dashboard </Link>
                  {">"} Bank Settings
                </span>
              </button>
            </div>
            <div className="Aeps mx-3 sm:mx-5 p-2 shadow-lg bg-white">
              <div className="AepsTableData" onChange={handleChange}>
                <div className="aeps text-xs xs:flex items-center justify-between gap-5 sm:text-sm md:text-md p-3 ">
                  <div className="fieldList uppercase font-medium">
                    <h3>Bank Settings</h3>
                  </div>
                  <div className="addNewBank mt-2 xs:mt-0">
                    <button className="addNewBankBtn rounded-lg bg-green-500 outline-none cursor-pointer text-white p-2" onClick={craeteBank}>
                      Add New Bank
                    </button>
                  </div>
                </div>
                <hr />
                <ExecutiveTable columns={columns} rows={records} />
              </div>
            </div>
          </div>
        </div>

  );
};

export default BankSetting;
