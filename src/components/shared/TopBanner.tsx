import { Link } from "react-router-dom";

type TopBannerProps = {
  isVisible: boolean;
  onClose: () => void;
};

const TopBanner = ({ isVisible, onClose }: TopBannerProps) => {
  return (
    <div
      className={`relative z-50 flex justify-start md:justify-center border-b border-white90 dark:border-gray15 bg-white97 dark:bg-gray10 pt-10 pb-5 px-4 md:py-3.5 2xl:py-[18px] 2xl:px-8 bg-[url("/assets/images/TopBanner/AbstractDesign.png")] bg-no-repeat bg-cover 
         transition-all duration-500 ease-in-out transform 
          ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full"}
   `}
    >
      <div className="flex gap-1.5 2xl:gap-2.5 text-[10px] min-[380px]:text-xs md:text-sm 2xl:text-lg font-medium leading-[150%] text-black dark:text-white">
        <p>✨ Discover Your Dream Property with Estatein</p>
        <Link to="/" className="underline">
          Learn More
        </Link>
      </div>
      <img
        src="/assets/icons/close.svg"
        className="absolute top-2 min-[340px]:top-9 right-4 md:top-3.5 2xl:top-[18px] 2xl:right-8 dark:bg-white/10 bg-black rounded-full w-[26px] h-[26px] p-1 cursor-pointer"
        alt=""
        onClick={onClose}
      />
    </div>
  );
};

export default TopBanner;
