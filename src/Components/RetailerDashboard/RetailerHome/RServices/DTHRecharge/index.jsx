import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instance from "../../../../../Services/InstanceAxios";

const DTHRecharge = () => {
  const [providers, setProviders] = useState([]);
  const [mobile, setMobile] = useState("");
  const [amount, setAmount] = useState("");
  const [mpin, setMpin] = useState("");
  const [selectedProviderId, setSelectedProviderId] = useState("");
  const [showMpin, setShowMpin] = useState(false);
  const api_token = localStorage.getItem("token");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const service_id = urlParams.get("service_id");

    const storedData = sessionStorage.getItem(`providers_${service_id}`);

    if (storedData) {
      setProviders(JSON.parse(storedData));
    } else {
      console.error("No data found for this service ID in sessionStorage.");
    }
  }, []);

  const handlePaymentClick = (e) => {
    e.preventDefault();
    if (showMpin) {
      handlePayment();
      return;
    }
    if (!mobile || !amount || !selectedProviderId) {
      alert("Please fill all fields before proceeding.");
      return;
    }
    setShowMpin(true);
  };

  const handlePayment = async () => {
    if (!mpin) {
      alert("Please enter your MPIN.");
      return;
    }

    try {
      const response = await instance.post("recharge/pay-now", {
        mpin,
        mobile,
        providerId: selectedProviderId,
        amount,
        api_token,
      });
      alert(response.data.message);

      console.log(response, "response");
      console.log(selectedProviderId, "id");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dthRechargeOuterMost">
      <div className="dthRechargeOuter">
        <div className="dthRechargeInner">
          <div className="dashboardBtn button  mt-3 px-5">
            <button className="dahsboardButton relative p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
              <span>
                <Link to={"/retailer-dashboard"}> Dashboard </Link>
                {">"} DTH Recharge
              </span>
            </button>
          </div>
          <div className="dthRecharge flex gap-5 p-4">
            <div className="dthRechargeForm bg-white w-[45%] rounded-md shadow-lg p-4">
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="formHead uppercase font-semibold mb-3">DTH</div>
                <hr />

                <div className="prepaidFormData my-5 ">
                  <label htmlFor="provider" className="font-medium">
                    Provider:
                  </label>
                  <select
                    className="prepaidFormInput w-full mt-2 text-gray-600 border-2 rounded-md p-2 outline-none"
                    value={selectedProviderId}
                    onChange={(e) => setSelectedProviderId(e.target.value)}
                  >
                    {providers.map((item) => {
                      return (
                        <option key={item.id} value={item.service_id}>
                          {item.provider_name}
                        </option>
                      );
                    })}
                    {/* <option>Airtel Digital TV</option>
              <option>Tata Sky</option>
              <option>Dish TV</option>
              <option>Sun Direct</option>
              <option>Videocon D2H </option> */}
                  </select>
                </div>
                <div className="prepaidFormData my-5 ">
                  <label htmlFor="number" className="font-medium">
                    DTH Number:
                  </label>
                  <div className="prepaidFormDataInput">
                    <input
                      className="prepaidFormInput w-full uppercase mt-2 text-gray-600 border-2 rounded-md p-2 outline-none"
                      placeholder="DTH NUMBER"
                       value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                name="mobile"
                    />
                  </div>
                </div>
                <div className="prepaidFormData my-5 ">
                  <label htmlFor="number" className="font-medium">
                    Amount:
                  </label>
                  <div className="prepaidFormDataInput">
                    <input
                      className="prepaidFormInput w-full uppercase mt-2 text-gray-600 border-2 rounded-md p-2 outline-none"
                      placeholder="Amount"
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      name="amount"
                    />
                  </div>
                </div>
                {showMpin && (
              <div className="prepaidFormData my-5 transition-all duration-500 opacity-100 transform scale-100">
                <label htmlFor="mpin" className="font-medium">
                  MPIN:
                </label>
                <input
                  className="prepaidFormInput w-full uppercase mt-2  text-gray-600 border-2 rounded-md p-2 outline-none"
                  placeholder="Enter MPIN"
                  type="password"
                  value={mpin}
                  onChange={(e) => setMpin(e.target.value)}
                  name="mpin"
                />
              </div>
            )}

                <div className="payNow my-5">
                  <button
                    type="submit"
                    className="payNowBtn text-white bg-blue-600 py-2 px-5 rounded-lg "
                    onClick={handlePaymentClick}
                  >
                     {showMpin ? "Confirm Payment" : "Pay Now"}
                  </button>
                </div>
              </form>
            </div>
            <div className="dthRechargeBg h-auto bg-white rounded-md shadow-lg w-[70%]">
              <div className="dthImage p-5 m-auto">
                <img
                  src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1738827616/dth-recharge_y0dxpm.png"
                  alt="dthImage"
                  className="m-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DTHRecharge;
