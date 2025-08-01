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
            cardStyle="p-[50px] gap-[30px] border-gray15 w-[512px]"
            cardImg={card.cardImg}
            cardTitle={card.cardTitle}
            cardDesc={card.cardDesc}
          />
        ))}
        <UnlockCardComponent
          cardStyle='bg-[url("/assets/images/AbstractDesign2.png")]'
          title="Unlock the Value of Your Property Today"
          desc="Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset."
        />
      </section>
    </SectionWrapper>
  );
};

export default PropertyValueSection;
