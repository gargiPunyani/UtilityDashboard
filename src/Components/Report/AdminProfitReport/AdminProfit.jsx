import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ExecutiveTable from '../../AdminDashboard/Members/FieldExecutive/FieldExecutiveTable/ExecutiveTable'
import DateWiseSearch from '../../SharedComponent/DateWiseSearch/DateWiseSearch'

const AdminProfit = () => {
     const columns = [ {
          name: "API Name",
         id:"id",
        },{
            name: "Amount",
           id:"amount",
          }, {
          name: "API Charge",
         id:"date",
        }, {
          name: "APi Comm",
         id:"user",
        }, {
            name: "Our Charges ",
           id:"provider",
        },{
          name: "Our Commi",
         id:"mobile",
        }, {
          name: "Net Profit",
         id:"amount",
        } ];
      const rows = [{
          id: "101",
          date: "10-03-2021 15:26:23",
          user: "Vinod",
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
          user: "Suresh",
          mobile: "78965043011",
          provider: "FieldExecutive",
          profit: "20.00",
          wallet: "SuperAdmin",
          package: "",
          status: "Enabled",
          openingBalance: "20000",
        },{
          id: "102",
          date: "01-01-2025 15:26:23",
          user: "Ramesh",
          mobile: "9108700945",
          provider: "FieldExecutive",
          profit: "20.00",
          wallet: "SuperAdmin",
          package: "",
          status: "Enabled",
          openingBalance: "20000",
        },];
      const [records, setRecords] = useState(rows);
      const handleChange = (e) => {
        const newRecords = rows.filter((row) => {
          console.log(e.target.value, "DateSearch");
          return (
            row.date.includes(e.target.value) ||
            row.id.includes(e.target.value) ||
            row.user.toLowerCase().includes(e.target.value) ||
            row.mobile.includes(e.target.value)
          );
        });
        setRecords(newRecords);
      };
  return (
    <div className='AdminProfitOuterMost'>
    <div className='AdminProfitOuter'>
   
        <div className="dashboardBtn button mb-2 p-3">
                <button className="dahsboardButton  p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                  <span>
                    <Link to={"/dashboard"}> Dashboard </Link>
                    {">"} Admin Profit Report
                  </span>
                </button>
              </div>
              <div className='AdminProfit mx-2  xs:mx-5'>
      <div className='AdminProfitInner rounded-lg bg-white p-3 shadow-lg' onClick={handleChange}>
        <DateWiseSearch />
      </div>
      <div className='AdminProfit mt-5 rounded-lg text-xs sm:text-sm md:text-md bg-white shadow-lg p-3 '>
      <div className='fieldList uppercase font-medium mb-5'>
                    <h3>Admin Profit Report</h3>
                </div>
                <hr/>
            <div className='AdminProfitTableData' onChange={handleChange}>
            <ExecutiveTable
            columns={columns}
            rows={records}
            />
            </div>
        </div>
        </div>
      </div>
      </div>
   
  )
}

export default AdminProfit