import InvestmentsSection from "../sections/services/InvestmentsSection";
import ManagementSection from "../sections/services/ManagementSection";
import PropertyValueSection from "../sections/services/PropertyValueSection";
import ServicesHero from "../sections/services/ServicesHero";

function ServicesPage() {
  return (
    <div className="huge:container huge:mx-auto">
      <ServicesHero />
      <PropertyValueSection />
      <ManagementSection />
      <InvestmentsSection />
    </div>
  );
}

export default ServicesPage;
