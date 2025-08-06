
import bg from "/bg.png";
import Dropdown from "../../Dropdown/Dropdown";
import { Icon } from '@iconify/react';
import SecondSection from "./SecondSection";
import Thirdsection from "./Thirdsection";
import SearchButton from "../../Button/SearchButton";
import Fourthsection from "./Fourthsection";
import Footer from "./Footer";
import FifthSection from "./FifthSection";
import Navbar from "../../Navbar/Navbar";




const MainSection = () => {

  return (
    <div>
        <Navbar/>
      <div
        className="md:w-full object-cover h-[500px] md:h-[659px] bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div >
          <h2 className="text-white  md:text-[59px] text-[26px] md:flex md:items-center pl-6 pt-[50px] md:justify-center md:w-[895px] w-[352px] md:h-[140px] h-[92px] md:pt-[161px] md:pl-[130px] font-playfair font-black">
            Find best flight and where are you going today?
          </h2>
        </div>

        {/* text */}
        <div className="md:pt-[214px] pt-[50px] md:pl-[123px]    ">
          <div className="backdrop-blur-sm bg-white/30 rounded-xl shadow-md flex items-center justify-center  md:items-center md:justify-end md:flex w-[345px]  md:w-[575px] md:h-[60px] h-[44px] ">
            <div className=" md:gap-1 gap-1  md:flex md:pr-3 flex ">
              <Dropdown
               icon={<Icon icon="icon-park-twotone:round-trip" className="text-white bg-[#C3A465] md:p-1 md:rounded-lg rounded h-[23px] w-[25px] md:h-[37px] md:w-[39px]" />}
                className="h-[33px]  md:h-[44px] w-[105px] md:w-[178px] md:text-[14px] text-[10.52px] "
                buttonText="Round Trip"
              />
              <Dropdown 
               icon={<Icon icon="mdi:account-multiple-outline" className="text-white bg-[#C3A465] md:p-1 rounded-lg h-[24px] md:h-[35px]  md:w-[39px] w-[27px]" />}
               className=" h-[33px] md:h-[44px] md:w-[160px] w-[95px] text-[9.52px] md:text-[13px]" buttonText="1 person" />
              <Dropdown
              icon={<Icon icon="mdi:book-outline" className="text-white bg-[#C3A465] md:p-1 rounded-lg h-[27px] md:h-[35px] w-[27px] md:w-[39px]" />}
                className=" text-[9.77px] md:text-[14px] h-[33px] w-[125px] md:h-[44px] md:w-[208px] "
                buttonText="Economy Class"
              />
            </div>
          </div>
        </div>
        {/* search section */}
        <div className="md:pl-[123px] md:pt-6 ">
            <SearchButton/>
        </div>
        <div className="hidden md:block">
        <div className="  flex  items-center pl-[123px] pt-4 gap-1">
         <input
        type="checkbox"
        className="accent-yellow-500 w-4 h-4 rounded border-gray-300"
      />
      <h2 className="text-white">Direct flights</h2>
        </div>
        </div>
      </div>
      <div>

       <SecondSection/>
       <Thirdsection/>
       <Fourthsection/>
       <FifthSection/>
       <Footer/>
      </div>
    </div>
  );
};

export default MainSection;
