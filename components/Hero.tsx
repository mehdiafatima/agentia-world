"use client";

import { useState } from "react";



import InputField from "./InputField";


export default function Hero() {
  const [] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header>
      
      </header>

      {/* Hero Section */}
      <section className="text-center text-white py-20 px-4 bg-gradient-to-b from-black via-black to-purple-900/20 mt-8">
        <p className="text-sm uppercase bg-gray-900 px-4 py-1 rounded-[30px] w-fit mx-auto flex items-center space-x-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
          </span>
          <span className="text-purple-400 ">Powered by Panaversity</span>
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mt-4">
        <span className="heading">Enterprise AI Agents</span>

          <br /><span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
  for the Future
</span>
        </h1>

        <div className="mt-6 max-w-md mx-auto">
          <InputField />
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:gap-8 gap-4 justify-center items-center">
        <button className="w-3/4 px-4 lg:py-5 sm:w-auto max-w-xs bg-gradient-to-l from-purple-800 to-blue-600 hover:bg-gradient-to-l from-purple-800 to-blue-600 text-white font-bold px-6 py-3 rounded-lg text-lg transition-all duration-500 ease-in-out transform hover:scale-105 shadow-md hover:shadow-[0_0_20px_5px_rgba(147,51,234,0.5)] flex items-center gap-2 sm:mx-0 mx-auto">
  Deploy Your AI Agent <span className="text-xl">&gt;</span>
</button>
  
  <button className="w-3/4 sm:w-auto max-w-xs border border-purple-600 px-6 lg:py-5 py-2 rounded-md sm:mx-0 mx-auto font-semibold text-white transition-all duration-300 ease-in-out shadow-md hover:shadow-[0_0_20px_5px_rgba(147,51,234,0.5)]">
  Watch Demo
</button>
</div>
</section>
</>
);
}
