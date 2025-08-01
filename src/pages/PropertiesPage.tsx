import InquiryForm from '../components/Forms/InquiryForm';
import { SectionWrapper } from '../layouts/SectionWrapper';

function PropertiesPage() {
  return (
     <div className='huge:container huge:mx-auto'>
      <SectionWrapper>
       <InquiryForm/>
      </SectionWrapper>
    </div>
  );
}

export default PropertiesPage
