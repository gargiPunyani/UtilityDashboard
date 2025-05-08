import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ExecutiveTable from "../../AdminDashboard/Members/FieldExecutive/FieldExecutiveTable";

const BankMaster = () => {
  const columns = [ {
    name: "ID",
    id:"id",
  },
    {
      name: "Bank Name",
      id:"bName",
    },
    {
      name: "IFSC Code",
      id:"ifsc",
    },
    {
      name: "Bank ID",
      id:"bId",
    }, {
      name: "Paysprint BankID",
      id:"paysprint",
    }, {
      name: "Status",
      id:"status",
    },
    {
      name: "Action",
      id:"action",
    }, ];
  const rows = [
    {
      id:1,
     bName: "Axis Bank",
     ifsc:"",
     bId:"1",
     paysprint:"",
     status:"Enabled",
      action: (
        <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5985E1">
            <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
          </svg>
          <span style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}>
            Edit
          </span>
        </div>
      ),
    },
    {
      id: 2,
      bName: "ICICI Bank",
     ifsc:"",
     bId:"2",
     paysprint:"",
     status:"Enabled",
      action: (
        <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5985E1">
            <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
          </svg>
          <span style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}>
            Edit
          </span>
        </div>
      ),
    },
    {
      id: 3,
      bName: "Kotak Mahindra Bank",
     ifsc:"",
     bId:"3",
     paysprint:"",
     status:"Enabled",
      action: (
        <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5985E1">
            <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
          </svg>
          <span style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}>
            Edit
          </span>
        </div>
      ),
    },
    {
      id: 4,
      bName: "Punjab National Bank (PNB)",
     ifsc:"",
     bId:"4",
     paysprint:"",
     status:"Enabled",
      action: (
        <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5985E1">
            <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
          </svg>
          <span style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}>
            Edit
          </span>
        </div>
      ),
    },
    {
      id: 5,
      bName: "HDFC Bank",
     ifsc:"",
     bId:"5",
     paysprint:"",
     status:"Enabled",
      action: (
        <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5985E1">
            <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
          </svg>
          <span style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}>
            Edit
          </span>
        </div>
      ),
    }, {
      id: 6,
      bName: "Equitas Bank ",
     ifsc:"",
     bId:"6",
     paysprint:"",
     status:"Enabled",
      action: ( <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5985E1">
            <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
          </svg>
          <span style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}>
            Edit
          </span>
        </div>
      ),
    },]
     const [records, setRecords] = useState(rows);
    const handleChange = (e) => {
    console.log(e.target.value);
    const newData = rows.filter((row) => {
      return row.bName.toLowerCase().toUpperCase().includes(e.target.value) || row.bId.includes(e.target.value)
    });
    setRecords(newData);
  };
  const navigate = useNavigate( )
  const craeteBank=()=>{
    navigate("/new-bank-account")
   }
  return (
    <div className="bankMasterOuterMost">
      <div className="bankMasterOuter">
            <div className="dashboardBtn button mb-2 p-3">
              <button className="dahsboardButton  p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                <span>
                  <Link to={"/dashboard"}> Dashboard </Link>
                  {">"} Bank Master
                </span>
              </button>
            </div>
            <div className="packageSettingInner m-5 rounded-lg text-xs sm:text-sm md:text-md p-3 bg-white shadow-xl">
            <div className="aeps text-xs md:flex items-center justify-between gap-5 sm:text-sm md:text-md p-3 ">
                <div className="fieldList uppercase font-medium">
                  <h3>Bank Master</h3>
                </div>
                <div className='addNewBank'>
                  <button className='addNewBankBtn rounded-lg bg-green-500 outline-none cursor-pointer text-white p-2' onClick={craeteBank} >Add New Bank</button>
                </div>
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

export default BankMaster;
