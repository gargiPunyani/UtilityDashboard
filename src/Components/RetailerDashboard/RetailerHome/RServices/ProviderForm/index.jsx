import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProviderForm = ({ heading, label1, providers, label2, option1, option2, option3, option4, data,}) => {
  const [showStaticOptions, setShowStaticOptions] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/retailer-dashboard");
  };
  const toggleStaticOptions = () => {
    setShowStaticOptions(providers.length === 0);
  };
  return (
    <div className="providerFormOutMost w-[40%]">
      <div className="providerFormOuter">
        <div className="providerFormInner bg-white w-[100%] h-[60vh] shadow-lg rounded-md p-4">
          <div className="providerFormHead uppercase mb-3 font-medium">
            <h3>{heading}</h3>
          </div>
          <hr />
          <div className="providerFormBody">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="providerForm my-5">
                <label htmlFor="provider">{label1}</label>
                <div className="providerFormData">
                  <select className="providerFormInput outline-none rounded-md required text-gray-600 w-full border-2 p-2 mt-2">
                    <option value="" disabled selected>
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
                        <option value="static1">{option1}</option>
                        <option value="static2">{option2}</option>
                        <option value="static3">{option3}</option>
                        <option value="static4">{option4}</option>
                      </>
                    )}
                  </select>

                  {/* <select className="providerFormInput outline-none rounded-md required text-gray-600 w-full border-2 p-2 mt-2">
                    {providers.map((item) => {
                      return (
                        <option key={item.id} value={item.service_id}>
                          {item.provider_name}
                        </option>
                      );
                    })} */}
                  {/* <select className='providerFormInput outline-none rounded-md required text-gray-600 w-full border-2 p-2 mt-2'> */}

                  {/* <option>{option5}</option>
                  {/* </select>  */}
                  {/* </select> */}
                </div>
                <div className="providerForm my-5">
                  <label htmlFor="number">{label2}</label>
                  <div className="providerFormData">
                    <input
                      className="providerFormInput outline-none rounded-md text-gray-600 w-full border-2 p-2 mt-2 "
                      placeholder={data}
                    />
                  </div>
                </div>
              </div>
              <div className="button flex gap-5">
                <div className="fetch">
                  <button
                    type="submit"
                    className="closeBtn bg-green-600 text-white rounded-md px-8 py-3">
                    Fetch Bill
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
  );
};

export default ProviderForm;
