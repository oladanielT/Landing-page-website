import React from 'react'
import Laptop from '../asset/laptop.jpg'


function Analytics(){
  return (
    <div className='w-full bg-white py-16 px-2'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-2' src={Laptop} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold sm:text-xl md:text-2xl'>Data Analytic Dashboard</p>
                <h1 className='bg-gray-300 max-w-[] font-bold text-xl my-2'>Manage Data Analytic Centrally</h1>
                <p className=''>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut maxime perferendis explicabo impedit dicta non, distinctio odio quia nisi! Nobis pariatur ipsam alias, itaque voluptatibus sapiente cumque deleniti nam? Praesentium.
                    Consequat
                </p>
                <button className='bg-[#000300] px-2 py-2 mt-6 font-bold sm:text-xl text-md mx-auto md:mx-0 md:text-xl text-[#00df9a] w-[200px] rounded-md active:relative top-1'>Get Stated</button>
            </div>

        </div>

    </div>
  )
}

export default Analytics