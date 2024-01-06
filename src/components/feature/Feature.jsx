import React from 'react'
import Fleft from './Fleft'
import Fright from './Fright'

const Feature = () => {
  return (
    <div className='md:flex gap-3 container mx-auto my-4'>
      <div className='md:w-[35%] border-2 border-yellow-500 rounded-2xl'>
        <Fleft/>
      </div>
      <div className='md:w-[65%] '>
        <Fright/>
      </div>
    </div>
  )
}

export default Feature
