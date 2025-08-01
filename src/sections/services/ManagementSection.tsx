import CommonCard from "../../components/cards/CommonCard";
import UnlockCardComponent from "../../components/cards/UnlockCardComponent";
import Title from "../../components/shared/Title";
import { managementData } from "../../data/managementData";
import { SectionWrapper } from "../../layouts/SectionWrapper";

const ManagementSection = () => {
  return (
    <SectionWrapper>
      <section className="flex flex-wrap gap-[30px] mb-[110px]">
        <Title
          titleStyle="mb-[80px]"
          heading="Effortless Property Management"
          paragraph="Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you"
          paragraphStyle="w-[1296px]"
        />
        {managementData.map((card, index) => (
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
          title="Experience Effortless Property Management"
          desc="Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership."
        />
      </section>
    </SectionWrapper>
  );
};

export default ManagementSection;
