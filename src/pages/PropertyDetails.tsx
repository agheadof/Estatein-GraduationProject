import { SectionWrapper } from "../layouts/SectionWrapper"
import PropertyDetailsForm from "../sections/propertyDetails/PropertyDetailsForm"
import PropertyGallery from "../sections/propertyDetails/PropertyGallery"

function PropertyDetails() {
  return (
    <div className="huge:container huge:mx-auto mt-28">
      <SectionWrapper>
        <PropertyGallery />
        <PropertyDetailsForm />
      </SectionWrapper>
    </div>
  )
}

export default PropertyDetails
