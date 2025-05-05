import React, { useEffect, useState } from "react";
import ProviderForm from "../ProviderForm";
import { Link } from "react-router-dom";

const Insurance = () => {
  const [providers, setProviders] = useState([]);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryId = urlParams.get("category_id");

    if (!categoryId) {
      console.error("No category_id found in URL.");
      return;
    }

    const storedData = sessionStorage.getItem(`providers_${categoryId}`);

    if (storedData) {
      try {
        setProviders(JSON.parse(storedData));
      } catch (error) {
        console.error("Failed to parse stored data:", error);
      }
    } else {
      console.error(
        `No data found in sessionStorage for key providers_${categoryId}`
      );
    }
  }, []);

  return (
    <div className="postpaidOuterMost">
      <div className="postpaidOut">
        <div className="dashboardBtn button mt-3 px-5">
          <button className="dahsboardButton  p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
            <span>
              <Link to={"/retailer-dashboard"}> Dashboard </Link>
              {">"} Insurance
            </span>
          </button>
        </div>
        <div className="postpaidInner grid lg:flex gap-5 p-3">
          <ProviderForm
            heading={"Insurance"}
            label1={"Provider:"}
            providers={providers}
            option1={"LIC"}
            option2={"Reliance General Insurance Company LTD"}
            option3={"Aviva Life Insurance"}
            option4={"Bajaj Alinaz Life Insurance Company Limited"}
            label2={"Email Id:"}
            data={"john134@gmail.com"}
          />
          <div className="postpaidImage bg-white order-2 sm:order-1 lg:w-[60%] p-5 ">
            <img
              className="postpaidImage m-auto"
              src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1746077137/insurance-clipart-personal-health-life-insurance-icon-png--m2i8G6d3N4i8Z5m2_qqrsnr.png"
              alt="postpaidImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
