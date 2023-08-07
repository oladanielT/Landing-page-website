import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='max-w-[800px] mt-[96px] mx-auto text-center w-full h-screen text-white'>
        <p className='font-bold text-[#00df9a] uppercase'>Growing with frontend development</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl py-1 font-bold md:py-2 '>Grow with data.</h1>
        <div className='flex justify-center items-center'>
          <p className='text-white font-bold md:text-2xl sm:text-xl py-2'>Fast, flexible financing for</p>
          <Typed className='text-white font-bold md:text-2xl sm:text-xl text pl-2' strings={['BTC', 'BTB', 'SASS']} typeSpeed={120} backSpeed={140} loop/>
        </div>
        <p className='md:text-xl px-1 text-gray-400 font-bold'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platform.</p>
        <button className='bg-[#00df9a] px-2 py-2 mt-4 font-bold sm:text-xl text-md md:text-xl text-black w-[200px] rounded-md active:relative top-1'>Get Stated</button>
      
    </div>
  )
}

export default Hero;