import { SectionWrapper } from "../../layouts/SectionWrapper";
import Title from "./Title";

type SubHeroProps = {
  title: string;
  desc: string;
  classes?: string;
};

function SubHero({ title, desc, classes }: SubHeroProps) {
  return (
    <SectionWrapper
      id="find"
      className={`pt-[122px] 2xl:pt-[240px] lg-custom:pt-[190px] pb-[50px] bg-gradient-to-l from-[#FBFAFF] via-[#DBCEFD] to-[#dbcefd] dark:bg-gradient-to-r dark:from-gray15 dark:via-transparent dark:to-transparent ${classes}`}
    >
      <Title
        anamation="fade-right"
        heading={title}
        paragraph={desc}
        starImg={false}
        paragraphStyle="w-full 2xl:w-[94.3015%] lg-custom:w-[90.5555%]"
      />
    </SectionWrapper>
  );
}

export default SubHero;
