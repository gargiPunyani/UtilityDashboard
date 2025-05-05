import React, { useEffect, useState } from "react";
import ProviderForm from "../ProviderForm";
import { Link } from "react-router-dom";

const FastagService = () => {
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
              {">"} FASTag
            </span>
          </button>
        </div>
        <div className="postpaidInner grid lg:flex gap-5 p-3">
          <ProviderForm
            heading={"Fastag"}
            label1={"Provider:"}
            providers={providers}
            option1={"Gujarat Gas Limited"}
            option2={"Mahanager Gas Limited"}
            option3={"Haryana City Gas- Kapil Chopra Enterprise"}
            option4={"Adani Gas"}
            label2={"Vehicle Number:"}
            data={"Vehicle Number"}
          />
          <div className="postpaidImage bg-white order-2 sm:order-1 lg:w-[60%] p-5 ">
            <img
              className="postpaidImage m-auto"
              src="https://blog.getmyparking.com/wp-content/uploads/2021/10/fastag-based-parking-service-1024x576.jpg"
              alt="postpaidImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastagService;
