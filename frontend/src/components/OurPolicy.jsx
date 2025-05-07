import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const OurPolicy = () => {
  return (
    <div className='my-10 text-gray-700 flex justify-around flex-col sm:flex-row gap-12 sm:gap-2 text-center text-xs sm:text-sm md:text-base'>
<div>
    <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt='excahngeIcaon'/>
    <p className='font-semibold'>Easy Exchange policy</p>
    <p className='text-gray-400'>We offer hassle free exchange policy</p>
</div>
<div>
    <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt='excahngeIcaon'/>
    <p className='font-semibold'>7 days return policy</p>
    <p className='text-gray-400'>We provide seven days free return policy`` policy</p>
</div>
<div>
    <img src={assets.support_img} className='w-12 m-auto mb-5' alt='excahngeIcaon'/>
    <p className='font-semibold'>Best customer support</p>
    <p className='text-gray-400'>We provide 24/7 customer support</p>
</div>
    </div>
  )
}

export default OurPolicy