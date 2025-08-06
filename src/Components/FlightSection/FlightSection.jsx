import React from "react";
import bg from "/bg.png";
import Card from "../Homepage/Card";
import emirates from "/emirates.png";
import qatar from "/qatar.png";
import Box2 from "../Homepage/Box2";
import Details from "../Homepage/Details";
import PaymentDetails from "../Utilites/PaymentDetails";
import Footer from "../Homepage/Footer";
import Travelercard from "../Utilites/Travelercard";
import Navbar from "../../Navbar/Navbar";

const FlightSection = () => {
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
      {
        from: "New York",
        to: "London",
        duration: "6h 55 mins",
        showDropdown: true,
      },
      {
        from: "New York",
        to: "London",
        duration: "6h 55 mins",
        showDropdown: true,
      },
      {
        from: "New York",
        to: "London",
        duration: "6h 55 mins",
        showDropdown: false,
      },
    ],
    return: {
      from: "New York",
      to: "London",
      duration: "6h 55 mins",
      showDropdown: true,
    },
  };
  return (
    <div>
      <Navbar />
      <div
        className="h-[300px]  w-full object-cover bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <h1 className="text-white text-[40px] font-black font-playfair">
          Flight Details
        </h1>
      </div>

      <div className="flex ">
        <div>
          <Card flight={flight} />
          <Box2 />
        </div>
        <div>
            <Travelercard/>
        </div>
      </div>
      <Details />
      <PaymentDetails />
      <Footer />
    </div>
  );
};

export default FlightSection;
