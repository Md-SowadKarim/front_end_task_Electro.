import React from 'react'
import Hleft from './Hleft'
import Hslider from './Hslider'
import HeroMenu from './HeroMenu'
import Slider from './Slider'

const Hero = () => {
  return (
    <div>
    <div className='flex justify-between gap-2 container mx-auto'>
        <div className='hidden lg:flex  lg:w-[30%] border-2 bg-yellow-500 py-2 rounded-t-xl '>
        <Hleft/>
        </div>
        <div className='w-full lg:w-[80%] border-2 '>
        <Hslider/>
        </div>
    </div>

    <div className=''>
    <div className="relative h-[220px] sm:h-[300px] md:h-[350px] lg:h-[340px]" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-90"></div>
  <div className=" top-0 absolute w-full">
  <div className='flex w-full justify-between gap-2 container mx-auto'>
        <div className='hidden lg:flex  lg:w-[30%] border-2 bg-white py-2 px-2  '>
        <HeroMenu/>
        </div>
        <div className='w-full lg:w-[80%]  '>
        <Slider/>
        </div>
    </div>
  </div>
</div>
    </div>


    </div>
  )
}

export default Hero
