import React from 'react'
import newYork from "../../public/new-york.jpg";
import chicago from "../../public/chicago.jpg";
import losAngeles from "../../public/los-angele.jpg";
import sanDiego from "../../public/san-diego.jpg";
import seattle from "../../public/seattle.jpg";
import tampa from "../../public/tampa.jpg";
import Image from 'next/image';

const destinationCards = [
  {
    city: "New York",
    price: 167,
    image: newYork
  },
  {
    city: "Chicago",
    price: 199,
    image: chicago
  },
  {
    city: "Los Angeles",
    price: 195,
    image: losAngeles
  },
  {
    city: "San Diego",
    price: 158,
    image: sanDiego
  },
  {
    city: "Seattle",
    price: 114,
    image: seattle
  },
  // {
  //   city: "Tampa",
  //   price: 215,
  //   image: tampa
  // }
];

const TopDestinations = () => {
  return (
    <div className="max-w-[96%] lg:max-w-[85%] w-full mx-auto py-16">
      <div className="relative">
        <div className="border-b border-b-gray-200 w-full flex justify-center  py-3" >
          <h4 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-600">Top <span className="relative before:content-[''] before:absolute before:-top-2 before:-left-3  before:w-full before:h-full before:px-24 before:py-6 sm:before:px-28 sm:before:py-7 md:before:px-40 md:before:py-8 before:bg-[orangered] before:-z-10 before:rounded-[5px] before:skew-x-[-20deg] text-white">Destinations</span></h4>
        </div>
      </div>
      <div className="flex justify-between items-center md:flex-row flex-col py-8 gap-4">
        <div className="px-2 basis-[48%] h-full flex flex-col items-start gap-10">
          <p className="text-xl text-gray-600">
            Looking for your next getaway? Explore our most popular destinations — from iconic cities to exotic escapes. Whether you're planning a weekend city break or a long-haul adventure, we offer unbeatable flight deals to the most sought-after places around the globe. Discover vibrant cultures, stunning landscapes, and unforgettable experiences. Your dream trip starts here!
          </p>
          <button className="mt-3 bg-orange-500 text-white py-2 px-6 rounded-4xl hover:bg-orange-600 hover:shadow-orange-500 hover:shadow-lg transition-all duration-300 cursor-pointer">Discover More</button>
        </div>
        <div className="w-full  mt-6 flex md:flex-row  md:items-center flex-col gap-3 lg:gap-2 sm:flex-wrap basis-1/2 ">
          {
            destinationCards.map((card, index) => (
              <div className="  rounded-lg w-full h-52 sm:h-40 sm:basis-[49%] md:basis-[48%] lg:basis-[31%] flex-[1_0_auto]  relative overflow-hidden group cursor-pointer shadow-md" key={index}>
                <div className="w-full h-full rounded-md">
                  <Image src={card.image} width="100%" height="100%" alt={card.city} className="rounded-md object-cover  group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 w-full h-full" />
                </div>
                <div className="w-full h-full absolute top-0 left-0 bg-gray-800 rounded-md opacity-25" />
                <div className="absolute top-0 left-0 w-full h-full p-2">
                  <div className="w-fit px-2 pt-2">
                    <span className="text-white">Flight To</span>
                    <p className="text-lg sm:text-3xl lg:text-xl md:text-lg text-white font-semibold">{card.city}</p>
                  </div>
                  <div className="absolute bottom-3 right-3 ">
                    <p className="text-white">Start From <span className="text-lg sm:text-3xl lg:text-lg md:text-lg font-semibold">${card.price}</span></p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default TopDestinations;