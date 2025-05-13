import React from "react";
import { Link } from "react-router-dom";
import ExecutiveTable from "../../../AdminDashboard/Members/FieldExecutive/FieldExecutiveTable/ExecutiveTable";
import BeneficiaryList from "../../RetailerHome/RServices/Payout/Beneficiary";
import ReqForm from "./ReqForm/ReqForm";

const RPaymentRequest = () => {
  const columns = [
    { id: "bank", name: "Bank Name" },
    { id: "accountName", name: "Account Name" },
    { id: "accountNumber", name: "Account Number" },
    { id: "ifsc", name: "IFSC Code" },
  ];
  const rows = [
    {
      bank: "ICICI Bank",
      accountNumber: "09876543211235",
      accountName: "Test",
      ifsc: "icic000449",
    },
  ];
  const head = [
    { id: "ID", name: "ID" },
    { id: "approval", name: "Approval" },
    { id: "settlement", name: "Settlement" },
    { id: "requestDate", name: "Request Date" },
    { id: "bank", name: "Bank Name" },
    { id: "method", name: "Method" },
    { id: "amount", name: "Amount"},
    { id: "utr", name: "UTR" },
    
  ];
  const data = [];
  return (
    <div className="rPayRequestOuter">
      <div className="rPayRequestOut text-sm p-4">
        <div className="dashboardBtn button mb-3">
          <button className="dahsboardButton  p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
            <span>
              <Link to={"/retailer-dashboard"}> Dashboard </Link>
              {">"} Payment Request
            </span>
          </button>
        </div>
        <div className="rPayRequestBank bg-white p-4 my-5 shadow-lg rounded-md">
          <div className="rPayBankHead uppercase font-semibold my-2">
            <h3>Bank Details</h3>
          </div>
          <hr />
          <div className="rPayBankData cursor-pointer">
            <BeneficiaryList columns={columns} rows={rows} />
          </div>
        </div>
        <div className="rPayRequestInner bg-white p-4 shadow-lg rounded-md">
          <div className="rPayBankHead uppercase font-semibold my-2">
            <h3>Payment Request</h3>
          </div>
          <hr />
          <div className="rPayRequestForm my-5">
            <ReqForm />
          </div>
        </div>
        
        <div className="rPayRequestPay bg-white p-4 my-5 shadow-lg rounded-md">
          <div className="rPayBankHead uppercase font-semibold my-2">
            <h3>Payment Request</h3>
          </div>
          <hr />
          <div className="rPayBankData cursor-pointer">
            <ExecutiveTable columns={head} rows={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RPaymentRequest;
