import React from "react";

const Commission = () => {
  return (
    <div className="commissionOutMost  ">
      <div className="commisionOut">
        <div className="commissionInner sm:mt-5 rounded-md text-xs sm:text-sm md:text-md bg-white shadow-md p-3 ">
          <div className="commission sm:flex justify-between mb-3 gap-5 items-center">
            <div className="fieldList uppercase font-medium">
              <h3>Move Commission Balance to Main Wallet</h3>
            </div>
            <div className="transferNow ">
              <button
                type="sumbit"
                className="transferNowBtn bg-green-600 mt-3 sm:mt-0 text-white p-2 rounded-lg cursor-pointer outline-none"> Transfer Now
              </button>
            </div>
          </div>
          <hr />
          <div className="commissionForm  mt-3">
            <form className="commissionForm md:flex gap-6 justify-between mb-4">
              <div className="commissionFormData mt-3">
                <label className="commissionFormLabel">Commission Balance :</label>
                <input type="text" className="commissionInput xl:ml-3 border-2 hover:border-gray-400 outline-none w-[100%] md:w-[auto] hover:bg-gray-50 p-1 rounded-md" placeholder="2000.00" />
              </div>
              <div className="commissionFormData mt-3">
                <label>Amount :</label>
                <input type="text"  className="commissionInput xl:ml-3 border-2 hover:border-gray-400 outline-none w-[100%] md:w-[auto] hover:bg-gray-50 p-1 rounded-md"  placeholder="Amount" />
              </div>
              <div className="commissionFormData mt-3">
                <label>Remark :</label>
                <input type="text" className="commissionInput xl:ml-3 border-2 hover:border-gray-400 outline-none w-[100%] md:w-[auto] hover:bg-gray-50 p-1 rounded-md" placeholder="Remark" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commission;
