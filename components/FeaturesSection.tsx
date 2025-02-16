"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Brain, MessageSquare, Terminal, Shield } from "lucide-react";

export default function FeaturesSection() {
  const cards = [
    {
      icon: <Brain className="w-6 h-6 text-white" />,
      title: "Autonomous Learning",
      desc: "Self-evolving neural networks that continuously adapt to your business needs through reinforcement learning.",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      title: "Multi-Modal Intelligence",
      desc: "Advanced agents capable of processing text, voice, and visual data for comprehensive understanding.",
    },
    {
      icon: <Terminal className="w-6 h-6 text-white" />,
      title: "Cognitive Integration",
      desc: "Seamless integration with existing systems through advanced cognitive APIs and neural bridges.",
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Ethical AI Framework",
      desc: "Built-in ethical guidelines and safety protocols ensuring responsible AI deployment.",
    },
  ];

  const [highlightedIndex, setHighlightedIndex] = useState(0);

  // Auto-scroll feature (runs on all devices)
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex((prev) => (prev + 1) % cards.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black text-white py-20">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-300 to-blue-500 text-transparent bg-clip-text">
          Neural Capabilities
        </h2>
        <p className="text-gray-400 mt-2 text-lg">
          Powered by next-generation artificial intelligence
        </p>
      </div>

      {/* Cards Container */}
      <div className="mt-12 flex flex-wrap justify-center gap-6 px-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            onClick={() => setHighlightedIndex(index)}
            whileHover={{ scale: 1.05, borderColor: "#D1D5DB" }}
            whileTap={{ scale: 1.1, borderColor: "#D1D5DB" }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className={`relative bg-[#111] border border-gray-800 p-6 rounded-xl shadow-lg w-64 
              flex flex-col items-start text-left transition-all duration-300 ${
                index === highlightedIndex ? "shadow-[0_0_15px_#6B21A8] border-[#6B21A8]" : ""
              }`}
          >
            {/* Icon at the Top */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-2 rounded-lg shadow-md mb-4">
              {card.icon}
            </div>

            {/* Text Content */}
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
