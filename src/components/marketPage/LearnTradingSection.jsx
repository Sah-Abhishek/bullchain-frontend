
import React from 'react';
import { FaBook, FaChartLine, FaShieldAlt, FaCoins, FaDiscord, FaTelegram } from 'react-icons/fa';

export default function LearnTradingSection() {
  return (
    <div className="bg-white flex flex-col   text-gray-800">
      {/* Top Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold mb-3">Learn Crypto Trading</h2>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          Master the fundamentals of cryptocurrency trading with our comprehensive educational resources
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-20 gap-y-12">
          {/* Item 1 */}
          <div className="max-w-[180px] text-center">
            <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <FaBook className="text-blue-600 text-lg" />
            </div>
            <h3 className="font-semibold mb-2">Trading Basics</h3>
            <p className="text-gray-600 text-sm mb-3">
              Learn the fundamentals of cryptocurrency trading and market analysis
            </p>
            <a href="#" className="text-blue-600 text-sm font-medium hover:underline">
              Start Learning
            </a>
          </div>

          {/* Item 2 */}
          <div className="max-w-[180px] text-center">
            <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
              <FaChartLine className="text-green-600 text-lg" />
            </div>
            <h3 className="font-semibold mb-2">Technical Analysis</h3>
            <p className="text-gray-600 text-sm mb-3">
              Master chart patterns, indicators, and trading strategies
            </p>
            <a href="#" className="text-blue-600 text-sm font-medium hover:underline">
              Start Learning
            </a>
          </div>

          {/* Item 3 */}
          <div className="max-w-[180px] text-center">
            <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
              <FaShieldAlt className="text-purple-600 text-lg" />
            </div>
            <h3 className="font-semibold mb-2">Risk Management</h3>
            <p className="text-gray-600 text-sm mb-3">
              Protect your investments with proper risk management techniques
            </p>
            <a href="#" className="text-blue-600 text-sm font-medium hover:underline">
              Start Learning
            </a>
          </div>

          {/* Item 4 */}
          <div className="max-w-[180px] text-center">
            <div className="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-3">
              <FaCoins className="text-orange-600 text-lg" />
            </div>
            <h3 className="font-semibold mb-2">DeFi &amp; Staking</h3>
            <p className="text-gray-600 text-sm mb-3">
              Explore decentralized finance and earning opportunities
            </p>
            <a href="#" className="text-blue-600 text-sm font-medium hover:underline">
              Start Learning
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="bg-blue-600 rounded-2xl py-16 text-white mx-40 mb-8   mt-8 px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-3">Join Our Trading Community</h2>
          <p className="text-blue-100">
            Connect with thousands of traders, share strategies, and learn from experienced professionals in our active community
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-12 text-center mb-12">
          <div>
            <div className="text-3xl font-extrabold mb-1">50K+</div>
            <div className="text-blue-200">Active Traders</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold mb-1">24/7</div>
            <div className="text-blue-200">Live Support</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold mb-1">95%</div>
            <div className="text-blue-200">Success Rate</div>
          </div>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="#"
            className="bg-white text-blue-600 flex items-center gap-2 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            <FaDiscord /> Join Discord
          </a>
          <a
            href="#"
            className="border border-white flex items-center gap-2 px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition"
          >
            <FaTelegram /> Join Telegram
          </a>
        </div>
      </section>
    </div>
  );
}
