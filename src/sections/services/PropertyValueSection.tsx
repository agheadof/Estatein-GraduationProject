import CommonCard from "../../components/cards/CommonCard/CommonCard";
import { propertyValueData } from "../../data/PropertyValueData";
import { SectionWrapper } from "../../layouts/SectionWrapper";

const PropertyValueSection = () => {
  return (
    <SectionWrapper>
      <section className="flex flex-wrap gap-[30px] pb-[150px]">
        {propertyValueData.map((card, index) => (
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

export default PropertyValueSection;
