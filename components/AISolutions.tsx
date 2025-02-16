"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Server, ShieldCheck, Globe } from "lucide-react";

export default function AISolutions() {
  const solutions = [
    {
      icon: <Globe className="w-6 h-6 text-white" />, 
      title: "Enterprise AI", 
      desc: "Custom AI agents designed for enterprise-scale operations and decision-making."
    },
    {
      icon: <Server className="w-6 h-6 text-white" />, 
      title: "Neural Operations", 
      desc: "Automated workflow optimization through distributed neural networks."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />, 
      title: "Secure Intelligence", 
      desc: "Privacy-first AI solutions with military-grade security protocols."
    },
  ];

  // State to track which card is highlighted
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  // Auto highlight effect every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex((prev) => (prev + 1) % solutions.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black text-white py-20 px-6 w-100%">
      <div className="text-center">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-300 to-blue-500 text-transparent bg-clip-text">
          AI Solutions
        </h2>
        <p className="text-gray-400 mt-2 text-lg">
          Transforming industries with intelligent agents
        </p>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-6">
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            whileHover={{ borderColor: "#444", scale: 1.05 }} // Hover effect for desktop
            whileTap={{ scale: 0.95, borderColor: "#6B21A8" }} // Tap effect for mobile
            transition={{ duration: 0.3 }}
            className={`bg-[#111] border border-transparent p-6 rounded-xl shadow-lg w-72 flex flex-col items-start text-left transition-all
              ${
                index === highlightedIndex
                  ? "shadow-[0_0_15px_#6B21A8] border-[#6B21A8]" // Highlight effect on mobile
                  : ""
              }`}
          >
            <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-2 rounded-lg shadow-md mb-4">
              {solution.icon}
            </div>
            <h3 className="text-xl font-semibold">{solution.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{solution.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
