import React from 'react'
import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io";
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="w-full   ">
      <div className="w-full pt-24 bg-center bg-cover bg-no-repeat" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.9) 10%, rgba(0, 0, 0, 0.5)), url("/mountain1.jpg")'}}>
        <div  className="max-w-[96%] lg:max-w-[85%] w-full mx-auto " >
          <div className="w-full   py-12">
            <div className="lg:container py-8 px-4 mx-auto flex flex-col  items-center gap-8 ">
              <p className="lg:text-7xl md:text-5xl  text-4xl font-semibold text-white">About Us</p>
              <Link href="/">
                <button type="button" className="w-full bg-orange-500 text-white md:text-xl sm:text-sm py-2 px-8 rounded hover:bg-orange-600 transition-all duration-300 cursor-pointer">Back to Home</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:container w-full mx-auto">
        <section className="relative w-full py-20 px-6 ">
          <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
            <div className="flex-1">
            <h4 className="text-5xl font-semibold z-10 text-gray-600 py-3">About <span className="relative before:content-[''] before:absolute before:-top-0.5 before:-left-2  before:w-fit before:h-full before:px-10 before:py-6 before:bg-[orangered] before:-z-10 before:rounded-[5px] before:skew-x-[-20deg]  text-white">Us</span></h4>
              <p className="text-gray-600 text-lg mb-4">
                At <span className="font-semibold">AeroHaven</span>, we believe that every journey starts with a dream — and we’re here to make that dream take flight. We are a passionate team dedicated to helping travelers find the best flight deals, seamless booking experiences, and top-notch customer support all in one place.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                Our mission is simple: to make flight ticket booking easier, faster, and more affordable for everyone. Whether you're planning a vacation, business trip, or a last-minute escape, we offer flexible ticket options tailored to your needs.
              </p>
              <ul className="list-disc list-inside text-gray-700 text-md space-y-2">
                <li>Unbeatable Prices — best deals across hundreds of airlines.</li>
                <li>Easy Booking Process — quick and hassle-free experience.</li>
                <li>24/7 Customer Support — expert assistance whenever you need it.</li>
                <li>Secure Payments — your information is safe with us.</li>
              </ul>
              <button className="mt-8 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 hover:shadow-orange-500 hover:shadow-lg transition-all duration-300 cursor-pointer">
                Book Your Flight
              </button>
            </div>
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-[550px] rounded-full shadow-xl mx-auto">
              <Image src="/person.jpg" alt="Flight Journey" fill className="rounded-full object-cover object-center shadow-xl" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutUs;