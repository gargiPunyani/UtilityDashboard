import React from "react";
import { serviceDetails } from "../../../Components/constant/ServicesDetails";

const ServiceDetails = () => {
  return (
    <div className="serviceDetailsOuter">
      <div className="serviceDetailsInner bg-white">
        <div className="serviceSection">
          {/* {serviceDetails.map((item) => {
            const isEven = item.id % 2 === 0;
            const bgColorClass = isEven ? "bg-white" : "bg-blue-100";

            return (
              <div
                className={`grid grid-cols-2 items-center justify-center p-10 ${bgColorClass}`}
                key={item.id}
              >
                <div className="m-auto">{item.icon}</div>
                <div>
                  <div className="serviceHeading">
                    <div className="text-blue-700 text-lg font-semibold">
                      <h3>{item.head}</h3>
                    </div>
                    <div className="text-base italic">
                      <h5>{item.subHead}</h5>
                    </div>
                  </div>
                  <div className="serviceDetails my-5 text-xs leading-6">
                    <p>{item.para1}</p>
                    <p>{item.para2}</p>
                    <p>{item.para3}</p>
                  </div>
                </div>
              </div>
            );
          })} */}
          {serviceDetails.map((item) => {
            const isEven = item.id % 2 === 0;
            const bgColorClass = isEven ? "bg-white" : "bg-blue-100";
            const textOrderClass = isEven ? "order-1" : "order-2";
            const iconOrderClass = isEven ? "order-2" : "order-1";

            return (
              <div
                className={`grid grid-cols-2 items-center justify-center py-7 px-14  ${bgColorClass}`}
                key={item.id}
              >
                <div className={`m-auto transition-transform duration-300 hover:scale-110 ${iconOrderClass}`}>{item.icon}</div>
                <div className={`${textOrderClass}`}>
                  <div className="serviceHeading">
                    <div className="text-blue-700 text-3xl font-semibold">
                      <h3>{item.head}</h3>
                    </div>
                    <div className="text-base italic">
                      <h5>{item.subHead}</h5>
                    </div>
                  </div>
                  <div className="serviceDetails my-5 text-xs leading-6">
                    <p>{item.para1}</p>
                    <p>{item.para2}</p>
                    <p>{item.para3}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
