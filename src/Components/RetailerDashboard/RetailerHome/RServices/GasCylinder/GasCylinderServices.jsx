import React, { useEffect, useState } from "react";
import ProviderForm from "../ProviderForm";
import { Link } from "react-router-dom";

const GasCylinder = () => {
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
    <div className="gasCylinderOuterMost">
      <div className="gasCylinderOut">
        <div className="dashboardBtn button mt-3 px-5">
          <button className="dahsboardButton  p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
            <span>
              <Link to={"/retailer-dashboard"}> Dashboard </Link>
              {">"} Gas Cylinder
            </span>
          </button>
        </div>
        <div className="gasCylinderInner grid lg:flex gap-5 p-3">
          <ProviderForm
            heading={"Gas Cylinder"}
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

export default GasCylinder;
