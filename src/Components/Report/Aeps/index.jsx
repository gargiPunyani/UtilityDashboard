import React, { useState } from 'react'
import ExecutiveTable from '../../AdminDashboard/Members/FieldExecutive/FieldExecutiveTable';
import DateWiseSearch from '../../SharedComponent/DateWiseSearch';
import SideNavbar from '../../SharedComponent/SideNavbar';
import MainNav from '../../SharedComponent/MainNavbar';
import { Link } from 'react-router-dom';

const Aeps = () => {
    const columns=[{
            name: "ID",
           id:"id",
        },{
            name: "Date Time",
           id:"date",
          },
          {
            name: "Provider",
           id:"provider",
          },
          {
            name: "Number",
           id:"mobile",
          },
          {
            name: "TXNID",
           id:"tax",
          },
          {
            name: "Amount",
           id:"amount",
          },{
            name: "Bank",
           id:"bank",
          },{
            name: "Aadhar",
           id:"aadhar",
          },
        {
            name: "Status",
           id:"status",
          },{
            name: "Action",
           id:"action",
          }]
        const rows= [{
            id:"101",
            date:"10-03-2021 15:26:23",
            user:"Vinod",
            mobile:"9876543210",
            provider:"FieldExecutive",
            profit:"20.00",
            wallet:"SuperAdmin",
            package:"",
            status:"Enabled",
            openingBalance:"20000"
          },{
            id:"103",
            date:"10-03-2021 15:26:23",
            user:"Suresh",
            mobile:"78965043011",
            provider:"FieldExecutive",
            profit:"20.00",
            wallet:"SuperAdmin",
            package:"",
            status:"Enabled",
            openingBalance:"20000"
          },{
            id:"102",
            date:"01-01-2025 15:26:23",
            user:"Ramesh",
            mobile:"9108700945",
            provider:"FieldExecutive",
            profit:"20.00",
            wallet:"SuperAdmin",
            package:"",
            status:"Enabled",
            openingBalance:"20000"
          },]
        const [ records, setRecords] = useState(rows);
          const handleChange=(e)=>{
            const newRecords = rows.filter(row=>{
                console.log(e.target.value , "DateSearch")
                return row.date.includes(e.target.value) || row.id.includes(e.target.value) || row.user.toLowerCase().includes(e.target.value) || row.mobile.includes(e.target.value)
             })
            setRecords(newRecords)
        }
  return (
    <div className='AepsOuterMost'>
    <div className='AepsOuter'>
  
        <div className="dashboardBtn button mb-2 p-3">
                <button className="dahsboardButton relative p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                  <span>
                    <Link to={"/dashboard"}> Dashboard </Link>
                    {">"} Aeps
                  </span>
                </button>
              </div>
              <div className='Aeps mx-2  xs:mx-5'>
      <div className='AepsInner rounded-lg bg-white p-3 shadow-lg' onClick={handleChange}>
        <DateWiseSearch />
      </div>
      <div className='aeps mt-5 rounded-lg text-xs sm:text-sm md:text-md bg-white shadow-lg p-3 '>
      <div className='fieldList uppercase font-medium mb-5'>
                    <h3>Aeps</h3>
                </div>
                <hr/>
            <div className='AepsTableData' onChange={handleChange}>
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

export default Aeps