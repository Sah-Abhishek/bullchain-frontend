import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { fetchCoins } from "../../services/landingPagePrices.jsx";
import { BiDollar } from "react-icons/bi";


const CryptoMarquee = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const loadCoins = async () => {
      try {
        const data = await fetchCoins();
        setCoins(data);
      } catch (err) {
        console.error("Error loading coins:", err);
      }
    };

    loadCoins();
    const interval = setInterval(loadCoins, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gray-50 py-3 shadow-inner rounded-md">
      <Marquee gradient={false} speed={40}>
        {coins.map((coin) => (
          <div
            key={coin.id}
            className="flex items-center gap-2 bg-white px-4 py-2 mx-2 rounded-2xl shadow-sm border"
          >
            <img src={coin.image} alt={coin.name} className="w-6 h-6" />
            <span className="font-semibold">{coin.symbol.toUpperCase()}</span>
            <span className="text-gray-700">
              ${coin.current_price.toLocaleString()}
            </span>
            <span
              className={`font-medium ${coin.price_change_percentage_24h >= 0
                ? "text-green-500"
                : "text-red-500"
                }`}
            >
              {coin.price_change_percentage_24h.toFixed(2)}%
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default CryptoMarquee;
