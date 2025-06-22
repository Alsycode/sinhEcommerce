import React from 'react'
import {assets} from "../assets/assets.js"
const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-[4%] py-2'>
        <img src={assets.logo} className='w-[max(10%,80px)]' alt='logo' />
        <button className='bg-gray-600 text-white text-sm sm:text-sm rounded-full px-5 py-2 sm:px-7 sm:py-2 '>Logout</button>
    </div>
  )
}

export default Navbar