import FooterSection from "../components/FooterSection";
import CryptoTable from "../components/marketPage/CryptoTable";
import GlobalStats from "../components/marketPage/GlobalStats";
import LearnTradingSection from "../components/marketPage/LearnTradingSection";
import NewsSection from "../components/marketPage/NewsSection";

const MarketPage = () => {
  return (
    <div>

      <GlobalStats />
      <CryptoTable />
      <LearnTradingSection />
      <NewsSection />
      <FooterSection />


    </div>
  )
}

export default MarketPage;
