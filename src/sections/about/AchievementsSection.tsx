import { useEffect } from "react";

import AchievementsCard from "../../components/cards/AchievementsCard";
import { SectionWrapper } from "../../layouts/SectionWrapper";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchAchievements } from "../../redux/slices/achievementSlice";
import Title from "../../components/shared/Title";


function AchievementsSection() {
  const dispatch = useAppDispatch();
  const { visibleItems, loading, error } = useAppSelector((state) => state.achievements);

  useEffect(() => {
    dispatch(fetchAchievements());
  }, [dispatch]);

  return (
    <SectionWrapper className="py-20 lg-custom:py-[120px] 2xl:py-[150px]">
      <div className="flex flex-col gap-10 md:gap-[60px] 2xl:gap-20">
        <Title
          starImg={true}
          heading="Our Achievements"
          paragraph="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
          paragraphStyle="w-[95%]"
        />

        {loading ? (
          <p className="text-black dark:text-white">Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="grid gap-5 md:grid-cols-3 md:gap-[30px] 2xl:gap-10">
            {visibleItems.map((achievement) => (
              <AchievementsCard
                key={achievement.id}
                title={achievement.title}
                description={achievement.description}
              />
            ))}
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}

export default AchievementsSection;
