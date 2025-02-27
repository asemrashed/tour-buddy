import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import item1 from '@/public/images/item1.jpeg'
import item2 from '@/public/images/item2.png'
import item3 from '@/public/images/item3.png'
import item4 from '@/public/images/item4.png'
import item5 from '@/public/images/item5.png'
import item6 from '@/public/images/item6.png'
import item7 from '@/public/images/item7.png'
import item8 from '@/public/images/item8.svg'
import item9 from '@/public/images/item9.svg'
import item10 from '@/public/images/item10.svg'
import item11 from '@/public/images/item11.svg'
import item12 from '@/public/images/item2.png'
import item13 from '@/public/images/item3.png'
import item14 from '@/public/images/item4.png'
import item15 from '@/public/images/item5.png'
import item16 from '@/public/images/item6.png'
import item17 from '@/public/images/item7.png'
import item18 from '@/public/images/item8.svg'

const payments = [
    {id:1, imgLink: item1, url:'#'},
    {id:2, imgLink: item2, url:'#'},
    {id:3, imgLink: item3, url:'#'},
    {id:4, imgLink: item4, url:'#'},
    {id:5, imgLink: item5, url:'#'},
    {id:6, imgLink: item6, url:'#'},
    {id:7, imgLink: item7, url:'#'},
    {id:8, imgLink: item8, url:'#'},
    {id:9, imgLink: item9, url:'#'},
    {id:10, imgLink: item10, url:'#'},
    {id:11, imgLink: item11, url:'#'},
    {id:12, imgLink: item12, url:'#'},
    {id:13, imgLink: item13, url:'#'},
    {id:14, imgLink: item14, url:'#'},
    {id:15, imgLink: item15, url:'#'},
    {id:16, imgLink: item16, url:'#'},
    {id:17, imgLink: item17, url:'#'},
    {id:18, imgLink: item18, url:'#'},
    {id:19, imgLink: item1, url:'#'},
    {id:20, imgLink: item2, url:'#'},
    {id:21, imgLink: item3, url:'#'},
    {id:22, imgLink: item4, url:'#'},
    {id:23, imgLink: item5, url:'#'},
    {id:24, imgLink: item6, url:'#'},
    {id:25, imgLink: item7, url:'#'},
    {id:26, imgLink: item8, url:'#'},
    {id:27, imgLink: item9, url:'#'},
    {id:28, imgLink: item10, url:'#'},
    {id:29, imgLink: item11, url:'#'},
    {id:30, imgLink: item12, url:'#'},
    {id:31, imgLink: item13, url:'#'},
]
function PaymentOption() {
  return (
    <div className='w-[80%] md:w-[50%] grid grid-cols-6 md:grid-cols-9 gap-3'>
        {payments.map((payment =>(
            <Link href={payment.url} key={payment.id} >
                <div className=' h-[65px] rounded border  flex items-center'>
                    <Image src={payment.imgLink} alt='payment option' className='p-1'/>
                </div>
            </Link>
        )))}
    </div>
  )
}

export default PaymentOption