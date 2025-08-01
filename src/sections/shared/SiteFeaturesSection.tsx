import CommonCard from "../../components/cards/CommonCard";
import { SiteFeaturesData } from "../../data/SiteFeaturesData";

const SiteFeaturesSection = () => {
  return (
    <section className="flex gap-5 p-5 bg-gray08 border border-gray15 shadow-[0px_0px_0px_10px_#191919]">
      {SiteFeaturesData.map((card, index) => (
        <CommonCard
          key={index}
          isArrow={true}
          cardImg={card.cardImg}
          cardTitle={card.cardTitle}
          cardStyle="py-10 px-5 bg-gray10 w-[455px] border border-gray15"
          titleStyle="flex-col items-center"
          titleSize="text-[20px]"
        />
      ))}
    </section>
  );
};

export default SiteFeaturesSection;
