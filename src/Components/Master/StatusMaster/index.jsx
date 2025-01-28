import React, { useState } from "react";
import ExecutiveTable from "../../AdminDashboard/Members/FieldExecutive/FieldExecutiveTable";
import SideNavbar from "../../SharedComponent/SideNavbar";
import MainNav from "../../SharedComponent/MainNavbar";
import { Link } from "react-router-dom";

const StatusMaster = () => {
  const columns = [
    {
      name: "Status Name",
     id:"sName",
    },
    {
      name: "Action",
     id:"action",
    },
  ];
  const rows = [
    {
      sName: "All Type",
      action:   <div style={{display:"flex", gap: "20px"}}>
        <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0056dc"><path d="M560-80v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L683-80H560Zm300-263-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v120h-80v-80H520v-200H240v640h240v80H240Zm280-400Zm241 199-19-18 37 37-18-19Z"/></svg>
          <span style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}>
            Edit
          </span>
        </div>
         <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"/></svg>
         <span style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}>
           Delete
         </span>
       </div>
       </div>
    },
    {
      sName: "Credit",
      action:   <div style={{display:"flex", gap: "20px"}}>
        <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0056dc"><path d="M560-80v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L683-80H560Zm300-263-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v120h-80v-80H520v-200H240v640h240v80H240Zm280-400Zm241 199-19-18 37 37-18-19Z"/></svg>
          <span style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}>
            Edit
          </span>
        </div>
         <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"/></svg>
         <span style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}>
           Delete
         </span>
       </div>
       </div>
    },
    {
      sName: "Debit",
      action:   <div style={{display:"flex", gap: "20px"}}>
        <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0056dc"><path d="M560-80v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L683-80H560Zm300-263-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v120h-80v-80H520v-200H240v640h240v80H240Zm280-400Zm241 199-19-18 37 37-18-19Z"/></svg>
          <span style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}>
            Edit
          </span>
        </div>
         <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"/></svg>
         <span style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}>
           Delete
         </span>
       </div>
       </div>
    },
    {
      sName: "Failure",
      action: (
        <div style={{display:"flex", gap: "20px"}}>
        <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0056dc"><path d="M560-80v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L683-80H560Zm300-263-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v120h-80v-80H520v-200H240v640h240v80H240Zm280-400Zm241 199-19-18 37 37-18-19Z"/></svg>
          <span style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}>
            Edit
          </span>
        </div>
         <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"/></svg>
         <span style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}>
           Delete
         </span>
       </div>
       </div>
      ),
    },
    {
      sName: "Hold",
      action: (
        <div style={{display:"flex", gap: "20px"}}>
        <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0056dc"><path d="M560-80v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L683-80H560Zm300-263-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v120h-80v-80H520v-200H240v640h240v80H240Zm280-400Zm241 199-19-18 37 37-18-19Z"/></svg>
          <span style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}>
            Edit
          </span>
        </div>
         <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"/></svg>
         <span style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}>
           Delete
         </span>
       </div>
       </div>
      ),
    },
  ];
  const [records, setRecords] = useState(rows);

  const handleChange = (e) => {
    console.log(e.target.value);
    const newData = rows.filter((row) => {
      return row.sName.toLowerCase().includes(e.target.value);
    });
    setRecords(newData);
  };
  
  return (
    <div className="statusMasterOuterMost">
      <div className="statusMasterOut">
            <div className="dashboardBtn button mb-2 p-3">
              <button className="dahsboardButton relative p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                <span>
                  <Link to={"/dashboard"}> Dashboard </Link>
                  {">"} Status Master
                </span>
              </button>
            </div>
            <div className="packageSettingInner m-5 rounded-lg text-xs sm:text-sm md:text-md p-3 bg-white shadow-lg">
              <div className="fieldList uppercase font-medium mb-5">
                <h3>Status Master </h3>
              </div>
              <hr />
              <div className="AepsTableData" onChange={handleChange} >
                <ExecutiveTable columns={columns} rows={records} />
              </div>
            </div>
          </div>
        </div>
  );
};

export default StatusMaster;
