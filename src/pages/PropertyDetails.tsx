import { SectionWrapper } from "../layouts/SectionWrapper"
import PropertyDetailsForm from "../sections/propertyDetails/PropertyDetailsForm"

function PropertyDetails() {
  return (
    <div className="huge:container huge:mx-auto">
      <SectionWrapper>
        <PropertyDetailsForm />
      </SectionWrapper>
    </div>
  )
}

export default PropertyDetails
