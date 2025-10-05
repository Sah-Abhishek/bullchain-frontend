import FooterSection from "../components/FooterSection";
import CryptoNewsGrid from "../components/news/CryptoNewsGrid";
import CryptoNewsHeader from "../components/news/CryptoNewsHeader";
import SubscribeSection from "../components/news/SubscriptionSection";

function NewsPage() {
  return (
    <div>
      <CryptoNewsHeader />
      <CryptoNewsGrid />
      <SubscribeSection />
      <FooterSection />

      {/* Other sections... */}
    </div>
  );
}

export default NewsPage;
