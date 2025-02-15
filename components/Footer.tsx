import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Bot } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Section - Logo & Tagline */}
        <div>
          <h2 className="text-white text-xl font-semibold flex items-center space-x-6 relative">
            <Bot className="absolute -left-2 text-purple-500 w-6 h-6" />
            <span >Agentia World</span>
          </h2>
          <p className="text-sm mt-2">
            Next-generation AI agents powering the future of enterprise intelligence.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <FaGithub className="w-6 h-6 cursor-pointer hover:text-purple-400" />
            <FaLinkedin className="w-6 h-6 cursor-pointer hover:text-purple-400" />
            <FaTwitter className="w-6 h-6 cursor-pointer hover:text-purple-400" />
          </div>
        </div>

        {/* Product Section */}
        <div>
          <h3 className="text-white font-semibold">Product</h3>
          <ul className="mt-2 space-y-2">
            <li className="hover:text-purple-400 cursor-pointer">Features</li>
            <li className="hover:text-purple-400 cursor-pointer">Pricing</li>
            <li className="hover:text-purple-400 cursor-pointer">Documentation</li>
            <li className="hover:text-purple-400 cursor-pointer">API</li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-white font-semibold">Company</h3>
          <ul className="mt-2 space-y-2">
            <li className="hover:text-purple-400 cursor-pointer">About</li>
            <li className="hover:text-purple-400 cursor-pointer">Blog</li>
            <li className="hover:text-purple-400 cursor-pointer">Careers</li>
            <li className="hover:text-purple-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h3 className="text-white font-semibold">Legal</h3>
          <ul className="mt-2 space-y-2">
            <li className="hover:text-purple-400 cursor-pointer">Privacy</li>
            <li className="hover:text-purple-400 cursor-pointer">Terms</li>
            <li className="hover:text-purple-400 cursor-pointer">Security</li>
            <li className="hover:text-purple-400 cursor-pointer">Compliance</li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="text-center text-sm mt-10 text-gray-500">
        © 2025 Agentia World. Powered by Panaversity. All rights reserved.
      </div>
    </footer>
  );
}
