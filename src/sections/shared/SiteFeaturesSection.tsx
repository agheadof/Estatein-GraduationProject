import CommonCard from "../../components/cards/CommonCard";
import { SiteFeaturesData } from "../../data/SiteFeaturesData";

const SiteFeaturesSection = () => {
  return (
    <section className="grid grid-cols-2 min-lg-custom:grid-cols-4 gap-2.5 2xl:gap-5 p-2.5 2xl:p-5 mb-[90px] bg-white99 dark:bg-gray08 border border-white90 dark:border-gray15 dark:shadow-[0_-10px_10px_-5px_#191919,_0_10px_10px_-5px_#191919]">
      {SiteFeaturesData.map((card, index) => (
        <CommonCard
          key={index}
          isArrow={true}
          cardImg={card.cardImg}
          cardTitle={card.cardTitle}
          cardStyle="py-5 px-3.5 md:py-[30px] md:px-4 2xl:py-10 2xl:px-5 bg-white97 dark:bg-gray10 border border-white90 dark:border-gray15"
          titleStyle="flex-col items-center"
          titleSize="text-sm md:text-base 2xl:text-[20px] text-center" children={undefined}        />
      ))}
    </section>
  );
};

export default SiteFeaturesSection;
