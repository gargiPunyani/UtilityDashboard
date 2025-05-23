import React from "react";
import { ourPartners } from "../../../Components/constant/OurPartners";

const Partners = () => {
  return (
    <div>
      <div className="partnerOuter bg-white px-5 py-10">
        <div className="partnersInner text-center font-bold text-4xl my-5">
          <h2>Our Partners</h2>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 items-center justify-center">
          {ourPartners.map((item) => {
            return (
              <div key={item.id}>
                <div className="shadow-xl rounded-lg bg-white-200 ">
                  <img src={item.image} alt="our-partners" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Partners;
