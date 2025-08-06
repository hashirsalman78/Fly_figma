import React from "react";
import bg1 from "/bg1.png";
import bg2 from "/bg2.png";
import whiteline from "/line-white.png"

;
import Box from "./Box";
import { SlBadge } from "react-icons/sl";
import { TbWorldHeart } from "react-icons/tb";
import { GoTag } from "react-icons/go";

const Fourthsection = () => {

const box1 = {
    icon:<SlBadge className=" h-[43px] w-[43px]" />,
    boldtext:"More for less",
    text:"We offer e-tickets with exceptional discounted deal across the country",
};
const box2 = {
    icon: <GoTag  className="h-[49px] w-[49px]"/>,
    boldtext:"Lowest Fares",
    text: (
    <div  className="flex flex-col justify-center items-center">
      We provide affordable tickets {" "}
      <span className="text-[#818181] text-[17px]">save up to 10%</span>
    </div>
  ),
};
const box3 = {
    icon :<TbWorldHeart className="h-[51px] w-[51px]" />,
    boldtext:"Discover",
    text:"We make travelling easy across Europe by providing easy e-ticket.",
}



  return (
    <div>
      <div className="">
        <div className="">
        <img className=" w-[400px] h-[75px]  md:w-full md:h-[128px] object-cover md:object-cover" src={bg1} alt="" />
        </div>
        <div>
          <div
            className="   w-[370px] md:w-full object-cover md:object-cover  h-[1300px] md:h-[641px] bg-no-repeat md:bg-no-repeat bg-cover md:bg-cover"
            style={{ backgroundImage: `url(${bg2})` }}
          >
            <div>
                <div className="flex md:justify-center md:items-center"> 
                    <h2 className="text-[#FFFFFF] md:pl-0 pl-[30px] text-[30px] md:text-[40px] font-poppins">Why use FlyProView <span ><img className=" md:pt-0 pt-2 pl-[19px] md:pl-[100px]" src={whiteline} alt="" /></span></h2>
                </div>
                <div className="md:hidden block">
                  <div className="flex pl-8 pt-8">
                    <h2 className="text-[#FFFFFF] text-[14px] font-poppins  h-[100px] w-[300px]   ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At imperdiet tincidunt etiam orci. Sed nisl</h2>
                </div>
                </div>

                <div className="md:block hidden">
                <div className="flex justify-center items-center pt-8">
                    <h2 className="text-[#FFFFFF] text-[20px] font-poppins   md:w-[726px]   ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At imperdiet <p className="pl-[210px]">tincidunt etiam orci. Sed nisl</p> </h2>
                </div>
                </div>



            </div>
            <div className="md:flex md:gap-4 md:justify-center md:items-center pt-4 md:pt-8">
            <Box box={box1}/>
            <div>
            <Box box={box2}  />
            </div>
            <div>
            <Box box={box3}/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourthsection;
