import React from 'react'
import visa from '@/public/images/visa.png'
import americanEx from '@/public/images/americanEx.png'
import descover from '@/public/images/descover.png'
import bitPay from '@/public/images/bitPay.png'
import gPay from '@/public/images/gPay.png'
import iPay from '@/public/images/iPay.png'
import mestro from '@/public/images/mestro.png'
import paypal from '@/public/images/paypal.png'
import masterCard from '@/public/images/masterCard.png'
import sofort from '@/public/images/sofort.png'
import Image from 'next/image'
import Link from 'next/link'

function Payment() {
  return (
    <div className='w-[100%] flex flex-col justify-center items-center space-y-1 md:space-y-3'>
        <div className='w-[95%] grid grid-cols-5 gap-1'>
            <Link href="#"><Image src={masterCard} alt='masterCard'/></Link>
            <Link href="#"><Image src={bitPay} alt='bitPay'/></Link>
            <Link href="#"><Image src={visa} alt='visa'/></Link>
            <Link href="#"><Image src={americanEx} alt='americanEx'/></Link>
            <Link href="#"><Image src={descover} alt='descover'/></Link>
            <Link href="#"><Image src={sofort} alt='sofort'/></Link>
            <Link href="#"><Image src={gPay} alt='gPay'/></Link>
            <Link href="#"><Image src={iPay} alt='iPay'/></Link>
            <Link href="#"><Image src={paypal} alt='paypal'/></Link>
            <Link href="#"><Image src={mestro} alt='mestro'/></Link>
        </div>
        <p className='text-[15px] text-[#FFFFFF99] font-light'>Become a Tour guide for Us</p>
    </div>
  )
}

export default Payment