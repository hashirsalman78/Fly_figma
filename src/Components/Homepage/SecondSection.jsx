import React from "react";

import { MdCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
import { FaDollarSign, FaPlane, FaStar } from "react-icons/fa6";

import emirates from "/emirates.png";
import etihad from "/etihad.png";
import flydubai from "/flydubai.png";
import qatar from "/qatar.png";
import SideBar from "./SideBar";
import Card from "./Card";

const SecondSection = () => {

const flight = {
  logo1: emirates,
  logo2: qatar,
  rating: 4.9,
  reviews: 54,
  price: "$786.99",
  departureDate: "30/12/2023",
  arrivalDate: "02/01/2024",
  departureTime: "10:30 PM",
  arrivalTime: "01:30 PM",
  routes: [
    { from: "New York", to: "London", duration: "6h 55 mins", showDropdown: true },
    { from: "New York", to: "London", duration: "6h 55 mins", showDropdown: true },
    { from: "New York", to: "London", duration: "6h 55 mins", showDropdown: false }
  ],
  return: {
    from: "New York",
    to: "London",
    duration: "6h 55 mins",
    showDropdown: true
  }
};
const flight2 = {
  logo1: etihad,
  logo2: qatar,
  rating: "5.0",
  reviews: 54,
  price: "$786.99",
  departureDate: "30/12/2023",
  arrivalDate: "02/01/2024",
  departureTime: "10:30 PM",
  arrivalTime: "01:30 PM",
  routes: [
    { from: "New York", to: "London", duration: "6h 55 mins", showDropdown: true },
    { from: "New York", to: "London", duration: "6h 55 mins", showDropdown: true },
    { from: "New York", to: "London", duration: "6h 55 mins", showDropdown: false }
  ],
  return: {
    from: "New York",
    to: "London",
    duration: "6h 55 mins",
    showDropdown: true
  }
};
const flight3 = {
  logo1: flydubai,
  logo2: qatar,
  rating: 4.9,
  reviews: 54,  
  price: "$786.99",
  departureDate: "30/12/2023",
  arrivalDate: "02/01/2024",
  departureTime: "10:30 PM",
  arrivalTime: "01:30 PM",
  routes: [
    { from: "New York", to: "London", duration: "6h 55 mins", showDropdown: true },
    { from: "New York", to: "London", duration: "6h 55 mins", showDropdown: true },
    { from: "New York", to: "London", duration: "6h 55 mins", showDropdown: false }
  ],
  return: {
    from: "New York",
    to: "London",
    duration: "6h 55 mins",
    showDropdown: true
  }
};

const flight4 = {
  logo1: emirates,
  logo2: qatar,
  rating: 4.9,
  reviews: 54,  
  price: "$786.99",
  departureDate: "30/12/2023",
  arrivalDate: "02/01/2024",
  departureTime: "10:30 PM",
  arrivalTime: "01:30 PM",
  routes: [
    { from: "New York", to: "London", duration: "6h 55 mins", showDropdown: true },
    { from: "New York", to: "London", duration: "6h 55 mins", showDropdown: true },
    { from: "New York", to: "London", duration: "6h 55 mins", showDropdown: false }
  ],
  return: {
    from: "New York",
    to: "London",
    duration: "6h 55 mins",
    showDropdown: true
  }
};



  return (
    <div className="md:flex flex-none ">
      {/* side bar*/}

      <div className="  ">
     <SideBar/>
      </div>
      <div className="flex flex-col md:justify-center md:items-center w-full">
      <div className="md:flex md:gap-[540px] pt-[90px] md:pl-0 pl-4 md:pt-8 md:pb-4  ">
        <div><p className="font-poppins text-[20px] md:text-[19.16px] font-semibold">50 Flight Founds</p></div>
        <div className="flex md:justify-center gap-4 md:gap-4 md:pt-0 pt-2 md:pr-6 items-center">
          <p className="font-poppins text-[19.16px]">New York </p>
           <FaPlane className="text-[#C3A465] h-[31px] w-[31px]" />
           <p className="font-poppins text-[19.16px]">London</p>
        </div>
      </div>
      <Card flight={flight} />
      <div className="pt-6 md:pt-0">
      <Card flight={flight2} />
      </div>
      <div className="md:block hidden">
      <Card  flight={flight3}  />
      </div>
      <div className="md:block hidden">
      <Card flight={flight4}  />
      </div>
      </div>
    </div>
  );
};

export default SecondSection;
