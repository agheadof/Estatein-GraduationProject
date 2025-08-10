import ExperienceSectionCard from '../../components/cards/ExperienceSectionCard';
import { SectionWrapper } from '../../layouts/SectionWrapper';
import Title from '../../components/shared/Title';
import { containerVariants, defaultMotionConfig, flipCardVariants } from "../../utlis/Anamation";
import { motion } from "framer-motion";
import { useAppDispatch } from '../../redux/types/typed-hooks';
import { useAppSelector } from '../../redux/hooks';
import { useEffect } from 'react';
import { fetchSteps } from '../../redux/slices/stepsSlice';



function ExperienceSection() {

  const dispatch = useAppDispatch();
  const { visibleItems, loading, error } = useAppSelector((state) => state.steps);

  useEffect(() => {
    if (visibleItems.length === 0) {
      dispatch(fetchSteps());
      console.log(visibleItems);
    }
  }, [dispatch, visibleItems.length]);

  const skeletonCount = visibleItems.length > 0 ? visibleItems.length : 6;
  
  return (
    <SectionWrapper className="pb-20 lg-custom:pb-[120px] 2xl:pb-[150px]">
      <motion.section
        {...defaultMotionConfig}
        variants={containerVariants}
      >
        <Title
          heading="Navigating the Estatein Experience"
          paragraph="At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works."
          starImg={true}
          titleStyle="mb-2 md:mb-[10px] lg-custom:mb-[14px]"
          paragraphStyle="w-full lg-custom:max-w-[1000px] 2xl:max-w-[1279px]"
        />
        {loading ? (
          <div className="cards_container grid grid-cols-1 md:grid-cols-2 lg-custom:!grid-cols-3 gap-y-[30px] gap-x-[0px] md:gap-x-[20px] md:gap-y-[40px] huge:gap-x-[30px] huge:gap-y-[50px] mt-10 lg-custom:mt-[60px] 2xl:mt-[80px]">
            {[...Array(skeletonCount)].map((_, i) => (
              <div
                key={i}
                className="
                  p-[30px] md:p-[10%]
                  border-white90 dark:border-gray15 border
                  rounded-xl
                  bg-gray-200 dark:bg-gray-700
                  animate-pulse
                  shadow-[0px_0px_0px_10px_rgba(0,0,0,0.02)] dark:shadow-[0px_0px_0px_10px_#191919]
                  cursor-pointer
                "
              >
                <div className="h-[30px] lg-custom:h-[36px] 2xl:h-[44px] bg-gray-300 dark:bg-gray-600 rounded mb-6 md:mb-8 2xl:mb-[30px]" />
                <div className="h-[18px] lg-custom:h-[21px] 2xl:h-[24px] bg-gray-300 dark:bg-gray-600 rounded w-full" />
              </div>
            ))}
          </div>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
        <div className="cards_container grid grid-cols-1 md:grid-cols-2 lg-custom:!grid-cols-3 gap-y-[30px] gap-x-[0px] md:gap-x-[20px] md:gap-y-[40px] huge:gap-x-[30px] huge:gap-y-[50px] mt-10 lg-custom:mt-[60px] 2xl:mt-[80px]">
          {visibleItems.map((item, idx) => (
            <motion.div variants={flipCardVariants} key={idx}>
              <ExperienceSectionCard
                description={item.description}
                title={item.title}
                stepNum={item.stepNum}
              />
            </motion.div>
          ))}
        </div>
        )}
      </motion.section>
    </SectionWrapper>
  );
}

export default ExperienceSection;
