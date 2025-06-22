import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2'>
        <div className='flex flex-col pt-6 gap-4 pl-[20%] text-[15px]'>
            <NavLink className="flex items-center px-3 py-2 border border-gray-300 border-r-0 rounded-lg gap-3 " to="/add">
<img src={assets.add_icon} alt='add' className='w-5 h-5' />
<p className='hidden md:block'>
Add Items
</p>
            </NavLink>
                 
                  <NavLink className="flex items-center px-3 py-2 border border-gray-300 border-r-0 rounded-lg gap-3 " to="/list">
<img src={assets.add_icon} alt='add' className='w-5 h-5' />
<p className='hidden md:block'>
List Items
</p>
            </NavLink>
                  <NavLink className="flex items-center px-3 py-2 border border-gray-300 border-r-0 rounded-lg gap-3 " to="/orders">
<img src={assets.add_icon} alt='add' className='w-5 h-5' />
<p className='hidden md:block'>
Order Items
</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar