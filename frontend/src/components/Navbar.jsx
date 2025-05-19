import React from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
const Navbar = () => {
  const {setShowSearch,getCartCount} = useContext(ShopContext)
  const [visible, setVisible] = useState(false);
  console.log(visible)
  return (
    <div id='navvvv' className='flex justify-between items-center py-5 w-full'>
    {/* <Link to="/"> <img src={assets.logo} alt='logo image' className='w-36'/></Link>  */}
    <h2 className=''>
      <span className='text-3xl'>S</span><span className='text-2xl'>IN</span><span className='text-3xl'>H</span>
    </h2>
      <ul className='text-gray-700 text-sm hidden sm:flex font-semibold gap-5'>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "flex flex-col items-center gap-1 text-gray-700 active" : "flex flex-col items-center gap-1 text-gray-700"}
          >
            <p>HOME</p>
            <hr className='w-2/4 text-gray-700 border-none h-[1.5px] hidden'/>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/collection"
            className={({ isActive }) => isActive ? "flex flex-col items-center gap-1 text-gray-700 active" : "flex flex-col items-center gap-1 text-gray-700"}
          >
            <p>COLLECTION</p>
            <hr className='w-2/4 text-gray-700 border-none h-[1.5px] hidden'/>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? "flex flex-col items-center gap-1 text-gray-700 active" : "flex flex-col items-center gap-1 text-gray-700"}
          >
            <p>ABOUT</p>
            <hr className='w-2/4 text-gray-700 border-none h-[1.5px] hidden'/>
          </NavLink>
        </li>
        <li>
          <NavLink
            href="/contact"
            className={({ isActive }) => isActive ? "flex flex-col items-center gap-1 text-gray-700 active" : "flex flex-col items-center gap-1 text-gray-700"}
          >
            <p>CONTACT</p>
            <hr className='w-2/4 text-gray-700 border-none h-[1.5px] hidden'/>
          </NavLink>
        </li>
      </ul>
      <div className='flex items-center gap-6'>
<img onClick={()=>setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-ponter" alt='searchIcon'/>
<div className='group  relative'>
<Link to="/login"><img src={assets.profile_icon} className='w-5 cursor-pointer' alt='profileIcon'/></Link>
<div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
<div className='flex flex-col py-3 px-2 w-36 bg-slate-100 text-gray-500 rounded'>
  <p className='cursor-pointer hover:text-black'>My Profile</p>
  <p className='cursor-pointer hover:text-black'>Orders</p>
  <p className='cursor-pointer hover:text-black'>Logout</p>

</div>
</div>

</div>
<Link to="/cart" className='relative'>
<img src={assets.cart_icon}  className="w-5 cursor-pointer " alt='cartIcon'/>
<p className='text-[8px] right-[-5px] bottom-[-5px] absolute bg-black  w-4 text-center text-white rounded-full aspect-square leading-4'>{getCartCount()}</p>
     </Link>
     <img src={assets.menu_icon} onClick={()=>setVisible(true)} alt='menu icon' className='w-5 cursor-pointer sm:hidden'/> </div>
{/* 
     sidebar in small screens */}
     <div className={`absolute top-0 left-0 overflow-hidden transition-all h-[100%] bg-white   ${visible ? "w-full" : "w-0"}`}>
<div onClick={()=>setVisible(false)}className='flex text-gray-500 items-center p-3 gap-4 cursor-pointer'>
<img src={assets.dropdown_icon} alt='dropdownIcon' className='h-4 rotate-180'/>
<p className=''>Back</p>
</div>
<div className='flex flex-col text-black'>
<NavLink to="./" className="py-2 pl-5 border" onClick={()=>setVisible(false)}>HOME</NavLink>
<NavLink to="./" className="py-2 pl-5 border" onClick={()=>setVisible(false)}>COLLECTION</NavLink>
<NavLink to="./" className="py-2 pl-5 border" onClick={()=>setVisible(false)}>ABOUT</NavLink>
<NavLink to="./" className="py-2 pl-5 border" onClick={()=>setVisible(false)}>CONTACT</NavLink>
</div>
</div>
    </div>
  );
};

export default Navbar;
