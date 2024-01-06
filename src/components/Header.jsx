import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FaTruck } from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";
import { CiUser } from "react-icons/ci";

const Header = () => {
  return (
    <div className='container mx-auto py-3 '>
     <div className='hidden lg:flex justify-between '>
     <p className='dark:text-white'>Welcome to Worldwide Electronics Store</p>
     <div className='flex items-center gap-2'>
      <CiLocationOn className='dark:text-white'/>
      <p className='dark:text-white border-r-2 px-2 border-yellow-500'>Store Locator</p>
      <FaTruck className='dark:text-white'/>
      <p className='dark:text-white border-r-2 px-2 border-yellow-500'>Track Your Order</p>
      <RiShoppingBagLine/>
      <p className='dark:text-white border-r-2 px-2 border-yellow-500'>Shop</p>
      <CiUser className='dark:text-white'/>
      <p className='dark:text-white'>My Account </p>
     </div>
     </div>
    </div>
  )
}

export default Header
