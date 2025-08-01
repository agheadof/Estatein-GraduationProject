import CommonCard from "../../components/cards/CommonCard/CommonCard";
import { investmentsData } from "../../data/investmentsData";
import { SectionWrapper } from "../../layouts/SectionWrapper";

const InvestmentsSection = () => {
  return (
    <SectionWrapper>
      <section className="flex gap-[60px] pb-[150px]">
        <div></div>
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
