import CommonCard from "../../components/cards/CommonCard";
import UnlockCardComponent from "../../components/cards/UnlockCardComponent";
import Title from "../../components/shared/Title";
import { propertyValueData } from "../../data/propertyValueData";
import { SectionWrapper } from "../../layouts/SectionWrapper";

const PropertyValueSection = () => {
  return (
    <SectionWrapper>
      <section>
        <Title
          titleStyle="mb-[80px]"
          heading="Unlock Property Value"
          paragraph="Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey"
          paragraphStyle="w-full md:w-[81.203%]"
        />

        <div className="flex flex-wrap justify-between gap-[30px] ">
          {propertyValueData.map((card, index) => (
            <CommonCard
              key={index}
              cardStyle="p-[50px] gap-[30px] border-gray15 w-full md:w-[16.25%] lg:w-[32.08%] "
              cardImg={card.cardImg}
              cardTitle={card.cardTitle}
              cardDesc={card.cardDesc}
            />
          ))}
        </div>
      </section>
    </SectionWrapper>
    
    // <SectionWrapper>
    //   <section>
    // <Title
    //   titleStyle="mb-[80px]"
    //   heading="Unlock Property Value"
    //   paragraph="Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey"
    //   paragraphStyle="w-full md:w-[81.203%]"
    // />
    //     <div className="flex flex-wrap gap-[30px] ">
    // {propertyValueData.map((card, index) => (
    //   <CommonCard
    //     key={index}
    //     cardStyle="p-[50px] gap-[30px] border-gray15 w-full lg-custom:w-[32.265%] 2xl:w-[32.0802%]"
    //     cardImg={card.cardImg}
    //     cardTitle={card.cardTitle}
    //     cardDesc={card.cardDesc}
    //   />
    // ))}
    //       <UnlockCardComponent
    //         cardStyle='w-[65.914%] py-[59px] px-[50px] bg-[url("/assets/images/AbstractDesign2.png")]'
    //         title="Unlock the Value of Your Property Today"
    //         titleStyle="text-[30px] font-bold"
    //         desc="Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset."
    //         descStyle="text-gray60"
    //       />
    //     </div>
    //   </section>
    // </SectionWrapper>
  );
};

export default PropertyValueSection;
