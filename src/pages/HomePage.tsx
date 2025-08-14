import FaqSection from "../sections/home/FaqSection";
import Hero from "../sections/home/Hero";
import OurClientsSection from "../sections/home/OurClientsSection";
import SiteFeaturesSection from "../sections/shared/SiteFeaturesSection";
import PropertiesSection from "../sections/home/PropertiesSection";
import { SiteFeaturesHomeData } from "../data/SiteFeaturesData";
import { SectionWrapper } from "../layouts/SectionWrapper";

function HomePage() {
  return (
    <>
      <Hero />
      <SiteFeaturesSection data={SiteFeaturesHomeData} />
      <div>
        <PropertiesSection
          heading="Featured Properties"
          paragraph={`Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.`}
          buttonLabel="View All Properties"
        />
        <OurClientsSection />
        <SectionWrapper className="pt-20 lg-custom:pt-[120px] 2xl:pt-[150px] pb-20 lg-custom:pb-[72px] 2xl:pb-[96px]">
          <FaqSection />
        </SectionWrapper>
      </div>
    </>
  );
}

export default HomePage;
