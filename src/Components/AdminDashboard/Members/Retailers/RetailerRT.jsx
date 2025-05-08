import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import ExecutiveTable from "../FieldExecutive/FieldExecutiveTable";

const RetailerRT = () => {
    const columns = [
        { id: "id", name: "UserID" },
        { id: "name", name: "Name" },
        { id: "openingBalance", name: "Opening Balance" },
        { id: "credit", name: "Credit Amount" },
        { id: "debit", name: "Debit Amount" },
        { id: "sales", name: "Sales" },
        { id: "profit", name: "Profit" },
        { id: "charge", name: "Charges" },
        { id: "pending", name: "Pending" },
      ];
    
      const rows = [
        { id: "101", name: "Vinod", credit: "0.00", debit: "0.00", profit: "20.00", sales: "0.00", charge: "0.00", pending: "0.00", openingBalance: "20000" },
        { id: "103", name: "Suresh", credit: "0.00", debit: "0.00", profit: "20.00", sales: "0.00", charge: "0.00", pending: "0.00", openingBalance: "20000" },
        { id: "102", name: "Ramesh", credit: "0.00", debit: "0.00", profit: "20.00", sales: "0.00", charge: "0.00", pending: "0.00", openingBalance: "20000" },
        { id: "104", name: "Vinod Pal", credit: "0.00", debit: "0.00", profit: "20.00", sales: "0.00", charge: "0.00", pending: "0.00", openingBalance: "20000" },
        { id: "105", name: "Jassu", credit: "0.00", debit: "0.00", profit: "20.00", sales: "0.00", charge: "0.00", pending: "0.00", openingBalance: "20000" },
      ];
//   const columns = [
//     {
//       name: "UserID",
//       selector: (row) => row.id,
//       sortable: true,
//     },
//     {
//       name: "Name",
//       selector: (row) => row.name,
//       sortable: true,
//     },
//     {
//       name: "Opening Balance",
//       selector: (row) => row.openingBalance,
//       sortable: true,
//     },
//     {
//       name: "Credit Amount",
//       selector: (row) => row.credit,
//       sortable: true,
//     },
//     {
//       name: "Debit Amount",
//       selector: (row) => row.debit,
//       sortable: true,
//     },
//     {
//       name: "Sales",
//       selector: (row) => row.sales,
//       sortable: true,
//     },
//     {
//       name: "Profit",
//       selector: (row) => row.profit,
//       sortable: true,
//     },
//     {
//       name: "Charges",
//       selector: (row) => row.charge,
//       sortable: true,
//     },
//     {
//       name: "Pending",
//       selector: (row) => row.pending,
//       sortable: true,
//     },
//   ];
//     const rows = [

//     {
//       id: "101",
//       name: "Vinod",
//       credit: "0.00",
//       debit: "0.00",
//       profit: "20.00",
//       sales: 0.0,
//       charge: "0.00",
//       pending: "0.00",
//       openingBalance: "20000",
//     },
//     {
//       id: "103",
//       name: "Suresh",
//       credit: "0.00",
//       debit: "0.00",
//       profit: "20.00",
//       sales: 0.0,
//       charge: "0.00",
//       pending: "0.00",
//       openingBalance: "20000",
//     },
//     {
//       id: "102",
//       name: "Ramesh",
//       credit: "0.00",
//       debit: "0.00",
//       profit: "20.00",
//       sales: 0.0,
//       charge: "0.00",
//       pending: "0.00",
//       openingBalance: "20000",
//     },
//     {
//       id: "104",
//       name: "Vinod Pal",
//       credit: "0.00",
//       debit: "0.00",
//       profit: "20.00",
//       sales: "0.00",
//       charge: "0.00",
//       pending: "0.00",
//       openingBalance: "20000",
//     },
//     {
//       id: "105",
//       name: "Jassu",
//       credit: "0.00",
//       debit: "0.00",
//       profit: "20.00",
//       sales: "0.00",
//       charge: "0.00",
//       pending: "0.00",
//       openingBalance: "20000",
//     },
//   ];
  const [records, setRecords] = useState(rows);

  const handleChange = (e) => {
    const newData = rows.filter((rows) => {
      console.log(e.target.value, " HEloooo");
      return (
        rows.id.includes(e.target.value) ||
        rows.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setRecords(newData);
  };

  const navigate = useNavigate();
  const createUser = () => {
    navigate("/createUser");
  };
  const handleDownload=(data)=>{}
  return (
    <div className="reatilerIncomOutMost">
      <div className="retailerIncomeOuter">
        
            <div className="dashboardBtn button mb-2 p-3">
              <button className="dahsboardButton  p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                <span>
                  <Link to={"/dashboard"}> Dashboard </Link>
                  {">"} Retailer (RT)
                </span>
              </button>
            </div>
            <div className="fieldExecutiveList mx-5 shadow-lg p-2 rounded-lg bg-white">
              <div className="executiveData flex flex-wrap md:flex-nowrap gap-3 py-3 text-xs sm:text-sm md:text-md justify-between items-center px-4">
                <div className="fieldList uppercase font-medium ">
                  <h3>Reatiler(RT)</h3>
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

export default RetailerRT;
