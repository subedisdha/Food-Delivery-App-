import React from 'react'

function Bodyfifth() {
  
  return (
    <div>

        {/* <div>
        <p className="font-extrabold tracking-wider my-2">Choose Restaurant</p>
        <div className="flex justify-evenly font-serif mb-4 border-t-2 border-b-2 border-gray-400">
            <button className="bg-orange-200 hover:bg-red-500 transition-colors duration-300 ease-in-out py-2 px-4 rounded-lg focus:outline-none">
            Baishnab
            </button>
            <button className="bg-orange-200 hover:bg-red-500 transition-colors duration-300 ease-in-out py-2 px-4 rounded-lg focus:outline-none">
            Vegan Paradise
            </button>
            <button className="bg-orange-200 hover:bg-red-500 transition-colors duration-300 ease-in-out py-2 px-4 rounded-lg focus:outline-none">
            Black Forest
            </button>
            <button className="bg-orange-200 hover:bg-red-500 transition-colors duration-300 ease-in-out py-2 px-4 rounded-lg focus:outline-none">
            Chojala
            </button>
        </div>
        </div> */}


      <div className="border-t-2 border-b-2 border-gray-400 border-opacity-50">
        <p className="font-extrabold tracking-wider my-2">Choose Restaurant</p>
        <div className="flex justify-evenly font-serif mb-4">
          <button className="bg-orange-200 hover:bg-red-500 transition-colors duration-300 ease-in-out py-2 px-4 rounded-lg focus:outline-none">
            Baishnab
          </button>
          <button className="bg-orange-200 hover:bg-red-500 transition-colors duration-300 ease-in-out py-2 px-4 rounded-lg focus:outline-none">
            Vegan Paradise
          </button>
          <button className="bg-orange-200 hover:bg-red-500 transition-colors duration-300 ease-in-out py-2 px-4 rounded-lg focus:outline-none">
            Black Forest
          </button>
          <button className="bg-orange-200 hover:bg-red-500 transition-colors duration-300 ease-in-out py-2 px-4 rounded-lg focus:outline-none">
            Chojala
          </button>
        </div>
      </div>


        {/* another div for footer like  */}

        <div className="relative">
        <img
          src="https://images.pexels.com/photos/1631899/pexels-photo-1631899.jpeg"
          alt="Placeholder"
          className="w-full h-40 md:h-64 object-cover opacity-80"
        />
        <div className="absolute inset-0 flex justify-center items-center mb-16">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">Khana Finder</h1>
            <p className="text-lg md:text-xl text-white ">
            "Experience a culinary journey like never before. Order from our app and indulge in a world of flavors delivered to your doorstep."
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 p-4">
          <img
            src="./foodiefinderlogo.png"
            alt="Logo"
            className="w-20 h-20 rounded-full"
          />
        </div>
        <div className="absolute bottom-0 right-0 p-4">
          <p className="text-sm text-white font-mono">Follow us on Social Media</p>
          <p className='text-sm font-semibold text-red-500'>Facebook    Instagram  </p>
        </div>
      </div>


    </div>

  )
}

export default Bodyfifth