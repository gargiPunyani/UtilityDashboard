import React from 'react'
import { Link } from 'react-router-dom'
import ExecutiveTable from '../../../AdminDashboard/Members/FieldExecutive/FieldExecutiveTable/ExecutiveTable'

const ReturnRequest = () => {
    const columns=[ {
        id: "id",
        name: "ID",
      },
      {
        id: "date",
        name: "Date",
      }, {
        id: "request",
        name: "Request By",
      },
      {
        id: "remark",
        name: "Remark",
      }, {
        id: "amount",
        name: "Amount",
      },
      {
        id: "status",
        name: "Status",
      }, {
        id: "action",
        name: "action",
      }]
    const data=[]
  return (
    <div className='returnRequestOuter'>
        <div className='returnRequestOut'>
            <div className='returnRequestInner p-3'>
            <div className="dashboardBtn button mb-3">
            <button className="dahsboardButton  p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
              <span>
                <Link to={"/retailer-dashboard"}> Dashboard </Link>
                {">"} Balance Return Request
              </span>
            </button>
          </div>
            <div className="dataTable bg-white shadow-lg rounded-md mt-3 p-3">
            <div className="dataTableHead uppercase font-medium mb-3">
                Balance Return Request
            </div>
            <hr/>
            <ExecutiveTable rows={data} columns={columns} />
          </div>
            </div>
        </div>
    </div>
  )
}

export default ReturnRequest