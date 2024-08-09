import React from 'react'
import { Link } from 'react-router-dom'
import Navbarsecond from './Navbarsecond'
import Navbarthird from './Navbarthird'



 function Navbar() {
  
  return (
    <div className='w-full'>
     
      {/* second nav is Chitwan location one */}
      <Navbarsecond/>
      
      <div className='flex lg:justify-evenly justify-between items-center'>
       
              <div className='lg:ml-0 ml-5'></div>

        <div className=' flex items-center border border-yellow-600 rounded-full'>
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2 mr-2 text-slate-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

              <input type='text' className='focus:outline-none pl-2  w-[30vw] rounded-full h-10 ' placeholder='Search items'></input>
        </div>

        <div>
          <Link><img className=" w-28"  src="./foodiefinderlogo.png" alt=""/></Link>
        </div>
      
      </div>
      
      {/* third nav is list and cart one */}
      <Navbarthird/>
    </div>
  )
}

export default Navbar
