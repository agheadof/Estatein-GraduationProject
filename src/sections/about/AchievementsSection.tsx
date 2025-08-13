import { useEffect } from "react";
import AchievementsCard from "../../components/cards/AchievementsCard";
import { SectionWrapper } from "../../layouts/SectionWrapper";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchAchievements } from "../../redux/slices/achievementSlice";
import Title from "../../components/shared/Title";
import { teamItemAos } from "../../utlis/Anamation";

function AchievementsSection() {
  const dispatch = useAppDispatch();
  const { visibleItems, loading, error } = useAppSelector((state) => state.achievements);

  useEffect(() => {
    if (visibleItems.length === 0) {
      dispatch(fetchAchievements());
    }
  }, [dispatch, visibleItems.length]);

  const skeletonCount = visibleItems.length > 0 ? visibleItems.length : 3;

  return (
    <SectionWrapper className="py-20 lg-custom:py-[120px] 2xl:py-[150px]">
      <section

      >
        <Title
          starImg={true}
          heading="Our Achievements"
          paragraph="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
          paragraphStyle="w-[95%]"
          anamation="fade-up"
        />

        {loading ? (
          <div className="grid gap-5 md:grid-cols-3 md:gap-[30px] 2xl:gap-10">
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
          <div
            className="grid gap-5 md:grid-cols-3 md:gap-[30px] 2xl:gap-10 pt-10 md:pt-[60px] 2xl:pt-20"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            {visibleItems.map((achievement, index) => (
              <div
                key={achievement.id}
                {...teamItemAos(index, true)} >

                <AchievementsCard
                  title={achievement.title}
                  description={achievement.description}
                />
              </div>
            ))}
          </div>
        )}
      </section>
    </SectionWrapper>
  );
}

export default AchievementsSection;
