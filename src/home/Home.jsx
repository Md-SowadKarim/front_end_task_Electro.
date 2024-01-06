import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Search from '../components/Search'
import Hero from '../components/hero/Hero'
import Add from '../components/Add'
import Togol from '../components/Togol'
import Feature from '../components/feature/Feature'
import Best from '../components/best/Best'
import Seller from '../components/seller/Seller'
import Recent from '../components/recent/Recent'
import Brand from '../components/brand/Brand'
import Shop from '../components/shop/Shop'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div className='relative bg-gray-100 dark:bg-gray-900'>
        <div className='absolute hidden lg:flex  left-6 top-[350px] z-10  '>
        <Togol/>
        </div>
   
      <Header/>
      <hr className=' bg-red-300' />
      <Nav/>
      <Hero/>
      <Add/>
      <Feature/>
      <Best/>
      <Seller/>
      <Recent/>
      <Brand/>
      <Shop/>
      <Footer/>
      
    
    </div>
  )
}

export default Home
