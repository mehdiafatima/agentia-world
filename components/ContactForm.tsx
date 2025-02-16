import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function ContactForm() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <h2 className="text-center text-5xl font-bold bg-gradient-to-r from-pink-300 to-blue-500 text-transparent bg-clip-text">
          Get in Touch
        </h2>
        <p className="text-center text-gray-400 mt-2">
          Ready to transform your business with AI?
        </p>

        <div className="flex flex-col md:flex-row md:items-start mt-8 gap-20">
          {/* Contact Info (Left Side) */}
          <div className="text-white md:w-1/3">
            <h3 className="font-semibold text-lg">Contact Information</h3>
            <div className="mt-4 space-y-3 text-gray-300">
              <p className="flex items-center">
                <span className="text-purple-500 mr-2">✉</span>
                contact@agentiaworld.com
              </p>
              <p className="flex items-center">
                <span className="text-purple-500 mr-2">🌐</span>
                www.agentiaworld.com
              </p>
              <div className="flex space-x-4 mt-4">
                <FaGithub className="text-gray-400 w-6 h-6 cursor-pointer hover:text-purple-400" />
                <FaLinkedin className="text-gray-400 w-6 h-6 cursor-pointer hover:text-purple-400" />
                <FaTwitter className="text-gray-400 w-6 h-6 cursor-pointer hover:text-purple-400" />
              </div>
            </div>
          </div>

          {/* Form (Right Side) */}
          <div className="w-full md:w-2/3 bg-black lg:pr-12">
            <form className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-1/2 p-3 bg-gray-900 text-white rounded-lg focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-1/2 p-3 bg-gray-900 text-white rounded-lg focus:outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 bg-gray-900 text-white rounded-lg focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 bg-gray-900 text-white rounded-lg focus:outline-none h-28"
              ></textarea>
              <button
                type="submit"
                className="w-full p-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
