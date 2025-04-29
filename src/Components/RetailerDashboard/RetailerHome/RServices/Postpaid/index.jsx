import React, { useEffect, useState } from "react";
import ProviderForm from "../ProviderForm";
import { Link } from "react-router-dom";

const Postpaid = () => {
    const [providers, setProviders] = useState([]);
    
      
        useEffect(() => {
          // Get the service_id from the URL
          const urlParams = new URLSearchParams(window.location.search);
          const service_id = urlParams.get("service_id");
      
          // Retrieve data from sessionStorage using the service_id
          const storedData = sessionStorage.getItem(`providers_${service_id}`);
      
          if (storedData) {
            setProviders(JSON.parse(storedData));
          } else {
            console.error("No data found for this service ID in sessionStorage.");
          }
        }, []);

  return (
    <div className="postpaidOuterMost">
      <div className="postpaidOut">
        <div className="dashboardBtn button mt-3 px-5">
          <button className="dahsboardButton  p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
            <span>
              <Link to={"/retailer-dashboard"}> Dashboard </Link>
              {">"} Mobile Postpaid
            </span>
          </button>
        </div>
        <div className="postpaidInner grid lg:flex gap-5 p-3">
          <div className="postpaidImage bg-white order-2 sm:order-1 lg:w-[60%] p-5 ">
            <img
              className="postpaidImage m-auto"
              src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1738836632/1_3tgHh2aAaBWYbrmp0r34qg_pny2id.png"
              alt="postpaidImage" />
          </div>
          <ProviderForm
            heading={"Mobile Postpaid"}
            label1={"Provider :"}
            providers={providers}
            option1={"Airtel Postpaid"}
            option2={"VI Postpaid"}
            option3={"TATA Postpaid"}
            option4={"BSNL Postpaid"}
            label2={"Mobile Number :"}
            data={"Ex: 9876541230"}
          />
        </div>
      </div>
    </div>
  );
};

export default Postpaid;
