import InquiryForm from "../../components/Forms/InquiryForm";
import Title from "../../components/shared/Title/Title";

type ContactFormProps = {
  titleStyle: string;
  starImg: boolean;
  heading: string;
  paragraph: string;
  contact: boolean;
};

function ContactForm({
titleStyle,
  starImg,
  heading,
  paragraph,
  contact,
}: ContactFormProps) {
  return (
    <div className="mt-50">
      <Title titleStyle ={titleStyle} starImg={starImg} heading={heading} paragraph={paragraph} />
      <InquiryForm contact={contact} />
    </div>
  );
}

export default ContactForm;
