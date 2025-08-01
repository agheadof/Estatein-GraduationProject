import CommonCard from "../../components/cards/CommonCard";
import UnlockCardComponent from "../../components/cards/UnlockCardComponent";
import Title from "../../components/shared/Title";
import { propertyValueData } from "../../data/propertyValueData";
import { SectionWrapper } from "../../layouts/SectionWrapper";

const PropertyValueSection = () => {
  return (
    <SectionWrapper>
      <section className="flex flex-wrap gap-[30px] mb-[110px]">
        <Title
          titleStyle="mb-[80px]"
          heading="Unlock Property Value"
          paragraph="Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey"
          paragraphStyle="w-[1296px]"
        />
        {propertyValueData.map((card, index) => (
          <CommonCard
            key={index}
            cardStyle="gap-[30px] border-gray15 w-[512px]"
            cardImg={card.cardImg}
            cardTitle={card.cardTitle}
            cardDesc={card.cardDesc}
          />
        ))}
        <UnlockCardComponent />
      </section>
    </SectionWrapper>
  );
};

export default PropertyValueSection;
