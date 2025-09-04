import React from "react";
import { ShieldCheck, Trophy, CheckCircle } from "lucide-react";
import { AiFillThunderbolt } from "react-icons/ai";

export default function FeaturesSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Powerful Features</h2>
          <p className="text-gray-600 mt-2">
            Everything you need to master crypto trading, from beginner to expert level.
          </p>
        </div>

        {/* Feature 1 */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          {/* Left Text */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-orange-100 text-orange-500 p-2 rounded-full">

                <AiFillThunderbolt className="w-5 h-5" />
              </span>
              <h3 className="text-xl font-bold text-gray-900">
                Real-Time Market Prices
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Trade with live market data from major exchanges including Binance,
              Coinbase, and Kraken. Experience real market volatility and
              conditions without any financial risk.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500 w-5 h-5" />
                Live price feeds from 15+ exchanges
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500 w-5 h-5" />
                Real-time order book data
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500 w-5 h-5" />
                Historical price charts and analysis
              </li>
            </ul>
          </div>

          {/* Right Card */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h4 className="text-gray-900 font-semibold mb-4 flex justify-between">
              Live Market Data
              <span className="text-green-500 text-sm font-medium">● Live</span>
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">BTC/USD</span>
                <span className="text-gray-800 font-semibold">$67,234.50</span>
                <span className="text-green-500 text-sm">+3.24%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">ETH/USD</span>
                <span className="text-gray-800 font-semibold">$3,456.78</span>
                <span className="text-red-500 text-sm">-1.82%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          {/* Left Image */}
          <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/trading-dashboard.png"
              alt="Trading Dashboard"
              className="w-full"
            />
          </div>

          {/* Right Text */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-green-100 text-green-500 p-2 rounded-full">
                <ShieldCheck className="w-5 h-5" />
              </span>
              <h3 className="text-xl font-bold text-gray-900">
                Zero Risk, Real Rewards
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Start with $100,000 virtual money and trade without fear. Make
              mistakes, learn from them, and develop winning strategies before
              risking real capital.
            </p>
            <div className="bg-green-50 rounded-lg p-4 mb-4 flex justify-between items-center">
              <span className="text-green-600 font-bold text-xl">$100K</span>
              <span className="text-gray-700">Starting Balance</span>
              <span className="text-gray-500">∞ Practice Trades</span>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500 w-5 h-5" />
                No real money at risk
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500 w-5 h-5" />
                Unlimited virtual funds
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500 w-5 h-5" />
                Reset portfolio anytime
              </li>
            </ul>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Text */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-purple-100 text-purple-500 p-2 rounded-full">
                <Trophy className="w-5 h-5" />
              </span>
              <h3 className="text-xl font-bold text-gray-900">
                Compete on Leaderboards
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Challenge yourself against thousands of traders worldwide. Climb
              the rankings, earn badges, and showcase your trading skills in our
              gamified environment.
            </p>
            <div className="flex gap-4">
              <span className="bg-yellow-50 text-yellow-600 px-4 py-2 rounded-lg text-sm font-medium">
                Daily Rankings
              </span>
              <span className="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg text-sm font-medium">
                Weekly Contests
              </span>
              <span className="bg-pink-50 text-pink-600 px-4 py-2 rounded-lg text-sm font-medium">
                Monthly Champions
              </span>
            </div>
          </div>

          {/* Right Image */}
          <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/leaderboard.png"
              alt="Leaderboard"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
