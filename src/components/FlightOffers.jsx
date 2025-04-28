import React from 'react'
import Image from 'next/image';
import data from "@/data/data.js"



const FlightOffers = () => {
  return (
    <div className="max-w-[96%] lg:max-w-[85%] w-full mx-auto">
      <div className="relative">
        <div className="border-b border-b-gray-200 w-full flex justify-center  py-3" >
          <h4 className="text-3xl sm:text-4xl md:text-5xl font-semibold z-10 text-orange-100 sm:whitespace-nowrap whitespace-normal ">Top Flight <span className="relative before:content-[''] before:absolute before:-top-2 before:-left-1 sm:before:-left-2 sm:before:-top-2 before:w-full before:h-full before:px-24 before:py-6 sm:before:px-28 sm:before:py-7  md:before:px-44 md:before:py-8 before:bg-[orangered] before:-z-10 before:rounded-[5px] before:skew-x-[-20deg]  text-white">Deals & Offers</span> Await!</h4>
        </div>
      </div>
      <div className="w-full mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8  ">
        {
          data && data.map((flightData, index) => (
            <div key={index} className="bg-white/40 backdrop-blur-lg rounded-3xl shadow-2xl hover:shadow-xl transition-all duration-300 px-5 py-4 flex flex-col gap-2 border border-white/40">
              <div className="flex items-center justify-between">
                <p className="text-sm text-primary font-semibold text-white">{flightData.date}</p>
              </div>
              <div className="flex items-center justify-between gap-4">
              
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 border-gray-300 border rounded-full flex justify-center items-center">
                    <Image src={flightData.image} width={45} height={45} alt={flightData.from.city} className="rounded-full object-cover shadow-sm" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{flightData.from.code}</h3>
                    <p className="text-xs text-gray-50">{flightData.from.city}</p>
                  </div>
                </div>
                <Image src={flightData.flightIcon} width={80} height={80} alt="Flight Icon" className="object-contain opacity-75 " />           
                <div className="flex items-center gap-3">
                  <div>
                    <h3 className="text-xl font-semibold">{flightData.to.code}</h3>
                    <p className="text-xs text-gray-50">{flightData.to.city}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-white/30">
                <div>
                  <span className="text-xs text-gray-50">Starting From</span>
                  <h3 className="text-2xl font-bold text-primary">${flightData.price}</h3>
                </div>
                <button className="px-6 py-2 shadow-stone-500 shadow-lg bg-gray-100 hover:bg-orange-600 hover:shadow-orange-700 hover:shadow-lg  text-gray-800 hover:text-gray-100 rounded-full text-xs font-semibold  transition-all duration-300 cursor-pointer">
                  Book Now
                </button>
              </div>
            </div>
          ))
        }
      </div>
      <div className="mt-6">
        <p className="text-xs sm:text-sm text-white">Note:Note: Fares are round trip. Fuel surcharges, taxes & fees, as well as our service fees, are included in the fares.The fares displayed are based on historical data and cannot be assured at the time of booking. Refer our booking <span className="text-purple-800">terms & conditions</span> here.</p>
      </div>
    </div>
  )
}

export default FlightOffers;