import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/shared/NavBar/Navbar";
import Footer from "../components/shared/Footer/Footer";
import { defaultLinks } from "../data/footerData";
import { CTA } from "../sections/shared/CTA";
import Scroll2Top from "../components/ui/Scroll2Top";
import Loader from "../components/ui/Loader";
import TopBanner from "../components/shared/TopBanner";
import { useEffect, useRef, useState } from "react";
import ChatBot from "../components/shared/ChatBot/ChatBot";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { hideBanner, showBanner } from "../redux/slices/bannerSlice";
import CustomCursor from "../components/shared/CustomCursor"
import { AnimatePresence, motion } from "framer-motion";

const MainLayout = () => {

  const dispatch = useAppDispatch();
  const isBannerVisible = useAppSelector((state) => state.banner.isVisible);

  const [hasClosedBanner, setHasClosedBanner] = useState(false);
  const location = useLocation();
  const visitedPagesRef = useRef<Set<string>>(new Set());
  const shouldAnimate = !visitedPagesRef.current.has(location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      if (window.scrollY > 20) {
        dispatch(hideBanner());
      } else if (window.scrollY === 0 && !hasClosedBanner) {
        dispatch(showBanner());
      }
    };
    visitedPagesRef.current.add(location.pathname);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch, hasClosedBanner]);

  const handleBannerClose = () => {
    setHasClosedBanner(true);
    dispatch(hideBanner());
  };


  return (
    <div className="flex flex-col min-h-screen font-urbanist">
      <Loader />
      <CustomCursor />
      <ChatBot />
      {isBannerVisible && !hasClosedBanner && (
        <TopBanner isVisible={isBannerVisible} onClose={handleBannerClose} />
      )}
      <Navbar isBannerVisible={isBannerVisible && !hasClosedBanner} />
      <main className="flex-grow bg-white99 dark:bg-gray08">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={shouldAnimate ? { opacity: 0, y: 100, scale: 0.95 } : false}
            animate={shouldAnimate ? { opacity: 1, y: 0, scale: 1 } : false}
            exit={shouldAnimate ? { opacity: 0, y: -60, scale: 0.95 } : undefined}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1], // easeOutExpo
            }}
          >
            <Outlet />
            <CTA
              title="Start Your Real Estate Journey Today"
              description="Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance."
              buttonLabel="Explore Properties"
            />
          </motion.div>
        </AnimatePresence>
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