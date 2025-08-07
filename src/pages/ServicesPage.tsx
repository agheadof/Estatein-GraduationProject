import InvestmentsSection from "../sections/services/InvestmentsSection";
import ManagementSection from "../sections/services/ManagementSection";
import PropertyValueSection from "../sections/services/PropertyValueSection";
import { subHeroServices } from "../data/subHeroData";
import SiteFeaturesSection from "../sections/shared/SiteFeaturesSection";
import { SiteFeaturesServicesData } from "../data/SiteFeaturesData";
import SubHero from "../components/shared/SubHero";

function ServicesPage() {
  return (
    <div className="">
      <SubHero
        title={subHeroServices.title}
        desc={subHeroServices.desc}
        classes="lg-custom:pb-[100px]"
      />
      <SiteFeaturesSection data={SiteFeaturesServicesData} />
      <PropertyValueSection />
      <ManagementSection />
      <InvestmentsSection />
    </div>
  );
}

export default ServicesPage;
