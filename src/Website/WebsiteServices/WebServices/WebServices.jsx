import React from "react";

const WebServices = () => {
  return (
    <div>
      <div className="text-center bg-white">
        <div
          className="webAboutInner h-[75vh] w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dixfg1bvv/image/upload/v1746687946/5_qcp2md.png')",
            objectFit: "contain",
          }}
        ></div>
        <div>
          <div className=" px-5 py-10">
            <div className=" text-lg">
              <h5>
                Let's Talk About
                <br /> <span className="text-blue-500">Services</span>
              </h5>
            </div>
            <div className="text-4xl font-bold text-[#1e40af] my-5 ">
              <h2>
                All Services, One Place - Lower Overheads, <br />
                Higher Returns
              </h2>
            </div>
            <div className="text-base">
              <p>
                Deliver multiple services, streamline operations, and grow
                revenue - <br />
                all from a single, easy-to-use platform. In addition to our core
                services, we provide a range of complementary solutions designed{" "}
                <br />
                to support and enhance your experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebServices;
