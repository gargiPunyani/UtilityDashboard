import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ExecutiveTable from '../../AdminDashboard/Members/FieldExecutive/FieldExecutiveTable/ExecutiveTable';

const RoleMaster = () => {
    const columns = [ {
          name: "Role Name",
         id:"rName",
        }, {
          name: "Registration Charge",
         id:"rCharge",
        }, {
          name: "Platform Charge",
         id:"pCharge",
        }, {
          name: "Action",
         id:"action",
        }, ];
      const rows = [{
         rName: "FRANCHISE(1) (FSDS)",
         rCharge:"0",
         pCharge:"0",
          action: (
            <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5985E1" > <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" /></svg>
              <span style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }} > Edit
              </span>
            </div> ),
        },{
          id: 2,
          rName: "FRANCHISE(2) (FSDS)",
         rCharge:"0",
         pCharge:"1",
          action: (
            <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5985E1" > <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" /></svg>
              <span style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }} > Edit
              </span>
            </div> ),
        }, {
          id: 3,
          rName: "SUPER DISTRIBUTOR (SDS)",
         rCharge:"0",
         pCharge:"3",
          action: (
            <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5985E1" > <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" /></svg>
              <span style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }} > Edit
              </span>
            </div> 
            ),
        }, {
          id: 4,
          rName: "DISTRIBUTOR (DS)",
         rCharge:"0",
         pCharge:"1",
          action: (
            <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5985E1" > <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" /></svg>
              <span style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }} > Edit
              </span>
            </div> ),
        }, {
          id: 5,
          rName: "RETAILER (RT)",
         rCharge:"0",
         pCharge:"0",
          action: (
            <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5985E1" > <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" /></svg>
              <span style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }} > Edit
              </span>
            </div> ),
        },{
          id: 6,
          rName: "(ONE) RETAILER ",
         rCharge:"0",
         pCharge:"5",
          action: (
            <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5985E1" > <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" /></svg>
              <span style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }} > Edit
              </span>
            </div> ),
        }, {
          id: 7,
          rName: ".350 BANK REATILER ",
         rCharge:"0",
         pCharge:"0",
          action: (
            <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5985E1" > <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" /></svg>
              <span style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }} > Edit
              </span>
            </div> 
            ),
        }, ];
      const [records, setRecords] = useState(rows);
      const handleChange = (e) => {
        console.log(e.target.value);
        const newData = rows.filter((row) => {
          return row.rName.toLowerCase().includes(e.target.value) || row.rCharge.includes(e.target.value) || row.pCharge.includes(e.target.value)
        });
        setRecords(newData);
      };
  return (
    <div className='roleMasterOutMost'>
        <div className='roleMasterOuter'>
            <div className="dashboardBtn button mb-2 p-3">
              <button className="dahsboardButton  p-1 items-center text-xs font-semibold decoration-none cursor-pointer "> <span>   <Link to={"/dashboard"}> Dashboard </Link>   {">"} Role Master </span>
              </button>
            </div>
            <div className="packageSettingInner m-5 rounded-lg text-xs sm:text-sm md:text-md p-3 bg-white shadow-lg">
              <div className="fieldList uppercase font-medium mb-5"> <h3>Role Master </h3>
              </div>
              <hr />
              <div className="AepsTableData" onChange={handleChange}> <ExecutiveTable columns={columns} rows={records} />
              </div>
            </div>
          </div>
        </div>
  )
}

export default RoleMaster