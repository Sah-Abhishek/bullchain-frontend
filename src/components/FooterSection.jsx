
import React from 'react';
import { FaTwitter, FaChartLine, FaDiscord, FaTelegramPlane, FaRedditAlien, FaGlobe, FaDollarSign, FaMoon } from 'react-icons/fa';

export default function FooterSection() {
  return (
    <footer className="bg-[#0f172a] text-gray-400 text-sm py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo and description */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <FaChartLine className="text-blue-600" />
            BullChain
          </div>
          <p className="max-w-xs leading-relaxed">
            Your trusted partner for cryptocurrency trading simulation and education.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              className="bg-[#1a202e] p-3 rounded-md hover:bg-[#23304f] transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-[#1a202e] p-3 rounded-md hover:bg-[#23304f] transition"
              aria-label="Discord"
            >
              <FaDiscord />
            </a>
            <a
              href="#"
              className="bg-[#1a202e] p-3 rounded-md hover:bg-[#23304f] transition"
              aria-label="Telegram"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="#"
              className="bg-[#1a202e] p-3 rounded-md hover:bg-[#23304f] transition"
              aria-label="Reddit"
            >
              <FaRedditAlien />
            </a>
          </div>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-white font-semibold mb-4">Products</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Spot Trading</a></li>
            <li><a href="#" className="hover:text-white transition">Futures Trading</a></li>
            <li><a href="#" className="hover:text-white transition">Options Trading</a></li>
            <li><a href="#" className="hover:text-white transition">Portfolio Tracker</a></li>
            <li><a href="#" className="hover:text-white transition">Price Alerts</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Trading Academy</a></li>
            <li><a href="#" className="hover:text-white transition">Market Analysis</a></li>
            <li><a href="#" className="hover:text-white transition">API Documentation</a></li>
            <li><a href="#" className="hover:text-white transition">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
            <li><a href="#" className="hover:text-white transition">Press</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-700 my-8" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs gap-4">
        <div>Data provided by Binance API. © 2025 CryptoSim. All rights reserved.</div>

        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 hover:text-white transition">
            <FaGlobe />
            English
          </button>
          <button className="flex items-center gap-2 hover:text-white transition">
            <FaDollarSign />
            USD
          </button>
          <button className="flex items-center gap-2 hover:text-white transition">
            <FaMoon />
            Dark Mode
          </button>
        </div>
      </div>
    </footer>
  );
}
