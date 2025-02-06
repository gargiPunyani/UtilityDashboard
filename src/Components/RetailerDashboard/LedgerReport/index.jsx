import React from "react";
import { Link } from "react-router-dom";
import WalletDownload from "../../SharedComponent/WalletDownload";
import ExecutiveTable from "../../AdminDashboard/Members/FieldExecutive/FieldExecutiveTable";

const RLedgerReport = () => {
  const columns = [
    {
      id: "id",
      name: "ID",
    },
    {
      id: "date",
      name: "Date Time",
    },
    {
      id: "taxId",
      name: "TXNID",
    },
    {
      id: "description",
      name: "Description",
    },
    {
      id: "op",
      name: "Opening Balance",
    },
    {
      id: "debit",
      name: "Debit",
    },
    {
      id: "credit",
      name: "Credit",
    },
    {
      id: "profit",
      name: "Profit",
    },
    {
      id: "cl",
      name: "Closing Balance",
    },
    {
      id: "status",
      name: "Status",
    },
  ];
  const data = [];
  return (
    <div className="rLedgerReportOuter">
      <div className="rLedgerOut">
        <div className="rLedgerInner p-3">
          <div className="dashboardBtn button mb-3">
            <button className="dahsboardButton relative p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
              <span>
                <Link to={"/retailer-dashboard"}> Dashboard </Link>
                {">"} Ledger Report
              </span>
            </button>
          </div>
          <div className="walletType">
            <WalletDownload />
          </div>
          <div className="dataTable bg-white shadow-xl mt-3 p-3">
            <div className="dataTableHead uppercase font-medium mb-3">
                Ledger Report
            </div>
            <hr/>
            <ExecutiveTable rows={data} columns={columns} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RLedgerReport;
