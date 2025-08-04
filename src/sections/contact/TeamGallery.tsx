import Title from "../../components/shared/Title";

function TeamGallery() {
  return (
    <div className="relative dark:bg-gray10 bg-purple95 border-1 dark:border-gray15 border-purple70 rounded-xl 2xl:p-20 lg-custom:p-[60px] p-6 overflow-hidden">
      <img
        src="/assets/images/AbstractDesign4.png"
        alt="Team Gallery Background"
        className="absolute inset-0 w-full h-[100%] object-cover z-0 pointer-events-none"
      />

      <div className="relative z-10 grid grid-cols-1 lg-custom:gap-5 gap-[55px]">
        <div className="grid grid-cols-2 lg-custom:gap-5 gap-2.5">
          <img src="/assets/images/Explore/1.webp" alt="Team Gallery" />
          <img src="/assets/images/Explore/2.webp" alt="Team Gallery" />
          <img src="/assets/images/Explore/3.webp" alt="Team Gallery" />
          <div className="grid grid-cols-2 lg-custom:gap-5 gap-2.5">
            <img src="/assets/images/Explore/4.webp" alt="Team Gallery" />
            <img src="/assets/images/Explore/5.webp" alt="Team Gallery" />
          </div>
        </div>

        <div className="grid lg-custom:grid-cols-2 grid-cols-1 gap-5">
          <Title
            starImg={true}
            titleStyle=""
            heading="Explore Estatein's World"
            paragraph="Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better."
          />
          <img src="/assets/images/Explore/6.webp" alt="Team Gallery" />
        </div>
      </div>
    </div>
  );
}

export default TeamGallery;
