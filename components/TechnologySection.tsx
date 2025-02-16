"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Code, Globe, Cpu } from "lucide-react";

export default function TechnologySection() {
  const [tappedIndex, setTappedIndex] = useState<number | null>(null);

  const cards = [
    {
      icon: <Brain className="w-10 h-10 text-white" />, 
      title: "Neural Networks",
      desc: "Advanced neural architectures for complex decision making",
    },
    {
      icon: <Cpu className="w-10 h-10 text-white" />, 
      title: "Deep Learning",
      desc: "Sophisticated deep learning models for pattern recognition",
    },
    {
      icon: <Code className="w-10 h-10 text-white" />, 
      title: "Advanced ML",
      desc: "Cutting-edge machine learning algorithms",
    },
    {
      icon: <Globe className="w-10 h-10 text-white" />, 
      title: "Global Scale",
      desc: "Distributed AI processing across global networks",
    },
  ];

  return (
    <section className="bg-black text-white py-20">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-300 to-blue-500 text-transparent bg-clip-text">
          Powered by Advanced AI
        </h2>
        <p className="text-gray-400 mt-2 text-lg">
          Built on cutting-edge neural architectures
        </p>
      </div>

      {/* Cards Container */}
      <div className="mt-12 flex flex-wrap justify-center gap-6 px-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            onClick={() => setTappedIndex(index === tappedIndex ? null : index)}
            whileHover={{ scale: 1.07, borderColor: "#a855f7", boxShadow: "0px 10px 20px rgba(168, 85, 247, 0.3)" }}
            animate={{
              scale: tappedIndex === index ? 1.07 : 1,
              borderColor: tappedIndex === index ? "#a855f7" : "#374151",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="bg-[#111] border border-gray-800 p-6 rounded-xl shadow-lg w-64 cursor-pointer 
              flex flex-col items-center text-center transition-all duration-300"
          >
            {/* Icon with Tilt + Scale Effect on Hover & Tap */}
            <motion.div
              whileHover={{ rotate: -8, scale: 1.1 }}
              animate={{ rotate: tappedIndex === index ? -8 : 0, scale: tappedIndex === index ? 1.1 : 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 8 }}
              className="bg-gradient-to-r from-purple-600 to-blue-500 p-4 rounded-xl shadow-md"
            >
              {card.icon}
            </motion.div>

            <h3 className="text-xl font-semibold mt-4">{card.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}