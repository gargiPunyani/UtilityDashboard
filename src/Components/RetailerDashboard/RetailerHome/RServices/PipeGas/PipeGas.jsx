import React, { useEffect, useState } from "react";
import ProviderForm from "../ProviderForm";
import { Link } from "react-router-dom";

const PipeGas = () => {
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
              {">"} Pipe Gas
            </span>
          </button>
        </div>
        <div className="postpaidInner grid lg:flex gap-5 p-3">
          <ProviderForm
            heading={"PipeGas"}
            label1={"Provider:"}
            providers={providers}
            option1={"Gujarat Gas Limited"}
            option2={"Mahanager Gas Limited"}
            option3={"Haryana City Gas- Kapil Chopra Enterprise"}
            option4={"Adani Gas"}
            label2={"Customer Id:"}
            data={"Customer Id"}
          />
          <div className="postpaidImage bg-white order-2 sm:order-1 lg:w-[60%] p-5 ">
            <img
              className="postpaidImage m-auto"
              src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1746077489/natural-gas-pipe-with-valve-vector-illustration_xmph0c.jpg"
              alt="postpaidImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PipeGas;
