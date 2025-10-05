
import React from "react";

export default function CryptoNewsHeader() {
  return (
    <section className="bg-[#2456f3] bg-gradient-to-r from-[#2456f3] to-[#1e47d7] text-white py-16 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Latest Crypto News & Analysis
        </h1>
        <p className="text-lg text-gray-200 mb-6">
          Stay informed with real-time market updates and expert insights
        </p>

        <div className="flex justify-center items-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 bg-green-400 rounded-full"></span>
            <span>Live Updates</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 bg-blue-300 rounded-full"></span>
            <span>Expert Analysis</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></span>
            <span>Market Insights</span>
          </div>
        </div>
      </div>
    </section>
  );
}
