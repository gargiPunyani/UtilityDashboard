import React from "react";
import ProviderForm from "../ProviderForm";
import { Link } from "react-router-dom";

const Postpaid = () => {
  return (
    <div className="postpaidOuterMost">
      <div className="postpaidOut">
        <div className="dashboardBtn button mt-3 px-5">
          <button className="dahsboardButton relative p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
            <span>
              <Link to={"/retailer-dashboard"}> Dashboard </Link>
              {">"} Mobile Postpaid
            </span>
          </button>
        </div>
        <div className="postpaidInner flex gap-5 p-3">
          <div className="postpaidImage bg-white w-[60%] p-5 ">
            <img
              className="postpaidImage m-auto"
              src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1738836632/1_3tgHh2aAaBWYbrmp0r34qg_pny2id.png"
              alt="postpaidImage"
            />
          </div>
          <ProviderForm
            heading={"Mobile Postpaid"}
            label1={"Provider :"}
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
