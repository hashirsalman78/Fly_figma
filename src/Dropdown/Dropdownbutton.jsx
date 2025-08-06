import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";


const Dropdownbutton = ({ children, open, icon, toggle ,className = "" }) => {
  return (
    <div >
    <div
      onClick={toggle}
      className={`${className} md:flex flex justify-center md:justify-center md:text-[14px]   md:items-center  md:pr-4 pr-2  md:bg-white  rounded-[0.5rem] shadow-md  border-gray-100 cursor-pointer  ${
        open ? "button-open" : null
      } `}
    >
        <div className="md:flex flex md:gap-[0px] md:justify-center  items-center font-semibold">
      {icon}
      {children}
        </div>
      <span className=" text-[10px] md:text-[13px] md:flex flex md:pl-[15px] pl-1 md:items-center items-center md:justify-center justify-center md:pr-4 font-semibold">
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </span>
    </div>
    </div>
  );
};

export default Dropdownbutton;
