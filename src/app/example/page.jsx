
import React from 'react';
import Image from 'next/image';
import villaImage from '/public/airlines_resver.jpg'; 

export default function NewsletterSubscribe() {
  return (
    <div className="max-w-6xl mx-auto my-16 p-6 bg-white rounded-3xl shadow-md flex flex-col md:flex-row items-center overflow-hidden">
      
      <div className="relative w-full md:w-1/2 h-64 md:h-80">
        <Image 
          src={villaImage}
          alt="Luxury Villa"
          layout="fill"
          objectFit="cover"
          className="rounded-l-3xl"
        />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Get special offers, <br /> and more from travelworld
        </h2>
        
        <form className="flex w-full max-w-md bg-white shadow-inner rounded-full overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-5 py-3 text-gray-700 text-sm focus:outline-none"
          />
          <button
            type="submit"
            className="bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-6 py-3"
          >
            Subscribe
          </button>
        </form>
      </div>

    </div>
  );
}

