import React from 'react'

const Hseller = () => {
  return (
    <div className='sm:flex justify-between my-4 '>
      <div className=' md:w-[15%] w-[30%] border-b-4 border-b-yellow-500 px-2'>Best Seller</div>
      <div className='sm:w-[70%] md:w-[60%] mt-4 sm:mt-0 lg:w-[50%] '>
        <div className='flex gap-4 px-4  items-center justify-between overflow-x-auto'>
            <div className='border-2 rounded-xl border-yellow-500 px-4'><h1>Top_20</h1></div>
            <div><h1>Smartphones_&_Tablets</h1></div>
            <div><h1>Laptop_&_Computers</h1></div>
            <div><h1>Video_Cameras</h1></div>
         
        </div>
      </div>
      
    </div>
  )
}

export default Hseller
