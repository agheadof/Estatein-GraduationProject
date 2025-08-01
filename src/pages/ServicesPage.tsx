import InvestmentsSection from "../sections/services/InvestmentsSection";
import ManagementSection from "../sections/services/ManagementSection";
import PropertyValueSection from "../sections/services/PropertyValueSection";

function ServicesPage() {
  return (
    <div className="huge:container huge:mx-auto">
      <PropertyValueSection />
      <ManagementSection />
      <InvestmentsSection />
    </div>
  );
}

export default ServicesPage;
