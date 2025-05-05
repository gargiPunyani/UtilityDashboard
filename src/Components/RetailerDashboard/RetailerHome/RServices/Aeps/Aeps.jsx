import React, { useEffect, useState } from "react";
import ProviderForm from "../ProviderForm";
import { Link } from "react-router-dom";

const Aeps = () => {
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
    <div className="gasCylinderOuterMost">
      <div className="gasCylinderOut">
        <div className="dashboardBtn button mt-3 px-5">
          <button className="dahsboardButton  p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
            <span>
              <Link to={"/retailer-dashboard"}> Dashboard </Link>
              {">"} Aeps
            </span>
          </button>
        </div>
        <div className="gasCylinderInner grid lg:flex gap-5 p-3">
          <ProviderForm
            heading={"Aeps"}
            label1={"Provider:"}
            providers={providers}
            option1={"Bharat Gas (BPCL)"}
            option2={"Indane Gas (Indian Oil)"}
            option3={"HP Gas (HPCL)"}
            // option4={"Adani Gas"}
            label2={"Customer Id:"}
            data={"Customer Id"}
          />
          <div className="gasCylinderImage bg-white order-2 sm:order-1 lg:w-[60%] p-5 m-auto">
            <img
              className="gasCylinderImage m-auto"
              src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1746081849/772b4b304a016665_6637_shav6d.jpg"
              alt="gasCylinderImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aeps;
