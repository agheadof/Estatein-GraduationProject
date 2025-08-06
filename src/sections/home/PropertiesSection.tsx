import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchProperties } from '../../redux/slices/propertiesSlice';
import { selectPropertiesCardsData } from '../../redux/types/Property';
import GenericSlider from '../../components/shared/GenericSlider/GenericSlider';
import PropertiesCard from '../../components/cards/PropertiesCard';
import { SectionWrapper } from '../../layouts/SectionWrapper';
import Title from '../../components/shared/Title';
import { motion } from 'framer-motion';
import { containerVariants, defaultMotionConfig, itemVariants } from '../../utlis/Anamation';

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
      <motion.div
        className="mt-[80px] lg-custom:mt-[120px] 2xl:mt-[150px]"
        {...defaultMotionConfig}

        variants={containerVariants}
      >
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
              <motion.div key={property.id} variants={itemVariants}>
                <PropertiesCard
                  property={property}
                  showDetails={showDetails}
                  showTags={showTags}
                />
              </motion.div>
            )}
            slidesPerView={3}
            showCounter={true}
            titleBtnLabel="View All Properties"
          />
        )}
      </motion.div>
    </SectionWrapper>
  );
}

export default PropertiesSection;
