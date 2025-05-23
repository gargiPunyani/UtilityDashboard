import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../../style.css";

// import required modules
import { Autoplay } from "swiper/modules";
import { servicesHighlight } from "../../../Components/constant/servicesHighlights";
const ServiceSwiper = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {servicesHighlight.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="h-[60vh] lg:h-[50vh] p-3 ">
                <div className="flex justify-center">{item.icon}</div>
                <div className="my-1 font-semibold italic md:text-base  ">
                  <h4>{item.head}</h4>
                </div>
                <div className="text-wrap text-xs md:text-base" >
                  <p>{item.details}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
export default ServiceSwiper;
