import React from 'react'
import Bheader from './Bheader'
import Bcon from './Bcon'

const Best = () => {
  return (
    <div className='container mx-auto relative'>
      <Bheader/>
      <hr className='w-full  bg-red-500 absolute top-10'/>
      <Bcon/>
    </div>
  )
}

export default Best
