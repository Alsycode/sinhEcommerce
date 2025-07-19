import React, { useState,useEffect } from 'react'
import Navbar from './components/Navbar'
import Sidebar from "../src/components/Sidebar"
import { Routes, Route } from "react-router-dom"
import Add from "../src/pages/Add";
import List from "../src/pages/List"
import Orders from '../src/pages/Orders';
import Login from './components/Login';
export const backendUrl = import.meta.env.VITE_BACKEND_URL
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const [token,setToken] = useState(false)
    useEffect(()=>{
    localStorage.setItem('token',token)
  },[token])
  return (
    <div className='bg-gray-50 min-h-screen'>
       <ToastContainer />
     {token ? (<>
        <Navbar setToken={setToken}/>
        <hr/>
        <div className='flex w-full'>
<Sidebar/>
<div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base '>
<Routes>
  <Route path="/add" element={<Add/>}/>
   <Route path="/list" element={<List/>}/>
    <Route path="/orders" element={<Orders/>}/>
</Routes>
</div>
        </div>
      </>) : (<Login/>) } 
    
    </div>
  )
}

export default App