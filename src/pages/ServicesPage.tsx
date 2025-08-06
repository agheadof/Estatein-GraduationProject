import InvestmentsSection from "../sections/services/InvestmentsSection";
import ManagementSection from "../sections/services/ManagementSection";
import PropertyValueSection from "../sections/services/PropertyValueSection";
import { subHeroServices } from "../data/subHeroData";
import SiteFeaturesSection from "../sections/shared/SiteFeaturesSection";
import { SectionWrapper } from "../layouts/SectionWrapper";
import { SiteFeaturesServicesData } from "../data/SiteFeaturesData";
import SubHero from "../components/shared/SubHero";

function ServicesPage() {
  return (
    <div className="huge:max-w-[1920px] huge:mx-auto">
      <SubHero title={subHeroServices.title} desc={subHeroServices.desc} />
      <SiteFeaturesSection data={SiteFeaturesServicesData} />
      <SectionWrapper>
        <PropertyValueSection />
        <ManagementSection />
        <InvestmentsSection />
      </SectionWrapper>
    </div>
  );
}

export default ServicesPage;
