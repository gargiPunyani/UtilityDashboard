import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ExecutiveTable from '../../../AdminDashboard/Members/FieldExecutive/FieldExecutiveTable'
import DateWiseSearch from '../../../SharedComponent/DateWiseSearch'

const DebitReport = () => {
    const columns=[{ 
        name: "ID",
       id:"id",
      },{
        name: "Date Time",
       id:"date",
      },,{
        name: "User Name",
       id:"user",
      },{
        name: "Transfer To",
       id:"transferTo ",
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
        name: "Profit",
       id:"profit",
      },{
        name: "Balance",
       id:"balance",
    },{
        name: "Status",
       id:"status",
    }]
    const rows=[{}]
      const [records, setRecords]= useState( rows)
        const handleSearch=(e)=>{
            console.log(e.target.value)
        }
        const handleChange =()=>{}
  return (
    <div className='debitReportOutMost'>
        <div className='debitReportOuter'>
       
            <div className="dashboardBtn button mb-2 p-3">
              <button className="dahsboardButton  p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                <span>
                  <Link to={"/dashboard"}> Dashboard </Link>
                  {">"} Debit Report
                </span>
              </button>
            </div>
            <div className="Aeps mx-3 sm:mx-5">
              <div className="AepsInner rounded-lg bg-white p-3 shadow-lg" onChange={handleSearch} >
                <DateWiseSearch/>
              </div>
              <div className="aeps mt-5 rounded-lg text-xs sm:text-sm md:text-md bg-white shadow-lg p-3 ">
                <div className="fieldList uppercase font-medium mb-5">
                  <h3>Debit Report</h3>
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

export default DebitReport