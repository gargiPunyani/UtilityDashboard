import React from "react";
import { otherServices } from "../../../Components/constant/otherServices";

const OtherServices = () => {
  return (
    <div className="otherServicesOuter bg-blue-100 px-5 py-10">
      <div className="text-center">
        <div className="otherServicesHead text-base sm:text-lg lg:text-2xl xl:text-4xl font-bold text-[#1e40af] my-3 lg:my-3 ">
          <h2>Other Offerings</h2>
        </div>
        <div className="text-xs lg:text-base">
          <p>
            In addition to our core services, we provide a range of
            complementary solutions designed to support and enhance your <br />
            experience. Whether you're looking for advanced customization,
            ongoing support, or strategic consulting, our additional services
            ensure you get the most value from working with us.
            <br /> Explore how we can help you go even further.
          </p>
        </div>
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 gap-1 items-center justify-center my-5 text-center">
          {otherServices.map((item) => {
            return (
              <div
                className="transition-transform duration-300 hover:scale-110"
                key={item.id}
              >
                <div className="h-24 w-24 lg:h-44 lg:w-44  m-auto rounded-full bg-blue-400">
                  <img
                    className="rounded-full p-2 "
                    src={item.image}
                    alt="services"
                  />
                </div>
                <div className="text-xs sm:text-sm lg:text-base my-2 font-semibold">
                  <p>{item.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OtherServices;
