import React from 'react'
import camera from "../../../public/camera.png"

const Fleft = () => {
  return (
    <div className='p-2 flex flex-col'>
      <h1 className='text-2xl dark:text-white'>Special Offer</h1>
      <div className='w-[80%] mx-auto my-2'>
        <img className='object-cover' src={camera} alt="avater" />
      </div>
        <p className='dark:text-white text-center'>Game Console Controller + USB 3.0 Cable</p>
        <h1 className='text-2xl text-center dark:text-white'>$ 99.00</h1>
        <div className='flex justify-between p-2 flex-grow'>
            <p className='dark:text-white'>Already Sold : 60</p>
            <p className='dark:text-white'>Available : 40</p>
        </div>
        <progress className="progress  w-[80%] mx-auto text-center flex justify-center my-4  progress-success h-4 bg-yellow-500" value="75" max="100"></progress>
    </div>
  )
}

export default Fleft
