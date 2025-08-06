import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Icon } from '@iconify/react';

const Details = () => {
  return (
    <div className='pt-4' >
         <div className= ' flex items-center justify-center  m-2 ml-16 p-8 h-[600px] w-[1385px] bg-[#FFFFFF]   shadow-2xl border rounded-[8px] '>
            <div className=' pt-4 h-[560px] w-[1300px] bg-[#C3A465]  border rounded-[8px]'>
                <div className='flex gap-[100px] mt-10 justify-center items-center'>
                    <div className='flex flex-col '>
                        <label className='text-[21.16px] font-poppins font-medium text-white'>First Name</label>
                        <input type="text" className='h-[59px] w-[331px] bg-white rounded-xl' />
                    </div>
                    <div className='flex flex-col '>
                        <label className='text-[21.16px] font-poppins font-medium text-white'>Last Name</label>
                        <input type="text" className='h-[59px] w-[331px] bg-white rounded-xl' />
                    </div>
                    <div className='flex flex-col '>
                        <label className='text-[21.16px] font-poppins font-medium text-white'>Email</label>
                        <input type="text" className='h-[59px] w-[331px] bg-white rounded-xl' />
                    </div>
                </div>
                {/* second */}
                <div className='flex gap-[100px] mt-16 justify-center items-center'>
                    <div className='flex flex-col '>
                        <label className='text-[21.16px] font-poppins font-medium text-white'>Date of Birth</label>
                        <div className='h-[59px] w-[331px] bg-white rounded-xl' >
                            <div className='flex justify-end items-center pt-2 pr-2'>
                                <div className='h-[45px] w-[45px] bg-[#C3A465] rounded-lg flex justify-center items-center'>
                             <Icon icon="formkit:date" className="text-[32px] text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <label className='text-[21.16px] font-poppins font-medium text-white'>Phone</label>
                        <input type="text" className='h-[59px] w-[331px] bg-white rounded-xl' />
                    </div>
                    <div className='flex flex-col '>
                        <label className='text-[21.16px] font-poppins font-medium text-white'>Nationality</label>
                        <div className='h-[59px] w-[331px] bg-white rounded-xl' >
                            <div className='flex justify-end items-center pt-4 pr-3'>
                            <RiArrowDropDownLine className='h-[26px] w-[26px]' />
                            </div>
                        </div>
                    </div>
                </div>
                {/* third */}
                <div className='flex gap-[100px] mt-16 justify-center items-center'>
                    <div className='flex flex-col '>
                        <label className='text-[21.16px] font-poppins font-medium text-white'>Passport or ID Number</label>
                        <input type="text" className='h-[59px] w-[331px] bg-white rounded-xl' />
                    </div>
                    <div className='flex flex-col '>
                        <label className='text-[21.16px] font-poppins font-medium text-white'>Issuance Date</label>
                        <div className='h-[59px] w-[331px] bg-white rounded-xl' >
                            <div className='flex justify-end items-center pt-2 pr-2'>
                                <div className='h-[45px] w-[45px] bg-[#C3A465] rounded-lg flex justify-center items-center'>
                             <Icon icon="formkit:date" className="text-[32px] text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <label className='text-[21.16px] font-poppins font-medium text-white'>Expiry Date</label>
                         <div className='h-[59px] w-[331px] bg-white rounded-xl' >
                            <div className='flex justify-end items-center pt-2 pr-2'>
                                <div className='h-[45px] w-[45px] bg-[#C3A465] rounded-lg flex justify-center items-center'>
                             <Icon icon="formkit:date" className="text-[32px] text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Details;