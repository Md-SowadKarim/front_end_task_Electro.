import React from 'react'
import camera from "../../../public/camera.png"

const Fright = () => {
  return (
    <div className='p-4'>

<div role="tablist" className="tabs tabs-bordered ">
  <input type="radio" name="my_tabs_1" role="tab" className="tab checked:bg-yellow-500 checked:text-black  text-yellow-500 " aria-label="Feature" />
  <div role="tabpanel" className="tab-content p-2 bg-gray-100 dark:bg-gray-900">
    
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-1'>
    <div className="card  bg-gray-300 text-primary-content">
  <div className="card-body">
    <p className="">audio speakers</p>
    <p>Wireless Audio System Multrioom 360</p>
    <div className="">
      <img className='object-cover' src={camera} alt="avater" />
    </div>
    <h1 className='text-xl'> $ 2,299.00 </h1>
  </div>
</div>
<div className="card  bg-gray-300  text-primary-content">
  <div className="card-body">
    <p className="">audio speakers</p>
    <p>Wireless Audio System Multrioom 360</p>
    <div className="">
      <img className='object-cover' src={camera} alt="avater" />
    </div>
    <h1 className='text-xl'> $ 2,299.00 </h1>
  </div>
</div>
<div className="card  bg-gray-300 text-primary-content">
  <div className="card-body">
    <p className="">audio speakers</p>
    <p>Wireless Audio System Multrioom 360</p>
    <div className="">
      <img className='object-cover' src={camera} alt="avater" />
    </div>
    <h1 className='text-xl'> $ 2,299.00 </h1>
  </div>
</div>
<div className="card  bg-gray-300 text-primary-content">
  <div className="card-body">
    <p className="">audio speakers</p>
    <p>Wireless Audio System Multrioom 360</p>
    <div className="">
      <img className='object-cover' src={camera} alt="avater" />
    </div>
    <h1 className='text-xl'> $ 2,299.00 </h1>
  </div>
</div>
<div className="card  bg-gray-300 text-primary-content">
  <div className="card-body">
    <p className="">audio speakers</p>
    <p>Wireless Audio System Multrioom 360</p>
    <div className="">
      <img className='object-cover' src={camera} alt="avater" />
    </div>
    <h1 className='text-xl'> $ 2,299.00 </h1>
  </div>
</div>
<div className="card  bg-gray-300 text-primary-content">
  <div className="card-body">
    <p className="">audio speakers</p>
    <p>Wireless Audio System Multrioom 360</p>
    <div className="">
      <img className='object-cover' src={camera} alt="avater" />
    </div>
    <h1 className='text-xl'> $ 2,299.00 </h1>
  </div>
</div>

    </div>
  </div>

  <input type="radio" name="my_tabs_1" role="tab" className="tab checked:bg-yellow-500  checked:text-black text-yellow-500  " aria-label="On_Sale"  />
  <div role="tabpanel" className="tab-content p-10 bg-gray-100 dark:bg-gray-900">Tab content 2</div>

  <input type="radio" name="my_tabs_1" role="tab" className="tab checked:bg-yellow-500 checked:text-black text-yellow-500" aria-label="Top_Rated" />
  <div role="tabpanel" className="tab-content p-10 bg-gray-100 dark:bg-gray-900">Tab content 3</div>
</div>


    </div>
  )
}

export default Fright
