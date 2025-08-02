import CommonCard from "../../components/cards/CommonCard";
import { SiteFeaturesData } from "../../data/SiteFeaturesData";

const SiteFeaturesSection = () => {
  return (
    <section className="flex justify-between gap-2.5 2xl:gap-5 p-2.5 2xl:p-5 bg-gray08 border border-gray15 shadow-[0px_0px_0px_10px_#191919]">
      {SiteFeaturesData.map((card, index) => (
        <CommonCard
          key={index}
          isArrow={true}
          cardImg={card.cardImg}
          cardTitle={card.cardTitle}
          // cardStyle="py-5 px-3.5 md:py-[30px] md:px-4 2xl:py-10 2xl:px-5 bg-gray10 w-[180px] md:w-[347px] 2xl:w-[455px] border border-gray15"
          cardStyle="py-5 px-3.5 md:py-[30px] md:px-4 2xl:py-10 2xl:px-5 bg-gray10 w-[455px] border border-gray15"
          titleStyle="flex-col items-center"
          titleSize="text-sm md:text-base 2xl:text-[20px] text-center"
        />
      ))}
    </section>
  );
};

export default SiteFeaturesSection;
