import SubHero from "../components/shared/SubHero/SubHero"
import { subHeroContact } from "../data/subHeroData"
import OurOffices from "../sections/contact/OurOffices";
import ContactForm from '../sections/properties/ContactForm';

function ContactPage() {
  return (
    <div className="huge:container huge:mx-auto">
        <ContactForm
          titleStyle="leading-[1.5]"
          starImg={true}
          heading="Let's Make it Happen"
          paragraph="Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
          type='contact'
        />
        <OurOffices/>
      <SubHero title={subHeroContact.title} desc={subHeroContact.desc} />
    </div>
  );
}

export default ContactPage
