import { Link } from "react-router-dom";
import CountUpComponent from "../../components/cards/CountUpComponent";
import RotatingText from "../../components/cards/RotatingText";
import { heroContent } from "../../data/heroContent";

const Hero = () => {
  return (
    
    // === Main Hero Section Container ===
    <div className="relative h-screen pt-[250px] md:pt-[94px] flex flex-col-reverse lg-custom:flex-row lg-custom:items-center lg-custom:gap-[60px] 2xl:gap-[80px] text-white">

      {/* === Left Side: Text, Buttons, and CountUp === */}
      <div className="flex mt-10 lg-custom:w-[48%] flex-col gap-10 lg-custom:gap-[50px] 2xl:gap-[60px] px-4 lg-custom:pl-20 2xl:pl-[162px]">

        {/* === Title and Description === */}
        <div className="flex flex-col gap-4 lg-custom:gap-5 2xl:gap-6 mt-10 lg-custom:mt-0">
          <h1 className="text-[28px] lg-custom:text-[45px] 2xl:text-[60px] font-semibold leading-[120%]">
            {heroContent.title}
          </h1>
          <p className="text-sm lg-custom:text-base 2xl:text-lh font-medium text-gray60 leading-[150%]">
            {heroContent.description}
          </p>
        </div>

        {/* === Call-to-Action Buttons === */}
        <div className="flex flex-col lg-custom:flex-row gap-4">
          <Link to="/about" className="text-center py-3.5 px-5 2xl:py-[18px] text-sm 2xl:text-lg 2xl:px-6 border border-gray15 rounded-lg">
            Learn More
          </Link>
          <Link to="/properties" className="text-center py-3.5 px-5 2xl:py-[18px] 2xl:px-6 text-sm 2xl:text-lg bg-purple60 rounded-lg">
            Browse Properties
          </Link>
        </div>

        {/* === Count Up Statistics Component === */}
        <CountUpComponent />
      </div>

      {/* === Right Side: Hero Image, Background, and RotatingText === */}
      <div className="relative mx-4 lg-custom:mx-0 lg-custom:px-0 lg-custom:w-[48%] h-full flex items-end border border-gray15 lg-custom:border-none rounded-xl lg-custom:rounded-none bg-gray10 bg-[linear-gradient(to_bottom_left,_#2A213F,_#19191900,_#19191900)]">

        {/* === Background Abstract Design Image === */}
        <img
          src="/assets/images/AbstractDesign5.png"
          alt="Abstract Design"
          className="w-full h-full object-cover"
        />

        {/* === Foreground Hero Image === */}
        <img
          src="/assets/images/MainHero/main.png"
          alt="Hero"
          className=" lg-custom:hidden  absolute bottom-0 h-fit right-0"
        />

        {/* === Rotating Text Component === */}
        <RotatingText />
      </div>

      {/* === Foreground Hero Image === */}
      <img
        src="/assets/images/MainHero/main.png"
        alt="Hero"
        className="hidden lg-custom:block  absolute bottom-0 h-fit w-1/2 right-0"
      />
    </div>
    
  );
};

export default Hero;

