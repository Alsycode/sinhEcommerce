import React from 'react'

const Login = () => {
  return (
    <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
        <h1 className='text-2xl font-bold mb-4'>
            Admin Panel
        </h1>
        <form>
            <div >
                <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
                <input type='email' required placeholder='your@email.com' className='rounded-md border px-3 py-2 w-full border-gray-300 outline-none'/>
            </div>
            <div>
              <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
              <input className='rounded-md border px-3 py-2 w-full border-gray-300 outline-none'/>
            </div>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login