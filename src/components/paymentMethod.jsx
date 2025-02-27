import Link from 'next/link'
import React from 'react'

function PaymentMethod({link, name}) {
  return (
    <div className='flex  bg-[#37B1E2] rounded-xl md:rounded-2xl items-center justify-center gap-2 md:gap-3 p-1 md:py-2 md:px-3 '> 
        <div className="w-[13px] h-[13px] rounded-full bg-[#FFFFFFCC]"></div>
        <Link href={link} className='text-[12px] md:text-[15px] font-bold'>{name}</Link>
    </div>
  )
}

export default PaymentMethod