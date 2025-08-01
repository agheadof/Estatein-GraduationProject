import InvestmentsSection from "../sections/services/InvestmentsSection";
import ManagementSection from "../sections/services/ManagementSection";
import PropertyValueSection from "../sections/services/PropertyValueSection";
import SubHero from '../components/shared/SubHero/SubHero'
import { subHeroServices } from '../data/subHeroData'

function ServicesPage() {
  return (
    <div className="huge:container huge:mx-auto">
      <SubHero title={subHeroServices.title} desc={subHeroServices.desc} /><InvestmentsSection />
      <PropertyValueSection />
      <ManagementSection />
      <InvestmentsSection />
    </div>
  );
}

export default ServicesPage;
