import { Link } from "react-router-dom";
import type { FC } from "react";

type TopBannerProps = {
  isVisible: boolean;
  onClose: () => void;
  message: string;            
  link: string;               
  linkText: string;            
  bgImage?: string;             
  closeIconAlt?: string;        
};

const TopBanner: FC<TopBannerProps> = ({ isVisible, onClose, message, link, linkText, bgImage = "/assets/images/TopBanner/AbstractDesign.png", closeIconAlt = "Close Banner"}) => {
  return (
    <div
      className={`relative z-50 flex justify-start md:justify-center border-b border-white90 dark:border-gray15 bg-white97 dark:bg-gray10 pt-10 pb-5 px-4 md:py-3.5 2xl:py-[18px] 2xl:px-8 bg-no-repeat bg-cover transition-all duration-500 ease-in-out transform ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full"
      }`}
      style={{ backgroundImage: `url(${bgImage})` }}
      role="region"
      aria-label="Top promotional banner"
    >
      <div className="flex gap-1.5 2xl:gap-2.5 text-[10px] min-[380px]:text-xs md:text-sm 2xl:text-lg font-medium leading-[150%] text-black dark:text-white">
        <p>{message}</p>
        <Link to={link} className="underline hover:text-purple60 duration-300">
          {linkText}
        </Link>
      </div>

      <button className="absolute top-2 min-[340px]:top-9 right-4 md:top-3.5 2xl:top-[18px] 2xl:right-8 dark:bg-white/10 bg-black rounded-full w-[26px] h-[26px] p-1 flex items-center justify-center"
        onClick={onClose}
        aria-label="Close top banner">
        <img src="/assets/icons/close.svg" alt={closeIconAlt} />
      </button>
    </div>
  );
};

export default TopBanner;
