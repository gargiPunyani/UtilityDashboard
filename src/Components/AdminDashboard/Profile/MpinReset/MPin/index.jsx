import React, { useState } from "react";
import { changeMpin } from "../../../../constant";
import instance from "../../../../../Services/InstanceAxios";

const Mpin = () => {
  const [mpin, setMPin] = useState({ new_mpin: "", otp: "" });
  const api_token = localStorage.getItem("token");
  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log(`Updating: ${id} = ${value}`);
    setMPin((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  const resetPass = async () => {
    console.log("Submitting:", mpin);
    try {
      const response = await instance.post(`mpin-generate-confirm`, {
        api_token,
        new_mpin: mpin.new_mpin,
        otp: mpin.otp,
        order_id: sessionStorage.getItem("order_id"),
      });

      alert(response.data.message);
    } catch (error) {
      console.error("Error in resetPass:", error);
      return error;
    }
  };

  const handleOtp = async () => {
    try {
      const response = await instance.post(`mpin-generate-otp`, { api_token });
      sessionStorage.setItem("order_id", response.data.order_id);
      console.log("Order ID:", response.data.order_id);
    } catch (error) {
      console.error("Error in handleOtp:", error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await resetPass();
  };

  return (
    <div className="mpinOuterMost">
      <div className="mpinOuter">
        <div className="mpinInner">
          <div className="presentAddressInfo text-black uppercase font-semibold mb-5">
            <h3>Change MPIN</h3>
          </div>
          <hr />
          <div className="changePass">
            <form onSubmit={handleSubmit}>
              {changeMpin.map((item) => (
                <div
                  className="changePassForm w-full mt-3 sm:flex gap-3 sm:text-justify items-center"
                  key={item.id}
                >
                  <label
                    htmlFor={item.id}
                    className="mpinchange sm:w-1/2 sm:p-3"
                  >
                    {item.label}:
                  </label>
                  <input
                    type="text"
                    id={item.id}
                    value={mpin[item.id] || ""}
                    onChange={handleChange}
                    className="mpinInput p-2 border-2 mt-2 rounded-md w-full outline-none"
                    placeholder={item.data}
                  />
                </div>
              ))}
              <div className="resetButtons xs:flex gap-5">
                <div className="changePassButton mt-5">
                  <button
                    type="button"
                    className="changePassBtn p-2 bg-green-500 text-white rounded-lg"
                    onClick={handleOtp}
                  >
                    Send OTP
                  </button>
                </div>
                <div className="changePassButton mt-5">
                  <button
                    type="submit"
                    className="changePassBtn p-2 bg-red-500 text-white rounded-lg"
                  >
                    Change MPIN
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mpin;

// import React, { useState } from 'react'
// import { changeMpin, changePass } from '../../../../constant';
// import instance from '../../../../../Services/InstanceAxios';

// const Mpin = () => {
//     const [mpin, setMPin] = useState({})
//     const api_token = localStorage.getItem("token");
//       const handleChange = (e) => {
//         setMPin({ ...mpin, [e.target.id]: e.target.value });
//       };
//       const resetPass = async (otp) => {
//         try {
//           const response = await instance.post(`mpin-generate-confirm`, {
//             api_token,
//             new_mpin: mpin.new_mpin,
//             otp,
//             order_id: sessionStorage.getItem("order_id"),
//           });

//           alert(response.data.message);
//         } catch (error) {
//           console.error(error);
//         }
//       };

//       const handleOtp = async () => {
//         const api_token = localStorage.getItem("token");
//         await resetApi(api_token);
//       };

//       const order_id = sessionStorage.getItem("order_id");

//       const handleSubmit = async (e, new_mpin, otp) => {
//         e.preventDefault();
//         // console.log(mpin)
//         await resetPass(api_token, order_id, new_mpin, otp) ;
//       };

//       const resetApi = async (api_token) => {
//         try {
//           const response = await instance.post(`mpin-generate-otp`,
//             {
//               api_token: localStorage.getItem("token"),
//             }
//           );
//           // console.log("reset:", response.data )
//           sessionStorage.setItem("order_id", response.data.order_id);
//           console.log(response.data.order_id);
//           // console.log(api_token, "token" )
//         } catch (error) {
//           // console.log(error)
//           return error;
//         }
//       };
//   return (
//        <div className="mpinOuterMost ">
//           <div className="mpinOuter">
//             <div className="mpinInner">
//               <div className="presentAddressInfo text-black uppercase font-semibold mb-5">
//                 <h3>Change Mpin</h3>
//               </div>
//               <hr />
//               <div className="changePass ">
//                 <form onSubmit={handleSubmit}>
//                   {changeMpin.map((item) => {
//                     return (
//                       <div
//                         className="changePassForm w-full mt-3 sm:flex gap-3 sm:text-justify items-center"
//                         key={item.id}
//                       >
//                         <label
//                           htmlFor="mpinchange"
//                           className="mpinchange sm:w-1/2 sm:p-3"
//                         >
//                           {item.label}:
//                         </label>
//                         <input
//                           type="text"
//                           value={mpin[item.id] || ""}
//                           onChange={handleChange}
//                           id={item.id}
//                           className="mpinInput p-2 border-2 mt-2 rounded-md w-full outline-none "
//                           placeholder={item.data}
//                         />
//                       </div>
//                     );
//                   })}
//                   <div className="resetButtons xs:flex gap-5">
//                     <div className="changePassButton mt-5" onClick={handleOtp}>
//                       <button type='button' className="changePassBtn p-2 bg-green-500 text-white rounded-lg">
//                         Send Otp
//                       </button>
//                     </div>
//                     <div className="changePassButton mt-5">
//                       <button
//                         type="submit"
//                         className="changePassBtn p-2 bg-red-500 text-white rounded-lg">
//                         Change Mpin
//                       </button>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//   )
// }

// export default Mpin
