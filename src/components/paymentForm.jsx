"use client";
import Image from "next/image";
import React, { useState } from "react";
import payment from "@/public/images/payment.png";
import { Inria_Serif } from "next/font/google";
import Link from "next/link";
import PaymentMethod from "@/components/paymentMethod";

const inriaSerif = Inria_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

function PaymentForm() {
  const [name, setName] = useState("");
  const [transectionId, setTransectionId] = useState("");
  const [number, setNumber] = useState("");
  const [pinCode, setPinCode] = useState("");

  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };
  const handleTransectionIdChange = (evt) => {
    setTransectionId(evt.target.value);
  };
  const handleNumberChange = (evt) => {
    setNumber(evt.target.value);
  };
  const handlePinCodeChange = (evt) => {
    setPinCode(evt.target.value);
  };

  const handleSubmit= (e) => {
    e.preventDefault();
    alert(
        `Name: ${name} \nTransaction ID: ${transectionId} \nNumber: ${number} \nPin Code: ${pinCode}`
     )
  }

  return (
    <div className="w-full md:h-[90%] w-full flex flex-col items-center justify-center bg-[#F9FAFD] md:space-y-11">
      <div className="flex w-[90%] md:w-[70%] justify-center md:gap-9">
        <div className="flex flex-col flex-grow ">
          <div
            className={`text-[20px] md:text-[36px] px-2 md:pb-9 ${inriaSerif.className}  text-black`}
          >
            Choose Payment Method
          </div>
          <form action="#" className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="text-[#1C2B38] font-[700] text-base/6 md:text-base/9">
                {" "}
                Name:
              </label>
              <input
                value={name}
                onChange={handleNameChange}
                type="text"
                placeholder="Ahnaf Amer"
                name="name"
                id="name"
                className="text-black p-1 md:p-4 bg-[#F4F4F5] rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[#1C2B38] font-[700] text-base/6 md:text-base/9">
                {" "}
                Transaction Id:
              </label>
              <input
                value={transectionId}
                onChange={handleTransectionIdChange}
                type="password"
                placeholder="..........."
                name="transactionId"
                id="transactionId"
                className="text-black p-1 md:p-4 bg-[#F4F4F5]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[#1C2B38] font-[700] text-base/6 md:text-base/9">
                {" "}
                Phone Number:
              </label>
              <input
                value={number}
                onChange={handleNumberChange}
                type="number"
                placeholder="+880 1234567890"
                name="phoneNumber"
                id="phoneNumber"
                className="text-black p-1 md:p-4 bg-[#F4F4F5] rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[#1C2B38] font-[700] text-base/6 md:text-base/9">
                {" "}
                Pin Code:
              </label>
              <input
                value={pinCode}
                onChange={handlePinCodeChange}
                type="password"
                placeholder=".........."
                name="pinCode"
                id="pinCode"
                className="text-black p-1 md:p-4 bg-[#F4F4F5] rounded-md"
              />
            </div>
          </form>
        </div>
        <div className="flex w-[30%] justify-center items-start">
          <div className="md:mt-[40px]">
            <Image src={payment} alt="Payment Method" />
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-center">
        <div className="flex flex-col space-y-5 justify-center items-center">
          <div className="w-full flex mt-4 justify-start text-[13px] md:text-[15px] font-bold text-[#000000] ml-7">
            <p>Select Method :</p>
          </div>
          <div className="flex gap-2 md:gap-9 ">
            <PaymentMethod link={"#"} name={"bKash"} />
            <PaymentMethod link={"#"} name={"Nagad"} />
            <PaymentMethod link={"#"} name={"Upay"} />
            <PaymentMethod link={"#"} name={"VISA"} />
            <PaymentMethod link={"#"} name={"MasterCard"} />
            <PaymentMethod link={"#"} name={"Others"} />
          </div>
          <button onClick={handleSubmit} className="bg-[#13253F] text-[12px] md:text-[15px] font-bold px-3 md:px-11 py-2 md:py-6 rounded-full">
            <Link href="#">Confirm Payment</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;
