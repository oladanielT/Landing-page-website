import React, {useState} from 'react';
import NavData from '../NavData'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

function Navbar(){

    const [menu, setMenu] = useState(false);
  return (
    <div className='text-white flex justify-between items-center h-20 px-4 max-w-[1240px] mx-auto '>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] '>REACT.</h1>
        <ul className='hidden md:flex cursor-pointer'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>

        <div className='block md:hidden'>
            <AiOutlineMenu onClick={()=>setMenu(true)} className={menu?'hidden':'block'} size={25}/>
            <AiOutlineClose onClick={()=>setMenu(false)} className={menu?'block':'hidden'} size={25}/>
        </div>

        <div className={`fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900  bg-[#000300] pl-5 ${menu?'block':'left-[-100%]'} ease-in-out transition-all duration-300`}>
        <h1 className='text-3xl w-full m-4 text-[#00df9a] font-bold'>REACT.</h1>

        <ul className='uppercase p-4 cursor-pointer'>
            {NavData.map((navdata,index)=>(
                <li className={` p-4 border-b border-gray-600 flex items-center gap-2 active:bg-[#00df9a]`}>{navdata.icon} {navdata.title}</li>
                
            ))}
          
{/*             
            <li className='p-4 border-b border-gray-600 '>Company</li>
            <li className='p-4 border-b border-gray-600 '>Resources</li>
            <li className='p-4 border-b border-gray-600 '>About</li>
            <li className='p-4'>Contact</li> */}
        </ul>
        </div>
       
    </div>
  )
}

export default Navbar