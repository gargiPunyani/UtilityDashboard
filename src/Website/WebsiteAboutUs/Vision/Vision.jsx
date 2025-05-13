import React from "react";
import { ourVision } from "../../../Components/constant/OurVision";

const Vision = () => {
  return (
    <div className="visionOuter bg-blue-100 px-5 py-10">
      <div className="visionInner text-center ">
        <div className="text-4xl font-bold text-[#1e40af]">
          <h2>Our Vision</h2>
        </div>
        <div className="px-48 my-5 leading-7 text-justify">
          <p>
            At <b>Webwise Studio</b>, our vision is to empower every retail
            outlet across India to become a gateway to digital financial
            inclusion. We aspire to bridge the gap between technology and
            accessibility by transforming local businesses into smart digital
            service hubs that offer essential financial and utility services to
            their communities.
          </p>
        </div>
        <div className="grid grid-cols-6">
          {ourVision.map((item) => {
            return (
              <div key={item.id}>
                <div className="rounded-full h-44 w-44 m-auto">
                  <img
                    className="rounded-full p-2 "
                    src={item.image}
                    alt="services"
                  />
                </div>
                <div className="text-base my-2 font-semibold">
                  <p>{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Vision;
