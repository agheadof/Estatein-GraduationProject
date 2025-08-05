import { useParams } from "react-router-dom"
import { SectionWrapper } from "../layouts/SectionWrapper"
import PricingDetailsSection from "../sections/propertyDetails/PricingDetailsSection"
import PropertyDetailsForm from "../sections/propertyDetails/PropertyDetailsForm"
import PropertyGallery from "../sections/propertyDetails/PropertyGallery"

function PropertyDetails() {
  const { id } = useParams()

  return (
    <div className="huge:container huge:mx-auto mt-28">
      <SectionWrapper>
        {id && <PropertyGallery id={id} />}

        <PropertyDetailsForm />
        <PricingDetailsSection />
      </SectionWrapper>
    </div>
  )
}

export default PropertyDetails
