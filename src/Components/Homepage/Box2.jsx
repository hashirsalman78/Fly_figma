import React from 'react'
import { FaRegCircle } from 'react-icons/fa6';
import { MdLuggage } from 'react-icons/md';
import { Icon } from '@iconify/react';

const Box2 = () => {
  return (
    <div className='pt-4'>
         <div className= '  m-2 ml-6 p-8 h-[363px] w-[944px] bg-[#FFFFFF]   shadow-2xl border rounded-[8px] '>
            <div>
          <div className="text-[23.16px] text-[#283646] font-poppins font-semibold">
            Baggage
          </div>
          <div>
            <img className="h-[3px] w-[81px] pl-2" src="/border.png" alt="" />
          </div>
        </div>
        <div className='flex gap-8 pt-6'>
            <div className='h-[217px] w-[195px] border-[#333f4d] mt-2 border rounded-[15px]'>
                <div className='flex flex-col justify-center items-center mt-6'>
                <div>
                <MdLuggage className='h-[51px] w-[51px]'  />
                </div>
                <div>
                    <h2 className='text-[23.16px] font-poppins font-medium text-[#000000] pt-3'>2 Quantity</h2>
                    <p className='text-[23.16px] font-poppins font-medium text-[#000000] pl-4 ' >  $255.00</p>
                </div>
                <div>
                    <FaRegCircle className='h-[34px] w-[34px] text-[#666f79] mt-2 ' />
                </div>
                </div>
            </div>
             <div className='h-[217px] w-[195px] border-[#333f4d] mt-2 border rounded-[15px]'>
                <div className='flex flex-col justify-center items-center mt-6'>
                <div>
                <MdLuggage className='h-[51px] w-[51px]'  />
                </div>
                <div>
                    <h2 className='text-[23.16px] font-poppins font-medium text-[#000000] pt-3'>1 Quantity</h2>
                    <p className='text-[23.16px] font-poppins font-medium text-[#000000] pl-4 ' >  $155.00</p>
                </div>
                <div>
                    <FaRegCircle className='h-[34px] w-[34px] text-[#666f79] mt-2 ' />
                </div>
                </div>
            </div>
        </div>
        </div>
        <div className='pt-4'>
         <div className= '   m-2  ml-6 p-8 h-[363px] w-[944px] bg-[#FFFFFF]   shadow-2xl border rounded-[8px] '>
            <div>
          <div className="text-[23.16px] text-[#283646] font-poppins font-semibold">
           Insurance
          </div>
          <div className=''>
            <img className="h-[3px] w-[81px] pl-2" src="/border.png" alt="" />
          </div>
        </div>
        <div className='flex gap-8 pt-9'>
            <div className='h-[177px] w-[195px] bg-[#C3A465] border-[#333f4d] mt-2 border rounded-[15px]'>
                <div className='flex flex-col justify-center items-center mt-10 '>
             <Icon icon="streamline:insurance-hand-solid" className='h-[54px] w-[52px] text-white' />
                </div>
                <div className='flex justify-center items-center '><p className='text-[23px] font-poppins font-medium text-white'>No Insurance</p></div>
            </div>
             <div className='h-[177px] w-[195px] bg-white border-[#333f4d] mt-2 border rounded-[15px]'>
                <div className='flex flex-col justify-center items-center mt-8 '>
             <Icon icon="streamline:insurance-hand-solid" className='h-[54px] w-[52px] text-black' />
                </div>
                <div className='flex justify-center items-center '><p className='text-[23px] font-poppins font-medium text-black'>No Insurance</p></div>
                <div className='flex justify-center items-center '><p className='text-[23px] font-poppins font-medium text-black'>300$</p></div>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Box2;