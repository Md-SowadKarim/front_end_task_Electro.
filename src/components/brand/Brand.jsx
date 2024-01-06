 import React from 'react'
import Slider from './Slider'

const Brand = () => {
  return (
    <div className='container mx-auto my-6 mb-4 dark:text-white relative'>
        <div className=' md:w-[15%] w-[30%] border-b-4 border-b-yellow-500 px-2'>Brand Store</div>
        <hr className='h top-7 absolute w-full bg-yellow-500 '/>
    <Slider/>
    </div>
  )
}

export default Brand
