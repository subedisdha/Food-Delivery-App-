import React from 'react'
import { Link } from 'react-router-dom'

function Navbarsecond() {
  return (
    <div>
        <div className='flex justify-between pl-10 pr-10 bg-gray-600 py-1'>
            <div className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-orange-700">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <p className='font-bold text-white'>Chitwan</p>

            </div>

            

<div className="flex gap-5">
  <Link
    className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
    to="/Signup"
  >
    Signup
  </Link>
  <Link
    className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
    to="/Login"
  >
    Login
  </Link>
</div>
{/* <div className='flex gap-5 text-white'>
                <Link className='hover:text-yellow-300' to ={"/Signup"}>Signup</Link>
                <Link className='hover:text-yellow-300' to = {"/Login"}>Login</Link>
            </div> */}

        </div>
    </div>
  )
}

export default Navbarsecond