import React from "react";
import { Link, useNavigate } from "react-router-dom";

const UpiTransfer = () => {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/retailer-dashboard");
  };
  return (
    <div className="upiTransferOuterMost">
      <div className="upiTransferOut">
        <div className="upiTransferInner p-4">
          <div className="dashboardBtn button mt-3 ">
            <button className="dahsboardButton relative p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
              <span>
                <Link to={"/retailer-dashboard"}> Dashboard </Link>
                {">"} UPI Transfer
              </span>
            </button>
          </div>
          <div className="upiTransfer bg-white w-[100%] h-[60vh] shadow-lg mt-5 rounded-md p-4">
            <div className="providerFormHead uppercase mb-3 font-medium">
              <h3>UPI Transfer</h3>
            </div>
            <hr />
            <div className="upiTransferForm">
              <form>
                <div className="upiTransferData uppercase my-5">
                  <label htmlFor="upiTransfer">provider: </label>
                  <select className="upiTransferDataOptions border-2 w-full outline-none p-2 mt-2 rounded-md text-gray-600">
                    <option>Gpay</option>
                    <option>Phone Pe</option>
                    <option>Paytm</option>
                    <option>Amazon Pay</option>
                    <option>Bank Tranfer</option>
                  </select>
                </div>
                <div className="upiTransferDetails grid grid-cols-2 my-5 gap-5">
                  <div className="upiTransferData uppercase">
                    <label htmlFor="upiTransfer">Upi Id: </label>
                    <input
                      className="upiTransferInput border-2 w-full outline-none p-2 mt-2 rounded-md text-gray-600"
                      placeholder="Ex: 123456789@oksbi"
                    />
                  </div>
                  <div className="upiTransferData uppercase">
                    <label htmlFor="upiTransfer">Beneficiary Name: </label>
                    <input
                      className="upiTransferInput border-2 w-full outline-none p-2 mt-2 rounded-md text-gray-600"
                      placeholder="Beneficiary Name"
                    />
                  </div>
                  <div className="upiTransferData uppercase">
                    <label htmlFor="upiTransfer">Customer Number: </label>
                    <input
                      className="upiTransferInput border-2 w-full outline-none p-2 mt-2 rounded-md text-gray-600"
                      placeholder="Ex: 9876543211"
                    />
                  </div>
                  <div className="upiTransferData uppercase">
                    <label htmlFor="upiTransfer">Amount: </label>
                    <input
                      className="upiTransferInput border-2 w-full outline-none p-2 mt-2 rounded-md text-gray-600"
                      placeholder="Amount"
                    />
                  </div>
                </div>
                <div className="button flex gap-5">
                  <div className="transfer">
                    <button
                      type="submit"
                      className="closeBtn bg-blue-600 text-white rounded-md px-8 py-3"
                    >
                      Transfer Money
                    </button>
                  </div>
                  <div className="close">
                    <button
                      className="closeBtn bg-gray-600 text-white rounded-md px-8 py-3"
                      onClick={handleClose}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpiTransfer;
