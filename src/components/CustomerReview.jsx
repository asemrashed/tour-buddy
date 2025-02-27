import React from "react";
import { Volkhov } from "next/font/google";
import RatingBar from "@/components/RatingBar";
import Review from "@/components/Review";
import Link from "next/link";


const volkhov = Volkhov({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});
function CustomerReview() {
  const ratings = [
    { label: "Guide", value: 4.8 },
    { label: "Transportation", value: 3.0 },
    { label: "Value for money", value: 4.5 },
    { label: "Safety", value: 4.0 },
  ];
  return (
    <div className="w-[100%] h-[500px] md:grid md:grid-rows-4 flex flex-col gap-5 md:gap-0">
      <div className="flex w-full justify-between gap-5 md:gap-0">
        <div className={`md:w-[30%] grow-0 text-[15px] md:text-[22px] text-[#1C2B38] ${volkhov.className}`}>
          Customer Review
        </div>
        <div className="md:w-[30%] grow md:grow-0 space-y-1 col-end-5">
          {ratings.map((item, index) => (
            <RatingBar key={index} label={item.label} value={item.value} />
          ))}
        </div> 
      </div>
      <div className="flex flex-col row-span-2">
        <Review/>
      </div>
      <div className="flex justify-center border-b-[0.53px] border-[#E8EAEB] mb-2 items-end">
        <div className="text-[14px] font-[700] text-[#7BBCB0] hover:text-[#13253F]"><Link href="#" className="border-b-2 border-[#7BBCB0]">View More Comments</Link></div>
      </div>
    </div>
  );
}

export default CustomerReview;
