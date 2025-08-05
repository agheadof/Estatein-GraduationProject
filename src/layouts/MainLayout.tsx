import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/NavBar/Navbar";
import Footer from "../components/shared/Footer/Footer";
import { defaultLinks } from "../data/footerData";
import { CTA } from "../sections/shared/CTA";
import Scroll2Top from "../components/ui/Scroll2Top";
import Loader from "../components/ui/Loader";
import TopBanner from "../components/shared/TopBanner";
import { useEffect, useState } from "react";
import ChatBot from "../components/shared/ChatBot/ChatBot";

const MainLayout = () => {
  const [isBannerVisible, setIsBannerVisible] = useState<boolean>(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsBannerVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBannerClose = () => {
    setIsBannerVisible(false);
  };

  return (
    <div className="flex flex-col min-h-screen font-urbanist">
      <Loader />
      <ChatBot />
      <TopBanner isVisible={isBannerVisible} onClose={handleBannerClose} />
      <Navbar isBannerVisible={isBannerVisible} />
      <main className="flex-grow bg-white99 dark:bg-gray08">
        <Outlet />
        <CTA
          title="Start Your Real Estate Journey Today"
          description="Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance."
          buttonLabel="Explore Properties"
        />
      </main>
      <Scroll2Top />
      <Footer
        links={defaultLinks}
        footerNote="©2023 Estatein. All Rights Reserved."
        logo="/assets/icons/Footer/logo.svg"
      />
    </div>
  );
};

export default MainLayout;
