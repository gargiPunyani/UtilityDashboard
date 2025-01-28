import React from "react";

const SiteSet = () => {
  return (
    <div className="siteSetOuterMost text-sm">
      <div className="siteSettingOuter bg-white p-5 rounded-2xl shadow-lg">
        <div className="siteSettingInner">
          <div className="siteSetting uppercase font-semibold">
            <h3>Site Settings</h3>
          </div>
          <hr />
          <div className="siteSettingForm mt-7">
            <form className="siteSettingForm grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="brandName">
                <label>Brand Name(for sms)</label>
                <div className="formInput mt-2">
                <input placeholder="Chagan Technologies" className="border-2 outline-none rounded-lg w-full p-2"  />
                </div>
              </div>
              <div className="sms">
                <label> Sms</label>
                <div className="formInput mt-2 text-gray-600">
                <select className="border-2 outline-none rounded-lg w-full p-2" >
                    <option className="text-gray-600">Enable</option>
                    <option className="text-gray-600">Disable</option>
                    </select>
                </div>
              </div>
              <div className="smsKey">
                <label>Sms Key</label>
                <div className="formInput mt-2">
                <input placeholder="Chagan Technologies" className="border-2 outline-none rounded-lg w-full p-2"  />
                </div>
                <div className="apiLink text-blue-600 mt-1">
                <p>Sms Api Click Here</p>
                </div>
              </div>
              <div className="whatsappNumber">
                <label>Whatsapp Number</label>
                <div className="formInput mt-2">
                <input placeholder="Chagan Technologies" className="border-2 outline-none rounded-lg w-full p-2"  />
                </div>
              </div>
              <div className="whatsapp">
                <label>Whatsapp</label>
                <div className="formInput mt-2 text-gray-600">
                <select className="border-2 outline-none rounded-lg w-full p-2" >
                    <option className="text-gray-600">Enable</option>
                    <option selected className="text-gray-600">Disable</option>
                    </select>
                </div>
              </div>
              <div className="whatsappApi">
                <label>Whatsapp Api Token</label>
                <div className="formInput mt-2">
                <input placeholder="Chagan Technologies" className="border-2 outline-none rounded-lg w-full p-2"  />
                </div>
                <div className="apiLink text-blue-600 mt-1">
                <p>Sms Api Click Here</p>
                </div>
              </div>
              <div className="amount">
                <label>Alert Amount</label>
                <div className="formInput mt-2">
                <input placeholder="1000" className="border-2 outline-none rounded-lg w-full p-2"  />
                </div>
              </div>
              <div className="mail">
                <label>Mail</label>
                <div className="formInput mt-2 text-gray-600">
                <select className="border-2 outline-none rounded-lg w-full p-2" >
                    <option className="text-gray-600">Enable</option>
                    <option selected className="text-gray-600">Disable</option>
                    </select>
                </div>
              </div>
              <div className="passwordExpiry">
                <label>Password Expires</label>
                <div className="formInput mt-2 text-gray-600">
               <select className=" border-2 outline-none rounded-lg w-full p-2" >
                <option value="" className="text-gray-600"  selected >Select Password Expires </option>
                <option className="text-gray-600">After 1 day</option>
                <option className="text-gray-600">After 5 days</option>
                <option className="text-gray-600">After 10 days</option>
                <option className="text-gray-600">After 15 days</option>
                <option className="text-gray-600">After 20 days</option>
                <option className="text-gray-600">After 25 days</option>
                <option className="text-gray-600">After 30 days</option>

               </select>
                </div>
              </div>
              <div className="commission">
                <label>Commission Wallet Status</label>
                <div className="formInput mt-2 text-gray-600">
                <select className="border-2 outline-none rounded-lg w-full p-2" >
                    <option className="text-gray-600">Enable</option>
                    <option className="text-gray-600">Disable</option>
                    </select>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteSet;
