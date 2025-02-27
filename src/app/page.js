import { Volkhov } from "next/font/google";
import localFont from "next/font/local";
import GuideOverView from "@/components/guideOverView";
import GuideRatings from "@/components/guideRatings";
import GuideDetails from "@/components/guideDetails";
import CustomerReview from "@/components/CustomerReview";

const nicoMoji = localFont({
  src: "../public/fonts/nicoMoji.woff",
});
const mayanmarKhaya = localFont({
  src: "../public/fonts/Khyay-Regular.ttf",
});

const volkhov = Volkhov({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});
export default function Home() {
  return (
    <div className="w-full h-[920px] md:h-[1250px] bg-[#fff] text-[#495560] flex flex-col items-center justify-center">
      <div className="max-w-[1170px] md:w-[80%] w-[90%] flex flex-col gap-5 md:gap-9">
        <div
          className={`text-[#000000] mt-5 md:mt-0 md:-mt-9 mb-5 text-[15px] md:text-[20px] ${mayanmarKhaya.className}`}
        >
          Your Selected Guide:
        </div>
        {/* guide details */}
        <div className="w-[100%] h-[140px] flex items-center">
          <GuideOverView/>
        </div>
        {/* guide review */}
        <div className="w-[100%] h-[160px] flex items-center justify-evenly md:justify-between">
           <GuideRatings className='flex-1'/>
           <GuideDetails className='flex-2'/>
        </div>
        {/* Customer Revew */}
        <div className="flex items-center">
            <CustomerReview/>
        </div>
        
      </div>
    </div>
  );
}
