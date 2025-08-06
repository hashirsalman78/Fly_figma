import React from 'react'
import { SlBadge } from 'react-icons/sl'

const Box = ({box}) => {
  return (
    <div className='md:pt-0 pt-4'>
        <div className= ' flex  md:pt-0 pt-8 flex-col items-center justify-center m-2  p-8 h-[310px] md:h-[322px] w-[325px] md:w-[366px] bg-[#FFFFFF] rounded-lg'>
            <div className=' flex   items-center justify-center h-[95px] w-[95px] rounded-full bg-[#C3A465]'>
                <div className='text-white'>{box.icon}</div>
            </div>
            <div className='flex justify-center items-center'><h2 className='text-[24px] font-poppins font-medium pt-6'>{box.boldtext}</h2></div>
             <div className="text-[#818181] text-[17px] font-poppins pt-4 text-center">
        {box.text}
      </div>

        </div>
    </div>
  )
}

export default Box