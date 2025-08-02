// import TeamCardComponent from "../../components/cards/TeamCardComponent"
import Title from "../../components/shared/Title"
import { SectionWrapper } from "../../layouts/SectionWrapper"

const TeamSection = () => {


    return (
        <SectionWrapper >
            <section className="flex flex-col gap-4 lg-custom:gap-[60px] 2xl:gap-20" >
                <Title
                    heading='Meet the Estatein Team'
                    paragraph="At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality."
                    starImg={true}
                    titleStyle='mb-2 md:mb-[10px] lg-custom:mb-[14px]'
                    paragraphStyle='w-full'
                />
                {/* <div className="flex flex-col lg-custom:flex-row 2xl:gap-[30px] gap-[20px]  ">
                    {team.map((member: any, id: number) => (
                        <TeamCardComponent
                            key={id}
                            name={member.name}
                            role={member.role}
                            image={member.image}
                        />
                    ))}
                </div> */}
            </section>
        </SectionWrapper>

    )
}

export default TeamSection
