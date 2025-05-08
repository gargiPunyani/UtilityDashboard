import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ExecutiveTable from '../../AdminDashboard/Members/FieldExecutive/FieldExecutiveTable'
import StatusDownload from '../../SharedComponent/StatusDownload'

const PaymnetView = () => {
     const columns=[{
            name: "ID",
            id:"id",
          },{
            name: "Date Time",
            id:"date",
          },{
            name: "TXIND",
            id:"tax",
          },{
            name: "Description",
            id:"description ",
          },{
            name: "Provider Name",
            id:"provider",
          },{
            name: "OP",
            id:"op",
          },{
            name: "Debit",
            id:"debit",
          },{
            name: "Credit",
            id:"credit",
          }  ,{
            name: "Profit",
            id:"profit",
          },{
            name: "CL",
            id:"cl",
          }]
        const rows=[{}]
        const [records, setRecords] = useState(rows)
    
        const handleChange =(e)=>{
            console.log(e.target.value)
        }
        const handleSearch =(e)=>{
            console.log(e.target.value)
        }
  return (
    <div className='paymnetViewOutMost'>
        <div className='paymnetViewOuter'>
            <div className="dashboardBtn button mb-2 p-3">
              <button className="dahsboardButton  p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                <span>
                  <Link to={"/dashboard"}> Dashboard </Link>
                  {">"} Payment Request View
                </span>
              </button>
            </div>
            <div className="Aeps mx-3 sm:mx-5">
              <div className="AepsInner rounded-lg bg-white p-3 shadow-lg" onChange={handleSearch} >
                <StatusDownload/>
              </div>
              <div className="aeps mt-5 rounded-lg text-xs sm:text-sm md:text-md bg-white shadow-lg p-3 ">
                <div className="fieldList uppercase font-medium mb-5">
                  <h3>Payment Request View (Amount: 2,00,000.00) </h3>
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

export default PaymnetView