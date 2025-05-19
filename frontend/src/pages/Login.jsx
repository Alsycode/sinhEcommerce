import React from 'react'
import { useState } from 'react'
const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up")
  return (
    <form className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
<div className='inline-flex items-center gap-2 mb-2 mt-10'>
<p className='prata-regular text-3xl text-gray-700'>{currentState}</p>
<hr className='border-none w-8 h-[1.5px] bg-gray-800'/>
</div>
<input className='w-full px-3 py-2 border border-gray-800' type='text' placeholder='Name'/>
<input className='w-full px-3 py-2 border border-gray-800' type='email' placeholder='Email'/>
<input className='w-full px-3 py-2 border border-gray-800' type='password' placeholder='Password'/>
    </form>
  )
}

export default Login