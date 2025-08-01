import InquiryForm from '../components/Forms/InquiryForm';
import { SectionWrapper } from '../layouts/SectionWrapper';
import ContactForm from '../sections/properties/ContactForm';
import SubHero from '../components/shared/SubHero/SubHero'
import { subHeroProperties } from '../data/subHeroData'

function PropertiesPage() {
  return (
     <div className='huge:container huge:mx-auto'>
      <SubHero title={subHeroProperties.title} desc={subHeroProperties.desc} />
      <SectionWrapper>
       <ContactForm/>
      </SectionWrapper>
    </div>
  );
}

export default PropertiesPage
