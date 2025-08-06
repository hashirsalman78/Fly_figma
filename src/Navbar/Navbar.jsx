import React from 'react'
import logo from '/logo.png'
import Button from '../Button/Button'
import navbarimg from '/navbarimg.png'
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();

  return (
    <div>
        <div className='md:h-[70px] h-[71px]  md:w-full  object-cover bg-[#000000] flex justify-between items-center' >
            {/* one */}
            <div className='md:flex  md:gap-20'>
            <div className=' flex justify-center items-center '>
                <img  className='h-[31px] w-[34px] md:hidden block ' src={navbarimg} alt="" />
            <img className='md:w-[95px] md:h-[73px] md:pl-0 pl-[125px]  ' src={logo} alt="" />
            </div>
            <div className='hidden md:flex  text-white md:text-[14px] md:gap-9 justify-center  items-center'>
                <div onClick={()=> navigate('/')} className='font-bold cursor-pointer'>Flight</div>
                <div onClick={()=> navigate('/flights')} className='font-bold cursor-pointer' > Bookings</div>
                <div onClick={()=> navigate('/community')} className='font-bold cursor-pointer' >Contact Us</div>
            </div>
            </div>
            {/* two */}
            <div >
                <div className='hidden landscape:flex gap-4 pr-4'>
                    <Button className=" text-white text-[14px] border rounded-[11px] h-[34px] w-[100px]" text='Sign-in'/>
                    <Button className="bg-[#C3A465] text-white text-[14px] border rounded-[11px] h-[34px] w-[100px]" text='Sign-up'/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar