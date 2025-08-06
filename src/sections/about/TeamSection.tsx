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
    dispatch(fetchTeams());
  }, [dispatch]);

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
          <p className="text-black dark:text-white">Loading...</p>
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
