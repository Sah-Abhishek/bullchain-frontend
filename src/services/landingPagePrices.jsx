// services/coinService.js
import axiosInstance from './binanceapi.js'

export const fetchCoins = async () => {
  const res = await axiosInstance.get("/coins/markets", {
    params: {
      vs_currency: "usd",
      ids: "bitcoin,ethereum,binancecoin,dogecoin,solana,ripple",
      order: "market_cap_desc",
      per_page: 6,
      page: 1,
      sparkline: false,
    },
  });
  return res.data;
};
