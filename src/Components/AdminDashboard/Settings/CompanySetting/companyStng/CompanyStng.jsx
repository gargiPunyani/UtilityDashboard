import React, { useEffect, useState } from "react";
import {
  activeServices,
  companyAddress,
  companySetting,
} from "../../../../constant";
import { useFormik } from "formik";
import { Country, State } from "country-state-city";

const CompanyStng = () => {
  const stateCity = useFormik({
    initialValues: {
      country: "",
      state: "",
      city: "",
    },
  });
  const countries = Country.getAllCountries();
  const updatedCountries = countries?.map((country) => ({
    label: country.name,
    value: country.flag,
    ...country,
  }));
  console.log("updatedCountries", updatedCountries, countries);
  const updatedStates = (countryFlag) =>
    State.getStateByCodeAndCountry(countryFlag)?.map((state) => ({
      label: state.name,
      value: state.flag,
      ...state,
    })) || []; 

  console.log(updatedStates, "State2");
  console.log(State, "State");

  const { values, handleSubmit, setValues } = stateCity;
  const [statesList, setStatesList] = useState([])

  useEffect(() => {
    if (values.country) {
        const states = updatedStates(values.country);
        setStatesList(states); 
      }
    }, [values.country]);
  return (
    <div className="cmnyStngOuterMost text-sm bg-white shadow-xl rounded-xl  p-3">
      <div className="companyStngOuter">
        <div className="companyStngInner">
          <div className="siteSetting uppercase mb-3 font-semibold">
            <h3>Services</h3>
          </div>
          <hr />
          <form className="companyStngForm grid md:grid-cols-2 gap-6 mt-5 md:mt-7 lg:grid-cols-3">
            {companySetting.map((item) => {
              return (
                <div className="comanyStngDetails" key={item.id}>
                  <label>{item.label}</label>
                  <div className="comapnyDetailsInput mt-2">
                    <input
                      placeholder={item.value}
                      className="comapnyDetailsInputData p-2 rounded-lg w-full border-2 outline-none"
                    />
                  </div>
                </div>
              );
            })}
            <div className="comanyStngDetails">
              <label>Same Amount Recharge</label>
              <div className="comapnyDetailsInput mt-2">
                <select className="comapnyDetailsInputData p-2 rounded-lg w-full border-2 outline-none text-gray-700">
                  <option selected>Select Amount</option>
                  <option>15 Minute</option>
                  <option>30 Minute</option>
                  <option>40 Minute</option>
                  <option>1 Hour</option>
                  <option>2 Hour</option>
                </select>
              </div>
            </div>
            <div className="comanyStngDetails">
              <label>Server</label>
              <div className="comapnyDetailsInput mt-2">
                <select className="comapnyDetailsInputData p-2 rounded-lg w-full border-2 outline-none text-gray-700">
                  <option className="text-gray-400" selected>
                    Select Server Type{" "}
                  </option>
                  <option>Running</option>
                  <option>Closed</option>
                </select>
              </div>
            </div>
            <div className="comanyStngDetails">
              <label>Maintenance Message</label>
              <div className="comapnyDetailsInput mt-2">
                <input
                  className="comapnyDetailsInputData p-2 rounded-lg w-full border-2 outline-none"
                  placeholder="Welcome to MayaPe."
                />
              </div>
            </div>
            <div className="comanyStngDetails">
              <label>Select Country</label>
              <div className="comapnyDetailsInput mt-2">
                <select
                  className="comapnyDetailsInputData p-2 rounded-lg w-full border-2 outline-none text-gray-700"
                  onChange={(e, value) => {
                    countries.find((country)=>country.countryFlag=== e.target.value)
                    setValues(
                      { country: value, state: null, city: null }, false
                    );
                  }} >
                  <option selected>Select Country</option>
                  {updatedCountries.map((country) => (
                    <option value={country.value}>{country.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="comanyStngDetails">
              <label>Select State</label>
              <div className="comapnyDetailsInput mt-2">
                <input type="text" className="comapnyDetailsInputData p-2 rounded-lg w-full border-2 outline-none " placeholder="Enter State" />
                {/* <select
                  className="companyDetailsInputData p-2 mt rounded-lg w-full border-2 outline-none text-gray-700"
                  onChange={(e) => {
                    setValues({ state: e.target.value }, false);
                  }}
                  value={values.state || ""} >
                  <option value="">Select State</option>
                  <option key={updatedStates.countryFlag} value={updatedStates.countryFlag}>
                      {State.label}
                      </option>
                      </select> */}
                  {/* {updatedStates.map((state)=>{
                    return(
                   (values.state ? values.state.flag : null)
                  )}
                )}                   */}
          
              </div>
            </div>
            <div className="comanyStngDetails">
              <label>Pin Code</label>
              <div className="comapnyDetailsInput mt-2">
                <input
                  className="comapnyDetailsInputData p-2 rounded-lg w-full border-2 outline-none"
                  placeholder="124001"
                />
              </div>
            </div>
            <div className="comanyStngDetails">
              <label>Pan Number</label>
              <div className="comapnyDetailsInput mt-2">
                <input
                  className="comapnyDetailsInputData p-2 rounded-lg w-full border-2 outline-none"
                  placeholder="ABKEE123O"
                />
              </div>
            </div>
            <div className="comanyStngDetails">
              <label>GST Number</label>
              <div className="comapnyDetailsInput mt-2">
                <input
                  className="comapnyDetailsInputData p-2 rounded-lg w-full border-2 outline-none"
                  placeholder="097218ASFR12"
                />
              </div>
            </div>
            <div className="comanyStngDetails">
              <label>Login Type</label>
              <div className="comapnyDetailsInput mt-2">
                <select className="comapnyDetailsInputData p-2 rounded-lg w-full border-2 outline-none text-gray-700">
                  <option className="text-gray-400" selected>
                    Select Login Type{" "}
                  </option>
                  <option>With OTP</option>
                  <option>Without OTP</option>
                </select>
              </div>
            </div>
            {companyAddress.map((item) => {
              return (
                <div className="companyDetails" key={item.id}>
                  <label>{item.label}</label>
                  <div className="companyInput ">
                    <input
                      className="p-2 rounded-lg w-full border-2 outline-none mt-2"
                      placeholder={item.data}
                    />
                  </div>
                </div>
              );
            })}
            <div className="comanyStngDetails">
              <label>Table Format</label>
              <div className="comapnyDetailsInput mt-2">
                <select className="comapnyDetailsInputData p-2 rounded-lg w-full border-2 outline-none text-gray-700">
                  <option>Table 1</option>
                  <option>Table2</option>
                </select>
              </div>
            </div>
            <div className="comanyStngDetails">
              <label>Transaction Pin</label>
              <div className="comapnyDetailsInput mt-2">
                <select className="comapnyDetailsInputData p-2 rounded-lg w-full border-2 outline-none text-gray-700">
                  <option>Enable</option>
                  <option>Disable</option>
                </select>
              </div>
            </div>
            <br />
            {/* <div className="activeServices">

              </div>
              <div className="addressSubmitBtn">
            <button className="addressSubmit bg-blue-600 p-2 text-white rounded-md" type="submit">Submit</button>
          </div>  */}
          </form>
          <div className="activeServices md:mt-7">
            <label>Active Service</label>
            <div className="activeServiceDetails text-xs sm:text-sm mt-2 rounded-lg border-2 p-2 md:p-4 grid  xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-normal items-center gap-5">
              {activeServices.map((item) => {
                return (
                  <div
                    className="activeServiceData w-auto flex gap-4 items-center bg-white "
                    key={item.id}
                  >
                    <div  className="serviceIcon">
                      {item.icon}
                      </div>
                    <div className="serviceName">
                    <p>{item.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="addressSubmitBtn mt-7">
            <button
              type="submit"
              onSubmit={handleSubmit}
              className="addressSubmit bg-blue-600 p-2 text-white rounded-md"
            >
              Update Details
            </button>
          </div>

          {/* <form className="companyAddress mt-7 grid md:grid-cols-2 gap-8">
          {companyAddress.map((item)=>{
                return(
                    <div className="companyDetails" key={item.id}>
                        <label>{item.label}</label>
                        <div className="companyInput ">
                            <input className="p-1 rounded-lg w-full border-2 outline-none mt-2" placeholder= {item.data}/>
                        </div>

                    </div>
                )})}
                 <div className="comanyStngDetails">
              <label>Table Format</label>
              <div className="comapnyDetailsInput mt-2">
                <select className="comapnyDetailsInputData p-2 rounded-lg w-full border-2 outline-none text-gray-700">
                  <option>Table 1</option>
                  <option>Table2</option>
                </select>
              </div>
              </div>    
              <div className="comanyStngDetails">
              <label>Transaction Pin</label>
              <div className="comapnyDetailsInput mt-2">
                <select className="comapnyDetailsInputData p-2 rounded-lg w-full border-2 outline-none text-gray-700">
                  <option>Enable</option>
                  <option>Disable</option>
                </select>
              </div>
              </div> 

          </form> */}
          {/* <div className="addressSubmitBtn mt-7">
            <button className="addressSubmit bg-blue-600 p-2" type="submit">Submit</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CompanyStng;
