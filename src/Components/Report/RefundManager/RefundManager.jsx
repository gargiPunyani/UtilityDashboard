import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ExecutiveTable from '../../AdminDashboard/Members/FieldExecutive/FieldExecutiveTable'
import SearchType from '../../SharedComponent/SearchType'

const RefundManager = () => {
    const columns=[{
        name: "ReportID",
        id:"id",
      },{
        name: "Date",
        id:"date",
      },{
        name: "User Name",
        id:"user ",
      },{
        name: "Provider Name",
        id:"provider",
      },{
        name: "Number",
        id:"mobile",
      },{
        name: "TXIND",
        id:"tax",
      },{
        name: "Opening Balance",
        id:"openingBalance",
      },{
        name: "Amount",
        id:"amount",
      }  ,{
        name: "Profit",
        id:"profit",
      },{
        name: "Closing Amount",
        id:"closingAmount",
      },{
        name: "Status",
        id:"status",
      },{
        name: "Action",
        id:"action",
    }]
    const rows=[{}]

    const [records, setRecords]=useState(rows)
    const handleChange=(e)=>{
        console.log(e.target.value)
        setRecords(...records)
    } 
    const handleSearch=(e)=>{
        console.log(e.target.value)
        const newRecords=()=>{}

        setRecords(newRecords)
    } 

  return (
    <div className='refundManagerOutMost'>
        <div className='refundManagerOuter'> 
            <div className="dashboardBtn button mb-2 p-3">
              <button className="dahsboardButton p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                <span>
                  <Link to={"/dashboard"}> Dashboard </Link>
                  {">"} Refund Manager
                </span>
              </button>
            </div>
            <div className="Aeps mx-3 sm:mx-5">
              <div className="AepsInner rounded-lg bg-white p-3 shadow-lg" onChange={handleSearch} >
                <SearchType/>
              </div>
              <div className="aeps mt-5 rounded-lg text-xs sm:text-sm md:text-md bg-white shadow-lg p-3 ">
                <div className="fieldList uppercase font-medium mb-5">
                  <h3>Refund Manager</h3>
                </div>
                <hr />
                <div className="AepsTableData" onChange={handleChange}>
                  <ExecutiveTable columns={columns} rows={records} />
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default RefundManager