import Title from "../../components/shared/Title";
import { SectionWrapper } from "../../layouts/SectionWrapper";
import OurOfficeTaps from "./OurOfficeTaps";

function OurOffices() {
  return (
    <SectionWrapper className="py-20 lg-custom:py-[120px] 2xl:py-[150px]">
        <Title
          starImg={true}
          heading="Discover Our Office Locations"
          paragraph="Estatein is here to serve you across multiple locations. Explore the categories below to find the Estatein office nearest to you"
        />
        <OurOfficeTaps />
    </SectionWrapper>
  );
}

export default OurOffices;


