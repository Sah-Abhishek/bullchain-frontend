
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ArrowRight } from "lucide-react";

export default function NewsSection() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/news?page=1&limit=3")
      .then((res) => setNews(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  // format time ago
  const timeAgo = (timestamp) => {
    const now = new Date();
    const published = new Date(timestamp * 1000); // published_on is unix
    const diff = Math.floor((now - published) / 1000 / 60); // minutes
    if (diff < 60) return `${diff} mins ago`;
    if (diff < 1440) return `${Math.floor(diff / 60)} hours ago`;
    return `${Math.floor(diff / 1440)} days ago`;
  };

  return (
    <div className="px-16 mx-auto  py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Latest Market News
          </h2>
          <p className="text-gray-500 text-sm">
            Stay updated with the latest cryptocurrency news and analysis
          </p>
        </div>
        <a
          href="/news"
          className="bg-[#2563eb]  hover:bg-blue-700 text-white px-6 py-4 rounded-lg text-md font-medium flex items-center"
        >
          View All News <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>

      {/* News Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {news.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
          >
            <img
              src={item.image_url}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                <span className="px-2 py-0.5 bg-blue-100 text-blue-600 rounded-full text-xs">
                  {item.tags?.split("|")[0] || "News"}
                </span>
                <span>{timeAgo(item.published_on)}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                {item.body}
              </p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium text-sm hover:underline flex items-center"
              >
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
