import NoteComponent from "../../components/cards/PricingCard/NoteComponent";
import PricingCard from "../../components/cards/PricingCard/PricingCard";
import Title from "../../components/shared/Title";
import { pricingDetailsData } from "../../data/pricingDetailsData";

const PricingDetailsSection = () => {
  return (
    <section className="pb-[61px] md:pb-[90px] 2xl:pb-[110px]">
      <Title
        titleStyle="pb-10 md:pb-[60px] 2xl:pb-20"
        heading="Comprehensive Pricing Details"
        paragraph="At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision"
        paragraphStyle="w-full md:w-[81.203%]"
      />
      <NoteComponent />

      <div className="flex justify-between max-md:flex-col gap-5 md:gap-10 2xl:gap-[50px]">
        <div>
          <h5 className="text-sm md:text-base 2xl:text-xl text-gray60 font-medium leading-[150%]">
            {" "}
            Listing Price{" "}
          </h5>
          <span className="text-2xl md:text-[30px] 2xl:text-[40px] text-white font-semibold">
            {" "}
            $1,250,000{" "}
          </span>
        </div>

        <div className="flex flex-col gap-5 md:gap-10 2xl:gap-[50px] w-full md:w-[1045px] 2xl:w-[1326px]">
          {pricingDetailsData.map((e, index) => (
            <PricingCard
              key={index}
              cardTitle={e.cardTitle}
              details={e.details}
              isTwoItem={e.isTwoItem}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingDetailsSection;


