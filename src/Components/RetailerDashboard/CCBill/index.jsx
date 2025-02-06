import React from "react";
import { Link } from "react-router-dom";
import StatusDownload from "../../SharedComponent/StatusDownload";
import ExecutiveTable from "../../AdminDashboard/Members/FieldExecutive/FieldExecutiveTable";

const RBillPayment = () => {
    const columns= [{
        id:"id",
        name:"ID"
    },{
        id:"date",
        name:"Date Time"
    },{
        id:"reqId",
        name:"Request ID"
    },{
        id:"cardNet",
        name:"Card Network"
    },{
        id:"cardNo",
        name:"Card Number"
    },{
        id:"cardHolder",
        name:"Card Holder"
    },{
        id:"amount",
        name:"Amount"
    },{
        id:"payeNo",
        name:"Payee Number"
    },{
        id:"payeName",
        name:"Payee Name"
    },{
        id:"remark",
        name:"Remarks"
    },{
        id:"status",
        name:"Status"
    },{
        id:"refundStatus",
        name:"Refund Status"
    }]
    const data= [{
      id:101,
      date:"20-04-2024",
      reqId:"200301",
      cardNet:"Rupay",
      cardNo:"123450123",
      cardHolder:"Abcd",
      amount:2000,
      payeNo:"9876541233",
      payeName:"Xyz",
      remark:"testing",
      status:"Pending",
      refundStatus:"Pending"
    },]
  return (
    <div className="rBillPayOuter">
      <div className="rBillPayOut">
        <div className="rBillPayInner p-3">
          <div className="dashboardBtn button mb-3">
            <button className="dahsboardButton relative p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
              <span>
                <Link to={"/retailer-dashboard"}> Dashboard </Link>
                {">"} Dashboard
              </span>
            </button>
          </div>
          <div className="SearchDownload">
            <StatusDownload/>
          </div>
          <div className="dataTable p-3 bg-white rounded-md shadow-xl mt-6"> 
            <div className="dataTableHead uppercase font-medium p-2">
                <h3>CC Bill Payment Report</h3>
            </div>
            <hr/>
            <div className="dataTableBody mt-3">
                <ExecutiveTable rows={data} columns={columns}/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RBillPayment;
