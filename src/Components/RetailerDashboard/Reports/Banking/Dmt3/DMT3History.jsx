import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import StatusDownload from '../../../../SharedComponent/StatusDownload/StatusDownload'
import ExecutiveTable from '../../../../AdminDashboard/Members/FieldExecutive/FieldExecutiveTable/ExecutiveTable'
import instance from '../../../../../Services/InstanceAxios'

const DMT3History = () => {
  const [data, setData] = useState([]);
    const [dateRange, setDateRange] = useState({
      fromdate: "01-01-2024",
      todate: new Date().toISOString().split("T")[0],
    });
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
      const getData = async (api_token, fromdate, todate) => {
        try {
          const resp = await instance.get(`/report/money-report`, {
            params: { api_token, fromdate, todate },
          });
        console.log(resp, "response");
        console.log(resp.data);
        if (resp.data.length > 0) {
          const transformedData = resp.data.map((item) => ({
            id: item.order_id,
            date: item.date,
            provider_name: item.provider_name,
            number: item.sender_number,
            status: item.status,
            amount: item.amount,
            customer_name: item.customer_name,
            name:item.bene_name,
            bank: item.bene_bank,
            accountNo: item.bene_account,
            service:item.service_type,
            type:item.type,
            utr:item.utr
          }));
          setData(transformedData);
        } else {
         setData([])
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
        console.log(error)
        return error
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
    <div className="rDthReportOuter">
    <div className="rDthOut">
      <div className="rDthInner text-sm p-3">
        <div className="dashboardBtn button mb-3">
          <button className="dahsboardButton  p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
            <span>
              <Link to={"/retailer-dashboard"}> Dashboard </Link>
              {">"} DMT3 History
            </span>
          </button>
        </div>
        <div className="statusType shadow-lg rounded-md">
          <StatusDownload />
        </div>
        <div className="dataTable bg-white shadow-xl my-3 p-3">
          <div className="dataTableHead uppercase font-medium mb-3">
          DMT3 History
          </div>
          <hr/>
          <ExecutiveTable rows={data} columns={columns} />
        </div>
      </div>
    </div>
  </div>
  )
}

export default DMT3History