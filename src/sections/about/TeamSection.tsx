import { useEffect } from "react";
import TeamCardComponent from "../../components/cards/TeamCardComponent";
import { SectionWrapper } from "../../layouts/SectionWrapper";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchTeams } from "../../redux/slices/teamSlice";
import Title from "../../components/shared/Title";

const TeamSection = () => {
  const dispatch = useAppDispatch();
  const { visibleItems, loading, error } = useAppSelector(
    (state) => state.team
  );

  useEffect(() => {
    if (visibleItems.length === 0) {
      dispatch(fetchTeams());
    }
  }, [dispatch, visibleItems.length]);

  const skeletonCount = visibleItems.length > 0 ? visibleItems.length : 4;

  return (
    <SectionWrapper>
      <section className="flex flex-col gap-4 lg-custom:gap-[60px] 2xl:gap-20 mb-20 lg-custom:mb-[120px] 2xl:mb-[150px]">
        <Title
          heading="Meet the Estatein Team"
          paragraph="At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality."
          starImg={true}
          titleStyle="mb-2 md:mb-[10px] lg-custom:mb-[14px]"
          paragraphStyle="w-full"
        />

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg-custom:!grid-cols-4 2xl:gap-[30px] gap-[20px]">
            {[...Array(skeletonCount)].map((_, i) => (
              <div
                key={i}
                className="flex flex-col w-full gap-10 lg-custom:gap-[50px] p-5 lg-custom:p-6 2xl:p-[30px] border border-gray15 rounded-xl bg-gray-200 dark:bg-gray-700 animate-pulse"
              >
                <div className="relative">
                  <div className="rounded-[10px] 2xl:rounded-xl w-full h-[268px] lg-custom:h-[220px] 2xl:h-[253px] bg-gray-300 dark:bg-gray-600" />
                  <div className="bg-purple90 dark:bg-purple60 absolute bottom-0 py-3.5 px-[26px] rounded-[43px] transform translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3 cursor-pointer opacity-70" />
                </div>
                <div className="flex flex-col gap-4 lg-custom:gap-5 2xl:gap-6">
                  <div className="text-center flex flex-col gap-0.5 lg-custom:gap-1 2xl:gap-1.5">
                    <div className="h-6 lg-custom:h-7 2xl:h-8 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mx-auto mb-2" />
                    <div className="h-5 lg-custom:h-6 2xl:h-7 bg-gray-300 dark:bg-gray-600 rounded w-1/2 mx-auto" />
                  </div>
                  <div className="relative w-full">
                    <div className="h-[64px] rounded-[100px] bg-white97 dark:bg-gray10 border border-white90 dark:border-gray15 w-full" />
                    <div className="bg-purple90 dark:bg-purple60 absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center p-3.5 lg-custom:p-2 2xl:p-2.5  cursor-pointer opacity-70 w-10 h-10 rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg-custom:!grid-cols-4 2xl:gap-[30px] gap-[20px]">
            {visibleItems.map((team) => (
              <TeamCardComponent
                key={team.id}
                name={team.name}
                role={team.role}
                image={team.clientImage}
              />
            ))}
          </div>
        )}
      </section>
    </SectionWrapper>
  );
};

export default TeamSection;
