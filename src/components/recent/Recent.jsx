import React from 'react'
import Hrecent from './Hrecent'
import Slider from '../brand/Slider'

const Recent = () => {
  return (
    <div className='container mx-auto relative dark:text-white'>
      <Hrecent/>
      <hr className='h top-7 absolute w-full bg-yellow-500 '/>
      <Slider/>
    </div>
  )
}

export default Recent
