import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
<div>
    <img src={assets.logo} alt='logo-image' className='mb-10 w-32'/>
    <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore corporis illum nesciunt dolor repellat rerum et tempore asperiores? Dignissimos, atque eveniet at officia voluptate mollitia eius repellat exercitationem, delectus vitae beatae optio voluptatibus distinctio. Reprehenderit veniam mollitia consequuntur assumenda rerum.</p>
</div>
<div >
    <p className='text-xl  font-medium mb-5 text-black'>COMPANY</p>
    <ul className='text-gray-600 flex flex-col gap-2 '>
        <li>Home</li>
        <li>About Us</li>
        <li>Delivery</li>
        <li>Privacy</li>
    </ul>

</div>
<div>
    <p className='text-xl mb-5 font-medium text-black'>GET IN TOUCH</p>
    <ul className='flex flex-col gap-1 text-gray-600'>
<li>+98995882822</li>
<li>sinh@sinh.com</li>
    </ul>
</div>

        </div>
        <div>
    <hr className='text-gray-600'/>
<p className='text-center text-md py-10 text-gray-700'>Copyright 2025@sinh.com - All right reserved</p>
</div>
    </div>
  )}

export default Footer