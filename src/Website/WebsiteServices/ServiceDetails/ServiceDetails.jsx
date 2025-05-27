import React from "react";
import { serviceDetails } from "../../../Components/constant/ServicesDetails";

const ServiceDetails = () => {
  return (
    <div className="serviceDetailsOuter whitespace-pre-line">
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
                className="serviceDetailsOuter whitespace-pre-line"
                key={item.id}
              >
                <div className="serviceDetailsInner">
                  <div className="serviceSection">
                    <div className={`${bgColorClass}`}>
                      <div
                        className={`grid lg:grid-cols-2 items-center justify-center py-7 px-7 sm:px-14 max-w-screen-2xl mx-auto 3xl:px-4`}
                      >
                        <div
                          className={`m-auto transition-transform duration-300 h-[30vh] md:h-[50vh] lg:h-[60vh] hover:scale-110 lg:${iconOrderClass}`}
                        >
                          {item.icon}
                        </div>
                        <div className={`${textOrderClass}`}>
                          <div className="serviceHeading">
                            <div className="text-blue-700 text-lg lg:text-3xl font-semibold">
                              <h3>{item.head}</h3>
                            </div>
                            <div className="text-xs lg:text-base italic">
                              <h5>{item.subHead}</h5>
                            </div>
                          </div>
                          <div className="serviceDetails my-2 sm:my-5 text-[10px] sm:text-xs leading-5 sm:leading-6">
                            <p>{item.para1}</p>
                            <p>{item.para2}</p>
                            <p>{item.para3}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* {serviceDetails.map((item) => {
            const isEven = item.id % 2 === 0;
            const bgColorClass = isEven ? "bg-white" : "bg-blue-100";
            const textOrderClass = isEven ? "order-1" : "order-2";
            const iconOrderClass = isEven ? "order-2" : "order-1";

            return (
              <div className="serviceDetailsOuter whitespace-pre-line">
                <div className="serviceDetailsInner">
                  <div className="serviceSection">
                    {serviceDetails.map((item) => {
                      console.log(item.length, "helloooo")
                      const isEven = item.id % 2 === 0;
                      const bgColorClass = isEven ? "bg-white" : "bg-blue-100";
                      const textOrderClass = isEven ? "order-1" : "order-2";
                      const iconOrderClass = isEven ? "order-2" : "order-1";

                      return (
                        <div className={`${bgColorClass}`} key={item.id}>
                          <div
                            className={`grid lg:grid-cols-2 items-center justify-center py-7 px-7 sm:px-14 max-w-screen-2xl mx-auto 3xl:px-4`}
                          >
                            <div
                              className={`m-auto transition-transform duration-300 h-[30vh] md:h-[50vh] lg:h-[60vh] hover:scale-110 lg:${iconOrderClass}`}
                            >
                              {item.icon}
                            </div>
                            <div className={`${textOrderClass}`}>
                              <div className="serviceHeading">
                                <div className="text-blue-700 text-lg lg:text-3xl font-semibold">
                                  <h3>{item.head}</h3>
                                </div>
                                <div className="text-xs lg:text-base italic">
                                  <h5>{item.subHead}</h5>
                                </div>
                              </div>
                              <div className="serviceDetails my-2 sm:my-5 text-[10px] sm:text-xs leading-5 sm:leading-6">
                                <p>{item.para1}</p>
                                <p>{item.para2}</p>
                                <p>{item.para3}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
