import React from "react";
import ServiceSwiper from "./ServiceSwiper";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ServicesHighlights = () => {
  return (
    <div className="servicesHighlightsOuter bg-blue-100 px-5 py-10">
      <div className="text-center">
        <div className="servicesHighlight  text-2xl">
          <h3>
            <p className="text-slate-600">Let's Talk About</p>
            <p className="text-blue-600 ">Services</p>
          </h3>
        </div>
        <div className="text-5xl font-bold my-10 text-[#1e40af]">
          <h2>
            All Services, One Place - Lower Overheads,
            <br /> Higher Returns
          </h2>
        </div>
        <div className="text-base">
          <p>
            Deliver multiple services, streamline operations, and grow revenue -
            <br />
            all from a single, easy-to-use platform.
          </p>
        </div>
        <div className="my-10 text-base text-blue-600 cursor-pointer underline underline-offset-2 ">
          <Link to={"/services"}>
            <p> 
              <span>
              VIEW SERVICES 
              </span> 
              <span> <FontAwesomeIcon icon={faAngleRight}/>
               </span>
            </p>
          </Link>
        </div>
        <ServiceSwiper />
      </div>
    </div>
  );
};

export default ServicesHighlights;
