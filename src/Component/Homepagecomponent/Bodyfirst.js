import React from 'react'
import { FaLeaf } from "react-icons/fa";
import { TbMeat } from "react-icons/tb";
import { MdLiquor } from "react-icons/md";
import { GiSlicedBread } from "react-icons/gi";

function Bodyfirst() {
  return (
    <div className='lg:mx-24 '>
      <p className='mt-5 mx-5 text-left lg:text-3xl text-xl'>Shop by Categories</p>
      <p className='text-left mt-2 mx-2 my-2'>We are always ready for you to serve.</p>

      {/* <div className='grid lg:gap-5 gap-2 grid-cols-2 lg:grid-cols-4 '>
        <div className='bg-green-600 items'><FaLeaf className='w-20 h-20 fill-white'/></div>
        <div className='bg-red-700 items'><TbMeat className='w-20 h-20 stroke-white'/></div>
        <div className='bg-red-700 items'><MdLiquor className='w-20 h-20 fill-white'/></div>
        <div className='bg-orange-600 items'><GiSlicedBread className='w-20 h-20 fill-white'/></div>
      </div> */}

<div className='grid lg:gap-5 gap-4 grid-cols-2 lg:grid-cols-4 mx-4'>
  <div className='bg-green-600 items flex justify-center items-center rounded-lg shadow-lg'>
    <FaLeaf className='w-20 h-20 fill-white'/>
  </div>
  <div className='bg-red-700 items flex justify-center items-center rounded-lg shadow-lg'>
    <TbMeat className='w-20 h-20 stroke-white'/>
  </div>
  <div className='bg-red-700 items flex justify-center items-center rounded-lg shadow-lg'>
    <MdLiquor className='w-20 h-20 fill-white'/>
  </div>
  <div className='bg-orange-600 items flex justify-center items-center rounded-lg shadow-lg'>
    <GiSlicedBread className='w-20 h-20 fill-white'/>
  </div>
</div>


    </div>
  )
}

export default Bodyfirst 