import React from "react";
import { Link } from "react-router-dom";
import { dmtForm } from "../../../../constant";

const DMT = () => {
  const handleSearch = () => {};
  return (
    <div className="dmtOuterMost text-sm p-3" >
      <div className="dmtOut">
        <div className="dashboardBtn button mb-3">
          <button className="dahsboardButton relative p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
            <span>
              <Link to={"/retailer-dashboard"}> Dashboard </Link>
              {">"} Payout
            </span>
          </button>
        </div>
        <div className="dmtInner">
          <div className="upiTransfer bg-white w-[100%] shadow-lg rounded-md p-4 my-5">
            <div className="providerFormHead uppercase mb-3 font-medium">
              <h3>DMT</h3>
            </div>
            <hr />
            <div className="dmtInner my-3">
              <label htmlFor="mobile">Mobile: </label>
              <input
                className="dmtoutInput border-2 outline-none p-2 mt-2 w-1/3 rounded-md text-gray-600"
                type="number"
                placeholder="Enter Mobile Number"
                max={10}
                min={10}
              />
              <button
                onClick={handleSearch}
                className="serachBtn bg-blue-600 rounded-md text-white px-5 ml-5 py-2"
              >
                Search
              </button>
            </div>
          </div>
          <div className="dmtoutForm bg-white w-[100%] shadow-lg rounded-md p-4 my-10">
            <div className="dmtoutFormHead mb-3 uppercase font-semibold">
              <h3>Add Sender</h3>
            </div>
            <hr />
            <div className="dmtoutFormStart">
              {dmtForm.map((item, id) => {
                return (
                  <div className="dmtoutData " key={id}>
                    <form className="dmtForm grid sm:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
                      <div className="dmtFormData ">
                        <label htmlFor={item.label1}>{item.label1}</label>
                        <input
                          className="dmtFormInput border-2 p-2 w-full rounded-md outline-none mt-1 "
                          placeholder={item.label1}
                        />
                      </div>
                      <div className="dmtFormData ">
                        <label htmlFor={item.label2}>{item.label2}</label>
                        <input
                          className="dmtFormInput border-2 p-2 w-full rounded-md outline-none mt-1 "
                          placeholder={item.label2}
                        />
                      </div>
                      <div className="dmtFormData ">
                        <label htmlFor={item.pincode}>{item.pincode}</label>
                        <input
                          className="dmtFormInput border-2 p-2 w-full rounded-md outline-none mt-1 "
                          placeholder={item.pincode}
                        />
                      </div>
                      <div className="dmtFormData ">
                        <label htmlFor={item.state}>{item.state}</label>
                        <input
                          className="dmtFormInput border-2 p-2 w-full rounded-md outline-none mt-1 "
                          placeholder={item.state}
                        />
                      </div>
                      <div className="dmtFormData ">
                        <label htmlFor={item.address}>{item.address}</label>
                        <input
                          className="dmtFormInput border-2 p-2 w-full rounded-md outline-none mt-1 "
                          placeholder={item.address}
                        />
                      </div>
                    </form>
                    <div className="addSender">
                      <button className="serachBtn bg-green-600 rounded-md text-white px-5 py-2">
                        Add Sender
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DMT;
