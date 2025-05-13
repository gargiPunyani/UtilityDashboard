import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ExecutiveTable from '../../AdminDashboard/Members/FieldExecutive/FieldExecutiveTable/ExecutiveTable'
import DateWiseSearch from '../../SharedComponent/DateWiseSearch/DateWiseSearch'

const Investment = () => {
    const columns=[{
        name: "userID",
       id:"id",
    },{
        name: "Date Time",
       id:"date",
      },{
        name: "User",
       id:"user",
      },{
        name: "Number",
       id:"mobile",
      },{
        name: "Provider",
       id:"provider",
      },{
        name: "TXNID",
       id:"tax",
      },{
        name: "Opening Balance",
       id:"openingBalance",
      },{
        name: "Amount",
       id:"amount",
      },{
        name: "Profit",
       id:"profit",
      },{
        name: "Closing Balance",
       id:"closingBalance",
      },{
        name: "Wallet",
       id:"wallet",
      },{
        name: "Satus",
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
        // parent:[{parent1:"superAdmin", parent2:"retialer"}]
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
        // parent:[{parent1:"superAdmin", parent2:"retialer"}]
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
        // parent:[{parent1:"superAdmin", parent2:"retialer"}]
      },]

    const [ records, setRecords] = useState(rows);

      const handleChange=(e)=>{
        const newRecords = rows.filter(row=>{
            console.log(e.target.value , "DateSearch")
            return row.date.includes(e.target.value) || row.id.includes(e.target.value) || row.user.toLowerCase().includes(e.target.value) || row.mobile.includes(e.target.value)

         })
        setRecords(newRecords)
    }
    const handleDownload=(rows)=>{}
  return (
    <div className='mobileHistoryOuterMost'>
    <div className='mobileHistoryOuter'>
  
        <div className="dashboardBtn button mb-2 p-3">
                <button className="dahsboardButton  p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                  <span>
                    <Link to={"/dashboard"}> Dashboard </Link>
                    {">"} Investment
                  </span>
                </button>
              </div>
              <div className='mobileHistory mx-2  xs:mx-5'>
      <div className='mobileHistoryInner rounded-lg bg-white p-3 shadow-lg' onClick={handleDownload} onChange={handleChange}>
        <DateWiseSearch />
      </div>
      <div className='mobileRecharge mt-5 rounded-lg text-xs sm:text-sm md:text-md bg-white shadow-lg p-3 '>
      <div className='fieldList uppercase font-medium mb-5'>
                    <h3>Investment</h3>
                </div>
                <hr/>
            <div className='mobileHistoryTableData' onChange={handleChange}>
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

export default Investment