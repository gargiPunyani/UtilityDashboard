import React from "react";
import { Link } from "react-router-dom";
import { ccBillForm } from "../../../../constant";

const CcBill = () => {
  return (
    <div className="ccBillOuterMost">
      <div className="ccBillOut p-4">
        <div className="dashboardBtn button mb-3">
          <button className="dahsboardButton relative p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
            <span>
              <Link to={"/retailer-dashboard"}> Dashboard </Link>
              {">"} CC Bill Payment
            </span>
          </button>
        </div>
        <div className="ccBillInner bg-white shadow-lg rounded-md p-3 text-sm">
        <div className="ccBillFormHead uppercase mb-3 font-semibold ">
              <h3>CC Bill Payment</h3>
            </div>
            <hr/>
            <div className="ccBillBody my-5">
                <form className="ccBillForm grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="ccBillData">
                    <label htmlFor="ccBillData"> Credit Card Network</label>
                    <select className="ccBillInput w-full border-2 my-1 p-2 outline-none rounded-md text-gray-700 ">
                    <option disabled selected>Select Credit Card Network </option>
                    <option>VISA</option>
                    <option>MASTERCARD</option>
                    <option>AMEX</option>
                    </select>
                </div>
                {ccBillForm.map((item)=>{
                    return(
                    <div className="ccBillData" key={item.id}>
                        <label htmlFor="ccBillData">{item.label}</label>
                        <input className="ccBillInput w-full border-2 my-1 p-2 outline-none rounded-md text-gray-700 "
                        placeholder={item.data}
                        />
                    </div>
                )})}
                </form>
                <div className="generateOtp my-5">
                <button className="serachBtn bg-blue-600 rounded-md text-white px-5 py-2">
                Generate OTP
              </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CcBill;
