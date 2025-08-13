import CommonCard from "../../components/cards/CommonCard";
import UnlockCardComponent from "../../components/cards/UnlockCardComponent";
import Title from "../../components/shared/Title";
import { investmentsData } from "../../data/investmentsData";
import { SectionWrapper } from "../../layouts/SectionWrapper";

const InvestmentsSection = () => {
  return (
    <SectionWrapper className="pb-20 lg-custom:pb-[120px] 2xl:pb-[150px]">
    <section
      id="investments"
      className="flex flex-col items-center xl:flex-row gap-10 md:gap-[50px] 2xl:gap-[60px] "
    >
      <div className="grid min-lg-custom:grid-cols-2 xl:grid-cols-1 gap-[30px] lg-custom::gap-10 2xl:gap-[50px]">
        <Title
          heading="Smart Investments, Informed Decisions"
          paragraph="Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions."
        />

        <UnlockCardComponent
          investments={true}
          cardStyle='p-6 md:p-10 2xl:p-[50px] bg-[url("/assets/images/AbstractDesign3.png")] bg-no-repeat w-full'
          title="Unlock Your Investment Potential"
          titleStyle="text-xl md:text-[22px] 2xl:text-2xl font-semibold"
          desc="Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership."
          descStyle=" text-gray15 dark:text-white90"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 bg-white97 dark:bg-gray10 rounded-xl justify-center gap-2.5 p-2.5">
        {investmentsData.map((card, index) => (
          <CommonCard
            key={index}
            cardStyle="p-6 md:p-10 2xl:p-[50px] gap-4 md:gap-5 2xl:gap-[30px] bg-white99 dark:bg-gray08 border-white90 dark:border-gray15"
            cardImg={card.cardImg}
            cardTitle_1={card.cardTitle_1}
            cardDesc={card.cardDesc}
          />
        ))}
      </div>
    </section>
    </SectionWrapper>
  );
};

export default InvestmentsSection;
