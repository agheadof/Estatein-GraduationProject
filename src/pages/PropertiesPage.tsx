import ContactForm from "../sections/properties/ContactForm";
import { subHeroProperties } from "../data/subHeroData";
import FilterProperty from "../sections/properties/FilterProperty";
import PropertiesSection from "../sections/home/PropertiesSection";
import SubHero from "../components/shared/SubHero";

function PropertiesPage() {
  return (
<<<<<<< HEAD
    <div className="huge:container huge:mx-auto">
      <SubHero title={subHeroProperties.title} desc={subHeroProperties.desc} classes="relative" />
=======
    <div className="huge:max-w-[1920px] huge:mx-auto">
      <SubHero title={subHeroProperties.title} desc={subHeroProperties.desc} classes="relative"/>
>>>>>>> 953284cff2ac1d101a0f231b53a888ce6829f0f1
      <FilterProperty />
      <PropertiesSection
        heading="Discover a World of Possibilities"
        paragraph={`Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home`}
        showDetails={false}
        showTags= {true}
        
        />
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
