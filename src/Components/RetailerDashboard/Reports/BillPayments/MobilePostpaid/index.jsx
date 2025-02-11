import React from 'react'
import { Link } from 'react-router-dom';
import StatusDownload from '../../../../SharedComponent/StatusDownload';
import ExecutiveTable from '../../../../AdminDashboard/Members/FieldExecutive/FieldExecutiveTable';

const MobilePostpaid = () => {
    const columns = [
        { id: "id", name: "ID" },
        { id: "date", name: "Date Time" },
        { id: "provider", name: "Provider" },
        { id: "number", name: "Number" },
        { id: "tax", name: "TXNID" },
        { id: "op", name: "Opening Balance" },
        { id: "amount", name: "Amount" },
        { id: "profit", name: "Profit" },
        { id: "cl", name: "Closing Balance" },
        { id: "wallet", name: "Wallet" },
        { id: "status", name: "Status" },
        { id: "action", name: "Action" },
      ];
      const data = [{}];
  return (
    <div className="rDthReportOuter">
    <div className="rDthOut">
      <div className="rDthInner text-sm p-3">
        <div className="dashboardBtn button mb-3">
          <button className="dahsboardButton relative p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
            <span>
              <Link to={"/retailer-dashboard"}> Dashboard </Link>
              {">"} Mobile Postpaid History
            </span>
          </button>
        </div>
        <div className="statusType shadow-lg rounded-md">
          <StatusDownload />
        </div>
        <div className="dataTable bg-white shadow-xl my-3 p-3">
          <div className="dataTableHead uppercase font-medium mb-3">
          Mobile Postpaid History
          </div>
          <hr/>
          <ExecutiveTable rows={data} columns={columns} />
        </div>
      </div>
    </div>
  </div>
  )
}

export default MobilePostpaid