import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ExecutiveTable from '../../AdminDashboard/Members/FieldExecutive/FieldExecutiveTable'

const BalanceReturn = () => {
  const columns=[{  
    name: "UserID",
    id:"id",
  },{
    name: "date",
    id:"date",
  },{
    name: "Request By",
    id:"request ",
  },{
    name: "Remark",
    id:"remark",
  },{
    name: "Amount",
    id:"amount",
  },{
    name: "Staus",
    id:"staus",
  },{
    name: "Action",
    id:"action",
  }]
  const rows=[{}]

  const [records, setRecords] = useState(rows)

  return (
    <div className='balanceReturnOutMost'>
      <div className='balanceReturnOuter'>
            <div className="dashboardBtn button mb-2 p-3">
              <button className="dahsboardButton  p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                <span>
                  <Link to={"/dashboard"}> Dashboard </Link>
                  {">"} Balance Return
                </span>
              </button>
            </div>
        <div className='balanceReturn mx-5 bg-white shadow-xl rounded-lg'>
        <div className="fieldList uppercase font-medium p-5">
                  <h3>Balance Return</h3>
                </div>
                <hr />
          <ExecutiveTable
          columns={columns} rows={records} />
        </div>
        </div>
        </div>
  )
}

export default BalanceReturn