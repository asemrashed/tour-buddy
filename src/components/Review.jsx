import Image from "next/image";
import React from "react";
import review1 from "@/public/images/review1.png";
import review2 from "@/public/images/review2.png";
import stars from "@/public/icons/smallGroupStar.svg";
import doubleTick from "@/public/icons/doubleTick.svg";
import Link from "next/link";

function Review() {
  const reviewDetails = [
    {
      id: 1,
      name: "Arlene McCoy",
      link: review1,
      title: "Good tour, really well organised",
      intro:'"Amazing Guide!" ',
      review:
        'Our tour guide in Kuakata was fantastic! They showed us the best spots for sunrise and sunset, shared fascinating local stories, and made the trip smooth and enjoyable. Their friendly attitude and attention to detail truly made our visit unforgettable. Highly recommend!',
    },
    {
      id: 2,
      name: "Jenny Wilson",
      link: review2,
      title: "Informative but disappointed not seeing changing of the guards",
      intro:'"Fantastic Experience!" ',
      review:
        `Our visit to Kuakata was unforgettable, thanks to our amazing guide. They were knowledgeable, friendly, and went above and beyond to ensure we enjoyed every moment. From exploring the beach to learning about local culture, everything was perfect. Highly recommended!`,
    },
  ];

  return (
    <ul className="w-[100%] flex flex-col items-center justify-center gap-3 ">
      {reviewDetails.map((singleReview) => (
        <li key={singleReview.id} className="flex border-b-[0.53px] border-[#E8EAEB] py-1 gap-5">
          <div className="flex w-[22%] justify-between">
            <div className=" w-[70px]">
              <Image src={singleReview.link} alt="review" />
            </div>
            <div className="flex flex-col ">
              <div>
                <Image src={stars} alt="ratings" />
              </div>
              <div className="flex  gap-1">
                <p className="text-[12px] md:text-[15px] font-[700] text-[#1C2B38]">
                  {singleReview.name}
                </p>
                <Image src={doubleTick} alt="tick" />
              </div>
              <div>
                <p className="text-[10px] md:text-[13px] font-[600] text-[#778088]">
                  2 October 2012
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col">
            <div className="flex items-center justify-between">
              <div className="text-[12px] md:text-[15px] font-[700] text-[#1C2B38]">
                {singleReview.title}
              </div>
              <div className="flex gap-2">
                <p className="text-[10px] md:text-[13px] text-[#778088]">Helpful? </p>
                <Link href="#" className="text-[#7BBCB0] text-[10px] md:text-[13px] ">
                  Yes
                </Link>
              </div>
            </div>
            <div className="flex flex-col text-[10px] md:text-[14px] text-[#000000]">
              <p>{singleReview.intro}</p>
              <p>
                {singleReview.review}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Review;
