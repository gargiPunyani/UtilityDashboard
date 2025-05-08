import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExecutiveTable from "../../Members/FieldExecutive/FieldExecutiveTable";

const SMSSetting = () => {
  const columns = [{
      name: "Sr No",
     id:"id",
    },{
      name: "Template ID",
     id:"tempId",
    },{
      name: "Template Name",
     id:"tName",
    },{
      name: "Template Message",
     id:"tMessage",
    },{
      name: "Whatsapp",
     id:"whatsapp",
    },{
      name: "SMS",
     id:"sms",
    },{
      name: "Mail",
     id:"mail",
    },{
      name: "Action",
     id:"action",
    },
    
  ];
  const rows = [{
      id: 1,
      tempId: "1234561",
      tName: "LOGIN OTP",
      tMessage: "Dear {#var#}, your login verification is done",
      sms: "Disable",
      whatsapp: "Disable",
      mail: "Disable",
      action: (
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <svg  xmlns="http://www.w3.org/2000/svg"  height="24px"  viewBox="0 -960 960 960"  width="24px"  fill="#5985E1"> <path d="M480-120q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q82 0 155.5 35T760-706v-94h80v240H600v-80h110q-41-56-101-88t-129-32q-117 0-198.5 81.5T200-480q0 117 81.5 198.5T480-200q105 0 183.5-68T756-440h82q-15 137-117.5 228.5T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z" /> </svg>
          <span style={{ marginLeft: '8px', fontSize: '14px', color: '#00000' }}>  
            Update
          </span>
        </div>
      ),
    },{
      id: 2,
      tempId: "1234562",
      tName: "User Registration",
      tMessage: "Dear {#var#}, your login verification is done",
      sms: "Enable",
      whatsapp: "Disable",
      mail: "Disable",
      action:  (
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5985E1" > <path d="M480-120q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q82 0 155.5 35T760-706v-94h80v240H600v-80h110q-41-56-101-88t-129-32q-117 0-198.5 81.5T200-480q0 117 81.5 198.5T480-200q105 0 183.5-68T756-440h82q-15 137-117.5 228.5T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z" /> </svg>
          <span style={{ marginLeft: '8px', fontSize: '14px', color: '#00000' }}>
            Update
          </span>
        </div>
      ),
    },{
      id: 3,
      tempId: "1234563",
      tName: "Reset Password",
      tMessage: "Dear {#var#}, your login verification is done",
      sms: "Enable",
      whatsapp: "Disable",
      mail: "Disable",
      action:  (
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5985E1"> <path d="M480-120q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q82 0 155.5 35T760-706v-94h80v240H600v-80h110q-41-56-101-88t-129-32q-117 0-198.5 81.5T200-480q0 117 81.5 198.5T480-200q105 0 183.5-68T756-440h82q-15 137-117.5 228.5T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z" />
          </svg>
          <span style={{ marginLeft: '8px', fontSize: '14px', color: '#00000' }}>
            Update
          </span>
        </div>
      ),
    },{
      id: 4,
      tempId: "1234564",
      tName: "Balance Transfer Debit",
      tMessage: "Dear {#var#}, your login verification is done",
      sms: "Pending",
      whatsapp: "Disable",
      mail: "Disable",
      action:  (
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5985E1"> <path d="M480-120q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q82 0 155.5 35T760-706v-94h80v240H600v-80h110q-41-56-101-88t-129-32q-117 0-198.5 81.5T200-480q0 117 81.5 198.5T480-200q105 0 183.5-68T756-440h82q-15 137-117.5 228.5T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z" /></svg>
          <span style={{ marginLeft: '8px', fontSize: '14px', color: '#00000' }}> Update
          </span>
        </div>
      ),
    },{
      id: 5,
      tempId: "1234565",
      tName: "Balance Transfer Debit",
      tMessage: "Dear {#var#}, your login verification is done",
      sms: "Disable",
      whatsapp: "Disable",
      mail: "Disable",
      action:  (
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5985E1"> <path d="M480-120q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q82 0 155.5 35T760-706v-94h80v240H600v-80h110q-41-56-101-88t-129-32q-117 0-198.5 81.5T200-480q0 117 81.5 198.5T480-200q105 0 183.5-68T756-440h82q-15 137-117.5 228.5T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z" /></svg>
          <span style={{ marginLeft: '8px', fontSize: '14px', color: '#00000' }}>
            Update
          </span>
        </div>
      ),
      
    },];
 
  const [records, setRecords] = useState(rows);
  const handleChange = (e) => {
    // console.log(e.target.value);
    const newData = rows.filter((row) => {
      return (
        row.tName.toLowerCase().includes(e.target.value) ||
        row.tempId.includes(e.target.value)
      );
    });
    setRecords(newData);
  };
  return (
    <div className="smsSettingOutMost">
      <div className="smsSettingOuter">
            <div className="dashboardBtn button mb-2 p-3">
              <button className="dahsboardButton  p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                <span>
                  <Link to={"/dashboard"}> Dashboard </Link>
                  {">"} SMS Setting
                </span>
              </button>
            </div>
            <div className="packageSettingInner m-5 rounded-lg text-xs sm:text-sm md:text-md p-3 bg-white shadow-lg">
              <div className="fieldList uppercase mb-5 font-medium">
                <h3>SMS Setting</h3>
              </div>
              <hr />
              <div className="AepsTableData" onChange={handleChange}>
                <ExecutiveTable
                  columns={columns}
                  rows={records} />
              </div>
            </div>
          </div>
        </div>
    
  );
};

export default SMSSetting;
