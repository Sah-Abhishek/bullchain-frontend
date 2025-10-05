import React, { useEffect, useState } from "react";
import axios from "axios";
import CryptoTableSkeleton from "./CryptoTableSkeleton";

export default function CryptoTable() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const perPage = 10;
  const [totalPages, setTotalPages] = useState(Math.ceil(18725 / perPage));

  // Number formatter
  const formatNumber = (num) => {
    if (num >= 1e12) return (num / 1e12).toFixed(2) + "T";
    if (num >= 1e9) return (num / 1e9).toFixed(2) + "B";
    if (num >= 1e6) return (num / 1e6).toFixed(2) + "M";
    if (num >= 1e3) return (num / 1e3).toFixed(2) + "K";
    return num?.toString();
  };

  // Fetch default paginated data
  useEffect(() => {
    if (search.trim() !== "") return; // skip if searching

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets`,
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: perPage,
              page: page,
              sparkline: false,
            },
          }
        );
        setCoins(res.data);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    fetchData();
  }, [page, search]);

  // Fetch searched coin market data
  useEffect(() => {
    if (search.trim() === "") return;

    const fetchSearchedCoins = async () => {
      setLoading(true);
      try {
        const searchRes = await axios.get(
          "https://api.coingecko.com/api/v3/search",
          {
            params: { query: search },
          }
        );

        const ids = searchRes.data.coins
          .map((coin) => coin.id)
          .slice(0, 10); // limit to top 10

        if (ids.length === 0) {
          setCoins([]);
          setLoading(false);
          return;
        }

        const marketRes = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              ids: ids.join(","),
              sparkline: false,
            },
          }
        );

        setCoins(marketRes.data);
      } catch (err) {
        console.error("Search error:", err);
        setCoins([]);
      }
      setLoading(false);
    };

    const debounce = setTimeout(fetchSearchedCoins, 400); // debounce

    return () => clearTimeout(debounce);
  }, [search]);

  const filteredCoins = coins;

  return (
    <div className="mx-64 mx-auto mt-8 p-6 px-10 border border-black/10 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">All Cryptocurrencies</h2>
      <p className="text-gray-500 mb-4">
        Real-time market data for all supported cryptocurrencies
      </p>

      {/* Search */}
      <input
        type="text"
        placeholder="Search cryptocurrency..."
        className="w-full p-2 mb-4 border rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table */}
      {loading ? (
        <CryptoTableSkeleton rows={perPage} />
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3 text-gray-500">#</th>
                <th className="p-3 text-gray-500">NAME</th>
                <th className="p-3 text-gray-500">PRICE</th>
                <th className="p-3 text-gray-500">24H %</th>
                <th className="p-3 text-gray-500">MARKET CAP</th>
                <th className="p-3 text-gray-500">VOLUME (24H)</th>
                <th className="p-3 text-gray-500">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {filteredCoins.map((coin, idx) => (
                <tr key={coin.id} className="border-b hover:bg-gray-50 ">
                  <td className="p-3">
                    {search.trim()
                      ? idx + 1
                      : (page - 1) * perPage + idx + 1}
                  </td>
                  <td className="p-3 flex items-center space-x-2">
                    <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                    <span className="font-semibold">{coin.name}</span>
                    <span className="text-gray-500 text-sm">
                      {coin.symbol.toUpperCase()}
                    </span>
                  </td>
                  <td className="p-3 font-semibold text-gray-800">
                    ${coin?.current_price?.toLocaleString()}
                  </td>
                  <td
                    className={`p-3 ${coin.price_change_percentage_24h >= 0
                      ? "text-green-600 font-semibold"
                      : "text-red-600 font-semibold"
                      }`}
                  >
                    {coin.price_change_percentage_24h?.toFixed(2)}%
                  </td>
                  <td className="p-3">${formatNumber(coin.market_cap)}</td>
                  <td className="p-3">${formatNumber(coin.total_volume)}</td>
                  <td className="p-3">
                    <button className="bg-[#2563eb] text-sm text-white px-3 py-1 rounded-lg">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      {search.trim() === "" && (
        <div className="flex justify-center items-center space-x-4 mt-6">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span>
            {page} / {totalPages}
          </span>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
