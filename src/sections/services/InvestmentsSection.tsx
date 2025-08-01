import CommonCard from "../../components/cards/CommonCard";
import Title from "../../components/shared/Title";
import { investmentsData } from "../../data/investmentsData";
import { SectionWrapper } from "../../layouts/SectionWrapper";

const InvestmentsSection = () => {
  return (
    <SectionWrapper>
      <section className="flex gap-[60px]">
        <div className="w-[519px]">
          <Title
           titleStyle="mb-[50px]"
            heading="Smart Investments, Informed Decisions"
            paragraph="Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions."
            // paragraphStyle="w-full"
          />
        </div>
        <div className="w-[1017px] bg-gray10 rounded-xl flex flex-wrap gap-2.5 p-2.5">
          {investmentsData.map((card, index) => (
            <CommonCard
              key={index}
              cardStyle="gap-[30px] bg-gray08 border-gray15 w-[493px]"
              cardImg={card.cardImg}
              cardTitle={card.cardTitle}
              cardDesc={card.cardDesc}
            />
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
};

export default InvestmentsSection;
