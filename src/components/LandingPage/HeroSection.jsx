import React from 'react';
import { TrendingUp, BarChart3, Rocket } from 'lucide-react';
import CryptoMarquee from './CryptoMarquee';
import { BiDollar } from "react-icons/bi";


export default function HeroSection() {
  const userAvatars = [
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format',
    'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/00cd0a870cd347588b7883bee13e4e245b636782_full.jpg',
    'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/00cd142b9fbd7a0f0a316e6b5eb8a4c77097edc8_full.jpg'
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Trade Smarter. <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Risk Free</span>.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Simulate crypto trading with real market prices. Learn, practice, and master the markets without losing money.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-500 font-medium">Active Traders</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 inline-flex items-center"><BiDollar size={30} strokeWidth={0.5} />2.5B</div>
                <div className="text-sm text-gray-500 font-medium">Volume Traded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-500 font-medium">Accuracy</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3 group">
                <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Start Trading Now
              </button>
              <button className="border-2 border-gray-200 hover:border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:bg-gray-50 flex items-center justify-center gap-3">
                <BarChart3 className="w-5 h-5" />
                Explore Market
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {userAvatars.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt={`Trader ${index + 1}`}
                    className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-medium">Trusted by 50K+ traders</span>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-gray-500">4.9/5 rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Dashboard Preview */}
          <div className="relative">
            {/* Mac-style window */}
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-105 transition-transform duration-300">
              {/* Window header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-600">Portfolio Overview</div>
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="text-sm text-gray-500 font-medium">Virtual Trading Dashboard</div>

                {/* Balance Card */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl p-6 text-white relative overflow-hidden">
                  <div className="absolute top-2 right-2 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm opacity-90">Virtual Balance</div>
                    <div className="text-3xl font-bold inline-flex items-center"><BiDollar size={30} />125,847.50</div>
                    <div className="text-sm flex items-center gap-2">
                      <span className="text-green-300">↗ +12.5%</span>
                      <span className="opacity-75 inline-flex items-center">(<BiDollar size={14} />13,847.50)</span>
                    </div>
                  </div>
                </div>

                {/* Holdings */}
                <div className="space-y-4">
                  <div className="text-base font-semibold text-gray-900">Top Holdings</div>

                  {/* Bitcoin */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                        ₿
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Bitcoin</div>
                        <div className="text-sm text-gray-500">BTC</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 inline-flex items-center"><BiDollar size={18} />67,234.50</div>
                      <div className="text-sm text-green-600">+3.2%</div>
                    </div>
                  </div>

                  {/* Ethereum */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        ♦
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Ethereum</div>
                        <div className="text-sm text-gray-500">ETH</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 inline-flex items-center"><BiDollar size={18} />3,456.78</div>
                      <div className="text-sm text-red-500">-1.8%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
      <CryptoMarquee />

    </div>
  );
}
