import CommonCard from "../../components/cards/CommonCard";
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
