import React from 'react'
import logo from '/logo.png'
import { FaCircleChevronDown, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import { CiYoutube } from 'react-icons/ci'
import { FaYoutube } from 'react-icons/fa'
import { FiChevronsDown } from 'react-icons/fi'
const Footer = () => {
  return (
    <div>
        <div className=' h-[322px]  w-full object-cover bg-[#222326]'>
          <div className='md:flex md:items-center md:gap-[200px] md:pt-10 pl-6'>
            <div>
              <div>
                <img className='md:h-[150px] md:w-[170px]' src={logo} alt="" />
                <p className='text-white font-poppins text-[10px] md:text-[15px]'>we provide afforable tickets</p></div>
            </div>
            <div className=' md:block hidden h-[150px] w-[170px]'>
              <h2 className='text-white text-[22px] font-poppins'>PAGES</h2>
              <p className='text-white pt-2'>Home</p>
              <p className='text-white pt-2'>Flights</p>
              <p className='text-white pt-2'>Hotels</p>
              <p className='text-white pt-2'>Contact Us</p>
            </div>
            <div className=' md:block hidden h-[150px] w-[160px]'>
              <h2 className='text-white text-[22px] font-poppins '>SUPPORT</h2>
              <p className='text-white pt-2'>Contact Us</p>
              <p className='text-white pt-2'>Terms & Conditions</p>
            </div>
            <div className='md:h-[150px] '>
              <div><h2 className=' md:block hidden text-white text-[22px] font-poppins '>SOCIAL MEDIA</h2></div>
              <div className='md:flex flex  md:justify-center items-center gap-8 md:pt-4 pt-6'>
                <FaFacebook className='text-white text-[25px]' />
                <FaLinkedin className='text-white text-[25px]' />
                <FaInstagram className='text-white text-[25px]' />
                <FaTwitter className='text-white text-[25px]' />
                <FaYoutube  className='text-white text-[25px] ' />
              </div>
            </div>
            <div className='md:hidden block'>
          <div className='pt-9'>
            <div className='flex  gap-[160px]'>
              <h2 className='text-white text-[22px] font-poppins'>PAGES</h2>
              <FaCircleChevronDown className='border rounded-full text-[15px] text-gray-400 border-gray-400 size-6 ' />
            </div>

            <div className='flex pt-10 gap-[136px]'>
              <h2 className='text-white text-[22px] font-poppins'>SUPPORT</h2>
            <FaCircleChevronDown className='border rounded-full text-[15px] text-gray-400 border-gray-400 size-6 ' />
            </div>
          </div>
          </div>
            
          </div>
          <div className='md:block hidden'>
          <div className=' flex justify-center items-center pt-16'>
            <p className='text-[#878a90] font-montserrat  text-[18px]'>Copyright © FLYPROVEIW | ALL RIGHTS RESERVED.</p>
          </div>
          </div>
          



          </div>  
    </div>
  )
}

export default Footer;