import React, { useState } from 'react'
import { CiMedicalCross } from "react-icons/ci";
import { Link } from 'react-router-dom';


function Cartsection() {

    
  return (
    
        <div className='w-[100vw] flex flex-row  '>
           
            <div className=' w-full bg-white flex flex-col '>
                <div className='flex items-center text-2xl  text-white font-bold px-3 py-5 shadow-xl bg-orange-500'>
                    <p className='grow text-center'>Cart</p>
                    {/* cart cross logo */}
                    <Link to={'/'} ><CiMedicalCross className='rotate-45'/></Link>
                    
                </div>
                <div>

                </div>
            </div>
        </div>
    
  )
}

export default Cartsection