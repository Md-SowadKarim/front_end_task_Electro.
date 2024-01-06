import React from 'react'
import Hseller from './Hseller'
import Sseller from './Sseller'

const Seller = () => {
  return (
    <div className='container mx-auto relative py-6 dark:text-white'>
      <Hseller/>
      <hr className='h top-16 absolute w-full bg-yellow-500 '/>
      <Sseller/>
    </div>
  )
}

export default Seller
