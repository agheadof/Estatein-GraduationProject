import { motion } from "framer-motion";
import InquiryForm from "../../components/Forms/InquiryForm";
import Title from "../../components/shared/Title";
import { SectionWrapper } from "../../layouts/SectionWrapper";

type ContactFormProps = {
  starImg: boolean;
  heading: string;
  paragraph: string;
  type: "inquiry" | "contact" | "property";
};

function ContactForm({
  starImg,
  heading,
  paragraph,
  type,
}: ContactFormProps) {
  return (
    <SectionWrapper className="py-20 lg-custom:py-[120px] 2xl:py-[150px]">
        {/* Animation for Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Title starImg={starImg} heading={heading} paragraph={paragraph} />
        </motion.div>

        {/* Animation for Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <InquiryForm type={type} />
        </motion.div>
    </SectionWrapper>
  );
}

export default ContactForm;
