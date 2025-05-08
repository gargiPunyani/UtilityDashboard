import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExecutiveTable from "../../../AdminDashboard/Members/FieldExecutive/FieldExecutiveTable";
import DateWiseSearch from "../../../SharedComponent/DateWiseSearch";
// import axiosInstance from "../../../Services/Instance";

const GasHistory = () => {
    
  // const callLogin =async(token , service_id)=>{
  //   try {
  //     const response = await axiosInstance.post("recharge/provider-list",{
  //       token : localStorage.getItem("token"),
  //       service_id: 1
  //     })
  //     console.log(response)
  //     console.log("data", response.data)

  //   } catch (error) {
  //     console.log(error)
  //     return error
  //   }
  // }
  const columns = [
    {
      name: "userID",
      id: "id",
    },
    {
      name: "Date Time",
      id: "date",
    },
    {
      name: "User",
      id: "user",
    },
    {
      name: "Number",
      id: "mobile",
    },
    {
      name: "Provider",
      id: "provider",
    },
    {
      name: "TXNID",
      id: "tax",
    },
    {
      name: "Opening Balance",
      id: "openingBalance",
    },
    {
      name: "Amount",
      id: "amount",
    },
    {
      name: "Profit",
      id: "profit",
    },
    {
      name: "Closing Balance",
      id: "closingBalance",
    },
    {
      name: "Wallet",
      id: "wallet",
    },
    {
      name: "Satus",
      id: "status",
    },
    {
      name: "Action",
      id: "action",
    },
  ];
  const rows= [] 
  const [records, setRecords] = useState();

  const handleChange = (e) => {
    const newRecords = rows.filter((row) => {
      console.log(e.target.value, "DateSearch");
      return (
        row.date.includes(e.target.value) ||
        row.id.includes(e.target.value) ||
        row.user.toLowerCase().includes(e.target.value) ||
        row.mobile.includes(e.target.value)
      );
    });
    setRecords(newRecords);
  };
  const handleDownload = (rows) => {};

  // useEffect(()=>{
  //   callLogin()
  // },[])
  return (
    <div className="mobileHistoryOuterMost">
      <div className="mobileHistoryOuter">

            <div className="dashboardBtn button mb-2 p-3">
              <button className="dahsboardButton  p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                <span>
                  <Link to={"/dashboard"}> Dashboard </Link>
                  {">"} Gas History
                </span>
              </button>
            </div>
            <div className="mobileHistory mx-2  xs:mx-5">
              <div
                className="mobileHistoryInner rounded-lg bg-white p-3 shadow-lg"
                // onClick={handleDownload}
                // onChange={handleChange}
              >
                <DateWiseSearch />
              </div>
              <div className="mobileRecharge mt-5 rounded-lg text-xs sm:text-sm md:text-md bg-white shadow-lg p-3 ">
                <div className="fieldList uppercase font-medium mb-5">
                  <h3>Gas History</h3>
                </div>
                <hr />
                <div className="mobileHistoryTableData"
                 onChange={handleChange}
                >
                  <ExecutiveTable 
                  columns={columns} rows={records} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
   
  );
};

export default GasHistory;
