import InquiryForm from "../../components/Forms/InquiryForm";
import Title from "../../components/shared/Title"

function ContactForm() {
  return (
    <div className="mt-50">
      <Title
        starImg={true}
        heading="Let's Make it Happen"
        paragraph="Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
      />
      <InquiryForm/>
    </div>
  );
}

export default ContactForm
