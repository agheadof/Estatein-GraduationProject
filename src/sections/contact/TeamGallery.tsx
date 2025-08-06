import Title from "../../components/shared/Title";

function TeamGallery() {
  return (
    <div className="px-4 md:px-8 lg-custom:!px-20 2xl:!px-[162px]">
      <div className="relative bg-white97 dark:bg-gray10 border-1 border-white90 dark:border-gray15 rounded-xl 2xl:p-20 lg-custom:p-[60px] p-6 overflow-hidden">
        <img
          src="/assets/images/AbstractDesign4.png"
          alt="Team Gallery Background"
          className="absolute inset-0 w-full h-[100%] object-cover z-0 pointer-events-none"
        />
  
        <div className="relative z-10 grid grid-cols-1 lg-custom:gap-5 gap-[55px] sm:auto-rows-auto">
          <div className="grid grid-cols-2 lg-custom:gap-5 gap-2.5 auto-rows-[71px] sm:auto-rows-auto">
            <img
              src="/assets/images/Explore/1.webp"
              alt="Team Gallery"
              className="w-full h-full object-cover"
            />
            <img
              src="/assets/images/Explore/2.webp"
              alt="Team Gallery"
              className="w-full h-full object-cover"
            />
            <img
              src="/assets/images/Explore/3.webp"
              alt="Team Gallery"
              className="w-full h-full object-cover"
            />
            <div className="grid grid-cols-2 gap-2.5 auto-rows-[71px] sm:auto-rows-auto lg-custom:gap-5">
              <img
                src="/assets/images/Explore/4.webp"
                alt="Team Gallery"
                className="w-full h-full object-cover"
              />
              <img
                src="/assets/images/Explore/5.webp"
                alt="Team Gallery"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
  
          <div className="grid lg-custom:grid-cols-2 grid-cols-1 gap-5 sm:auto-rows-auto">
            <Title
              starImg={true}
              titleStyle=""
              heading="Explore Estatein's World"
              paragraph="Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better."
            />
            <img
              src="/assets/images/Explore/6.webp"
              alt="Team Gallery"
              className="w-full h-full object-cover object-center min-h-[135px]"
            />
          </div>
        </div>
      </div>
    </div>
    );
}

export default TeamGallery;
