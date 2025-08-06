import React from "react";
import PaymentContent from "./PaymentContent";

const PaymentDetails = () => {
  const payment = {
    subtotal: "Subtotal",
    ServiceTax: "ServiceTax",
    Protection: "Protection",
    Total: "Total",
  };
  const paymentprice = {
    total: "$718.45",
    Tax: "$15.23",
    Protectiontext: "FREE",
    Totalcost: "$731.10",
  };

  return (
    <div className="pt-4 pb-6">
      <div className="  m-2 ml-16 p-8  h-[450px] w-[1385px] bg-[#FFFFFF]   shadow-2xl border rounded-[8px]">
        <div className="flex gap-[375px]">
        <div>
        <div>
          <div className="text-[23.16px] text-[#283646] font-poppins font-semibold">
            Payment
          </div>
          <div>
            <img className="h-[3px] w-[81px] pl-2" src="/border.png" alt="" />
          </div>
        </div>
        <PaymentContent payment={payment} paymentprice={paymentprice} />
        </div>
        <div>
            <div className="h-[292px] w-[611px] bg-[#f3ede0]">
                <div className="pt-12">
                    <div><p className="font-poppins text-[27px] font-bold text-[#000000] pl-6">Coupon</p></div>
                    <div><p className="font-poppins text-[18px] pt-4 pl-6">Coupon Code</p></div>
                    <div className="flex gap-4 pl-4 pt-4" >
                        <div className=" ">
                            <input type="text" className="h-[59px] w-[395px] bg-white rounded-lg" />
                        </div>
                        <div> <button className="h-[59px] w-[118px] bg-[#C3A465] rounded-lg"><p className="text-[16px] font-poppins font-bold text-white ">Apply</p></button></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        

        <div className="flex justify-center items-center pt-10">
          <button className="bg-[#C3A465] rounded-md h-[53px] w-[602px] flex justify-center items-center">
            <p className="text-[15.73px] font-montserrat font-semibold text-white">
              Proceed to checkout
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
