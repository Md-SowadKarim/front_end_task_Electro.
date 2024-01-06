import React from 'react'
import camera from "../../../public/camera.png"
import First from './First'
import Second from './Second'

const Shop = () => {
  return (
    <div className='container mx-auto dark:text-white'>
     <First/>
     <div className='lg:hidden'>
      <Second/>
     </div>
    
    </div>
  )
}

export default Shop
