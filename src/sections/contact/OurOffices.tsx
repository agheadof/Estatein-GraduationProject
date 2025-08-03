import Title from "../../components/shared/Title";
import OurOfficeTaps from "./OurOfficeTaps";

function OurOffices() {
  return (
    <section className="px-4 md:px-8 lg-custom:!px-20 2xl:!px-[162px] mt-20 lg-custom:mt-30 2xl:!mt-[150px]">
      <Title
        titleStyle="leading-[1.5]"
        starImg={true}
        heading="Discover Our Office Locations"
        paragraph="Estatein is here to serve you across multiple locations. Explore the categories below to find the Estatein office nearest to you"
      />
      <OurOfficeTaps />
     
    </section>
  );
}

export default OurOffices;


