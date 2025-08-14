import { shallowEqual } from "react-redux";
import { useAppSelector } from "../../redux/hooks";

const DescriptionComponent = () => {
  const property = useAppSelector((state) => {
    let error = state.properties.error;
    let loading = state.properties.loading;
    let current = state.properties.current;
    return { error, loading, current };
  }, shallowEqual);

  const castingToNumber = (input: string) => {
    const result = input.replace(/\D/g, "").padStart(2, "0");
    return result;
  };

  return (
    <div  data-aos="fade-right" className="p-5 lg-custom:p-10 2xl:p-[50px] rounded-[10px] border border-white90 dark:border-gray15 flex flex-col gap-5 lg-custom:gap-10 2xl:gap-[50px] w-full lg-custom:w-1/2 h-fit">
      <div className="flex flex-col gap-1.5 lg-custom:gap-2.5 2xl:gap-3.5">
        <h3 className="text-black dark:text-white font-semibold text-lg leading-[150%] lg-custom:text-xl 2xl:text-2xl">
          Description
        </h3>

        {property.loading ? (
          <p className="text-white">Loading...</p>
        ) : property.error ? (
          <p className="text-red-500">{property.error}</p>
        ) : (
          <p className="text-gray60 font-medium text-sm leading-[150%] lg-custom:text-base 2xl:text-lg">
            {property.current?.descriptionLong || "No description available."}
          </p>
        )}
      </div>

      {!property.loading && !property.error && property.current && (
        <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-5 lg-custom:gap-10 border-t border-t-white90 dark:border-t-gray15 pt-4 justify-between">
          <div className="flex flex-col gap-1.5 lg-custom:gap-2 2xl:gap-2.5">
            <div className="flex gap-1 lg-custom:gap-1.5 ">
              <img
                src="/assets/icons/FeaturedProperties/bedroom.svg"
                alt="icon"
                className="w-5 h-5 2xl:w-6 2xl:h-6"
              />
              <span className="text-gray40 dark:text-gray60 font-medium leading-[150%] text-sm 2xl:text-lg">
                Bedrooms
              </span>
            </div>
            <span className="text-black dark:text-white font-semibold leading-[150%] text-lg lg-custom:text-xl 2xl:text-2xl">
              {castingToNumber(property.current.details[0].label)}
            </span>
          </div>

          <div className="flex gap-4">
            <span className="h-full w-px bg-white90 dark:bg-gray15 align-middle" />

            <div className="flex flex-col gap-1.5 lg-custom:gap-2 2xl:gap-2.5">
              <div className="flex gap-1 lg-custom:gap-1.5">
                <img
                  src="/assets/icons/FeaturedProperties/bathroom.svg"
                  alt="icon"
                  className="w-5 h-5 2xl:w-6 2xl:h-6"
                />
                <span className="text-gray40 dark:text-gray60 font-medium  leading-[150%] text-sm 2xl:text-lg">
                  Bathrooms
                </span>
              </div>
              <span className="text-black dark:text-white font-semibold leading-[150%] text-lg lg-custom:text-xl 2xl:text-2xl">
                {castingToNumber(property.current.details[1].label)}
              </span>
            </div>
          </div>

          <div className="flex gap-4 w-full md:w-auto border-t border-t-white90 dark:border-t-gray15 pt-4 md:border-0 md:pt-0">
            <span className="hidden md:flex h-full w-px bg-white90 dark:bg-gray15 align-middle" />
            <div className="flex flex-col gap-1.5 lg-custom:gap-2 2xl:gap-2.5">
              <div className="flex gap-1 lg-custom:gap-1.5">
                <img
                  src="/assets/icons/FeaturedProperties/area.svg"
                  alt="icon"
                  className="w-5 h-5 2xl:w-6 2xl:h-6"
                />
                <span className="text-gray40 dark:text-gray60 font-medium leading-[150%] text-sm 2xl:text-lg">
                  Area (m²)
                </span>
              </div>
              <span className="text-black dark:text-white font-semibold leading-[150%] text-lg lg-custom:text-xl 2xl:text-2xl">
                {`${castingToNumber(
                  property.current.details[2].label
                )} Square Feet`}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DescriptionComponent;
