import React from 'react'

const Card = ({data}) => {
  return (
    <div>
           <div className={`w-full bg-gray-${data.cg} flex flex-col justify-center items-center p-4 shadow-xl rounded-xl hover:scale-105 duration-300 my-4`}>
                <img src={data.icon} className={`w-20 mx-auto mt-[-3rem] bg-transparent`} alt="" />
                <h1 className='font-bold  mt-5 py-2 text-xl md:text-2xl'>{data.title}</h1>
                <p className='font-bold md:text-4xl py-2 text-3xl my-2'>${data.price}</p>
               
                <div className=' w-full my-6'>
                    <p className='py-4 text-center border-b border-t border-b-gray-300'>{data.storage} GB Storage</p>
                    <p className='py-4 text-center border-b border-b-gray-300'>{data.allow} User Allowed</p>
                    <p className='py-4 text-center border-b border-b-gray-300'>Send up to {data.canSend}GB</p>
                </div>
              
              
                <button className={`py-2 w-[200px] bg-[${data.bg}] text-[${data.color}] font-bold rounded-xl active:relative top-1 my-3`}>Start Trial</button>
            </div>
    </div>
  )
}

export default Card