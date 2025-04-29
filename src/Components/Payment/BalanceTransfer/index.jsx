import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ExecutiveTable from '../../AdminDashboard/Members/FieldExecutive/FieldExecutiveTable'

const BalanceTransfer = () => {
      const columns = [{  name: "User ID",
         id:"id",
        },
        {
          name: "Name",
         id:"name",
        },
        {
          name: "Mobile",
         id:"mobile",
        },
        {
            name: "Balance",
           id:"balance",
         }];
        const rows = [{}];
        const [records, setRecords] = useState (rows);
        const handleChange = () => {
          setRecords(...rows);
        };
  return (
    <div className='balanceReturnReq'>
    <div className='balanceReturnReqOut'>
          <div className="dashboardBtn button mb-2 p-3">
            <button className="dahsboardButton  p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
              <span>
                <Link to={"/dashboard"}> Dashboard </Link>
                {">"} Balance Transfer
              </span>
            </button>
          </div>
          <div className="packageSettingInner m-5 rounded-lg text-xs sm:text-sm md:text-md p-3 bg-white shadow-lg">
              <div className="fieldList uppercase mb-3 font-medium">
                <h3>Balance Transfer </h3>
              </div>
              <hr />
              <div className="AepsTableData" onChange={handleChange}>
                <ExecutiveTable columns={columns} rows={records} />
              </div>
              
            </div>
        </div>
  
  </div>
  )
}

export default BalanceTransfer