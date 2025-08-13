import { useSelector } from "react-redux";
import NoteComponent from "../../components/cards/PricingCards/NoteComponent";
import PricingCard from "../../components/cards/PricingCards/PricingCard";
import Title from "../../components/shared/Title";
import { SectionWrapper } from "../../layouts/SectionWrapper";
import { transformPropertyData } from "../../redux/slices/pricingSlice";

const PricingDetailsSection = () => {
  const currentProperty = useSelector((state: any) => state.properties.current);

  const transformed = currentProperty
    ? transformPropertyData(currentProperty)
    : null;

  // main SkeletonBox style
  const SkeletonBox = () => (
    <div className="flex flex-col gap-10 rounded bg-gray-200 dark:bg-gray-700 p-5 lg-custom:p-10 2xl:p-[50px]">
      <div className="flex max-[390px]:flex-wrap items-center justify-between gap-10">
        <div className="w-[160px] h-[30px] rounded bg-gray-300 dark:bg-gray-600"></div>
        <div className="w-[111px] h-[49px] 2xl:w-[139px] 2xl:h-[63px] rounded bg-gray-300 dark:bg-gray-600"></div>
      </div>
      <div className="w-full h-[52px] 2xl:h-[80px] rounded bg-gray-300 dark:bg-gray-600"></div>
      <div className="w-full h-[52px] 2xl:h-[80px] rounded bg-gray-300 dark:bg-gray-600"></div>
    </div>
  );

  return (
    <SectionWrapper>
      <section>
        <Title
          titleStyle="pb-10 lg-custom:pb-[60px] 2xl:pb-20"
          heading="Comprehensive Pricing Details"
          paragraph="At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision"
          paragraphStyle="w-full md:w-[81.203%]"
        />
        <NoteComponent />

        {transformed ? (
          <div className="flex justify-between max-md:flex-col gap-5 md:gap-10 2xl:gap-[50px]">
            <div>
              <h5 className="text-sm md:text-base 2xl:text-xl text-gray40 dark:text-gray60 font-medium leading-[150%]">
                Listing Price
              </h5>
              <span className="text-2xl md:text-[30px] 2xl:text-[40px] text-black dark:text-white font-semibold">
                {transformed.price}
              </span>
            </div>

            <div className="flex flex-col gap-5 md:gap-10 2xl:gap-[50px] w-full md:w-[1045px] 2xl:w-[1326px]">
              {transformed.details.map((cardGroup) => (
                <PricingCard
                  key={cardGroup.cardTitle}
                  cardTitle={cardGroup.cardTitle}
                  details={cardGroup.details}
                />
              ))}
            </div>
          </div>
        ) : (
          // Skeleton Loader
          <div className="grid grid-cols-3 max-md:grid-cols-2 gap-5 md:gap-10 2xl:gap-[50px] animate-pulse">
            <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="grid gap-5 col-span-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <SkeletonBox key={i} />
              ))}
            </div>
          </div>
        )}
      </section>
    </SectionWrapper>
  );
};

export default PricingDetailsSection;
