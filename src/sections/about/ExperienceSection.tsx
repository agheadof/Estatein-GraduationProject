import { useEffect } from "react";
import ExperienceSectionCard from "../../components/cards/ExperienceSectionCard";
import { SectionWrapper } from "../../layouts/SectionWrapper";
import Title from "../../components/shared/Title";
import {
  containerVariants,
  defaultMotionConfig,
  flipCardVariants,
} from "../../utlis/Animation";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { subscribeExperience } from "../../redux/slices/experienceSlice";

function ExperienceSection() {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.experience);

  useEffect(() => {
    dispatch(subscribeExperience());
  }, [dispatch]);

  return (
    <SectionWrapper className="pb-20 lg-custom:pb-[120px] 2xl:pb-[150px]">
      <motion.section {...defaultMotionConfig} variants={containerVariants}>
        <Title
          heading="Navigating the Estatein Experience"
          paragraph="At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works."
          starImg={true}
          titleStyle="mb-2 md:mb-[10px] lg-custom:mb-[14px]"
          paragraphStyle="w-full lg-custom:max-w-[1000px] 2xl:max-w-[1279px]"
        />

        {loading ? (
          // Skeleton Loader
          <div className="grid grid-cols-1 md:grid-cols-2 lg-custom:!grid-cols-3 gap-y-[30px] gap-x-[0px] md:gap-x-[20px] md:gap-y-[40px] huge:gap-x-[30px] huge:gap-y-[50px] mt-10 lg-custom:mt-[60px] 2xl:mt-[80px] animate-pulse">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="w-full h-[200px] bg-gray-200 dark:bg-gray-700 rounded-xl"
              ></div>
            ))}
          </div>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="cards_container grid grid-cols-1 md:grid-cols-2 lg-custom:!grid-cols-3 gap-y-[30px] gap-x-[0px] md:gap-x-[20px] md:gap-y-[40px] huge:gap-x-[30px] huge:gap-y-[50px] mt-10 lg-custom:mt-[60px] 2xl:mt-[80px]">
            {items.map((item, idx) => (
              <motion.div variants={flipCardVariants} key={idx}>
                <ExperienceSectionCard
                  description={item.description}
                  title={item.title}
                  step={item.step}
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
