import React from "react";
import travelpicture from "/travelpicture.png";
import line from "/line.png";

const Thirdsection = () => {
  return (
    <section className="w-full px-4 py-10 md:py-20">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center gap-10">
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={travelpicture}
            alt=""
            className="w-[286px] h-[311px] md:w-[514px] md:h-[560px] object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start md:pt-10">
          <div className="md:hidden flex justify-center mb-10">
            <button className="h-16 w-36 bg-black text-white font-poppins font-semibold text-lg rounded flex items-center justify-center">
              Explore More
            </button>
          </div>

          <div className="text-center md:text-left w-full mb-6">
            <h1 className="text-[#283646] text-xl md:text-3xl font-poppins font-semibold ">
              Changing the way you travel
            </h1>
            <div className="flex justify-center md:justify-start mt-2">
              <img
                src={line}
                alt=""
                className="h-[6px] w-[200px] md:w-[396px]"
              />
            </div>
          </div>

          <p className="text-[#808790] font-poppins text-sm md:text-lg leading-relaxed mb-6 text-center md:text-left max-w-[618px]">
            We’ve got your back with the flyproview.
          </p>

          <ul className="list-disc list-inside space-y-4 text-[#808790] font-poppins text-sm md:text-lg max-w-[618px]">
            <li>Book new trips and add changes to your current ones</li>

            <li>Get through the airport quicker with terminal guide</li>
            <li>Custom Luggage</li>
            <li>Custom Seat Selection</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Thirdsection;
