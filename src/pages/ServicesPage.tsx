import InvestmentsSection from "../sections/services/InvestmentsSection";
import ManagementSection from "../sections/services/ManagementSection";
import PropertyValueSection from "../sections/services/PropertyValueSection";
import SubHero from "../components/shared/SubHero/SubHero";
import { subHeroServices } from "../data/subHeroData";
import SiteFeaturesSection from "../sections/shared/SiteFeaturesSection";
import { SectionWrapper } from "../layouts/SectionWrapper";
import { SiteFeaturesServicesData } from "../data/SiteFeaturesData";

function ServicesPage() {
  return (
    <div className="huge:container huge:mx-auto">
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
