import React, { useState, useEffect } from "react";
import axios from "axios";
import { Clock, Eye } from "lucide-react";
import NewsFilterBar from "./NewsFilterBar";

export default function CryptoNewsGrid() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Latest");

  const fetchNews = async () => {
    setLoading(true);
    try {
      let url = `http://localhost:3000/api/news?page=1&limit=9`;

      // Optional: Add query params for category or sorting if your API supports them
      if (selectedCategory !== "All") {
        url += `&category=${encodeURIComponent(selectedCategory)}`;
      }
      if (sortBy) {
        url += `&sort=${sortBy.toLowerCase()}`;
      }

      const res = await axios.get(url);
      setNews(res.data.data || []);
    } catch (err) {
      console.error("Error fetching news:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [selectedCategory, sortBy]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-gray-500 text-lg animate-pulse">Loading news...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Filter + Sort Section */}
        <NewsFilterBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <article
              key={item._id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition-shadow overflow-hidden"
            >
              <img
                src={item.image_url}
                alt={item.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-5 flex flex-col justify-between h-[280px]">
                {/* Source & Time */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    {item.source_info?.img && (
                      <img
                        src={item.source_info.img}
                        alt={item.source_info.name}
                        className="w-5 h-5 rounded-full"
                      />
                    )}
                    <p className="text-sm text-gray-600 font-medium">
                      {item.source_info?.name || "Unknown"}
                    </p>
                  </div>
                  <p className="text-xs text-gray-400 flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1" />
                    {new Date(item.createdAt).toLocaleString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </p>
                </div>

                {/* Title */}
                <h2 className="font-semibold text-gray-900 text-lg line-clamp-2 mb-2">
                  {item.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                  {item.body}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center space-x-2 text-xs text-gray-400">
                    <Eye className="w-3.5 h-3.5" />
                    <span>{Math.floor(Math.random() * 500 + 100)}</span>
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm font-medium hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
