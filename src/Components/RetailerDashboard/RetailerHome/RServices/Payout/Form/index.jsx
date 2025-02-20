import React from "react";

const RPayoutForm = ({ label1, label2, label3, label4, label5, label6 }) => {
  return (
    <div className="rPayFormOutMost">
      <div className="rPayFormOut">
        <div className="rpayFormInner">
          <form className="rpayForm grid sm:grid-cols-2 my-5 gap-5">
            <div className="rpayFormData">
              <label htmlFor={label1}>{label1}</label>
              <input
                placeholder={label1}
                className="rpayFormInput border-2 p-2 w-full rounded-md outline-none mt-1"
              />
            </div>
            <div className="rpayFormData">
              <label htmlFor={label2}>{label2}</label>
              <input
                placeholder={label2}
                className="rpayFormInput border-2 p-2 w-full rounded-md outline-none mt-1"
              />
            </div>
            <div className="rpayFormData">
              <label htmlFor={label3}>{label3}</label>
              <input
                placeholder={label3}
                className="rpayFormInput border-2 p-2 w-full rounded-md outline-none mt-1"
              />
            </div>
            <div className="rpayFormData">
              <label htmlFor={label4}>{label4}</label>
              <input
                placeholder={label4}
                className="rpayFormInput border-2 p-2 w-full rounded-md outline-none mt-1"
              />
            </div>
            <div className="rpayFormData">
              <label htmlFor={label5}>{label5}</label>
              <input
                placeholder={label5}
                className="rpayFormInput border-2 p-2 w-full rounded-md outline-none mt-1"
              />
            </div>
            <div className="rpayFormData">
              <label htmlFor={label6}>{label6}</label>
              <input
                placeholder={label6}
                className="rpayFormInput border-2 p-2 w-full rounded-md outline-none mt-1"
              />
            </div>
          </form>
          <div className="addSender">
            <button className="serachBtn bg-green-600 rounded-md text-white px-5 py-2">
              Transfer Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RPayoutForm;
