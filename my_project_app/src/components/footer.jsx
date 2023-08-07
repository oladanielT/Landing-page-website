import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillDribbbleSquare } from 'react-icons/ai';

function Footer(){


    return(
        <div className='w-full'>
            <div className='max-w-[1240px] py-16 px-4 mx-auto grid md:grid-cols-3 text-white gap-5'>
                <div className='flex flex-col w-full justify-center items-center col-span-1'>
                    <h1 className='text-3xl w-full mb-4 text-[#00df9a] font-bold'>REACT.</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, quos nesciunt magni hic quae autem eligendi fuga esse cupiditate
                        Vitae, eius nihil labore sit accusamus inventore iure cupiditate eligendi nisi, in dignissimos sapiente expedita ab deleniti.
                    </p>
                    <div className=' w-full flex items-center my-6'>
                    <AiFillFacebook size={30} className='mr-5 '/>
                    <AiFillInstagram size={30} className='mr-5 '/>
                    <AiFillTwitterSquare size={30} className='mr-5 '/>
                    <AiFillDribbbleSquare size={30} className='mr-5 '/>
                    </div>
 
                </div>
                <div className='w-full col-span-2'>
                    <div className='w-full grid grid-cols-4 gap-8'>
                        <div>
                        <h5 className='font-bold text-gray-600'>Solutions</h5>
                            <ul>
                                <li className='py-2  cursor-pointer'>Analytics</li>
                                <li className='py-2  cursor-pointer'>Marketing</li>
                                <li className='py-2  cursor-pointer'>Commerce</li>
                                <li className='py-2  cursor-pointer'>Insights</li>
                            </ul>
                        </div>
                        <div>
                        <h5 className='font-bold text-gray-600'>Supports</h5>
                            <ul>
                                <li className='py-2  cursor-pointer'>Pricing</li>
                                <li className='py-2  cursor-pointer'>Documentation</li>
                                <li className='py-2  cursor-pointer'>Guides</li>
                                <li className='py-2  cursor-pointer'>Api Status</li>
                            </ul>    
                        </div>
                        <div>
                        <h5 className='font-bold text-gray-600'>Company</h5>
                        <ul>
                            <li className='py-2  cursor-pointer'>About</li>
                            <li className='py-2  cursor-pointer'>Blog</li>
                            <li className='py-2  cursor-pointer'>Jobs</li>
                            <li className='py-2  cursor-pointer'>Press</li>
                            <li className='py-2  cursor-pointer'>Partners</li>
                        </ul>
                        </div>
                        <div>
                            <h5 className='font-bold text-gray-600'>Legal</h5>
                            <ul>
                                <li className='py-2 '>Claims</li>
                                <li className='py-2 '>Policy</li>
                                <li className='py-2 '>Terms</li>
                                <li className='py-2 '>Insights</li>

                            </ul>
                        </div>
                      

                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}



export default Footer;