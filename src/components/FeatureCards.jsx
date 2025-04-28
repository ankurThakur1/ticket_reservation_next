import React from 'react'
import payIcon from "../../public/pay-icon.png";
import searchIcon from "../../public/search-icon.png";
import secureIcon from "../../public/secure-icon.png";
import ticketIcon from "../../public/pay-icon.png";
import Image from 'next/image';

const cards = [
  {
    title: "Ultra-Secure & Trusted",
    para: "Your privacy and data security are always our number-one priority",
    icon: secureIcon
  },
  {
    title: "Enjoy Greater Flexibility",
    para: "Modify your travel dates with our Flexible Ticket option*",
    icon: ticketIcon
  },
  {
    title: "Explore Our Selection",
    para: "Effortlessly compare flights, airlines, and prices – all in one convenient location",
    icon: searchIcon
  },
  {
    title: "No Hidden Fees",
    para: "Receive a transparent price breakdown at every step",
    icon: payIcon
  }
]; 


const FeatureCards = () => {
  return (
    <div className="max-w-[96%] lg:max-w-[85%] w-full mx-auto grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-3 py-2">
      {
        cards.map((card, index) => (
          <div key={index} className="px-2 py-3 border border-gray-200 rounded-lg shadow-md hover:scale-110 hover:bg-orange-100 transition-all duration-300">
            <Image src={card.icon} width={50} height={50} alt={card.title} className="mb-2" />
            <div className=" flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-[#075eb8]">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.para}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default FeatureCards;