"use client";
import React, { useState } from 'react';
import { MdSwapHoriz, MdSearch } from 'react-icons/md';

const HeroForm = () => {
  const [isPassengerOpen, setPassengerOpen] = useState(false);
  const [passengers, setPassengers] = useState({ 
    adult: 1,
    child: 0,
    infant: 0 
  });

  const options = ["Economy", "Premium Economy", "Business", "First Class"];

  const updateCount = (type, delta) => {
    setPassengers((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + delta),
    }));
  };

  return (
    <form className="lg:w-3xl md:2xl w-full bg-black/50 backdrop-blur-lg border border-white/20 rounded-xl p-6 md:p-8 shadow-xl text-white space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-3 cursor-pointer">
          <label className="flex items-center gap-2">
            <input type="radio" name="trip" className="accent-blue-500" defaultChecked />
            Round Trip
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="trip" className="accent-blue-500" />
            One Way
          </label>
        </div>
        <select className="bg-white/20 text-sm px-3 py-2 rounded-md backdrop-blur-md cursor-pointer ">
          {
            options.map((opt, i) => (
            <option key={i} className="text-gray-950">{opt}</option>
          ))}
        </select>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-4">
        <div className="flex sm:justify-between sm:items-end flex-col sm:flex-row  gap-2">
          <div className="flex flex-col items-start basis-[48%]">
            <label className="text-sm font-medium mb-1">From</label>
            <input type="text" placeholder="City or Airport" className="p-3 rounded-md text-sm bg-white/10 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white w-full" />
          </div>
          <div className="flex items-center justify-center py-2 basis-[5%]">
            <span><MdSwapHoriz className="text-blue-400 cursor-pointer text-3xl hover:text-blue-300 transition" /></span>
          </div>
          <div className="flex flex-col items-start basis-[48%]">
            <label className="text-sm font-medium mb-1">To</label>
            <input type="text" placeholder="City or Airport" className="p-3 rounded-md text-sm bg-white/10 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white w-full" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2">
          <div className="flex flex-col items-start basis-[48%]">
            <label className="text-sm font-medium mb-1">Depart</label>
            <input type="date" className="p-3 rounded-md text-sm bg-white/10 focus:outline-none focus:ring-2 focus:ring-white w-full" />
          </div>
          <div className="flex flex-col items-start basis-[48%]">
            <label className="text-sm font-medium mb-1">Return</label>
            <input type="date" className="p-3 rounded-md text-sm bg-white/10 focus:outline-none focus:ring-2 focus:ring-white w-full" />
          </div>
        </div>
        <div className="flex sm:justify-between sm:items-end flex-col sm:flex-row gap-3">
          <div className="relative flex flex-col items-start sm:basis-[48%] w-full">
            <label className="text-sm font-medium mb-1">Travelers</label>
            <div onClick={() => setPassengerOpen(!isPassengerOpen)} className="p-3 bg-white/10 rounded-md cursor-pointer select-none hover:bg-white/20 w-full text-left">
              {passengers.adult + passengers.child + passengers.infant} Passenger
            </div>
            {
              isPassengerOpen && (
                <div className="absolute -top-10 mt-2 w-full bg-white text-gray-800 rounded-lg shadow-lg p-4 z-10">
                  {["adult", "child", "infant"].map((type) => (
                    <div key={type} className="flex justify-between items-center mb-3">
                      <span className="capitalize">{type}:</span>
                      <div className="flex items-center gap-2">
                        <button type="button" onClick={() => updateCount(type, -1)} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">−</button>
                        <span>{passengers[type]}</span>
                        <button type="button" onClick={() => updateCount(type, 1)} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
                      </div>
                    </div>
                  ))}
                  <button type="button" onClick={() => setPassengerOpen(false)} className="mt-3 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 cursor-pointer">Done</button>
                </div>
              )
            }
          </div>
          <div className="sm:basis-[48%] w-full">
            <button type="submit" className="w-full flex justify-center items-center gap-2 px-6 py-3 text-xl bg-orange-500 rounded-lg hover:bg-orange-600 transition-all duration-300 cursor-pointer"><MdSearch size={20} /> Search Flights</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default HeroForm;

