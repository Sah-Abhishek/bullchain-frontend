
import React, { useState } from "react";
import { Filter } from "lucide-react";

const categories = ["All", "Bitcoin", "Ethereum", "DeFi", "NFTs", "Analysis", "Regulation"];
const sortOptions = ["Latest", "Oldest", "Popular"];

export default function NewsFilterBar({ selectedCategory, setSelectedCategory, sortBy, setSortBy }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
      {/* Left section: Filter chips */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-sm font-medium text-gray-500">Filter by:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${selectedCategory === cat
                ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Right section: Sort dropdown */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-500">Sort by:</span>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-300 text-sm rounded-md px-2 py-1.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          {sortOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-100">
          <Filter size={18} />
        </button>
      </div>
    </div>
  );
}
