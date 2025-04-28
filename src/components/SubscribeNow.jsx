import Image from 'next/image';
import React from 'react'

const SubscribeNow = () => {
  return (
    <div className="max-w-6xl mx-auto my-16  bg-stone-200 rounded-3xl shadow-xl flex flex-col md:flex-row items-center  ">
      <div className="relative w-full md:w-md h-64 md:h-80">
        <Image 
          src="/mountain.jpg"
          alt="mountain"
          fill
          className="rounded-l-3xl rounded-r-3xl md:rounded-l-3xl md:rounded-r-none object-cover "
        />
      </div>
      <div className="flex-1 flex flex-col py-5 items-center justify-center md:px-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-600 mb-4">
          Get special offers, <br /> and more from travelworld
        </h2>
        <form className="flex w-full max-w-sm sm:max-w-md bg-white shadow-inner rounded-full overflow-hidden px-1 py-1 sm:px-3 sm:py-2">
          <input type="email" placeholder="Enter your email" className="flex-grow px-5 py-3 text-gray-700 text-sm focus:outline-none" />
          <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 sm:px-6 sm:py-3 cursor-pointer rounded-full transition-all duration-300" >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

export default SubscribeNow;