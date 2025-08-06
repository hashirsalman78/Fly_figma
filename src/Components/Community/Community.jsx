import React from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../Homepage/Footer";
import bg from "/bg.png";
import Community1 from "/Community1.png";
import Coummunitydetails from "../Utilites/Coummunitydetails";

const Community = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div
          className="h-[300px]  w-full object-cover bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        >
          <h1 className="text-white text-[40px] font-black font-playfair">
            Community
          </h1>
        </div>
        <div className="flex  flex-col justify-center items-center">
          <div className="pt-6">
            <img className="h-[360px] w-[540px]" src={Community1} alt="" />
          </div>
          <div className="pt-4">
            <p className="text-[33px] font-bold font-poppins">
              Join Our Community
            </p>
          </div>
          <div className="pt-8">
            <h2 className="font-poppins text-[19.16px] text-[#bbbcbf]">
              Lorem ipsum dolor sit amet consectetur. Vitae enim egestas quis ac
              ultrices{" "}
              <p className="font-poppins text-[19.16px] text-[#bbbcbf] pl-12">
                arcu. Ullamcorper at molestie sapien id quam pulvinar. Varius.
              </p>
            </h2>
          </div>
        </div>
        <Coummunitydetails/>
      </div>
      <Footer />
    </div>
  );
};

export default Community;
