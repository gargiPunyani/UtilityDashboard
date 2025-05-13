import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExecutiveTable from "../../AdminDashboard/Members/FieldExecutive/FieldExecutiveTable/ExecutiveTable";
import SearchWallet from "../../SharedComponent/SearchWallet/SearchWallet";

const FranchiseFSDS = () => {
      const columns = [{ 
        name: "userId" ,
        id:"userid"
      },{ 
        name: "Name" ,
        id:"name"
      },{ 
        name: "Opening Balance" ,
        id:"oBalance"
      },{ 
        name: "Credit Amount" ,
        id:"credit"
      },{ 
        name: "Debit Amount" ,
        id:"debit"
      },{ 
        name: "Sales" ,
        id:"sale"
      },{ 
        name: "Profit" ,
        id:"profit"
      },{ 
        name: "Charges" ,
        id:"charges"
      },{ 
        name: "Pending" ,
        id:"pending"
      }];
      const rows = [];
      const [records, setRecords] = useState(rows);
      const handleChange = () => {
        setRecords(...rows);
      };
    
  return (
    <div className="incomeReportOuterMost">
      <div className="incomeReportOuter">
            <div className="dashboardBtn button mb-2 p-3">
              <button className="dahsboardButton  p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                <span>
                  <Link to={"/dashboard"}> Dashboard </Link>
                  {">"} Income Report
                </span>
              </button>
            </div>
            <div className="AdminProfit mx-2  xs:mx-5">
              <div
                className="AdminProfitInner rounded-lg bg-white "
                onClick={handleChange}  >
                <SearchWallet />
              </div>
              <div className="AdminProfit mt-5 rounded-lg text-xs sm:text-sm md:text-md bg-white shadow-lg p-3 ">
                <div className="fieldList uppercase font-medium mb-5">
                  <h3>Income Report</h3>
                </div>
                <hr />
                <div className="AdminProfitTableData" onChange={handleChange}>
                  <ExecutiveTable columns={columns} data={records} />
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default FranchiseFSDS