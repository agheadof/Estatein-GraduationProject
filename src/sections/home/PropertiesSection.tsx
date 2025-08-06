import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import { fetchProperties } from "../../redux/slices/propertiesSlice";
import { selectPropertiesCardsData } from "../../redux/types/Property";
import GenericSlider from "../../components/shared/GenericSlider/GenericSlider";
import PropertiesCard from "../../components/cards/PropertiesCard";
import Title from "../../components/shared/Title";
import { SectionWrapper } from "../../layouts/SectionWrapper";

type Props = {
  showTags?: boolean;
  showDetails?: boolean;
  heading: string;
  paragraph: string;
  buttonLabel?: string;
};
function PropertiesSection({
  heading,
  paragraph,
  buttonLabel,
  showDetails = true,
  showTags = false,
}: Props) {
  const dispatch = useAppDispatch();
  const properties = useAppSelector(selectPropertiesCardsData);
  const { loading, error } = useAppSelector((state) => state.testimonials);

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  return (
    <SectionWrapper>
      <div className="mt-[80px] lg-custom:mt-[120px] 2xl:mt-[150px]">
        <Title
          heading={heading}
          paragraph={paragraph}
          buttonLabel={buttonLabel}
        />
        {loading ? (
          <p className="text-black dark:text-white">Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <GenericSlider
            items={properties}
            renderSlide={(property) => (
              <PropertiesCard
                key={property.id}
                property={property}
                showDetails={showDetails}
                showTags={showTags}
              />
            )}
            slidesPerView={3}
            showCounter={true}
            titleBtnLabel="View All Properties"
          />
        )}
      </div>
    </SectionWrapper>
  );
}

export default PropertiesSection;
