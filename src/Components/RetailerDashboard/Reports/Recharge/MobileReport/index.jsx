import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StatusDownload from "../../../../SharedComponent/StatusDownload";
import ExecutiveTable from "../../../../AdminDashboard/Members/FieldExecutive/FieldExecutiveTable";
import instance from "../../../../../Services/InstanceAxios";

const MobileReport = () => {
  const [data, setData] = useState([]);
  const [dateRange, setDateRange] = useState({
    fromdate: "01-01-2024",
    todate: new Date().toISOString().split("T")[0],
  });
  const columns = [
    { id: "order_id", name: "ID" },
    { id: "date", name: "Date Time" },
    { id: "provider_name", name: "Provider Name" },
    { id: "number", name: "Number" },
    { id: "customer_name", name: "Customer Name" },
    // { id: "op", name: "Opening Balance" },
    { id: "amount", name: "Amount" },
    // { id: "profit", name: "Profit" },
    { id: "service", name: "Service" },
    { id: "utr", name: "UTR" },
    { id: "status", name: "Status" },
    // { id: "action", name: "Action" },
  ];

  const getData = async (api_token, fromdate, todate) => {
    try {
      const resp = await instance.get(`/report/recharge-report`, {
        params: {
          api_token,
          fromdate,
          todate,
        },
      });
      console.log(resp, "response");
      console.log(resp.data);
      if (resp.data.length > 0) {
        const transformedData = resp.data.map((item) => ({
          order_id: item.order_id,
          date: item.date,
          provider_name: item.provider_name,
          number: item.number,
          status: item.status,
          amount: item.amount,
          customer_name: item.customer_name,
          utr:item.utr,
          service:item.service_type,
          customer_name:item.customer_name
        }));
        setData(transformedData);
      } else {
        setData([]);
      }
      // id: item.id || index + 1,
      // provider: item.provider_name,
      // number: item.mobile_number,
      // tax: item.txn_id,
      // op: item.opening_balance,
      // amount: item.recharge_amount,
      // profit: item.profit_amount,
      // cl: item.closing_balance,
      // wallet: item.wallet_type,
      // status: item.recharge_status,
      // action: "View Details"
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  const handleDate = (newDateRange) => {
    setDateRange(newDateRange);
  };
  useEffect(() => {
    const api_token = localStorage.getItem("token");
    if (api_token) {
      getData(api_token, dateRange.fromdate, dateRange.todate);
    }
  }, [dateRange]);
  return (
    <div className="rMobileReportOuter">
      <div className="rMobileOut">
        <div className="rMobileInner text-sm p-3">
          <div className="dashboardBtn button mb-3">
            <button className="dahsboardButton relative p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
              <span>
                <Link to={"/retailer-dashboard"}> Dashboard </Link>
                {">"} Mobile Report
              </span>
            </button>
          </div>
          <div className="statusType shadow-lg rounded-md">
            <StatusDownload onDateChange={handleDate} />
          </div>
          <div className="dataTable bg-white shadow-xl my-3 p-3">
            <div className="dataTableHead uppercase font-medium mb-3">
              Mobile Report
            </div>
            <hr />
            {data.length > 0 ? (
              <ExecutiveTable rows={data} columns={columns} />
            ) : (
              <div className="text-center text-gray-600 p-4">
                <p>No Data Available</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileReport;
