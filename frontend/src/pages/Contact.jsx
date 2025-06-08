import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-2xl pt-10 border-t text-center'>
<Title text1={"CONTACT"} text2={" US"}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row pb-28 justify-center gap-10 '>
<img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
     <div className='flex flex-col items-start justify-center gap-6'>
<p className='font-semibold text-xl text-gray-600'>Our Store</p>
<p className='text-gray-500'>54709 Willms Station<br/>
Suite 350, Washington, USA</p>
<p className='text-gray-500'>Tel: (415) 555-0132
  <br/>
Email: admin@forever.com</p>
<p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
<p>Learn more about our teams and job openings.</p>
<button className='px-8 py-4 border border-black text-sm hover:bg-black hover:text-white transition-all duration-500 text-gray-700'>Explore Jobs</button>
     </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact