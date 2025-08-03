import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchProperties } from "../../redux/slices/propertiesSlice";

const KeyFeaturesComponent = () => {
  const dispatch = useAppDispatch();
  const { visibleItems, loading, error } = useAppSelector((state) => state.properties);

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  return (
    <div className="p-5 lg-custom:p-10 2xl:p-[50px] rounded-xl border border-gray15 flex flex-col gap-5 lg-custom:gap-10 2xl:gap-[50px]">
      <h3 className="text-white font-semibold text-lg leading-[150%] lg-custom:text-xl 2xl:text-2xl">
        Key Features and Amenities
      </h3>

      {loading ? (
        <p className="text-white text-center">Loading...</p>
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <div className="flex flex-wrap gap-3">
          {visibleItems?.flatMap((properties) =>
            properties.features.map((feature: string, index: number) => (
              <div
                key={`${properties.id}-${index}`}
                className="flex items-center gap-2 border-l border-purple60 px-3 py-2 bg-[linear-gradient(to_right,#1A1A1A_0%,#1A1A1A00_100%)] rounded-md"
              >
                <img
                  src="/assets/icons/FeaturedProperties/FeaturesIcon.svg"
                  alt="icon"
                  className="w-[18px] h-[18px] lg-custom:w-5 lg-custom:h-5 2xl:w-6 2xl:h-6"
                />
                <span className="text-gray60 font-medium text-sm leading-[150%] lg-custom:text-base 2xl:text-lg">
                  {feature}
                </span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default KeyFeaturesComponent;


