import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instance from "../../../../../Services/InstanceAxios";

const Prepaid = () => {
  const [providers, setProviders] = useState([]);
  const [mobile, setMobile] = useState("");
  const [amount, setAmount] = useState("");
  const [mpin, setMpin] = useState("");
  const [selectedProviderId, setSelectedProviderId] = useState("");
  const [showMpin, setShowMpin] = useState(false); // Track MPIN visibility
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
      alert(response.data.message)
      
      console.log(response, "response");
      console.log(selectedProviderId, "id");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="prepaidOuterMost text-sm">
      <div className="dashboardBtn button mt-3 px-5">
        <button className="dahsboardButton  p-1 items-center text-xs font-semibold">
          <Link to={"/retailer-dashboard"}> Dashboard </Link> {">"} Mobile
          Prepaid
        </button>
      </div>

      <div className="prepaidOuter grid md:grid-cols-2 gap-5 p-5">
        <div className="prepaidInner order-1 w-full m-auto bg-white opacity-80 ">
        <img src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1738758486/hand-with-mobile-phone-and-sim-card-operator-selection_uoikzm.jpg"/>
        </div>
        <div className="prepaidForm order-0 bg-white w-auto p-4 uppercase">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="formHead uppercase font-semibold mb-3">
              Mobile Prepaid
            </div>
            <hr />

            <div className="prepaidFormData my-5">
              <label htmlFor="provider" className="font-medium">
                Provider:
              </label>
              <select
                className="prepaidFormInput w-full uppercase mt-2 text-gray-600 border-2 rounded-md p-2 outline-none"
                value={selectedProviderId}
                onChange={(e) => setSelectedProviderId(e.target.value)}>
                <option disabled selected>
                      Select a provider
                    </option>
                    {providers?.length > 0 ? (
                      providers.map((item) => (
                        <option key={item.id} value={item.service_id}>
                          {item.provider_name}
                        </option>
                      ))
                    ) : (
                      <>
                        <option value="static1">Airtel</option>
                        <option value="static2">JIO</option>
                        <option value="static3">Vodafone</option>
                        <option value="static3">IDEA</option>
                        <option value="static3">BSNL</option>
                        <option value="static4">VI</option>
                      </>
                    )}
              </select>
            </div>

            <div className="prepaidFormData my-5">
              <label htmlFor="mobile" className="font-medium">
                Mobile Number:
              </label>
              <input
                className="prepaidFormInput w-full uppercase mt-2 text-gray-600 border-2 rounded-md p-2 outline-none"
                placeholder="MOBILE NUMBER"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                name="mobile"
              />
            </div>

            <div className="prepaidFormData my-5">
              <label htmlFor="amount" className="font-medium">
                Amount:
              </label>
              <input
                className="prepaidFormInput w-full uppercase mt-2 text-gray-600 border-2 rounded-md p-2 outline-none"
                placeholder="Amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                name="amount"
              />
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

            <div className="payAndPlan flex gap-5">
              <div className="payNow">
                <button
                  type="button"
                  className="payNowBtn text-white bg-blue-600 py-2 px-5 rounded-lg"
                  onClick={handlePaymentClick}
                >
                  {showMpin ? "Confirm Payment" : "Pay Now"}
                </button>
              </div>
              <div className="viewPlan">
                <button className="viewPlanBtn text-white bg-blue-600 py-2 px-5 rounded-lg">
                  View Plan
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Prepaid;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import instance from "../../../../../Services/InstanceAxios";

// const Prepaid = () => {
//     const [providers, setProviders] = useState([]);

//     const handlePayment=async(mpin, mobile, providerId, amount)=>{
//       try {
//         const response= await instance.post("recharge/pay-now",{
//             mpin ,
//             mobile ,
//             providerId: sessionStorage.getItem("id") ,
//             amount
//           }
//         )
//         console.log(response)

//       } catch (error) {
//          console.log(error)
//          return error
//       }
//     }

//     useEffect(() => {
//       const urlParams = new URLSearchParams(window.location.search)
//       const service_id = urlParams.get("service_id");

//       const storedData = sessionStorage.getItem(`providers_${service_id}`);

//       if (storedData) {
//         setProviders(JSON.parse(storedData));
//       } else {
//         console.error("No data found for this service ID in sessionStorage.");
//       }
//     }, []);
//   return (
//     <div className="prepaidOuterMost text-sm">
//       <div className="dashboardBtn button mt-3 px-5">
//         <button className="dahsboardButton  p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
//           <span>
//             <Link to={"/retailer-dashboard"}> Dashboard </Link>
//             {">"} Mobile Prepaid
//           </span>
//         </button>
//       </div>
//       <div className="prepaidOuter grid grid-cols-2 p-5">
//         <div
//           className="prepaidInner bg-no-repeat h-[63vh] w-full m-auto opacity-80
//         bg-[url(https://res.cloudinary.com/dixfg1bvv/image/upload/v1738758486/hand-with-mobile-phone-and-sim-card-operator-selection_uoikzm.jpg)] ">

//         </div>
//         <div className="prepaidForm bg-white w-auto p-4 uppercase">
//           <form onSubmit={(e) => e.preventDefault()}>
//             <div className="formHead uppercase font-semibold mb-3">
//               Mobile Prepaid
//             </div>
//             <hr />

//             <div className="prepaidFormData my-5 ">
//               <label htmlFor="provider" className="font-medium">
//                 Provider:
//               </label>
//               <select className="prepaidFormInput w-full uppercase mt-2 text-gray-600 border-2 rounded-md p-2 outline-none">
//                   {providers.map((item)=>{
//                     return(
//                 <option key={item.id} value={item.id}>{item.provider_name}</option>

//               ) })}
//               </select>
//             </div>
//                {/* <option>Airtel</option>
//                <option>JIO</option>
//                <option>Bsnl</option>
//                <option>idea</option>
//                <option>Mtnl </option>
//                <option>Mtnl Delhi</option>
//                <option>Mtnl Mumbai</option>
//                <option>Vodafone</option> */}
//             <div className="prepaidFormData my-5 ">
//               <label htmlFor="number" className="font-medium">
//                 Mobile Number:
//               </label>
//               <div className="prepaidFormDataInput">
//                 <input
//                   className="prepaidFormInput w-full uppercase mt-2 text-gray-600 border-2 rounded-md p-2 outline-none"
//                   placeholder="MOBILE NUMBER"
//                   value={mobile}
//                   name="mobile"
//                 />
//               </div>
//             </div>
//             <div className="prepaidFormData my-5 ">
//               <label htmlFor="number" className="font-medium">
//                 Amount:
//               </label>
//               <div className="prepaidFormDataInput">
//                 <input
//                   className="prepaidFormInput w-full uppercase mt-2 text-gray-600 border-2 rounded-md p-2 outline-none"
//                   placeholder="Amount"
//                   type="number"
//                   value={amount}
//                   name="amount"
//                 />
//               </div>
//             </div>
//                 <div className="payAndPlan flex gap-5">
//             <div className="payNow my-5">
//               <button
//                 type="submit"
//                 className="payNowBtn text-white bg-blue-600 py-2 px-5 rounded-lg " onClick={handlePayment} >
//                 Pay Now
//               </button>
//             </div>
//             <div className="viewPlan my-5">
//               <button
//                 className="viewPlanBtn text-white bg-blue-600 py-2 px-5 rounded-lg "  >
//                 View Plan
//               </button>
//             </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Prepaid;
