import React from "react";
import { PlayCircle, Download, Video, Calendar } from "lucide-react";
import marketAnalysis from "../../assets/marketAnalysis.png";
import technicalAnalysis from "../../assets/technicalAnalysis.png";
import ytThumbnail from "../../assets/ytThumbnail.png";

export default function LearnWhileYouTrade() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Learn While You Trade
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Access comprehensive educational resources to accelerate your crypto
          trading journey.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white hover:scale-[1.02] shadow-xl rounded-2xl  hover:shadow-2xl transition transform hover:-translate-y-1 overflow-hidden flex flex-col">
          <img
            src={ytThumbnail}
            alt="Crypto Trading Fundamentals"
            className="w-full h-40 object-cover"
          />
          <div className="p-6 flex flex-col justify-between flex-1">
            <div>
              <span className="bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
                Video Course
              </span>
              <span className="text-gray-400 text-sm ml-2">12 lessons</span>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Crypto Trading Fundamentals
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Master the basics of cryptocurrency trading with our
                comprehensive video series.
              </p>
            </div>
            <div className="flex items-center justify-between mt-6 text-sm">
              <div className="flex items-center gap-1 text-gray-500">
                <span className="bg-blue-600 p-3 rounded-full mr-2"><Video className="w-4 h-4 text-white" /></span>
                <span className="font-bold">3.5 hours</span>
              </div>
              <button className="text-blue-600 font-bold  hover:underline">
                Start Learning
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-xl hover:scale-[1.02]  rounded-2xl  hover:shadow-2xl transition transform hover:-translate-y-1 overflow-hidden flex flex-col">
          <img
            src={technicalAnalysis}
            alt="Technical Analysis Guide"
            className="w-full h-40 object-cover"
          />
          <div className="p-6 flex flex-col justify-between flex-1">
            <div>
              <span className="bg-green-100 text-green-600 text-xs font-medium px-3 py-1 rounded-full">
                E-Book
              </span>
              <span className="text-gray-400 text-sm ml-2">45 pages</span>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Technical Analysis Guide
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Learn to read charts, identify patterns, and make informed
                trading decisions.
              </p>
            </div>
            <div className="flex items-center justify-between mt-6 text-sm">
              <div className="flex items-center gap-1 text-gray-500">
                <span className="bg-green-600 p-3 rounded-full mr-2"><Download className="w-4 h-4 text-white" /></span>
                <span className="font-bold">PDF Download</span>
              </div>
              <button className="font-bold text-green-600  hover:underline">
                Download
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-xl hover:scale-[1.02] rounded-2xl  hover:shadow-2xl transition transform hover:-translate-y-1 overflow-hidden flex flex-col">
          <img
            src={marketAnalysis}
            alt="Market Analysis Sessions"
            className="w-full h-40 object-cover"
          />
          <div className="p-6 flex flex-col justify-between flex-1">
            <div>
              <span className="bg-purple-100 text-purple-600 text-xs font-medium px-3 py-1 rounded-full">
                Live Webinar
              </span>
              <span className="text-gray-400 text-sm ml-2">Weekly</span>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Market Analysis Sessions
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Join live sessions with expert traders analyzing current market
                conditions.
              </p>
            </div>
            <div className="flex items-center justify-between mt-6 text-sm">
              <div className="flex items-center gap-1 text-gray-500">
                <span className="bg-purple-600 p-3 rounded-full mr-2"><Calendar className="w-4 h-4 text-white" /></span>
                <span className="font-bold">Next: Wed 3PM</span>
              </div>
              <button className="text-purple-600 font-bold hover:underline">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
