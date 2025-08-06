import React from "react";
import { FaChevronDown, FaPlane } from "react-icons/fa6";
import { GoClock, GoHeart } from "react-icons/go";
import Dropdown from "../../Dropdown/Dropdown";
import arrow from "/Line3.png";
import Button from "../../Button/Button";

const Card = ({ flight }) => {
  return (
    <div>
    <div className="md:block hidden">
    <div className=" md:flex md:flex-col md:pt-6 px-4 md:px-0">
      <div className="md:h-[526px] h-auto md:w-[944px] w-full bg-white shadow-2xl border rounded-[8px] md:m-5 mx-auto">
        <div className="md:flex flex">
          {/* Airline Logos */}
          <div>
            <div className="md:pt-[60px] md:pl-[70px] md:flex md:justify-center ">
              <img
                className="md:h-[63px] h-[63px] w-auto max-w-[119px] md:max-w-[93px]"
                src={flight.logo1}
                alt=""
              />
            </div>
            <div className="md:hidden block">
              <div className=" flex items-center gap-2">
                <div className="h-[36px] w-[45px] border-black border rounded flex justify-center items-center">
                  {flight.rating}
                </div>
                <div className="flex gap-1">
                  <h2 className="font-bold text-[13.5px]">Very Good</h2>
                  <p className="text-[13.5px]">{flight.reviews} Reviews</p>
                </div>
              </div>
              </div>
            <div className="md:hidden block">
             {flight.routes.map((route, index) => (
              <React.Fragment key={index}>
                <div
                  className={`flex gap-2 pt-3 ${
                    index === 0
                      ? "border-b pb-2 w-full"
                      : "mt-2"
                  }`}
                >
                  <div className="pt-4">
                    <h2 className="text-[19px]">{route.from}</h2>
                  </div>
                  <div className="flex">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-1 mb-2 pl-6">
                        <FaPlane className="text-[#C3A465] h-[15px] w-[17px]" />
                        <p className="text-[14px] font-poppins">
                          {route.duration}
                        </p>
                      </div>
                      <img src={arrow} alt="" />
                    </div>
                    <div className="flex pl-2 pt-4 gap-2">
                      <p className="text-[19px]">{route.to}</p>
                      {route.showDropdown && (
                         <div className=" flex justify-center items-center h-[25px] w-[25px] rounded-full bg-white shadow-md border border-gray-300" ><FaChevronDown className="text-[10px] " /></div>
                      )}
                    </div>
                  </div>
                </div>



 {index === 0 && (
                  <h2 className="text-[16px] mt-3 font-semibold border-b-2 w-fit border-black">
                    Return
                  </h2>
                )}
              </React.Fragment>
            ))}
             <div className="md:block hidden">
            <div className="  pt-[160px] pl-[60px] flex justify-center md:justify-start">
              <img
                className="md:h-[74px] h-[74px] w-auto max-w-[144px] md:max-w-[140px]"
                src={flight.logo2}
                alt=""
              />
            </div>
             </div>
            </div>
          </div>
          {/* Right side content */}
          <div className="pl-4 flex-1">
            {/* Ratings and Price */}
            <div className="md:flex md:justify-between pt-4 pr-4 md:pr-8">
              <div className="md:block hidden">
              <div className=" flex items-center gap-2">
                <div className="h-[36px] w-[45px] border-black border rounded flex justify-center items-center">
                  {flight.rating}
                </div>
                <div className="flex gap-1">
                  <h2 className="font-bold text-[13.5px]">Very Good</h2>
                  <p className="text-[13.5px]">{flight.reviews} Reviews</p>
                </div>
              </div>
              </div>
              <div>
                <h2 className="text-[13.5px] font-medium">Starting from</h2>
                <p className="text-[#C3A465] text-[27px] font-bold">
                  {flight.price}
                </p>
              </div>
            </div>
            <div className="md:block hidden">

            {/* Flight Routes */}
            {flight.routes.map((route, index) => (
              <React.Fragment key={index}>
                <div
                  className={`flex gap-2 pt-3 ${
                    index === 0
                      ? "border-b pb-2 w-full"
                      : "mt-2"
                  }`}
                >
                  <div className="pt-4">
                    <h2 className="text-[19px]">{route.from}</h2>
                  </div>
                  <div className="flex">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-1 mb-2 pl-6">
                        <FaPlane className="text-[#C3A465] h-[15px] w-[17px]" />
                        <p className="text-[14px] font-poppins">
                          {route.duration}
                        </p>
                      </div>
                      <img src={arrow} alt="" />
                    </div>
                    <div className="flex pl-2 pt-4 gap-2">
                      <p className="text-[19px]">{route.to}</p>
                      {route.showDropdown && (
                        <Dropdown className="h-[30px] w-[30px] rounded-full bg-white shadow-md border border-gray-300" />
                      )}
                    </div>
                  </div>
                </div>

                {index === 0 && (
                  <h2 className="text-[16px] mt-3 font-semibold border-b-2 w-fit border-black">
                    Return
                  </h2>
                )}
              </React.Fragment>
            ))}
            </div>

            {/* Departure & Arrival Dates */}
            <div className="flex flex-col md:flex-row md:gap-[149px] pt-5 gap-2">
              <h2 className="text-[16px] font-poppins">
                Departure: {flight.departureDate}
              </h2>
              <h2 className="text-[16px] font-poppins">
                Arrival: {flight.arrivalDate}
              </h2>
            </div>

            {/* Departure & Arrival Times */}
            <div className="flex flex-col md:flex-row md:gap-[222px] pt-3 gap-2">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-[27px] w-[27px] bg-[#f3ede0] rounded-full">
                  <GoClock className="text-[16px] text-[#C3A465]" />
                </div>
                <p className="text-[16px] font-poppins">
                  {flight.departureTime}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-[27px] w-[27px] bg-[#f3ede0] rounded-full">
                  <GoClock className="text-[16px] text-[#C3A465]" />
                </div>
                <p className="text-[16px] font-poppins">
                  {flight.arrivalTime}
                </p>
              </div>
            </div>

            {/* Button & Heart */}
            <div className="flex pt-6 gap-3 flex-col md:flex-row">
              <div className="flex justify-center items-center border-[2px] border-[#545860] rounded-[6px] h-[54px] w-[53px]">
                <GoHeart className="size-5" />
              </div>
              <div className="w-full">
                <Button
                  className="h-[53px] w-full md:w-[602px] bg-[#C3A465] rounded text-white"
                  text="Book Now"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
<div>
  {/* mobile */}
  <div className="md:hidden block">
  <div className="pl-2 w-[340px]">
    <div className="bg-white border h-[570px] shadow-md rounded">
      <div>
        {/* Airline Logos + Price */}
        <div className="flex gap-[120px]">
          <div>
            <img className="pt-2 pl-2" src={flight.logo1} alt="Airline Logo 1" />
          </div>
          <div className="pt-3">
            <h2 className="text-[13.5px] font-medium text-[#112211]">Starting from</h2>
            <p className="text-[#C3A465] text-[27px] font-bold">{flight.price}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex pt-4 pl-4 gap-1">
          <div className="flex justify-center items-center text-[11px] border-black border rounded h-[20px] w-[21px]">
            {flight.rating}
          </div>
          <div className="flex gap-1">
            <h2 className="text-[12px] font-poppins font-semibold">Very Good</h2>
            <p className="text-[12px]">{flight.reviews} Reviews</p>
          </div>
        </div>

        {/* Routes */}
        <div className="pl-3">
          {flight.routes.map((route, index) => (
            <React.Fragment key={index}>
              <div className={`flex pt-2 ${index === 0 ? "border-b pb-2 w-full" : "mt-2"}`}>
                <div className="flex justify-center items-center gap-2">
                  <h2 className="text-[14px] pt-2">{route.from}</h2>
                </div>
                <div className="flex pl-2 pb-1">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1 mb-2">
                      <FaPlane className="text-[#C3A465] h-[13px] w-[13px]" />
                      <p className="text-[14px] font-poppins">{route.duration}</p>
                    </div>
                    <img className="w-[160px]" src={arrow} alt="Arrow" />
                  </div>
                  <div className="flex pl-2 pt-5 gap-2">
                    <p className="text-[14px]">{route.to}</p>
                    {route.showDropdown && (
                      <div className=" flex justify-center items-center h-[25px] w-[25px] rounded-full bg-white shadow-md border border-gray-300" ><FaChevronDown className="text-[10px] " /></div>
                    )}
                  </div>
                </div>
              </div>

              {/* Logo2 above Return */}
              {index === 0 && (
                <>
                 
                  <h2 className="text-[16px] mt-3 font-semibold border-b-2 w-fit border-black">
                    Return
                  </h2>
                   <div className="flex justify-start  ">
                    <img
                      src={flight.logo2}
                      alt="Airline Logo 2"
                      className="h-[81px] w-[144px]"
                    />
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Dates */}
        <div className="flex pt-5 gap-[110px] pl-2">
          <h2 className="text-[11px] font-poppins">
            Departure: {flight.departureDate}
          </h2>
          <h2 className="text-[11px] font-poppins">
            Arrival: {flight.arrivalDate}
          </h2>
        </div>

        {/* Times */}
        <div className="flex gap-[140px] pt-3 pl-2">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center h-[27px] w-[27px] bg-[#f3ede0] rounded-full">
              <GoClock className="text-[16px] text-[#C3A465]" />
            </div>
            <p className="text-[11px] font-poppins">{flight.departureTime}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center h-[27px] w-[27px] bg-[#f3ede0] rounded-full">
              <GoClock className="text-[16px] text-[#C3A465]" />
            </div>
            <p className="text-[11px] font-poppins">{flight.arrivalTime}</p>
          </div>
        </div>

        {/* Heart + Book Now */}
        <div className="flex pt-3 gap-2 pl-2">
          <div className="flex justify-center items-center border-[2px] border-[#545860] rounded-[6px] h-[40px] w-[44px]">
            <GoHeart className="size-5" />
          </div>
          <Button
            className="bg-[#C3A465] h-[40px] w-[250px] rounded text-white"
            text="Book Now"
          />
        </div>
      </div>
    </div>
  </div>
</div>

</div>

    </div>
  );
};

export default Card;
