import React from "react";
import noodles from "../../../public/noodles.png";
import camera from "../../../public/camera.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

import "./styles.css";

// import required modules
import { Pagination,Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div>
      <Swiper
       slidesPerView={8}
       breakpoints={{
        375: {
          slidesPerView: 2,
          spaceBetween: 60,
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 60,
        },
        768: {
          slidesPerView: 6,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 8,
          spaceBetween: 50,
        },
      }}
        spaceBetween={100}
    
        navigation={{
          clickable:true,
          className:"navi"
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper ss bg-transparent"
      >
        <SwiperSlide>
          <div >
          <img className="object-fit-cover h-auto " src={camera} alt="avater" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div >
          <img className="object-fit-cover h-auto " src={camera} alt="avater" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div >
          <img className="object-fit-cover h-auto " src={camera} alt="avater" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div >
          <img className="object-fit-cover h-auto " src={camera} alt="avater" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div >
          <img className="object-fit-cover h-auto " src={camera} alt="avater" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div >
          <img className="object-fit-cover h-auto " src={camera} alt="avater" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div >
          <img className="object-fit-cover h-auto " src={camera} alt="avater" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div >
          <img className="object-fit-cover h-auto " src={camera} alt="avater" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div >
          <img className="object-fit-cover h-auto " src={camera} alt="avater" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div >
          <img className="object-fit-cover h-auto " src={camera} alt="avater" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div >
          <img className="object-fit-cover h-auto " src={camera} alt="avater" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
