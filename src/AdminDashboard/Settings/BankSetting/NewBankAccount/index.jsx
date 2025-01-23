import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { newAccountDetail } from "../../../../constant";
import { useFormik } from "formik";
import { bankAccountSchema } from "../../../../Login/LoginLeft/Schema";

const initialValues = {
  bName: "",
  hName: "",
  accountNo: "",
  ifsc: "",
  branch: "",
};
const NewBank = () => {
    const navigate = useNavigate();
  const { values, handleBlur, handleChange, touched, handleSubmit, errors } =useFormik({
      initialValues: initialValues,
      validationSchema: bankAccountSchema,
      onSubmit: (values, action) => {
        console.log(values)
        console.log(values.branch)
        alert("submitted");
        action.resetForm();
      },
    });
  const handleClose = () => {
    navigate("/dashboard");
  };
  return (
    <div className="newBankOuterMost">
      <div className="newBankOuter">
 
            <div className="dashboardBtn button mb-2 p-3">
              <button className="dahsboardButton relative p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                <span>
                  <Link to={"/dashboard"}> Dashboard </Link>
                  {">"} New Bank Account
                </span>
              </button>
            </div>
            <div className="newBankInner bg-white shadow-lg p-5 m-5 rounded-lg">
              <form className="accountForm grid text-sm sm:text-md sm:grid-cols-2 gap-5 " onSubmit={handleSubmit}>
                <div className="newAccountDetails">
                  <label> Bank Name: </label>
                  <div className="newAccountInput w-full mt-2">
                    <input className="newAccountInpu w-full outline-none rounded-md p-2 border-2" placeholder="Bank Name" value={values.bName} id="bName" onChange={handleChange} onBlur={handleBlur} />
                  </div>
                  {errors.bName && touched.bName ? (<p className="text-red-600 text-xs"> {errors.bName}</p> ) : null}
                </div>
                <div className="newAccountDetails">
                  <label> Account Number: </label>
                  <div className="newAccountInput w-full mt-2">
                    <input className="newAccountInpu w-full outline-none rounded-md p-2 border-2" placeholder="Bank Name" value={values.accountNo} id="accountNo" onChange={handleChange} onBlur={handleBlur} />
                  </div>
                  {errors.accountNo && touched.accountNo ? (<p className="text-red-600 text-xs"> {errors.accountNo}</p>) : null}
                </div>
                <div className="newAccountDetails">
                  <label> Bank Holder Name: </label>
                  <div className="newAccountInput w-full mt-2">
                    <input className="newAccountInpu w-full outline-none rounded-md p-2 border-2" placeholder="Bank Holder Name" value={values.hName} id="hName" onChange={handleChange} onBlur={handleBlur} />
                  </div>
                  {errors.hName && touched.hName ? ( <p className="text-red-600 text-xs"> {errors.hName}</p>) : null}
                </div>
                <div className="newAccountDetails">
                  <label> IFSC Code: </label>
                  <div className="newAccountInput w-full mt-2">
                    <input className="newAccountInpu w-full outline-none rounded-md p-2 border-2" placeholder="IFSC Code" value={values.ifsc} id="ifsc" onChange={handleChange} onBlur={handleBlur} />
                  </div>
                  {errors.ifsc && touched.ifsc ? ( <p className="text-red-600 text-xs"> {errors.ifsc}</p> ) : null}
                </div>
                <div className="newAccountDetails">
                  <label> Branch: </label>
                  <div className="newAccountInput w-full mt-2">
                    <input className="newAccountInpu w-full outline-none rounded-md p-2 border-2" placeholder="Branch" value={values.branch} id="branch" onChange={handleChange} onBlur={handleBlur} />
                  </div>
                  {errors.branch && touched.branch ? ( <p className="text-red-600 text-xs"> {errors.branch}</p> ) : null}
                </div>
              </form>
              <div className="bankAccountBtn text-xs sm:text-sm xs:flex gap-10 sm:text-center items-center">
                <div className="close mt-5 cursor-pointer" onClick={handleClose}>
                   <button className="saveChangeBtn bg-gray-500 text-white py-2 px-5 rounded-lg shadow-lg">
                    Close
                  </button>
                </div>
                <div className="saveChange mt-5 cursor-pointer">
                  <button type="submit" className="saveChangeBtn bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg" onClick={handleSubmit} >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
  
  );
};

export default NewBank;
