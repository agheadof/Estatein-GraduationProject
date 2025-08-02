import { Link } from "react-router-dom";
import CountUpComponent from "../../components/cards/CountUpComponent";
import RotatingText from "../../components/cards/RotatingText";

const Hero = () => {
  return (
    // === Main Hero Section Container ===
    <div className="relative pt-[250px]   md:pt-[94px] h-screen flex flex-col-reverse lg-custom:flex-row md:items-center md:gap-[60px] 2xl:gap-[80px] text-white">
      
      {/* === Left Side: Text, Buttons, and CountUp === */}
      <div className="flex mt-10 lg-custom:w-[48%] flex-col gap-10 md:gap-[50px] 2xl:gap-[60px] px-4 md:pl-8 lg-custom:pl-20 2xl:pl-[162px]">
        
        {/* === Title and Description === */}
        <div className="flex flex-col gap-4 md:gap-5 2xl:gap-6 mt-10 md:mt-0">
          <h1 className="text-[28px] md:text[46px] 2xl:text-[60px] font-semibold leading-[120%]">
            Discover Your Dream Property with Estatein
          </h1>
          <p className="text-sm md:text-base 2xl:text-lh font-medium text-gray60 leading-[150%]">
            Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
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
      <div className="relative mx-4 md:mx-0 md:px-0 lg-custom:w-[48%] h-full flex items-end border border-gray15 lg-custom:border-none rounded-xl lg-custom:rounded-none bg-gray10 bg-[linear-gradient(to_bottom_left,_#2A213F,_#19191900,_#19191900)]">
        
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
            className=" lg-custom:hidden  absolute bottom-0 h-fit   right-0"
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











// import { Link } from "react-router-dom"
// import CountUpComponent from "../../components/cards/CountUpComponent"
// import RotatingText from "../../components/cards/RotatingText"

// const Hero = () => {
//     return (
//         <div className="mt-25 md:mt-0 flex flex-col-reverse md:flex-row md:items-center md:gap-[60px] 2xl:gap-[80px]  text-white"> 
//             <div className="flex mt-10 md:w-[48%] flex-col gap-10 md:gap-[50px] 2xl:gap-[60px] px-4 md:pl-8 lg-custom:pl-20 2xl:pl-[162px]">
//                 <div className="flex flex-col gap-4 md:gap-5 2xl:gap-6 mt-10 md:mt-0">
//                     <h1 className="text-[28px] md:text[46px] 2xl:text-[60px] font-semibold leading-[120%]">Discover Your Dream Property with Estatein</h1>
//                     <p className="text-sm md:text-base 2xl:text-lh font-medium text-gray60 leading-[150%]">Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
//                 </div>
//                 <div className="flex flex-col md:flex-row gap-4">
//                     <Link to="/about" className="text-center py-3.5 px-5 2xl:py-[18px] text-sm 2xl:text-lg 2xl:px-6 border border-gray15 rounded-lg">
//                         Learn More
//                     </Link>
//                     <Link to="/properties" className="text-center py-3.5 px-5 2xl:py-[18px] 2xl:px-6 text-sm 2xl:text-lg bg-purple60 rounded-lg">
//                         Browse Properties
//                     </Link>
//                 </div>
//                 <CountUpComponent />
//             </div>
//             <div className="relative mx-4 md:mx-0 md:px-0 md:w-[48%]   md:h-screen flex items-end border border-gray15 md:border-none  rounded-xl md:rounded-none  bg-gray10 bg-[linear-gradient(to_bottom_left,_#2A213F,_#19191900,_#19191900)] ">
//                 <div className="absolute inset-0 z-0 ">
//                     <img
//                         src="/assets/images/AbstractDesign5.png"
//                         alt="Abstract Design"
//                         className="w-full h-full object-cover "
//                     />
//                 </div>

//                 <img
//                     src="/assets/images/MainHero/main.png"
//                     alt="Hero"
//                     className="relative z-10  md:w-full 2xl:h-[90%] md:h-[70%]  md:pr-8 lg-custom:pr-20 2xl:pr-[162px] "
//                 />
//             <RotatingText />

//             </div>
//         </div>
//     )
// }

// export default Hero
