import React from 'react'
import { Icon } from '@iconify/react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { MdOutlineChair, MdOutlineRoute } from 'react-icons/md';
import rowline from '/rowline.png'
import rowline2 from '/rowline.png'
import circle from '/circle.png'

const Travelercard = () => {
  return (
    <div>
        <div className='h-[850px] w-[453px] bg-white border shadow-lg rounded-lg mt-4 ml-3 '>
            <div className='pt-2 pl-2'>
                <label className='text-[18.49px] font-poppins font-medium text-[#112211] mt-2 '>Select Traveler</label>
                <div className='h-[60px] w-[407px] mt-4 border-[#666666] border rounded-lg '>
                    <div className='flex items-center justify-center pt-4 gap-[175px]'>
                        <div className='flex  items-center gap-2 '>
                     <Icon icon="mdi:account-multiple-outline" className="text-[32px] text-gray-700" />
                     <p className='text-[16.49px] font-poppins text-[#112211] '>Traveler 1 - ADULT</p>
                        </div>
                     <RiArrowDropDownLine className='h-[26px] w-[26px]' />

                    </div>
                </div>
            </div>
            <div className='pt-2 pl-2'>
                <label className='text-[18.49px] font-poppins font-medium text-[#112211] mt-2 '>Select Route</label>
                <div className='h-[60px] w-[407px] mt-4 border-[#666666] border rounded-lg '>
                    <div className='flex items-center justify-center pt-4 gap-[240px]'>
                        <div className='flex  items-center gap-2 '>
                     <MdOutlineRoute className="text-[32px] text-gray-700" />
                     <p className='text-[16.49px] font-poppins text-[#112211] '>LON to LIS</p>
                        </div>
                     <RiArrowDropDownLine className='h-[26px] w-[26px]' />
                    </div>
                </div>
            </div>
            <div className='flex gap-14'>
                <div className='flex gap-6'>
            <div className='pt-10'>
            <div className='pt-6 pl-8 flex gap-2'>
                <div className='h-[55.17px] w-[61.3px] bg-[#C3A465] flex justify-center items-center rounded-lg '>
                    <MdOutlineChair className='h-[36.78px] w-[36.78px] text-white' />
                </div>
                 <div className='h-[55.17px] w-[61.3px] bg-[#C3A465] flex justify-center items-center rounded-lg '>
                    <MdOutlineChair className='h-[36.78px] w-[36.78px] text-white' />
                </div>
            </div>
              <div className='pt-6 pl-8 flex gap-2'>
                <div className='h-[55.17px] w-[61.3px] bg-[#C3A465] flex justify-center items-center rounded-lg '>
                    <MdOutlineChair className='h-[36.78px] w-[36.78px] text-white' />
                </div>
                 <div className='h-[55.17px] w-[61.3px] bg-[#C3A465] flex justify-center items-center rounded-lg '>
                    <MdOutlineChair className='h-[36.78px] w-[36.78px] text-white' />
                </div>
            </div>
              <div className='pt-6 pl-8 flex gap-2'>
                <div className='h-[55.17px] w-[61.3px] bg-[#C3A465] flex justify-center items-center rounded-lg '>
                    <MdOutlineChair className='h-[36.78px] w-[36.78px] text-white' />
                </div>
                 <div className='h-[55.17px] w-[61.3px] bg-[#C3A465] flex justify-center items-center rounded-lg '>
                    <MdOutlineChair className='h-[36.78px] w-[36.78px] text-white' />
                </div>
            </div>
              <div className='pt-6 pl-8 flex gap-2'>
                <div className='h-[55.17px] w-[61.3px] bg-[#C3A465] flex justify-center items-center rounded-lg '>
                    <MdOutlineChair className='h-[36.78px] w-[36.78px] text-white' />
                </div>
                 <div className='h-[55.17px] w-[61.3px] bg-[#C3A465] flex justify-center items-center rounded-lg '>
                    <MdOutlineChair className='h-[36.78px] w-[36.78px] text-white' />
                </div>
            </div>
              <div className='pt-6 pl-8 flex gap-2'>
                <div className='h-[55.17px] w-[61.3px] bg-[#C3A465] flex justify-center items-center rounded-lg '>
                    <MdOutlineChair className='h-[36.78px] w-[36.78px] text-white' />
                </div>
                 <div className='h-[55.17px] w-[61.3px] bg-[#C3A465] flex justify-center items-center rounded-lg '>
                    <MdOutlineChair className='h-[36.78px] w-[36.78px] text-white' />
                </div>
            </div>
              <div className='pt-6 pl-8 flex gap-2'>
                <div className='h-[55.17px] w-[61.3px] bg-[#C3A465] flex justify-center items-center rounded-lg '>
                    <MdOutlineChair className='h-[36.78px] w-[36.78px] text-white' />
                </div>
                 <div className='h-[55.17px] w-[61.3px] bg-[#C3A465] flex justify-center items-center rounded-lg '>
                    <MdOutlineChair className='h-[36.78px] w-[36.78px] text-white' />
                </div>
            </div>
              <div className='pt-6 pl-8 flex gap-2'>
                <div className='h-[55.17px] w-[61.3px] bg-[#C3A465] flex justify-center items-center rounded-lg '>
                    <MdOutlineChair className='h-[36.78px] w-[36.78px] text-white' />
                </div>
                 <div className='h-[55.17px] w-[61.3px] bg-[#C3A465] flex justify-center items-center rounded-lg '>
                    <MdOutlineChair className='h-[36.78px] w-[36.78px] text-white' />
                </div>
            </div>
            </div>
             <div className='pt-10'>
            <div className='pt-6 pl-8 flex gap-2'>
                <div className='h-[55.17px] w-[61.3px] bg-[#C3A465] flex justify-center items-center rounded-lg '>
                    <MdOutlineChair className='h-[36.78px] w-[36.78px] text-white' />
                </div>
                 <div className='h-[55.17px] w-[61.3px] bg-[#C3A465] flex justify-center items-center rounded-lg '>
                    <MdOutlineChair className='h-[36.78px] w-[36.78px] text-white' />
                </div>
            </div>
              <div className='pt-6 pl-8 flex gap-2'>
                <div className='h-[55.17px] w-[61.3px] bg-[#C3A465] flex justify-center items-center rounded-lg '>
                    <MdOutlineChair className='h-[36.78px] w-[36.78px] text-white' />
                </div>
                 <div className='h-[55.17px] w-[61.3px] bg-[#C3A465] flex justify-center items-center rounded-lg '>
                    <MdOutlineChair className='h-[36.78px] w-[36.78px] text-white' />
                </div>
            </div>
              <div className='pt-6 pl-8 flex gap-2'>
                <div className='h-[55.17px] w-[61.3px] bg-[#C3A465] flex justify-center items-center rounded-lg '>
                    <MdOutlineChair className='h-[36.78px] w-[36.78px] text-white' />
                </div>
                 <div className='h-[55.17px] w-[61.3px] bg-[#C3A465] flex justify-center items-center rounded-lg '>
                    <MdOutlineChair className='h-[36.78px] w-[36.78px] text-white' />
                </div>
            </div>
              <div className='pt-6 pl-8 flex gap-2'>
                <div className='h-[55.17px] w-[61.3px] bg-[#C3A465] flex justify-center items-center rounded-lg '>
                    <MdOutlineChair className='h-[36.78px] w-[36.78px] text-white' />
                </div>
                 <div className='h-[55.17px] w-[61.3px] bg-[#C3A465] flex justify-center items-center rounded-lg '>
                    <MdOutlineChair className='h-[36.78px] w-[36.78px] text-white' />
                </div>
            </div>
              <div className='pt-6 pl-8 flex gap-2'>
                <div className='h-[55.17px] w-[61.3px] bg-[#C3A465] flex justify-center items-center rounded-lg '>
                    <MdOutlineChair className='h-[36.78px] w-[36.78px] text-white' />
                </div>
                 <div className='h-[55.17px] w-[61.3px] bg-[#C3A465] flex justify-center items-center rounded-lg '>
                    <MdOutlineChair className='h-[36.78px] w-[36.78px] text-white' />
                </div>
            </div>
              <div className='pt-6 pl-8 flex gap-2'>
                <div className='h-[55.17px] w-[61.3px] bg-[#C3A465] flex justify-center items-center rounded-lg '>
                    <MdOutlineChair className='h-[36.78px] w-[36.78px] text-white' />
                </div>
                 <div className='h-[55.17px] w-[61.3px] bg-[#C3A465] flex justify-center items-center rounded-lg '>
                    <MdOutlineChair className='h-[36.78px] w-[36.78px] text-white' />
                </div>
            </div>
              <div className='pt-6 pl-8 flex gap-2'>
                <div className='h-[55.17px] w-[61.3px] bg-[#C3A465] flex justify-center items-center rounded-lg '>
                    <MdOutlineChair className='h-[36.78px] w-[36.78px] text-white' />
                </div>
                 <div className='h-[55.17px] w-[61.3px] bg-[#C3A465] flex justify-center items-center rounded-lg '>
                    <MdOutlineChair className='h-[36.78px] w-[36.78px] text-white' />
                </div>
            </div>
            </div>
                </div>
                
            <div className='h-[539px] w-[10px] mt-14 '
           style={{ backgroundImage: `url(${rowline})` }}>
               <img className='h-[170px] w-[10px] bg-[#C3A465] rounded ' src={rowline2} alt="" />
            </div>
            </div>
        </div>
    </div>
  );
};

export default Travelercard