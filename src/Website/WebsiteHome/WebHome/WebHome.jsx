import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../../style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const WebHome = () => {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="h-[50vh] md:h-[85vh] w-full bg-cover bg-center relative  "
            style={{
              backgroundImage:
                "url(' https://res.cloudinary.com/dixfg1bvv/image/upload/v1746690865/1_hsiaou.png')",
              objectFit: "contain",
            }}
          >
            <div className="absolute w-full text-white text-center sm:text-right sm:right-20 top-[40%] xl:top-1/3 italic ">
              <p className="text-2xl xl:text-3xl xl:leading-[3.8rem] font-semibold ">
                Your Local Business,
              </p>
              <p className="text-2xl xl:text-3xl xl:leading-[3.8rem] font-semibold">
                Our Digital Expertise only at
              </p>
              <p className="text-2xl xl:text-5xl xl:leading-[3.8rem] font-bold text-blue-600">
                Webwise Studio
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[50vh] md:h-[85vh] w-full bg-cover bg-center relative"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dixfg1bvv/image/upload/v1746696377/3_uvyhq0.png')",
            }}
          >
            <div className="absolute w-full text-white text-center sm:text-right sm:right-20 top-[40%] xl:top-1/3 italic ">
              <p className="text-2xl xl:text-3xl xl:leading-[3.8rem] font-semibold ">
                Baniye Atamnirbhar,
              </p>
              <span className="text-2xl xl:text-5xl xl:leading-[3.8rem] font-bold text-blue-600">
                Webwise Studio{" "}
              </span>
              <span className="text-2xl xl:text-3xl xl:leading-[3.8rem] font-semibold">
                ke Sung
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[50vh] md:h-[85vh] w-full bg-cover bg-center relative"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dixfg1bvv/image/upload/v1746696376/2_qworqm.png')",
              objectFit: "cover",
            }}
          >
            <div className="absolute w-full text-white text-center sm:text-right sm:right-20 top-[40%] xl:top-1/3 italic">
              <p className="text-2xl xl:text-3xl xl:leading-[3.8rem] font-semibold ">
                More Opportunities, More
              </p>
              <p className="text-2xl xl:text-3xl xl:leading-[3.8rem] font-semibold">
                Earnings only at
              </p>
              <p className="text-2xl xl:text-5xl xl:leading-[3.8rem] font-bold text-blue-600">
                Webwise Studio
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default WebHome;
