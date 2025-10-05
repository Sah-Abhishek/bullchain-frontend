
// SubscribeSection.jsx

import React from "react";

const SubscribeSection = () => {
  return (
    <div className=" flex py-10 items-center justify-center bg-white">
      <div className="bg-blue-50 py-10 px-4 sm:px-6 lg:px-8 rounded-lg max-w-7xl  mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Stay Ahead of the Market
        </h2>
        <p className="mt-2 text-gray-600">
          Get the latest crypto news, analysis, and market insights delivered directly to your inbox.
        </p>

        <form className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </form>

        <p className="mt-4 text-xs text-gray-500">
          Join 50,000+ traders and investors. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};

export default SubscribeSection;
