import React from "react";
import { Link } from "react-router-dom";
import RPayoutForm from "./Form";
import ExecutiveTable from "../../../../AdminDashboard/Members/FieldExecutive/FieldExecutiveTable";
import BeneficiaryList from "./Beneficiary";

const RPayout = () => {
  const columns = [
    { id: "select", name: "Select" },
    { id: "name", name: "Name" },
    { id: "ifsc", name: "IFSC Code" },
    { id: "bank", name: "Bank Name" },
    { id: "account", name: "Account Number" },
    { id: "action", name: "Action" },
  ];
  const rows = [];
  const handleSearch = () => {};
  return (
    <div className="payouterMost text-sm">
      <div className="payOuter p-4">
        <div className="dashboardBtn button mb-3">
          <button className="dahsboardButton relative p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
            <span>
              <Link to={"/retailer-dashboard"}> Dashboard </Link>
              {">"} Payout
            </span>
          </button>
        </div>
        <div className="payInner">
          <div className="upiTransfer bg-white w-[100%] shadow-lg rounded-md p-4 my-5">
            <div className="providerFormHead uppercase mb-3 font-semibold ">
              <h3>Payout</h3>
            </div>
            
            <hr />
            <div className="payInner my-3">
              <label htmlFor="mobile">Mobile Number: </label>
              <input
                className="payoutInput border-2 outline-none p-2 mt-2 w-1/3 rounded-md text-gray-600"
                type="number"
                placeholder="Enter Mobile Number"
                max={10}
                min={10}
                />
              <button onClick={handleSearch} className="serachBtn bg-blue-600 rounded-md text-white px-5 ml-5 py-2">
                Search
              </button>
            </div>
          </div>
          <div className="beneficiaryList bg-white w-[100%] shadow-lg rounded-md p-4 my-10">
          <div className="payout flex justify-between mb-3 items-center">
            <div className="beneficiaryHead uppercase font-semibold">
              <h3>Beneficiary List </h3>
            </div>
            <div className="addBeneficiary">
              <button className="addBeneficiaryBtn bg-red-500 rounded-md text-white p-2 ">Add Beneficiary </button>
            </div>
            </div>
            <hr />
            <BeneficiaryList rows={rows} columns={columns} />
          </div>
          <div className="payoutForm bg-white w-[100%] shadow-lg rounded-md p-4 my-10">
            <div className="payoutFormHead uppercase mb-3 font-semibold">
              <h3>Transaction</h3>
            </div>
            <hr />
            <div className="payoutFormStart">
              <RPayoutForm
                label1={"Account Number"}
                label2={"Holder's Name"}
                label3={"Bank Name"}
                label4={"IFSC Code"}
                label5={"Payment Code"}
                label6={"Amount"}
              />
            </div>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default RPayout;
