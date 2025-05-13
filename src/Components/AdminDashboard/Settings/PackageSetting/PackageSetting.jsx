import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ExecutiveTable from "../../Members/FieldExecutive/FieldExecutiveTable/ExecutiveTable";

const PackageSetting = () => {
  const columns = [
    {
      name: "Sr NO",
      id: "id",
    },
    {
      name: "Package Name",
      id: "pName",
    },
    {
      name: "Commission",
      id: "commission",
    },
    {
      name: "Action",
      id: "action",
    },
    {
      name: "Delete",
      id: "delete",
    },
  ];
  const rows = [
    {
      id: 1,
      pName: "FRANCHISE(1) (FSDS)",
      commission: "Commission Set Up",
      action: (
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5985E1"
          >
            <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
          </svg>
          <span
            style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}
          >
            Edit
          </span>
        </div>
      ),
      delete: (
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#EA3323"
          >
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
          </svg>
          <span
            style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}
          >
            Delete
          </span>
        </div>
      ),
    },
    {
      id: 2,
      pName: "FRANCHISE(2) (FSDS)",
      commission: "Commission Set Up",
      action: (
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5985E1"
          >
            <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
          </svg>
          <span
            style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}
          >
            Edit
          </span>
        </div>
      ),
      delete: (
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#EA3323"
          >
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
          </svg>
          <span
            style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}
          >
            Delete
          </span>
        </div>
      ),
    },
    {
      id: 3,
      pName: "SUPER DISTRIBUTOR (SDS)",
      commission: "Commission Set Up",
      action: (
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5985E1"
          >
            <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
          </svg>
          <span
            style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}
          >
            Edit
          </span>
        </div>
      ),
      delete: (
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#EA3323"
          >
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
          </svg>
          <span
            style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}
          >
            Delete
          </span>
        </div>
      ),
    },
    {
      id: 4,
      pName: "DISTRIBUTOR (DS)",
      commission: "Commission Set Up",
      action: (
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5985E1"
          >
            <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
          </svg>
          <span
            style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}
          >
            Edit
          </span>
        </div>
      ),
      delete: (
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#EA3323"
          >
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
          </svg>
          <span
            style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}
          >
            Delete
          </span>
        </div>
      ),
    },
    {
      id: 5,
      pName: "RETAILER (RT)",
      commission: "Commission Set Up",
      action: (
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5985E1"
          >
            <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
          </svg>
          <span
            style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}
          >
            Edit
          </span>
        </div>
      ),
      delete: (
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#EA3323"
          >
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
          </svg>
          <span
            style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}
          >
            Delete
          </span>
        </div>
      ),
    },
    {
      id: 6,
      pName: "(ONE) RETAILER ",
      commission: "Commission Set Up",
      action: (
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5985E1"
          >
            <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
          </svg>
          <span
            style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}
          >
            Edit
          </span>
        </div>
      ),
      delete: (
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#EA3323"
          >
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
          </svg>
          <span
            style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}
          >
            Delete
          </span>
        </div>
      ),
    },
    {
      id: 7,
      pName: ".350 BANK REATILER ",
      commission: "Commission Set Up",
      action: (
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5985E1"
          >
            <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
          </svg>
          <span
            style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}
          >
            Edit
          </span>
        </div>
      ),
      delete: (
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#EA3323"
          >
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
          </svg>
          <span
            style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}
          >
            Delete
          </span>
        </div>
      ),
    },
  ];
  const [records, setRecords] = useState(rows);
  const handleChange = (e) => {
    console.log(e.target.value);
    const newData = rows.filter((row) => {
      return row.pName.toLowerCase().includes(e.target.value);
    });
    setRecords(newData);
  };
  const navigate= useNavigate()
  const handlePackage=()=>{
    navigate("/new-package")
  }
  return (
    <div className="packageSettingOutMost">
      <div className="packageSetOuter">
        
            <div className="dashboardBtn button mb-2 p-3">
              <button className="dahsboardButton p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                <span>
                  <Link to={"/dashboard"}> Dashboard </Link>
                  {">"} Package Setting
                </span>
              </button>
            </div>
            <div className="packageSettingInner m-5 rounded-lg text-xs sm:text-sm md:text-md p-3 bg-white shadow-lg">
              <div className="aeps sm:flex justify-between gap-5 items-center mb-5">
                <div className="fieldList uppercase font-medium">
                  <h3>Package Setting </h3>
                </div>
                <div className="newPackage cursor-pointer mt-2">
                  <button className="newPackageBtn bg-blue-500 shadow-md text-white py-3 px-2 rounded-lg" onClick={handlePackage}>
                    Create New Package
                  </button>
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

export default PackageSetting;
