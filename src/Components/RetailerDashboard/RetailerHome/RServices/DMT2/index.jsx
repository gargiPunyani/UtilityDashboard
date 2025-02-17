import React, { useState } from "react";
import { Link } from "react-router-dom";
import { dmtForm } from "../../../../constant";
import { useFormik } from "formik";
import { addSenderSchema, numberSchema } from "./FormikSchema";
import instance from "../../../../../Services/InstanceAxios";
import { last } from "@tanstack/router-core";

const DMT = () => {
  const [showForm, setShowForm] = useState(false);
  const api_token = localStorage.getItem("token")
  const mobileFormik = useFormik({
    initialValues: { mobile: "" },
    validationSchema: numberSchema,
    onSubmit: async (values) => {
      setShowForm(true)
      // try {
      //   const response = await instance.post("money/sender-check", {
      //     mobile: values.mobile,
      //     api_token,
      //   });
      //   console.log("Response:", response.data);
      //   setShowForm(true);
      // } catch (error) {
      //   console.log("Error:", error);
      // }
    },
  });
  const handleSearch = async()=>{
    try {
      const response = await instance.post("money/sender-check",{
        mobile: mobileFormik.mobile,
        api_token
      })
      console.log(response, "Responsee")
      console.log(response.data , "Data")

    } catch (error) {
      console.log(error)
      return error
    }
  }
  
  const addSenderFormik = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      address: "",
      state: "",
      pincode: "",
      otp: "",
    },
    validationSchema: addSenderSchema,
    onSubmit: async(values, {resetForm}) => {
      resetForm()
      try {
        const resp = await instance.post("money/sender-add",{
          api_token,
          mobile: mobileFormik.mobile ,
          firstname: values.fName, 
          lastname: values.lName,
          sender_otp: values.otp
        })
      } catch (error) {
        console.log(error)
        return error
      }
      console.log("DMT Form Data:", values);
      // alert("Sender Added Successfully!");
    },
  });

  return (
    <div className="dmtOuterMost text-sm p-3">
      <div className="dmtOut">
        <div className="dashboardBtn button mb-3">
          <button className="dahsboardButton relative p-1 items-center text-xs font-semibold">
            <span>
              <Link to={"/retailer-dashboard"}> Dashboard </Link>
              {">"} Payout
            </span>
          </button>
        </div>

        <div className="upiTransfer bg-white w-[100%] shadow-lg rounded-md p-4 my-5">
          <div className="providerFormHead uppercase mb-3 font-medium">
            <h3>DMT</h3>
          </div>
          <hr />
          <form onSubmit={mobileFormik.handleSubmit} className="dmtInner my-3">
            <label htmlFor="mobile">Mobile: </label>
            <input
              className="dmtoutInput border-2 outline-none p-2 mt-2 w-1/3 rounded-md text-gray-600"
              type="text"
              name="mobile"
              value={mobileFormik.values.mobile}
              onChange={mobileFormik.handleChange}
              onBlur={mobileFormik.handleBlur}
              placeholder="Enter Mobile Number"
            />
            <button type="submit"
            onClick={handleSearch} className="serachBtn bg-blue-600 rounded-md text-white px-5 ml-5 py-2">
              Search
            </button>

            {mobileFormik.touched.mobile && mobileFormik.errors.mobile && (
              <p className="text-red-600 mt-2 ">{mobileFormik.errors.mobile}</p>
            )}
          </form>
        </div>

        {showForm && (
          <div className="dmtoutForm bg-white w-[100%] shadow-lg rounded-md p-4 my-10">
            <div className="dmtoutFormHead mb-3 uppercase font-semibold">
              <h3>Add Sender</h3>
            </div>
            <hr />

            <form onSubmit={addSenderFormik.handleSubmit} >
              {dmtForm.map((item, id) => (
                <div className="dmtFormData grid sm:grid-cols-2 lg:grid-cols-3 gap-5 my-5" key={id}>
                  <div className="dmtData">
                  <label htmlFor={item.label1}>{item.label1}</label>
                  <input
                    className="dmtFormInput border-2 p-2 w-full rounded-md outline-none mt-1"
                    name="fName"
                    value={addSenderFormik.values.fName}
                    onChange={addSenderFormik.handleChange}
                    onBlur={addSenderFormik.handleBlur}
                    placeholder={item.label1}
                  />
                  {addSenderFormik.touched.fName && addSenderFormik.errors.fName && (
                    <p className="text-red-600 mt-2">{addSenderFormik.errors.fName}</p>
                  )}
                  </div>
                  <div className="dmtData">
                   <label htmlFor={item.label2}>{item.label2}</label>
                  <input
                    className="dmtFormInput border-2 p-2 w-full rounded-md outline-none mt-1"
                    name="lName"
                    value={addSenderFormik.values.lName}
                    onChange={addSenderFormik.handleChange}
                    onBlur={addSenderFormik.handleBlur}
                    placeholder={item.label2}
                  />
                  {addSenderFormik.touched.lName && addSenderFormik.errors.lName && (
                    <p className="text-red-600 mt-2">{addSenderFormik.errors.lName}</p>
                  )}
                     </div>
                     <div className="dmtData">
                   <label htmlFor={item.address}>{item.address}</label>
                  <input
                    className="dmtFormInput border-2 p-2 w-full rounded-md outline-none mt-1"
                    name="address"
                    value={addSenderFormik.values.address}
                    onChange={addSenderFormik.handleChange}
                    onBlur={addSenderFormik.handleBlur}
                    placeholder={item.address}
                  />
                  {addSenderFormik.touched.address && addSenderFormik.errors.address && (
                    <p className="text-red-600 mt-2">{addSenderFormik.errors.address}</p>
                  )}
                     </div>
                     <div className="dmtData">
                   <label htmlFor={item.state}>{item.state}</label>
                  <input
                    className="dmtFormInput border-2 p-2 w-full rounded-md outline-none mt-1"
                    name="state"
                    value={addSenderFormik.values.state}
                    onChange={addSenderFormik.handleChange}
                    onBlur={addSenderFormik.handleBlur}
                    placeholder={item.state}
                  />
                  {addSenderFormik.touched.state && addSenderFormik.errors.state && (
                    <p className="text-red-600 mt-2">{addSenderFormik.errors.state}</p>
                  )}
                     </div>
                     <div className="dmtData">
                   <label htmlFor={item.pincode}>{item.pincode}</label>
                  <input
                    className="dmtFormInput border-2 p-2 w-full rounded-md outline-none mt-1"
                    name="pincode"
                    value={addSenderFormik.values.pincode}
                    onChange={addSenderFormik.handleChange}
                    onBlur={addSenderFormik.handleBlur}
                    placeholder={item.pincode}
                  />
                  {addSenderFormik.touched.pincode && addSenderFormik.errors.pincode && (
                    <p className="text-red-600 mt-2">{addSenderFormik.errors.pincode}</p>
                  )}
                     </div>
                     <div className="dmtData">
                   <label htmlFor={item.otp}>{item.otp}</label>
                  <input
                    className="dmtFormInput border-2 p-2 w-full rounded-md outline-none mt-1"
                    name="otp"
                    value={addSenderFormik.values.otp}
                    onChange={addSenderFormik.handleChange}
                    onBlur={addSenderFormik.handleBlur}
                    placeholder={item.otp}
                  />
                  {addSenderFormik.touched.otp && addSenderFormik.errors.otp && (
                    <p className="text-red-600">{addSenderFormik.errors.otp}</p>
                  )}
                     </div>
                </div>
              ))}

              <div className="addSender col-span-full">
                <button type="submit" className="serachBtn bg-green-600 rounded-md text-white px-5 py-2">
                  Add Sender
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default DMT;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { dmtForm } from "../../../../constant";
// import { useFormik } from "formik";
// import { addSenderSchema, numberSchema } from "./FormikSchema";
// import instance from "../../../../../Services/InstanceAxios";

// const DMT = () => {
 
//    const initialValues= {
//       mobile: "",
//     };
//     const data= {
//       fName:"",
//       lName:"",
//       address:"",
//       state:"", 
//       pincode:"",
//       otp:""
//     }
//     const {values, handleBlur, handleChange, touched, handleSubmit, errors } =
//         useFormik ({
//           initialValues: initialValues,
//           validationSchema: numberSchema,
//     onSubmit: (values) => {
//       setShowForm(true);
//       // console.log(values)
//       // console.log(errors)
//     }, });
//     const {newdata, handleForm }= 
//     useFormik({
//       initialValues:data,
//       validationSchema: addSenderSchema,
//       onSubmit :(newdata)=>{
//         console.log(newdata)
//       }
  
//   })
//   const [showForm, setShowForm] = useState(false); 
//     const api_token = localStorage.getItem("token")
//     const handleSearch = async()=>{
//       try {
//         const response = await instance.post("money/sender-check",{
//           mobile: values.mobile,
//           api_token
//         })
//         console.log(response, "Responsee")
//         console.log(response.data , "Data")

//       } catch (error) {
//         console.log(error)
//         return error
//       }
//     }
//   return (
//     <div className="dmtOuterMost text-sm p-3">
//       <div className="dmtOut">
//         <div className="dashboardBtn button mb-3">
//           <button className="dahsboardButton relative p-1 items-center text-xs font-semibold decoration-none cursor-pointer">
//             <span>
//               <Link to={"/retailer-dashboard"}> Dashboard </Link>
//               {">"} Payout
//             </span>
//           </button>
//         </div>
//         <div className="dmtInner">
//           <div className="upiTransfer bg-white w-[100%] shadow-lg rounded-md p-4 my-5">
//             <div className="providerFormHead uppercase mb-3 font-medium">
//               <h3>DMT</h3>
//             </div>
//             <hr />
//             <form onSubmit={handleSubmit} className="dmtInner my-3">
//               <label htmlFor="mobile">Mobile: </label>
//               <input
//                 className="dmtoutInput border-2 outline-none p-2 mt-2 w-1/3 rounded-md text-gray-600"
//                 type="text"
//                 name="mobile"
//                 value={values.mobile}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 placeholder="Enter Mobile Number"
//               />
//               <button
//                 type="submit"
//                 className="serachBtn bg-blue-600 rounded-md text-white px-5 ml-5 py-2"
//                 onClick={handleSearch}> Search
//               </button>

//               {touched.mobile && errors.mobile && (
//                 <p className="text-red-600 mt-2 mt-2">{errors.mobile}</p>
//               )}
//             </form>
//           </div>

//           {showForm && (
//             <div className="dmtoutForm bg-white w-[100%] shadow-lg rounded-md p-4 my-10">
//               <div className="dmtoutFormHead mb-3 uppercase font-semibold">
//                 <h3>Add Sender</h3>
//               </div>
//               <hr />
//               <div className="dmtoutFormStart">
//                 {dmtForm.map((item, id) => (
//                   <div className="dmtoutData" key={id}>
//                     <form className="dmtForm grid sm:grid-cols-2 lg:grid-cols-3 gap-5 my-5" onSubmit={handleForm} >
//                       <div className="dmtFormData">
//                         <label htmlFor={item.label1}>{item.label1}</label>
//                         <input
//                           className="dmtFormInput border-2 p-2 w-full rounded-md outline-none mt-1"  
//                            onChange={handleChange}
//                 onBlur={handleBlur}
//                           value={data.fName}
//                           placeholder={item.label1} />
//                       </div>
//                       <div className="dmtFormData">
//                         <label htmlFor={item.label2}>{item.label2}</label>
//                         <input
//                           className="dmtFormInput border-2 p-2 w-full rounded-md outline-none mt-1"  
//                            onChange={handleChange}
//                 onBlur={handleBlur}
//                           value={data.lName}
//                           placeholder={item.label2} />
//                       </div>
//                       <div className="dmtFormData">
//                         <label htmlFor={item.pincode}>{item.pincode}</label>
//                         <input
//                           className="dmtFormInput border-2 p-2 w-full rounded-md outline-none mt-1" 
//                            onChange={handleChange}
//                 onBlur={handleBlur}
//                           value={data.pincode}
//                           placeholder={item.pincode} />
//                       </div>
//                       <div className="dmtFormData">
//                         <label htmlFor={item.state}>{item.state}</label>
//                         <input
//                           className="dmtFormInput border-2 p-2 w-full rounded-md outline-none mt-1" 
//                            onChange={handleChange}
//                 onBlur={handleBlur}
//                           value={data.state}
//                           placeholder={item.state} />
//                       </div>
//                       <div className="dmtFormData">
//                         <label htmlFor={item.address}>{item.address}</label>
//                         <input
//                           className="dmtFormInput border-2 p-2 w-full rounded-md outline-none mt-1" 
//                            onChange={handleChange}
//                 onBlur={handleBlur}
//                           value={data.address}
//                           placeholder={item.address} />
//                       </div>
//                     </form>
//                     <div className="addSender">
//                       <button
//                       type="submit" className="serachBtn bg-green-600 rounded-md text-white px-5 py-2">
//                         Add Sender
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );};

// export default DMT;
