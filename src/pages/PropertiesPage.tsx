import ContactForm from "../sections/properties/ContactForm";
import { subHeroProperties } from "../data/subHeroData";
import FilterProperty from "../sections/properties/FilterProperty";
import PropertiesSection from "../sections/home/PropertiesSection";
import SubHero from "../components/shared/SubHero";

function PropertiesPage() {
  return (
    <div className="huge:max-w-[1920px] huge:mx-auto">
      <SubHero title={subHeroProperties.title} desc={subHeroProperties.desc} classes="relative"/>
      <FilterProperty />
      <PropertiesSection showDetails={false} />
        <ContactForm
          titleStyle="leading-[1.5]"
          starImg={true}
          heading="Let's Make it Happen"
          paragraph="Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
            type="inquiry"
        />
    </div>
  );
}

export default PropertiesPage;
