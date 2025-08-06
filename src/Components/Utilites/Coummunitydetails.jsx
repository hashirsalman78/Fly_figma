import React from "react";

const Coummunitydetails = () => {
  return (
    <div>
      <div className=" ml-[140px] mt-8 mb-4  h-[500px] w-[1256px] bg-[#FFFFFF]   shadow-2xl border rounded-[8px]">
        <div className=" flex justify-center ">
          <div className="  pt-16  ">
            <div className="flex gap-[100px]  ">
              <div className="flex flex-col ">
                <label className="text-[17.73px] font-montserrat font-semibold text-[#000000]">
                  Name
                </label>
                <input
                  type="text"
                  className="h-[59px] w-[278px] border-[#aaacb0] border-2 rounded-xl"
                />
              </div>
              <div className="flex flex-col ">
                <label className="text-[17.73px] font-montserrat font-semibold text-[#000000]">
                  Email Address
                </label>
                <input
                  type="text"
                  className="h-[59px] w-[400px] border-[#aaacb0] border-2 rounded-xl"
                />
              </div>
              <div className="flex flex-col ">
                <label className="text-[17.73px] font-montserrat font-semibold text-[#000000]">
                  Age
                </label>
                <input
                  type="text"
                  className="h-[59px] w-[278px] border-[#aaacb0] border-2 rounded-xl"
                />
              </div>
            </div>
            {/* second */}
            <div className="flex gap-[100px] mt-16 ">
              <div className="flex flex-col ">
                <label className="text-[17.73px] font-montserrat font-semibold text-[#000000]">
                  Phone #
                </label>
                <div className="h-[59px] w-[278px] border-[#aaacb0] border-2 rounded-xl">
                  <div className="flex justify-end items-center pt-2 pr-2"></div>
                </div>
              </div>
              <div className="flex flex-col ">
                <label className="text-[17.73px] font-montserrat font-semibold text-[#000000]">
                  Gender
                </label>
                <input
                  type="text"
                  className="h-[59px] w-[278px] border-[#aaacb0] border-2 rounded-xl"
                />
              </div>
              <div className="flex flex-col  ">
                <label className="text-[17.73px] font-montserrat font-semibold text-[#000000]">
                  Country
                </label>
                <div className="h-[59px] w-[331px] border-[#aaacb0] border-2 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
          <div className=" flex justify-center items-center pt-20">
            <button className="h-[53px] w-[602px] bg-[#C3A465] rounded-lg">
              <p className="text-white font-montserrat text-[15.73px] font-semibold">
                {" "}
                Join
              </p>
            </button>
          </div>
      </div>
    </div>
  );
};

export default Coummunitydetails;
