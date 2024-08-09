import React,{useState} from 'react'


function Cardsection() {
    const [counter, updatecounter] = useState(0);
  function decrement(){
    if(counter>0){updatecounter(counter-1);};
  };
  function increment(){
    updatecounter(counter+1);
  };
  return (
    <div>
      <div>
          <div style={{boxShadow:"5px 5px 5px orange"}} class="w-[100dvw] lg:w-full md:w-full rounded overflow-hidden hover:scale-105 duration-300 hover:shadow-2xl shadow-lg">
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
  )
}

export default Cardsection