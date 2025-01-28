import React, { useState } from "react"
import SideNavbar from "../../../SharedComponent/SideNavbar";
import MainNav from "../../../SharedComponent/MainNavbar";
import { Link } from "react-router-dom";
import SearchWallet from "../../../SharedComponent/SearchWallet";
import ExecutiveTable from "../FieldExecutive/FieldExecutiveTable";

const Franchise =()=>{
      const columns = [{
              name: "UserID",
              id:"id",
            },{
              name: "Name",
              id:"name",
            },{
              name: "Opening Balance",
              id:"openingBalace",
            },{
              name: "Credit Amount",
              id:"credit",
            },{
              name: "Debit Amount",
              id:"debit",
            },{
              name: "Sales",
              id:"sales",
            },{
              name: "Profit",
              id:"profit",
            },{
              name: "Charges",
              id:"charges",
            },{
              name: "Pending",
              id:"pending",
            }, ];
          const rows = [{
              id: "101",
              date: "10-03-2021 15:26:23",
              name: "Vinod",
              mobile: "9876543210",
              provider: "FieldExecutive",
              profit: "20.00",
              wallet: "SuperAdmin",
              package: "",
              status: "Enabled",
              openingBalance: "20000",
            },{
              id: "103",
              date: "10-03-2021 15:26:23",
              name: "Suresh",
              mobile: "78965043011",
              provider: "FieldExecutive",
              profit: "2000.75",
              wallet: "SuperAdmin",
              package: "",
              status: "Enabled",
              openingBalance: "20000",
            } ];
          const [records, setRecords] = useState(rows);
          const handleChange = (e) => {
            const newData = rows.filter((row) => {
              console.log(e.target.value, " HEloooo");
              return (
                row.id.includes(e.target.value) ||
                row.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
                row.mobile.includes(e.target.value)
              );
            });
            setRecords(newData);
          };
          const handleSearch = (e) => {
            const newRecords = rows.filter((row) => {
              console.log(e.target.value, " HEloooo");
              return (
                row.date.includes(e.target.value) &&
                row.wallet.toLowerCase().includes(e.target.value.toLowerCase())
              );
            });
            setRecords(newRecords);
          };
return(
    <div className="franchiseOuterMost">
        <div className="franchiseeOuter">
            <div className="dashboardBtn button mb-2 p-3">
              <button className="dahsboardButton relative p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                <span>
                  <Link to={"/dashboard"}> Dashboard </Link>
                    {">"} Franchise (FSDS)
                </span>
              </button>
            </div>
            <div className="Aeps mx-3 sm:mx-5">
              <div className="AepsInner rounded-lg bg-white p-3 shadow-lg" onChange={handleSearch} >
                <SearchWallet />
              </div>
              <div className="aeps mt-5 rounded-lg text-xs sm:text-sm md:text-md bg-white shadow-lg p-3 ">
                <div className="fieldList uppercase font-medium mb-5">
                  <h3>Franchise (FSDS)</h3>
                </div>
                <hr />
                <div className="AepsTableData" onChange={handleChange}>
                  <ExecutiveTable columns={columns} rows={records} />
                </div>
              </div>
            </div>
          </div>
        </div>            
)}
export default Franchise;
