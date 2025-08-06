import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


const FifthSection = () => {
  return (
    <div className="md:h-[140vh]">
      <div className="pt-[100px] pl-[70px] md:pl-[100px]">
        <div>
          <div className=" text-[30px] md:text-[41px] text-[#283646] font-poppins font-semibold">
            Enjoy Comfort
          </div>
          <div>
            <img className="h-[6px] w-[191px] pl-2" src="/border.png" alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className=" text-[19px] md:text-[21px] font-poppins text-[#666f79] w-[334px] md:w-[929px] pl-[50px] md:pl-[100px] pt-8">
          Lorem ipsum dolor sit amet consectetur. Vulputate aliquam consequat
          mauris massa pulvinar nec. Senectus tristique neque ut viverra nunc.
        </div>
      </div>
      <div className="  md:flex md:justify-center md:items-center md:pl-0 pl-2 pt-4 pb-4 md:pt-12 gap-8">
      <div  className="md:h-[441px] h-[357px] md:w-[400px] w-[331px] pt-[260px] md:pl-0 rounded bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${"/window.png"})` }}>
                 <div  className=" h-[57px] mt-8 md:mt-[98px] ml-4 w-[182px] md:pt-0 pt-17 rounded-md bg-white flex justify-center items-center ">
                  <p className="text-black text-[18px] font-semibold font-poppins">Book Flights </p></div>
      </div>

      <div className="md:hidden block">
        <div className="flex  gap-6 pt-16 justify-center items-center pb-[80px]">
          <FiChevronLeft className=" border rounded-full text-[15px] text-gray-400 border-gray-400 size-14  "/>
          <FiChevronRight  className=" border rounded-full text-[15px]  border-gray-400 size-14"  />
        </div>
      </div>
      <div  className=" md:block hidden h-[441px] w-[400px] rounded md:mt-[150px] bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${" /Vacations.png"})` }}>
                <div  className=" h-[57px] mt-[364px] ml-4 w-[182px] rounded-md bg-white flex justify-center items-center ">
                  <p className="text-black text-[18px] font-semibold font-poppins">Enjoy Vacations </p></div>
      </div>
       <div  className="  md:block hidden h-[441px] w-[400px] rounded bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${" /Room.png"})` }}>
                <div  className=" h-[57px] md:mt-[364px] ml-4 w-[182px] rounded-md bg-white flex justify-center items-center ">
                  <p className="text-black text-[18px] font-semibold font-poppins">Stay in Hotels </p></div>
      </div>
    
      </div>
    </div>
  );
};

export default FifthSection;