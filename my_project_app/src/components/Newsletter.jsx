import React from 'react'

function Newsletter(){
  return (
    <div className='w-full py-16 px-4 text-white mt-5'> 
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-5'>
            <div className='lg:col-span-2'>
                <h1 className='font-bold text-xl sm:text-2xl md:text-3xl py-2'>Want tips & tricks to optimize your flow?</h1>
                <p>Sign up to our newsletter and stay up to date</p>
            </div>
            <div>
                <div className='flex flex-col sm:flex-row justify-between items-center gap-3'>
                    <input className='flex p-2 text-xl text-gray-600 rounded-md w-full' placeholder='Enter email' type="email" name="" id="" />
                    <button className='bg-[#00df9a] py-2 ml -3 font-medium md:text-xl text-black w-[150px] rounded-md active:relative top-1'>Notify me</button>
                </div>
                <p className='text-sm mt-2'>We care about the protection of your data. Read our 
                    <a className='text-[#00df9a] underline px-2' href="#">Privacy Policy</a>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter