import Title from "../../components/shared/Title";

function TeamGallery() {
  return (
    <div className="relative grid grid-rows-2 bg-gray10 border-1 border-gray15 rounded-xl gap-20 p-20">
      <img
        src="/assets/images/AbstractDesign4.png"
        alt=""
        className="absolute top-0 left-0 pointer-events-none"
      />
      <div className="grid grid-cols-2">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <div className="grid grid-cols-2">
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
      <div>
        <Title
          starImg={true}
          heading="Explore Estatein's World"
          paragraph="Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better."
        />

        <img src="" alt="" />
      </div>
    </div>
  );
}

export default TeamGallery;
