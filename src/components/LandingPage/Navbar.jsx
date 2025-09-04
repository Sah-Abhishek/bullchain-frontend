import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <div className="bg-primary p-2 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4-4 4 4 4-4 4 4" />
          </svg>
        </div>
        <span className="text-xl font-semibold text-gray-900">Bullchain</span>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        {['Home', 'Market', 'How it Works', 'Features', 'Leaderboard', 'Reviews', 'Login'].map((item) => (
          <a
            key={item}
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition"
          >
            {item}
          </a>
        ))}
      </div>
      <div>

        {/* CTA Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-2 rounded-md transition">
          Start Trading
        </button>
      </div>
    </nav >
  );
};

export default Navbar;
