import InquiryForm from '../components/Forms/InquiryForm';
import { SectionWrapper } from '../layouts/SectionWrapper';

function PropertiesPage() {
  return (
    <div className="min-[1920px]:container min-[1920px]:mx-auto">
      <SectionWrapper>
       <InquiryForm/>
      </SectionWrapper>
    </div>
  );
}

export default PropertiesPage
