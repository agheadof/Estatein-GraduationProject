import CommonCard from "../../components/cards/CommonCard/CommonCard";
import { managementData } from "../../data/Managementdata";
import { SectionWrapper } from "../../layouts/SectionWrapper";

const ManagementSection = () => {
  return (
    <SectionWrapper>
      <section className="flex flex-wrap gap-[30px] pb-[150px]">
        {managementData.map((card, index) => (
          <CommonCard
            key={index}
            cardStyle="gap-[30px] border-gray15 w-[512px]"
            cardImg={card.cardImg}
            cardTitle={card.cardTitle}
            cardDesc={card.cardDesc}
          />
        ))}
      </section>
    </SectionWrapper>
  );
};

export default ManagementSection;
