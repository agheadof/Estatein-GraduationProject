import { SectionWrapper } from "../layouts/SectionWrapper";
import ContactForm from "../sections/properties/ContactForm";
import PropertyDetailsForm from "../sections/propertyDetails/PropertyDetailsForm";

function PropertiesPage() {
  return (
    <div className="huge:container huge:mx-auto">
      <SectionWrapper>
        <ContactForm
         titleStyle="leading-[1.5]"
          starImg={true}
          heading="Let's Make it Happen"
          paragraph="Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
        contact={false}
        />
      </SectionWrapper>
    </div>
  );
}

export default PropertiesPage;
