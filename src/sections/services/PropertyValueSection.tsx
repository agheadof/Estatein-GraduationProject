import CommonCard from "../../components/cards/CommonCard";
import UnlockCardComponent from "../../components/cards/UnlockCardComponent";
import Title from "../../components/shared/Title";
import { propertyValueData } from "../../data/propertyValueData";
import { SectionWrapper } from "../../layouts/SectionWrapper";

const PropertyValueSection = () => {
  return (
    <SectionWrapper>
      <section className="pb-[61px] md:pb-[90px] 2xl:pb-[110px]">
        <Title
          titleStyle="mb-[80px]"
          heading="Unlock Property Value"
          paragraph="Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey"
          paragraphStyle="w-full md:w-[81.203%]"
        />

        <div className="grid gap-5 2xl:gap-[30px] grid-cols-2 xl:grid-cols-3">
          {propertyValueData.map((card, index) => (
            <CommonCard
              key={index}
              cardStyle="p-6 md:p-10 2xl:p-[50px] gap-4 md:gap-5 2xl:gap-[30px] border-gray15 "
              cardImg={card.cardImg}
              cardTitle={card.cardTitle}
              cardDesc={card.cardDesc}
            />
          ))}

          <UnlockCardComponent
            cardStyle='col-span-2 p-6 md:py-[45.5px] md:px-10 2xl:py-[59.5px] 2xl:px-[50px] bg-[url("/assets/images/AbstractDesign2.png")] bg-no-repeat bg-cover'
            title="Unlock the Value of Your Property Today"
            titleStyle="text-xl md:text-2xl 2xl:text-[30px] font-bold"
            desc="Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset."
            descStyle="text-gray60"
          />
        </div>
      </section>
    </SectionWrapper>
  );
};

export default PropertyValueSection;
