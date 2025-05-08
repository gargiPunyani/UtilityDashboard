import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DateWiseSearch from "../../../SharedComponent/DateWiseSearch";
import ExecutiveTable from "../../../AdminDashboard/Members/FieldExecutive/FieldExecutiveTable";
import instance from "../../../../Services/InstanceAxios";

const Fastag = () => {
  const columns = [
    {
      name: "userID",
      id: "id",
    },
    {
      name: "Name",
      id: "name",
    },
    // {
    //   name: "View Bill",
    //   id: "viewbill",
    // },
    {
      name: "Vehicle Number",
      id: "displayname",
    },
  ];

  const rows = [];
  const [records, setRecords] = useState([]);

  const handleChange = async(api_token, id, canumber) => {
    try {
        const newRecords = await instance.post("bbps/fastag/fetch", {
            id ,
            canumber,
            api_token
        }
    )
    setRecords(newRecords);
    
} catch (error) {
}

console.log(id, "id")
  };
  const handleDownload = (rows) => {};

  useEffect(() => {
    const BillList = async (api_token) => {
      try {
          const response = await instance.post("bbps/fastag/biller-list", {
            api_token: localStorage.getItem("token")
          });
          console.log(response.data);
          setRecords(response.data)
    }
     catch (error) {
        console.log(error)
        return error;
      }
    };
    BillList();
  }, []);
  return (
    <div className="mobileHistoryOuterMost">
      <div className="mobileHistoryOuter">
        <div className="dashboardBtn button mb-2 p-3">
          <button className="dahsboardButton  p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
            <span>
              <Link to={"/dashboard"}> Dashboard </Link>
              {">"} FASTag History
            </span>
          </button>
        </div>
        <div className="mobileHistory mx-2  xs:mx-5">
          <div
            className="mobileHistoryInner rounded-lg bg-white p-3 shadow-lg"
            onClick={handleDownload}
            onChange={handleChange}
          >
            <DateWiseSearch />
          </div>
          <div className="mobileRecharge mt-5 rounded-lg text-xs sm:text-sm md:text-md bg-white shadow-lg p-3 ">
            <div className="fieldList uppercase font-medium mb-5">
              <h3>FASTag History</h3>
            </div>
            <hr />
            <div className="mobileHistoryTableData" onChange={handleChange}>
              <ExecutiveTable columns={columns} rows={records} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fastag;
