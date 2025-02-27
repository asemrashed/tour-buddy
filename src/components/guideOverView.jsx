import React from "react";
import Image from "next/image";
import guide from "@/public/images/guide.png";
import stars from "@/public/icons/smallGroupStar.svg";
import clock from "@/public/icons/clock.svg";
import car from "@/public/icons/car.svg";
import people from "@/public/icons/people.svg";
import { Volkhov } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";

const nicoMoji = localFont({
  src: "../public/fonts/nicoMoji.woff",
});

const volkhov = Volkhov({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

function GuideOverView() {
  return (
    <div className="flex flex-col md:flex-row w-full justify-between">
      <div className="flex w-full md:w-[70%] h-full gap-2 md:gap-4  shadow-lg rounded-lg">
        <div className="grow-0">
          <Image
            src={guide}
            alt="guide profile"
            className="h-[100%] w-[100%]"
          />
        </div>
        <div className="grow flex flex-col justify-evenly py-1">
          <div className="flex items-center space-x-2 md:space-x-4">
            <button className="bg-[#7BBCB0] text-[9px] md:text-[11px] font-samibold text-white px-2 md:px-7 py-1 rounded-2xl">
              KUAKATA
            </button>
            <div className="flex border-l-2 border-[#C7CDD0] pl-2 md:pl-4 gap-1.5">
              <Image src={stars} alt="review" />
              <p className="text-[#778088] text-[12px]">(584 reviews)</p>
            </div>
          </div>
          <div
            className={`flex items-center text-[#1C2B38] text-[15px] md:text-[20px] ${volkhov.className}`}
          >
            Raihan Ahmad
          </div>
          <div className="flex items-center text-[10px] md:text-[14px] text-[#495560]">
            <div className="flex border-r border-[#C7CDD0] pr-1 md:pr-3 space-x-1.5 ">
              <Image src={clock} alt="time" />
              <p>2 hours</p>
            </div>
            <div className="flex border-r border-[#C7CDD0] px-1 md:px-3 space-x-1.5">
              <Image src={car} alt="transport" />
              <p>Transport</p>
            </div>
            <div className="flex border-[#C7CDD0] px-1 md:px-3 space-x-1.5">
              <Image src={people} alt="Family Plan" />
              <p>Family Plan</p>
            </div>
          </div>
        </div>
        <div className="grow-0">
          <div className="h-full flex flex-col justify-center items-end  mr-6">
            <p
              className={`text-[lg] md:text-2xl font-[700] text-[#7BBCB0] ${volkhov.className}`}
            >
              Tk-250.00
            </p>
            <p className="text-[12px] text-[#778088]">per person</p>
            <div className="block md:hidden items-center justify-end">
              <button
                className={`${nicoMoji.className} bg-[#13253F] text-sm rounded-xl text-white px-3 py-1 hover:bg-[#7BBCB0] hover:text-[#13253F]`}
              >
                <Link href="/payment">Hire Me</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex items-center">
        <button
          className={`${nicoMoji.className} bg-[#13253F] text-[22px] rounded-[42px] text-white px-12 py-6 hover:bg-[#7BBCB0] hover:text-[#13253F]`}
        >
          <Link href="/payment">Hire Me</Link>
        </button>
      </div>
    </div>
  );
}

export default GuideOverView;
