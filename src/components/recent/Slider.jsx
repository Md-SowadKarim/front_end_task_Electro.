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
        spaceBetween={30}
        pagination={{
          clickable: true,
          className: "page",
        }}
        navigation={true}
        modules={[Pagination,Navigation]}
        className="mySwiper ss bg-transparent"
      >
        <SwiperSlide>
          <div >
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
            <div className="  bg-gray-300 py-4 my-2 text-primary-content">
                <div className="p-2">
              <div className=" ">
                <div className=" text-left flex-col">
               <div className="mt-4">
               <p className="text-sm my-2">audio speakers</p>
                  <p className="text-sm">Wireless Audio System Multiroom 360</p>
               </div>
               <div className=" border-2  ">
                    <img className="object-fit-cover h-auto " src={camera} alt="avater" />
                  </div>
                  
                  <h1 className="text-xl my-4"> $ 2,299.00 </h1>
                </div>
              </div>
                </div>
              </div>
              <div className="  bg-gray-300 py-4 my-2 text-primary-content">
                <div className="p-2">
              <div className=" ">
                <div className=" text-left flex-col">
               <div className="mt-4">
               <p className="text-sm my-2">audio speakers</p>
                  <p className="text-sm">Wireless Audio System Multiroom 360</p>
               </div>
               <div className=" border-2  ">
                    <img className="object-fit-cover h-auto " src={camera} alt="avater" />
                  </div>
                  
                  <h1 className="text-xl my-4"> $ 2,299.00 </h1>
                </div>
              </div>
                </div>
              </div>
              <div className="  bg-gray-300 py-4 my-2 text-primary-content">
                <div className="p-2">
              <div className=" ">
                <div className=" text-left flex-col">
               <div className="mt-4">
               <p className="text-sm my-2">audio speakers</p>
                  <p className="text-sm">Wireless Audio System Multiroom 360</p>
               </div>
               <div className=" border-2  ">
                    <img className="object-fit-cover h-auto " src={camera} alt="avater" />
                  </div>
                  
                  <h1 className="text-xl my-4"> $ 2,299.00 </h1>
                </div>
              </div>
                </div>
              </div>
              <div className="  bg-gray-300 py-4 my-2 text-primary-content">
                <div className="p-2">
              <div className=" ">
                <div className=" text-left flex-col">
               <div className="mt-4">
               <p className="text-sm my-2">audio speakers</p>
                  <p className="text-sm">Wireless Audio System Multiroom 360</p>
               </div>
               <div className=" border-2  ">
                    <img className="object-fit-cover h-auto " src={camera} alt="avater" />
                  </div>
                  
                  <h1 className="text-xl my-4"> $ 2,299.00 </h1>
                </div>
              </div>
                </div>
              </div>
              <div className="  bg-gray-300 py-4 my-2 text-primary-content">
                <div className="p-2">
              <div className=" ">
                <div className=" text-left flex-col">
               <div className="mt-4">
               <p className="text-sm my-2">audio speakers</p>
                  <p className="text-sm">Wireless Audio System Multiroom 360</p>
               </div>
               <div className=" border-2  ">
                    <img className="object-fit-cover h-auto " src={camera} alt="avater" />
                  </div>
                  
                  <h1 className="text-xl my-4"> $ 2,299.00 </h1>
                </div>
              </div>
                </div>
              </div>
              <div className="  bg-gray-300 py-4 my-2 text-primary-content">
                <div className="p-2">
              <div className=" ">
                <div className=" text-left flex-col">
               <div className="mt-4">
               <p className="text-sm my-2">audio speakers</p>
                  <p className="text-sm">Wireless Audio System Multiroom 360</p>
               </div>
               <div className=" border-2  ">
                    <img className="object-fit-cover h-auto " src={camera} alt="avater" />
                  </div>
                  
                  <h1 className="text-xl my-4"> $ 2,299.00 </h1>
                </div>
              </div>
                </div>
              </div>
              <div className="  bg-gray-300 py-4 my-2 text-primary-content">
                <div className="p-2">
              <div className=" ">
                <div className=" text-left flex-col">
               <div className="mt-4">
               <p className="text-sm my-2">audio speakers</p>
                  <p className="text-sm">Wireless Audio System Multiroom 360</p>
               </div>
               <div className=" border-2  ">
                    <img className="object-fit-cover h-auto " src={camera} alt="avater" />
                  </div>
                  
                  <h1 className="text-xl my-4"> $ 2,299.00 </h1>
                </div>
              </div>
                </div>
              </div>
              <div className="  bg-gray-300 py-4 my-2 text-primary-content">
                <div className="p-2">
              <div className=" ">
                <div className=" text-left flex-col">
               <div className="mt-4">
               <p className="text-sm my-2">audio speakers</p>
                  <p className="text-sm">Wireless Audio System Multiroom 360</p>
               </div>
               <div className=" border-2  ">
                    <img className="object-fit-cover h-auto " src={camera} alt="avater" />
                  </div>
                  
                  <h1 className="text-xl my-4"> $ 2,299.00 </h1>
                </div>
              </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
