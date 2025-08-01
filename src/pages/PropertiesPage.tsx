import InquiryForm from '../components/Forms/InquiryForm';
import { SectionWrapper } from '../layouts/SectionWrapper';
import ContactForm from '../sections/properties/ContactForm';

function PropertiesPage() {
  return (
     <div className='huge:container huge:mx-auto'>
      <SectionWrapper>
       <ContactForm/>
      </SectionWrapper>
    </div>
  );
}

export default PropertiesPage
