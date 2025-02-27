import React from "react";
import Link from "next/link";
import PaymentMethod from "@/components/paymentMethod";
import PaymentOption from "@/components/paymentOption";
import PaymentForm from "@/components/paymentForm";

function Payment() {
  return (
    <div className=" bg-[#fff] w-full h-[1150px] md:h-[1300px] flex flex-col justify-center items-center">
      <div className=" w-[90%] md:w-[70%] h-[5%] md:h-[10%] flex items-end text-[#000000] text-[22px] md:text-[32px] font-[700]">
        Payment
      </div>
      <div className="w-[100%] h-[95%] md:h-[90%]  flex flex-col justify-center bg-[#F9FAFD] space-y-11">
        <PaymentForm/>
        <div className="flex items-center justify-center pb-9">
            <PaymentOption/>
        </div>
      </div>
    </div>
  );
}

export default Payment;
