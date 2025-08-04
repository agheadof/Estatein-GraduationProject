import { SectionWrapper } from "../layouts/SectionWrapper"
import PricingDetailsSection from "../sections/propertyDetails/PricingDetailsSection"
import PropertyDetailsForm from "../sections/propertyDetails/PropertyDetailsForm"
import PropertyGallery from "../sections/propertyDetails/PropertyGallery"

function PropertyDetails() {
  return (
    <div className="huge:container huge:mx-auto mt-28">
      <SectionWrapper>
        <PropertyGallery />
        <PropertyDetailsForm />
        <PricingDetailsSection />
      </SectionWrapper>
    </div>
  )
}

export default PropertyDetails
