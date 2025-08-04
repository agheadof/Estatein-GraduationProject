import InquiryForm from "../../components/Forms/InquiryForm";
import Title from "../../components/shared/Title/Title";

type ContactFormProps = {
  titleStyle: string;
  starImg: boolean;
  heading: string;
  paragraph: string;
  type: "inquiry" | "contact" | "property";
};

function ContactForm({
titleStyle,
  starImg,
  heading,
  paragraph,
  type,
}: ContactFormProps) {
  return (
    <div className="px-4 md:px-8 lg-custom:!px-20 2xl:!px-[162px] mt-20 lg-custom:mt-30 2xl:!mt-[150px]">
      <Title
        titleStyle={titleStyle}
        starImg={starImg}
        heading={heading}
        paragraph={paragraph}
      />
      <InquiryForm type={type} />
    </div>
  );
}

export default ContactForm;
