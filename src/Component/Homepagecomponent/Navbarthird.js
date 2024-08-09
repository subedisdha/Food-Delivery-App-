import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

function Navbarthird() {
       
        function clickedData(){
            if(showing === false){
                setshowing(true);
                console.log("true");
            }
            else{
                setshowing(false);
                console.log("false");
            }    
            
            // setshowing(!showing);
           }
           const [showing ,setshowing] = useState(false);
        // use state hooks for resize
        const [resizing, setresizing] = useState(false);

        const [first ,setfirst] = useState(false);
        useEffect(()=>{
            // for resize event
            window.addEventListener("resize",()=>{
                
                const size = window.innerWidth;
                console.log(size);
                    if(size>640){
                        setshowing(false);
                        
                    }
                
            })
               
            // for scroll event
            window.addEventListener("scroll",()=>{
             
              const scrollHeight = window.scrollY || document.documentElement.scrollTop;
              console.log(scrollHeight);
              if(scrollHeight>420){
                setfirst(true);
              }else{
                setfirst(false);
                
              }

              return () => {
                window.removeEventListener('scroll');
                window.removeEventListener("resize");
              };
            })
        },[])
      
  const popup=()=>{

  };
  return (
    
    <div>
        <div style={{position:first?"fixed":"initial" ,top:0}} className='bg-gradient-to-r from-red-500 via-orange-400 to-amber-50 flex justify-between items-center z-20 w-full'>
            {/* navbar icon for small screen */}
            <NavLink onClick={clickedData} className='sm:hidden'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-orange-100 hover:stroke-slate-600 ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          </NavLink>
            {/* Navitem */}
            <div  className='sm:block hidden z-20'>
                <ul className='flex items-center text-white'>
                    <li className=' cursor-pointer px-2 py-3 hover:transition hover:duration-300 hover:bg-orange-400 hover:text-red-800  border-slate-700 '><Link>Home</Link></li>
                    <li className=' cursor-pointer px-2 py-3 hover:transition hover:duration-300  hover:bg-orange-400 hover:text-red-800'><Link>Veg Restaurant</Link></li>
                    <li className=' cursor-pointer px-2 py-3 hover:transition hover:duration-300  hover:bg-orange-400 hover:text-red-800'><Link>Non-Veg Restaurant</Link></li>
                    <li className=' cursor-pointer px-2 py-3 hover:transition hover:duration-300  hover:bg-orange-400 hover:text-red-800'><Link>Bakeries</Link></li>
                </ul>
            </div>
            {/* cart */}

            <div className='flex items-center relative  gap-1 mr-5'>
                <div>
                    <Link to={'/Cart'}>
                    {/* icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    </Link>


                    {/* cart count */}
                    <div className='h-5 w-5 absolute text-sm top-0 left-3 opacity-90 bg-red-600 rounded-full flex items-center justify-center '><span>0</span></div>

                </div>
               
            </div>
        </div>

        <div id="hiding" style={{display:showing?"block":"none",position:first?"fixed":"initial" ,top:"20px"}} className='w-full hidden bg-slate-400'>
        
                <ul className='flex items-center text-white bg-slate-400 z-20'>
                    <li className=' cursor-pointer px-2 py-3 hover:transition hover:duration-300 hover:bg-orange-400 hover:text-red-800  border-slate-700 '><Link>Home</Link></li>
                    <li className=' cursor-pointer px-2 py-3 hover:transition hover:duration-300  hover:bg-orange-400 hover:text-red-800'><Link>Veg Restaurant</Link></li>
                    <li className=' cursor-pointer px-2 py-3 hover:transition hover:duration-300  hover:bg-orange-400 hover:text-red-800'><Link>Non-Veg Restaurant</Link></li>
                    <li className=' cursor-pointer px-2 py-3 hover:transition hover:duration-300  hover:bg-orange-400 hover:text-red-800'><Link>Bakeries</Link></li>
                </ul>
            </div>
        
    </div>
  )
}

export default Navbarthird