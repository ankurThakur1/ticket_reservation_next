"use client";
import Link from "next/link";
import { useState } from "react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="relative bg-cover bg-center">
      <div className="w-full pt-24 bg-center bg-cover bg-no-repeat" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.9) 10%, rgba(0, 0, 0, 0.5)), url("/mountain1.jpg")' }}>
        <div className="max-w-[96%] lg:max-w-[85%] w-full mx-auto">
          <div className="w-full py-12">
            <div className="lg:container py-8 px-4 mx-auto flex flex-col items-center gap-8">
              <p className="lg:text-7xl md:text-5xl text-4xl font-semibold text-white">Contact Us</p>
              <Link href="/">
                <button type="button" className="w-full bg-orange-500 text-white md:text-xl sm:text-sm py-2 px-8 rounded hover:bg-orange-600 transition-all duration-300 cursor-pointer">
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-50">
        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="text-white flex flex-col justify-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-600 py-3 text-center sm:text-left relative z-10">
              Get in <span className="relative text-white before:content-[''] before:absolute before:-top-1 before:-left-2 before:w-full before:h-full before:bg-[orangered] before:-z-10 before:rounded-[5px] before:skew-x-[-20deg] before:px-14 before:py-5 sm:before:px-16 sm:before:py-6 sm:before:-top-1 sm:before:-left-3 md:before:px-20 md:before:py-8">Touch</span> with us
            </h2>
            <p className="text-lg sm:text-xl max-w-md text-stone-600">
              Have questions or need help planning your next trip?  
              Our travel experts are here for you 24/7. Fill out the form and we’ll get back to you as soon as possible.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="bg-white/30 backdrop-blur-sm rounded-xl p-8 shadow-lg space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-gray-800 font-semibold mb-2">First Name</label>
                <input id="firstName" name="firstName" type="text" placeholder="First Name" required onChange={handleChange} className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none shadow-sm placeholder:text-gray-400" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-gray-800 font-semibold mb-2">Last Name</label>
                <input id="lastName" name="lastName" type="text" placeholder="Last Name" required onChange={handleChange} className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none shadow-sm placeholder:text-gray-400" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">Email</label>
              <input id="email" name="email" type="email" placeholder="Email Address" required onChange={handleChange} className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none shadow-sm placeholder:text-gray-400" />
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-800 font-semibold mb-2">Subject</label>
              <input id="subject" name="subject" type="text" placeholder="Subject" required onChange={handleChange} className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none shadow-sm placeholder:text-gray-400" />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-800 font-semibold mb-2">Message</label>
              <textarea id="message" name="message" placeholder="Your message here...." rows={5} required onChange={handleChange} className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none shadow-sm placeholder:text-gray-400" />
            </div>

            <button type="submit" className="w-full py-3 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-lg shadow-md transition-all duration-300 cursor-pointer">Send Message</button>
          </form>
        </div>
      </div>
      <div className="bg-gray-50 bg-opacity-90 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold text-gray-600 mb-8">Contact Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-gray-600">
            <div>
              <h4 className="text-xl font-semibold text-gray-600">WhatsApp</h4>
              <p className="text-lg">
                <Link href="https://wa.me/19999999999" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                  +1-999-999-999
                </Link>
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-600">Address</h4>
              <p className="text-lg text-orange-600">123 Travel Lane, Cityville, USA</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-600">Email</h4>
              <p className="text-lg">
                <Link href="mailto:examplesupport@aeroheven.com" className="text-orange-600 hover:underline">
                  support@aeroheven.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
