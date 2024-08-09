
import React, { useState } from 'react'

function Description() {
    const [counter, updatecounter] = useState(0);
  function decrement(){
    if(counter>0){updatecounter(counter-1);};
  };
  function increment(){
    updatecounter(counter+1);
  };
  return (
 
       
    // <div className='text-left'>
    //   {/* topic */}
    //   <div className=' bg-slate-200'>
    //     <div>
    //       <h4 className='font-bold text-2xl text-center py-5'>Description Here</h4>
    //     </div>

        
         
        
    //       <div className=" gap-4 flex justify-evenly  max-w-sm rounded overflow-hidden shadow-lg">
            
    //             <img className="w-full h-48 object-cover hover:scale-105" src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Burger"/>
           
    //         <div className='flex flex-col md:flex-row md:items-center'>
    //             <p className="font-bold text-xl mb-2">Deluxe Burger</p>
    //             <p className='text-yellow-600'>Cheese Burger</p>
    //             <p className="text-gray-700 text-base">$8.99</p>
    //             <p className='text-gray-700 '>This is the best cheesy burger in this town with ingredient of grilled veggies with parmesian cheese and sour corn with spices</p>

    //             <div className='bg-orange-300 p-0.5 rounded-lg flex justify-center items-center'>
    //                 <button className="text-xl font-bold px-2 border-r-2 border-white "onClick={(decrement) }>-</button>
    //                 <span className="text-xl font-bold mx-2">{counter}</span>
    //                 <button className="text-xl font-bold px-2 border-l-2 border-white"onClick={(increment)}>+</button>
    //             </div>
                
    //             <button className="bg-red-400 text-white font-bold px-2 py-1 mt-3 rounded-lg w-full">Add to Cart</button>
    //         </div>
             
             
            
           
    //       </div>



       
        
    //   </div>
        
    // </div>


    <div className='h-68 w-full bg-slate-300 overflow-hidden'>
        <div>
            <img className="w-full h-48 object-cover hover:scale-105" src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Burger"/>
        </div>
        <div >
            <h2 className='text-yellow-500 font-serif font-bold'>Cheese Burger</h2>
            <h3 className='text-yellow-500 font-bold'>Burger</h3>
            <p>8.99$</p>
            <p className='text-red-600'>Our burger has the best flavor with best ingredients formulated with our locals</p>
            <div className='w-100 flex justify-center'>
            <div className='bg-orange-300 w-20 p-0.5 rounded-lg flex justify-center items-center'>
                <button className="text-xl font-bold px-2 border-r-2 border-white "onClick={(decrement) }>-</button>
                <span className="text-xl font-bold mx-2">{counter}</span>
                <button className="text-xl font-bold px-2 border-l-2 border-white"onClick={(increment)}>+</button>
            </div>
            </div>
            <div className='flex justify-center'>
            <button className="bg-red-400 mb-2 text-white font-bold px-2 py-1 mt-3 rounded-lg">Add to Cart</button>
            </div>
        </div>
        <div>
            <p></p>
        </div>
    </div>

    
  )
  }

   


export default Description