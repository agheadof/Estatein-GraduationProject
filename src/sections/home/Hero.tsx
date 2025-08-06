import { Link } from "react-router-dom";
import CountUpComponent from "../../components/cards/CountUpComponent";
import RotatingText from "../../components/cards/RotatingText";
import { heroContent } from "../../data/heroContent";
import Maggnatic from "../../utlis/Maggnatic";
import { useAppSelector } from "../../redux/hooks";

const Hero = () => {
    const isBannerVisible = useAppSelector((state) => state.banner.isVisible);

  return (
    // === Main Hero Section Container ===
    <div
      className={`relative h-screen ${
        isBannerVisible
          ? "2xl:pt-[93px] lg-custom:pt-[77px] pt-[68px]"
          : "pt-0"
      } flex flex-col-reverse lg-custom:flex-row lg-custom:items-center gap-14 lg-custom:gap-[60px] 2xl:gap-[80px] text-black dark:text-white`}
    >
      {/* === Left Side: Text, Buttons, and CountUp === */}
      <div className="flex lg-custom-mt-10 lg-custom:w-[48%] flex-col gap-10 lg-custom:gap-[50px] 2xl:gap-[60px] px-4 lg-custom:pl-20 2xl:pl-[162px]">
        {/* === Title and Description === */}
        <div className="flex flex-col gap-4 lg-custom:gap-5 2xl:gap-6 mt-10 lg-custom:mt-0">
          <h1 className="text-[28px] lg-custom:text-[46px] 2xl:text-[60px] font-semibold leading-[120%]">
            {heroContent.title}
          </h1>
          <p className="text-sm lg-custom:text-base 2xl:text-lg font-medium text-gray40 dark:text-gray60 leading-[150%]">
            {heroContent.description}
          </p>
        </div>

        {/* === Call-to-Action Buttons === */}
        <div className="flex flex-col lg-custom:flex-row gap-4">
          <Link
            to="/about"
            className="text-center py-3.5 px-5 2xl:py-[18px] text-sm 2xl:text-lg 2xl:px-6 border border-white90 dark:border-gray15 rounded-lg"
          >
            Learn More
          </Link>
          <Link
            to="/properties"
            className="text-center py-3.5 px-5 2xl:py-[18px] 2xl:px-6 text-sm 2xl:text-lg bg-purple90 dark:bg-purple60 rounded-lg"
          >
            Browse Properties
          </Link>
        </div>

        {/* === Count Up Statistics Component === */}
        <CountUpComponent />
      </div>

      {/* === Right Side: Hero Image, Background, and RotatingText === */}
      <div className="relative mx-4 lg-custom:mx-0 lg-custom:px-0 lg-custom:w-[48%] h-full flex items-end border border-white90 dark:border-gray15 lg-custom:border-none rounded-xl lg-custom:rounded-none bg-white97 dark:bg-gray10 bg-[linear-gradient(to_top_right,_rgba(25,25,25,0)_30%,_rgba(42,33,63,0.2)_60%,_rgba(42,33,63,1)_95%)]">
        {/* === Background Abstract Design Image === */}
        <img
          src="/assets/images/AbstractDesign5.png"
          alt="Abstract Design"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* === Foreground Hero Image === */}
        <div className="relative h-full flex items-end justify-center">
          <img
            src="/assets/images/MainHero/main.png"
            alt="Hero"
            className="w-full h-full object-contain object-bottom"
          />
        </div>

        {/* === Rotating Text Component === */}

        <div className="absolute bottom-[-10%] sm:bottom-[-8%] left-0 lg-custom:bottom-0 2xl:top-[20%] lg-custom:top-[15%] lg-custom:!left-[-10%] inline-block z-40">
          <Maggnatic>
            <RotatingText />
          </Maggnatic>
        </div>
      </div>
    </div>
  );
};

export default Hero;

