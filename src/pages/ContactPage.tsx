import SubHero from "../components/shared/SubHero/SubHero"
import { subHeroContact } from "../data/subHeroData"
import OurOffices from "../sections/contact/OurOffices";
import TeamGallery from "../sections/contact/TeamGallery";
import ContactForm from '../sections/properties/ContactForm';

function ContactPage() {
  return (
    <div className="huge:container huge:mx-auto">
      <ContactForm
        starImg={true}
        heading="Let's Make it Happen"
        paragraph="Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
        type="contact"
      />
      <OurOffices />
      <div className="px-4 md:px-8 lg-custom:!px-20 2xl:!px-[162px] mt-20 lg-custom:mt-30 2xl:!mt-[150px]">
        <TeamGallery />
      </div>
      <SubHero title={subHeroContact.title} desc={subHeroContact.desc} />
    </div>
  );
}

export default ContactPage
