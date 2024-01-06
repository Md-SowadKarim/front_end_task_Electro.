import React from 'react'
import camera from "../../public/camera.png"

const Add = () => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 justify-around container mx-auto my-8'>
        <div className='flex h-[250px] p-2 gap-2 bg-gray-100 dark:bg-gray-600 items-center justify-between  rounded-xl mt-4'>
            <div className=''>
            <img className='object-cover  h-[150px] w-[200px] ' src={camera} alt="avater" />
            </div>
          
            <div className='flex-1'>
                <h1 className='text-xl'>CATCH BIG <br/> DEALS ON THE CAMERAS</h1>
                <button className='btn btn-primary bg-yellow-500'>Shop Now</button>
            </div>

        </div>
        <div className='flex h-[250px] p-2 gap-2 bg-gray-100 dark:bg-gray-600 items-center justify-between  rounded-xl mt-4'>
            <div className=''>
            <img className='object-cover  h-[150px] w-[200px] ' src={camera} alt="avater" />
            </div>
          
            <div className='flex-1'>
                <h1 className='text-xl'>CATCH BIG <br/> DEALS ON THE CAMERAS</h1>
                <button className='btn btn-primary bg-yellow-500'>Shop Now</button>
            </div>

        </div>
        <div className='flex h-[250px] p-2 gap-2 bg-gray-100 dark:bg-gray-600 items-center justify-between  rounded-xl mt-4'>
            <div className=''>
            <img className='object-cover  h-[150px] w-[200px] ' src={camera} alt="avater" />
            </div>
          
            <div className='flex-1'>
                <h1 className='text-xl'>CATCH BIG <br/> DEALS ON THE CAMERAS</h1>
                <button className='btn btn-primary bg-yellow-500'>Shop Now</button>
            </div>

        </div>
      
      
    </div>
  )
}

export default Add
