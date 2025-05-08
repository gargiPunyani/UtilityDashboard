import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExecutiveTable from "../../AdminDashboard/Members/FieldExecutive/FieldExecutiveTable";

const ServiceMaster = () => {
  const columns = [ {
      name: "Service Name",
      id:"serviceName",
    },
    {
      name: "Service Icon",
      id:"icon",
    },
    {
      name: "Walllet",
      id:"wallet",
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
      serviceName: (
        <div style={{}}>
          <p>Aeps</p>
          <span style={{ color: "blue", textDecoration: "underline", cursor:"pointer" }}>
            Add logo
          </span>
        </div>
      ),
      icon:"",
      // icon: <img src="" />,
      wallet: "Normal Wallet",
      status: "Enabled",
      action: "Edit",
    },
    {
      id: "3",
      serviceName: (
        <div style={{}}>
          <p>Braodband</p>
          <span style={{ color: "blue", textDecoration: "underline", cursor:"pointer"}}>
            Add logo
          </span>
        </div>
      ),
      // icon: <img src="" />,
      wallet: "Normal Wallet",
      status: "Enabled",
      action: "Edit",
    },
    {
      id: "2",
      serviceName: (
        <div style={{}}>
          <p>Cable Tv</p>
          <span style={{ color: "blue", textDecoration: "underline", cursor:"pointer" }}>
            Add logo
          </span>
        </div>
      ),
      // icon: <img src="" />,
      wallet: "Normal Wallet",
      status: "Enabled",
      action: "Edit",
    },
    {
      id: "4",
      serviceName: (
        <div style={{}}>
          <p>DTM2</p>
          <span style={{ color: "blue", textDecoration: "underline", cursor:"pointer" }}>
            Add logo
          </span>
        </div>
      ),
      // icon: <img src="" />,
      wallet: "Normal Wallet",
      status: "Enabled",
      action: "Edit",
    },
    {
      id: "5",
      serviceName: (
        <div style={{}}>
          <p>DTM1</p>
          <span style={{ color: "blue", textDecoration: "underline", cursor:"pointer" }}>
            Add logo
          </span>
        </div>
      ),
      // icon: <img src="" />,
      wallet: "Amazon Wallet",
      status: "Enabled",
      action: "Edit",
    },
    {
      id: "6",
      serviceName: (
        <div style={{}}>
          <p>DTM3</p>
          <span style={{ color: "blue", textDecoration: "underline", cursor:"pointer" }}>
            Add logo
          </span>
        </div>
      ),
      // icon: <img src="" />,
      wallet: "Paytm Wallet",
      status: "Enabled",
      action: "Edit",
    },
    {
      id: "7",
      serviceName: (
        <div style={{}}>
          <p>DTH</p>
          <span style={{ color: "blue", textDecoration: "underline", cursor:"pointer" }}>
            Add logo
          </span>
        </div>
      ),
      // icon: <img src="" />,
      wallet: "Gpay Wallet",
      status: "Enabled",
      action: "Edit",
    },
  ];

  const [records, setRecords] = useState(rows);
  const handleChange = (e) => {
    // console.log(e.target.value, "servic-master")
    const newData = rows.filter((row)=>{
      return (row.wallet.toLowerCase().includes(e.target.value.toLowerCase()))
    })
    setRecords(newData)
  };
  
  return (
    <div className="serviceMasterOutMost">
      <div className="service<MasterOut">
            <div className="dashboardBtn button mb-2 p-3">
              <button className="dahsboardButton  p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                <span>
                  <Link to={"/dashboard"}> Dashboard </Link>
                  {">"} Service Master
                </span>
              </button>
            </div>
            <div className="packageSettingInner m-5 rounded-lg text-xs sm:text-sm md:text-md p-3 bg-white shadow-lg">
              <div className="fieldList uppercase font-medium mb-5">
                <h3>Service Master </h3>
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

export default ServiceMaster;
