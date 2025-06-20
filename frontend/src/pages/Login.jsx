import React from 'react'
import { useState } from 'react'
const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const onSubmitHandler = async (e) => {
    e.preventDefault();
  }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
<div className='inline-flex items-center gap-2 mb-2 mt-10'>
<p className='prata-regular text-3xl text-gray-700'>{currentState}</p>
<hr className='border-none w-8 h-[1.5px] bg-gray-800'/>
</div>
{currentState === "Login" ? "" : (<input className='w-full px-3 py-2 border border-gray-800' type='text' placeholder='Name' required/>)}
<input className='w-full px-3 py-2 border border-gray-800' type='email' placeholder='Email' required/>
<input className='w-full px-3 py-2 border border-gray-800' type='password'  required placeholder='Password'/>
<div className='flex w-full justify-between text-sm mt-[-8px]'>
{currentState === "Sign Up" ? "" : (<p className='cursor-pointer'>Forgot your password ?</p>)}
{currentState === "Login" ? (<p className='cursor-pointer' onClick={()=>setCurrentState("Sign Up")}>Create new account</p>) : (<p className='cursor-pointer' onClick={()=>setCurrentState("Login")}>Login here</p>) }
</div>
<button className='text-white bg-black rounded-md px-8 py-2 mt-4 font-light'> {currentState === "Login" ? "Sign In" : "Sign Up"}</button>
    </form>
  )
}

export default Login