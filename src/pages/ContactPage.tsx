
import SubHero from "../components/shared/SubHero";
import { subHeroContact } from "../data/subHeroData";
import OurOffices from "../sections/contact/OurOffices";
import TeamGallery from "../sections/contact/TeamGallery";
import ContactForm from '../sections/properties/ContactForm';

function ContactPage() {
  return (
    <div className="huge:max-w-[1920px] huge:mx-auto">
      <SubHero title={subHeroContact.title} desc={subHeroContact.desc} classes="lg-custom:pb-[100px]"/>
        <ContactForm
          starImg={true}
          heading="Let's Make it Happen"
          paragraph="Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
          type='contact'
        />
        <TeamGallery/>
        <OurOffices/>
    </div>
  );
}

export default ContactPage
