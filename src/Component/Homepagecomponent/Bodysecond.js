import React, { useState } from 'react'


function Bodysecond() {
  const [counter, updatecounter] = useState(0);
  function decrement(){
    if(counter>0){updatecounter(counter-1);};
  };
  function increment(){
    updatecounter(counter+1);
  };
  return (
    <div className='text-left'>
      {/* topic */}
      <div>
        <div>
          <h4 className='font-bold text-2xl'>Today's special offers</h4>
        </div>

        
         
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full h-48 object-cover hover:scale-105" src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Burger"/>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Deluxe Burger</div>
              <p className='text-yellow-600'>Cheese Burger</p>

              <div className='flex justify-between'>
                <p class="text-gray-700 text-base">$8.99</p>

                <div className='bg-orange-300 p-0.5 rounded-lg justify-between items-center'>
                <button class="text-xl font-bold px-2 border-r-2 border-white "onClick={(decrement) }>-</button>
                <span class="text-xl font-bold mx-2">{counter}</span>
                <button class="text-xl font-bold px-2 border-l-2 border-white"onClick={(increment)}>+</button>
                </div>
                
              
              </div>
             
              <button className="bg-red-400 text-white font-bold px-2 py-1 mt-3 rounded-lg w-full">Add to Cart</button>
            </div>
           
          </div>



        </div>
       
        
      </div>
        
    </div>
  )
}

export default Bodysecond