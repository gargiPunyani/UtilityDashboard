import React from "react";
import ExecutiveTable from "../../../AdminDashboard/Members/FieldExecutive/FieldExecutiveTable/ExecutiveTable";

const RDataTable = () => {
  const columns = [
    {
      id: "id",
      name: "ID",
    },
    {
      id: "date",
      name: "DATE",
    },
    {
      id: "provider",
      name: "PROVIDER",
    },
    {
      id: "amount",
      name: "AMOUNT",
    },
    {
      id: "profit",
      name: "PROFIT",
    },
    {
      id: "balance",
      name: "BALANCE",
    },
    {
      id: "status",
      name: "STATUS",
    },
  ];
  const data = [];
  return (
    <div className="retailerDataTableOuter ">
      <div className="rDataTableInner">
        <div className="rDataTableHead uppercase font-medium mb-3">
          <h3>Mini statement</h3>
        </div>
        <hr />
        <div className="retailerDataTable">
          <ExecutiveTable rows={data} columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default RDataTable;
