"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Brain, MessageSquare, Terminal, Shield } from "lucide-react";

export default function FeaturesSection() {
  const cards = [
    {
      icon: <Brain className="w-8 h-8 text-white" />,
      title: "Autonomous Learning",
      desc: "Self-evolving neural networks that continuously adapt to your business needs through reinforcement learning.",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-white" />,
      title: "Multi-Modal Intelligence",
      desc: "Advanced agents capable of processing text, voice, and visual data for comprehensive understanding.",
    },
    {
      icon: <Terminal className="w-8 h-8 text-white" />,
      title: "Cognitive Integration",
      desc: "Seamless integration with existing systems through advanced cognitive APIs and neural bridges.",
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Ethical AI Framework",
      desc: "Built-in ethical guidelines and safety protocols ensuring responsible AI deployment.",
    },
  ];

  const [highlightedIndex, setHighlightedIndex] = useState(0);

  // Auto-scroll feature (runs on all devices)
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex((prev) => (prev + 1) % cards.length);
    }, 2500);
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
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            onClick={() => setHighlightedIndex(index)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 10px 20px rgba(168, 85, 247, 0.3)",
            }}
            whileTap={{ scale: 1.05 }}
            className={`relative bg-[#111] border border-gray-800 p-6 rounded-xl shadow-lg 
              flex flex-col items-start text-left transition-all duration-300
              ${
                index === highlightedIndex
                  ? "shadow-[0_0_20px_#6B21A8] border-[#6B21A8] scale-105"
                  : ""
              }`}
          >
            {/* Animated Icon */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 150, damping: 8 }}
              className="bg-gradient-to-r from-purple-600 to-blue-500 p-3 rounded-lg shadow-md mb-4"
            >
              {card.icon}
            </motion.div>

            {/* Text Content */}
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
