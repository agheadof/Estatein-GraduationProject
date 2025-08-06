import { useParams } from "react-router-dom";
import PricingDetailsSection from "../sections/propertyDetails/PricingDetailsSection";
import PropertyDetailsForm from "../sections/propertyDetails/PropertyDetailsForm";
import PropertyGallery from "../sections/propertyDetails/PropertyGallery";
import FaqSection from "../sections/home/FaqSection";

function PropertyDetailsPage() {
  const { id } = useParams();

  return (
    <div className="huge:max-w-[1920px] huge:mx-auto mt-28">
      {id && <PropertyGallery id={id} />}
      <PropertyDetailsForm />
      <PricingDetailsSection />
      <FaqSection />
    </div>
  );
}

export default PropertyDetailsPage;
