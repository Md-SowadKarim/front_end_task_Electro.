import React, { useEffect } from 'react'
import noodles from "../../../public/noodles.png"
import camera from "../../../public/camera.png"
import Aos from 'aos'
import 'aos/dist/aos.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

const Slider = () => {
  useEffect(()=>{
    Aos.init({
      duration:2000
    });
  })
  return (
    <div>
      <Swiper
      
        spaceBetween={30}
        pagination={{
          clickable: true,
          className: "page",
        }}
        modules={[Pagination]}
        className="mySwiper ss bg-transparent"
      >
        <SwiperSlide className='border-red-500 border-2'>
            <div className='flex items-center lg:h-[350px] justify-around  w-[90%] mx-auto'>
                <div data-aos="fade-up-right" className='w-[50%]  text-sm text-white'>
                    <h1 className='lg:text-5xl  pt-6'>THE NEW <br></br> STANDARD</h1>
                    <p>UNDER FABORABLE SMART-WATCHS</p>
                    <p>From</p>
                    <h1 className='text-red-500'>$ 779</h1>
                    <button className='btn btn-primary bg-yellow-500' >Start Buying</button>
                </div>
                <div className='w-[50%] lg:w-[35%]  flex items-center  '>
                  <div className='  border-green-500 '>
                  <img data-aos="fade-up" className='object-cover ' src={camera} alt="avater" />
                  </div>
                   
                </div>
                <div></div>
            </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
    
      </Swiper>
    
   


    </div>
  )
}

export default Slider
