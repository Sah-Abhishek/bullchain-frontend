import React, { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, BarChart3, Bitcoin, Layers } from "lucide-react";

export default function CryptoMarket() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGlobalStats = async () => {
      try {
        const res = await axios.get("https://api.coingecko.com/api/v3/global");
        setStats(res.data.data);
      } catch (error) {
        console.error("Error fetching global stats:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGlobalStats();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (!stats)
    return <p className="text-center text-red-500">Failed to load data</p>;

  // Helper: format numbers like $2.48T, $89.2B
  const formatNumber = (num) => {
    if (!num) return "-";
    if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`;
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    return `$${num.toLocaleString()}`;
  };

  return (
    <div>
      {/* Header Part - White Background */}
      <section className="px-20 py-12 bg-white">
        <h2 className="text-3xl font-bold text-gray-900">Crypto Market</h2>
        <p className="text-gray-500 mt-2">
          Track real-time prices of cryptocurrencies
        </p>
      </section>

      {/* Stats Section - Gray Background */}
      <section className="px-20 py-12 bg-[#f4f5f4]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Total Market Cap */}
          <div className="bg-white rounded-xl p-6 flex items-center justify-between shadow-sm">
            <div>
              <p className="text-gray-500 text-sm">Total Market Cap</p>
              <h2 className="text-2xl font-semibold">
                {formatNumber(stats.total_market_cap.usd)}
              </h2>
              <p
                className={`text-sm font-medium mt-1 ${stats.market_cap_change_percentage_24h_usd >= 0
                    ? "text-green-500"
                    : "text-red-500"
                  }`}
              >
                {stats.market_cap_change_percentage_24h_usd >= 0 ? "↑" : "↓"}
                {stats.market_cap_change_percentage_24h_usd.toFixed(2)}%
              </p>
            </div>
            <div className="p-2 bg-blue-100 rounded-xl">
              <PieChart className="w-7 h-7 text-blue-500" />
            </div>
          </div>

          {/* 24h Volume */}
          <div className="bg-white rounded-xl p-6 flex items-center justify-between shadow-sm">
            <div>
              <p className="text-gray-500 text-sm">24h Volume</p>
              <h2 className="text-2xl font-semibold">
                {formatNumber(stats.total_volume.usd)}
              </h2>
              <p className="text-sm font-medium text-red-500 mt-1">↓ -1.23%</p>
              {/* Note: CoinGecko does not return volume change % */}
            </div>
            <div className="p-2 bg-green-100 rounded-xl">
              <BarChart3 className="w-7 h-7 text-green-500" />
            </div>
          </div>

          {/* BTC Dominance */}
          <div className="bg-white rounded-xl p-6 flex items-center justify-between shadow-sm">
            <div>
              <p className="text-gray-500 text-sm">BTC Dominance</p>
              <h2 className="text-2xl font-semibold">
                {stats.market_cap_percentage.btc.toFixed(2)}%
              </h2>
              <p className="text-sm font-medium text-green-500 mt-1">↑ +0.8%</p>
              {/* Fake change (needs historical data for accuracy) */}
            </div>
            <div className="p-2 bg-orange-100 rounded-xl">
              <Bitcoin className="w-7 h-7 text-orange-500" />
            </div>
          </div>

          {/* Active Coins */}
          <div className="bg-white rounded-xl p-6 flex items-center justify-between shadow-sm">
            <div>
              <p className="text-gray-500 text-sm">Active Coins</p>
              <h2 className="text-2xl font-semibold">
                {stats.active_cryptocurrencies.toLocaleString()}
              </h2>
              <p className="text-sm text-gray-500 mt-1">● Live</p>
            </div>
            <div className="p-2 bg-purple-100 rounded-xl">
              <Layers className="w-7 h-7 text-purple-500" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
