import React from 'react'
import Button from '../../Button/Button';
import { MdCheckBoxOutlineBlank, MdOutlineCheckBox } from 'react-icons/md';
import { FaDollarSign, FaStar } from 'react-icons/fa6';
import { FiChevronDown } from 'react-icons/fi';

const SideBar = () => {
  return (
     <div className=" md:sticky md:top-0 md:h-[1256px]  h-[30px] w-[340px] md:w-[366px] md:border  md:shadow-md ">
        <div className=" border  rounded bg-white  md:h-[1081px]  md:w-[296px] ml-2 md:ml-7 mt-7 ">
          <div className="flex justify-center items-center gap-[130px]  md:gap-[101px] h-[100px] border-b-[1px]">
            <h2 className="  text-[25px] font-mulish font-bold  flex justify-center items-center  ">Filters
              <FiChevronDown className='md:hidden block text-[24px]'/>
            </h2>
            <Button
              className="border rounded-[8px] h-[40px] w-[92px] md:w-[75px] text-gray-400"
              text="Reset"
            />
          </div>
          {/* part two */}
          <div className=" hidden md:block border-b-[1px] h-[65vh]">
            <div className="pl-5 pt-8">
              <div>
                <h2 className="text-black font-mulish font-bold text-[16px]">
                  Flight
                </h2>
              </div>
              <div className="flex items-center gap-2 pt-4">
                <MdOutlineCheckBox className="text-[#C3A465]  h-[30px] w-[30px]" />
                <p className="font-semibold font-mulish  text-[16px] text-[#515151]">
                  All Flight
                </p>
              </div>
              <div className="flex items-center gap-2 pt-4">
                <MdCheckBoxOutlineBlank className=" text-gray-300 h-[30px] w-[30px]" />
                <p className="font-semibold font-mulish  text-[16px] text-[#515151]">
                  Connected Flight
                </p>
              </div>
              <div className="flex items-center gap-2 pt-4">
                <MdCheckBoxOutlineBlank className="text-gray-300  h-[30px] w-[30px]" />
                <p className="font-semibold font-mulish  text-[16px] text-[#515151]">
                  Direct Flight
                </p>
              </div>
            </div>
            <div className="pl-5 pt-8">
              <div>
                <h2 className="text-black font-mulish font-bold text-[16px]">
                  Category
                </h2>
              </div>
              <div className="flex items-center gap-2 pt-4">
                <MdOutlineCheckBox className="text-[#C3A465]  h-[30px] w-[30px]" />
                <p className="font-semibold font-mulish  text-[16px] text-[#515151]">
                  Promo Deals
                </p>
              </div>
              <div className="flex items-center gap-2 pt-4">
                <MdCheckBoxOutlineBlank className=" text-gray-300 h-[30px] w-[30px]" />
                <p className="font-semibold font-mulish  text-[16px] text-[#515151]">
                  One Day Trip
                </p>
              </div>
              <div className="flex items-center gap-2 pt-4">
                <MdOutlineCheckBox className="text-[#C3A465]   h-[30px] w-[30px]" />
                <p className="font-semibold font-mulish  text-[16px] text-[#515151]">
                  Top Vacation
                </p>
              </div>{" "}
              <div className="flex items-center gap-2 pt-4">
                <MdCheckBoxOutlineBlank className="text-gray-300  h-[30px] w-[30px]" />
                <p className="font-semibold font-mulish  text-[16px] text-[#515151]">
                  Things To do
                </p>
              </div>
            </div>
          </div>
          {/* part three */}
          <div className=" hidden md:block h-[30vh] border-b-[1px]">
            <div className="pl-5 pt-8">
              <h2 className="text-[16px] font-mulish font-bold">Price Range</h2>
            </div>
            <div className="pl-5 pt-4">
              <div className=" flex  items-center   h-[48px] w-[248px] border rounded-[12px]">
                <div className=" bg-[#E1E1E1] h-[46px] rounded-tl-lg rounded-bl-lg w-[46px] flex justify-center items-center">
                  <FaDollarSign className="text-[16px]" />
                </div>
                <div className="flex justify-center items-center pl-2">
                  <p className="text-[#9A9AB0] font-mulish font-bold text-[16px]">
                    Minimum Price
                  </p>
                </div>
              </div>
              <div className=" mt-3 flex  items-center   h-[48px] w-[248px] border  rounded-[12px]">
                <div className=" bg-[#E1E1E1]  h-[46px] rounded-tl-lg rounded-bl-lg w-[46px] flex justify-center items-center">
                  <FaDollarSign className="text-[16px]" />
                </div>
                <div className="flex justify-center items-center pl-2">
                  <p className="text-[#9A9AB0] font-mulish font-bold text-[16px]">
                    Maximum Price
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* part four */}
          <div className='hidden md:block'>
            <div>
                 <div className="border-b-[1px] h-[65vh]">
            <div className="pl-5 pt-3">
              <div>
                <h2 className="text-black font-mulish font-bold text-[16px]">
                  Rating
                </h2>
              </div>
              <div className="flex items-center gap-2 pt-4">
                <MdOutlineCheckBox className="text-[#C3A465]  h-[30px] w-[30px]" />
                <p className="font-semibold font-mulish flex items-center gap-2 text-[16px] text-[#515151]">
                    <FaStar className="text-[#F9BC1D]" />
                  5 Start
                </p>
              </div>
              <div className="flex items-center gap-2 pt-4">
                <MdCheckBoxOutlineBlank className=" text-gray-300 h-[30px] w-[30px]" />
                <p className="font-semibold font-mulish flex items-center gap-2 text-[16px] text-[#515151]">
                    <FaStar className="text-[#F9BC1D]" />
                  4 Star
                </p>
              </div>
              <div className="flex items-center gap-2 pt-4">
                <MdCheckBoxOutlineBlank className="text-gray-300  h-[30px] w-[30px]" />
                <p className="font-semibold font-mulish flex items-center gap-2 text-[16px] text-[#515151]">
                    <FaStar className="text-[#F9BC1D]" />
                  3 Star
                </p>
              </div>
            </div>
            <div className="pl-5 ">
             
              <div className="flex items-center gap-2 pt-4">
                <MdCheckBoxOutlineBlank className="text-gray-300  h-[30px] w-[30px]" />
                <p className="font-semibold font-mulish flex items-center gap-2  text-[16px] text-[#515151]">
                    <FaStar className="text-[#F9BC1D]" />
                  2 Star
                </p>
              </div>
              <div className="flex items-center gap-2 pt-4">
                <MdCheckBoxOutlineBlank className=" text-gray-300 rounded-lg  h-[30px] w-[30px]" />
                <p className="font-semibold font-mulish flex items-center gap-2 text-[16px] text-[#515151]">
                    <FaStar  className="text-[#F9BC1D]" />
                1 Star
                </p>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
        <div className='hidden md:block'>
        <div className="flex justify-center items-center pt-10 pr-8">
          <Button className="bg-[#C3A465] text-white text-[19.16px] font-poppins border rounded-[18px] h-[52px] w-[161.47px]  " text='Apply'/>
        </div>
        </div>
      </div>

  )
}

export default SideBar;