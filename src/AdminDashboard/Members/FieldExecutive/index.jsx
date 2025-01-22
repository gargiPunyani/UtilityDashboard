import React, { useState } from "react";
import SideNavbar from "../../../SharedComponent/SideNavbar";
import MainNav from "../../../SharedComponent/MainNavbar";
import { Link, useNavigate } from "react-router-dom";
import ExecutiveTable from "./FieldExecutiveTable";

const FieldExecutive = () => {
  const columns = [
    { id: "id", name: "UserID" },
    { id: "date", name: "Joining Date" },
    { id: "name", name: "Name" },
    { id: "mobile", name: "Mobile" },
    { id: "member", name: "Member Type" },
    { id: "balance", name: "Normal Balance" },
    { id: "parent", name: "Parent" },
    { id: "package", name: "Package" },
    { id: "status", name: "Status" },
    { id: "activity", name: "User Activity" },
  ];
  const rows = [
    {
      id: "101",
      date: "10-03-2021 15:26:23",
      name: "Vinod",
      mobile: "9876543210",
      member: "FieldExecutive",
      balance: "20.00",
      parent: "SuperAdmin",
      package: "",
      status: "Enabled",
      // parent:[{parent1:"superAdmin", parent2:"retialer"}]
    },
    {
      id: "103",
      date: "10-03-2021 15:26:23",
      name: "deep",
      mobile: "986144600",
      member: "FieldExecutive",
      balance: "20.00",
      parent: "SuperAdmin",
      package: "",
      status: "Disabled",
      // parent:[{parent1:"superAdmin", parent2:"retialer"}]
    },
    {
      id: "102",
      date: "10-03-2021 15:26:23",
      name: "yugal",
      mobile: "23472711",
      member: "FieldExecutive",
      balance: "20.00",
      parent: "SuperAdmin",
      package: "",
      status: "Pending",
      // parent:[{parent1:"superAdmin", parent2:"retialer"}]
    },
  ];
  const [records, setRecords] = useState(rows);
  const handleChange = (e) => {
    const newData = rows.filter((row) => {
      console.log(e.target.value);
      return (
        row.id.includes(e.target.value) ||
        row.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row.mobile.includes(e.target.value)
      );
    });
    setRecords(newData);
  };
  const navigate = useNavigate();
  const createUser = () => {
    navigate("/create-user");
  };
    const handleDownload=(rows)=>{}

  return (
    <div className="fieldOuterMost">
      <div className="fieldOuter">

            <div className="dashboardBtn button mb-2 p-3">
              <button className="dahsboardButton relative p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                <span>
                  <Link to={"/dashboard"}> Dashboard </Link>
                  {">"} FIELDEXECUTIVE(FE)
                </span>
              </button>
            </div>
            <div className="fieldExecutiveList mx-5 shadow-lg p-2 rounded-lg bg-white">
              <div className="executiveData flex flex-wrap md:flex-nowrap gap-3 py-3 text-xs sm:text-sm md:text-md justify-between items-center px-6">
                <div className="fieldList uppercase font-medium ">
                  <h3>Fieldexecutive(FE) List</h3>
                </div>
                <div className="feildExevutiveBtns xs:flex gap-5 justify-between w-full sm:w-auto sm:justify-end">
                  <div className="logoutUser text-white cursor-pointer w-full xs:w-auto text-xs sm:text-sm">
                    <button className="logoutUserButton bg-red-500 p-2 rounded-md w-full">
                      Logout All Users
                    </button>
                  </div>
                  <div className="downloadFields text-white cursor-pointer mt-2 xs:mt-0  w-full xs:w-auto text-xs sm:text-sm" onClick={handleDownload} >
                    <button className="downloadFieldsButton bg-green-500 p-2 rounded-md w-full">
                      Download FE
                    </button>
                  </div>
                  <div className="createUser text-white cursor-pointer mt-2 xs:mt-0  w-full xs:w-auto text-xs sm:text-sm"
                    onClick={createUser}>
                    <button className="createUserButton bg-blue-500 p-2 rounded-md w-full">
                      Create New User
                    </button>
                  </div>
                </div>                
              </div>
              <hr />
              <div className="fieldExecutiveTableData mt-5" onChange={handleChange}>               
                <ExecutiveTable
                  columns={columns}
                  rows={records}
                  />
              </div>
            </div>
          </div>
        </div>
      
  );
};

export default FieldExecutive;
