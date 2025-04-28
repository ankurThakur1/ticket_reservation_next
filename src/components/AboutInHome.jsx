import React from 'react'
import Image from 'next/image';
import about from "../../public/about2.jpg";

const AboutInHome = () => {
  return (
    <div className="max-w-[93%] lg:max-w-[85%] w-full mx-auto  ">
      <div className="relative">
        <div className="border-b border-b-gray-200 w-full flex justify-center  py-3" >
          <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold z-10 text-gray-600">Begin Your <span className="relative before:content-[''] before:absolute before:-top-1 before:-left-3 sm:before:-top-2 sm:before:-left-4 md:before:-top-2 md:before:-left-3 before:w-full before:h-full before:px-20 before:py-5 sm:before:px-24 sm:before:py-6 md:before:px-28 md:before:py-7 lg:before:px-36 lg:before:py-8 before:bg-[orangered] before:-z-10 before:rounded-[5px] before:skew-x-[-20deg]  text-white">AeroHeven</span></h4>
        </div>
      </div>
      <div className="flex flex-col  lg:flex-row gap-7 mt-8">
        <div className="p-0 lg:pr-16 basis-[75%]">
        <p className="text-gray-600 text-lg mb-4">
            At <span className="font-semibold">AeroHaven</span>, we believe that every journey starts with a dream — and we’re here to make that dream take flight. We are a passionate team dedicated to helping travelers find the best flight deals, seamless booking experiences, and top-notch customer support all in one place.
          </p>
          <p className="text-gray-600 text-lg mb-4">
            Our mission is simple: to make flight ticket booking easier, faster, and more affordable for everyone. Whether you're planning a vacation, business trip, or a last-minute escape, we offer flexible ticket options tailored to your needs.
          </p>
        </div>
        <div className="sm:w-56 h-90 rounded-full mx-auto w-full">
          <Image src={about} width={0} height={0} alt="about" className="flex-1 rounded-full shadow-md w-full h-full object-cover object-left-top " />
        </div>
      </div>
    </div>
  )
}

export default AboutInHome;