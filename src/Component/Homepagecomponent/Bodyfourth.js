import React from 'react'

function Bodyfourth() {
  return (
    // <div>
    //       <img
    //     className="object-cover w-full h-64 md:h-96"
    //     src="https://images.pexels.com/photos/5675763/pexels-photo-5675763.jpeg"
    //     alt="Banner"
    //   />
    // </div>

    <div className="relative ">
      <div style={{backgroundImage:'url("https://images.pexels.com/photos/5675763/pexels-photo-5675763.jpeg")'}} className='bg-cover w-full h-64 md:h-96 bg-fixed'>
        
      </div>
  
  <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-gray-300 bg-gradient-to-b from-transparent to-black p-4">
    <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">Welcome to Our Website</h1>
    <p className="text-xl md:text-2xl animate-fade-in-up">Explore Our Delicious Menu</p>
  </div>
</div>


  )
}

export default Bodyfourth