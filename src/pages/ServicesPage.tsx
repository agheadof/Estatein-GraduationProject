import InvestmentsSection from "../sections/services/InvestmentsSection";
import ManagementSection from "../sections/services/ManagementSection";
import PropertyValueSection from "../sections/services/PropertyValueSection";

function ServicesPage() {
  return (
    <div className="min-[1920px]:container min-[1920px]:mx-auto">
      <PropertyValueSection />
      <ManagementSection />
      <InvestmentsSection />
    </div>
  );
}

export default ServicesPage;
