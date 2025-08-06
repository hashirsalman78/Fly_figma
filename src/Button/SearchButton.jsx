import React from "react";
import { BiSolidCalendarAlt } from "react-icons/bi";
import Button from "./Button";

const SearchButton = () => {
  return (
    <div>
        <div className="md:flex gap-2">
      <div className="md:flex gap-1 md:pt-0 pt-4 md:pl-0 pl-8 ">
        <button className="bg-white h-[70px] md:h-[70px] md:border-none border w-[288px] md:w-[286px] rounded-tl-lg md:rounded-tr-none rounded-tr-lg md:rounded-tl-lg md:rounded-bl-lg ">
          <h2 className="font-semibold pr-[225px] md:pr-[212px]">From</h2>
          <h2 className=" pr-[170px] md:pr-[150px] md:text text-[15px]">New York(Any)</h2>
        </button>
        <button className="bg-white md:border-none border h-[70px] md:h-[70px] w-[288px] md:w-[288px]">
          <h2 className="font-semibold   text-gray-500 pr-[250px]  md:pr-[250px]">To</h2>
          <h2 className=" mr-[140px] md:mr-[120px] md:pr-[0px]  text-gray-400 text-[13px] md:text-[16px]">
            Country,city or airport
          </h2>
        </button>

        <div className="md:flex-none flex md:gap-1 gap-0">
        <button className="bg-white  md:rounded-bl-none rounded-bl-lg h-[60px] md:h-[70px] w-[145px] md:w-[210px] flex justify-center items-center">
          <div className="">
            <h2 className="md:hidden block text-gray-400 pr-[50px] text-[14px]" >Depart date</h2>
            <h2 className="hidden md:block font-semibold  md:pr-[110px]">Depart</h2>
            <h2 className="hidden md:block md:pr-[90px] text-gray-400 text-[14px]">
              Select date
            </h2>
          </div>
          <BiSolidCalendarAlt className=" hidden md:block h-[170px] w-[25px] pt-3" />
        </button>
        <button className="bg-white md:rounded-br-none rounded-br-lg  h-[60px] md:h-[70px] w-[143px] md:w-[200px] flex justify-center items-center ">
          <div className="">
            <h2 className=" md:hidden pr-[30px]  block text-gray-400 text-[14px]">
              Return date
            </h2>
            <h2 className=" hidden md:block   font-semibold md:pr-[100px]">Return</h2>
            <h2 className="  hidden md:block md:pr-[80px] text-gray-400 text-[14px]">
              Select date
            </h2>
          </div>
          <div className=" bg-[#C3A465] md:bg-white md:h-[70px] h-[34px] w-[34px]  md:w-[25px]  md:rounded-none rounded-full md:flex-none flex md:justify-center justify-center md:items-center items-center">
          <BiSolidCalendarAlt className=" md:text-black text-white  md:rounded-none rounded-full   md:h-[70px]   h-[24px] w-[24px] md:w-[25px]  md:pt-2" />
          </div>
        </button>
         </div>


        </div>
        <Button
          className="bg-[#C3A465] text-white text-[14px] font-bold  h-[50px] md:mt-0  mt-4 md:h-[70px] w-[270px] md:ml-0 ml-10  md:w-[200px]  rounded-[11px] "
          text="Search"
          />
          </div>
    </div>
  );
};

export default SearchButton;
