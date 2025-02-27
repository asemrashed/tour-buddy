import Image from 'next/image'
import React from 'react';
import stars from '@/public/icons/GroupStar.svg'


function GuideRatings() {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex items-end gap-9'>
        <div className="flex text-[#1C2B38] text-3xl md:text-5xl font-black">4.0</div>
        <div className="flex text-[#778088] text-sm md:text-xl font-[300]">14 Reviews</div>
      </div>
      <div className="flex items-center justify-center">
        <Image src={stars} alt='rating' className='w-[150px] md:w-full'/>
      </div>
    </div>
  )
}

export default GuideRatings