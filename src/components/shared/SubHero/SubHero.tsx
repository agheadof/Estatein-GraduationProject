import { SectionWrapper } from "../../../layouts/SectionWrapper";
import Title from "../Title/Title";

type SubHeroProps = {
  title: string
  desc: string
}

function SubHero({ title, desc }: SubHeroProps) {
  return (
    <SectionWrapper className="pt-[122px] 2xl:pt-[240px] lg-custom:pt-[190px] pb-[50px] lg-custom:pb-[100px] bg-gradient-custom">
      <Title heading={title} paragraph={desc} starImg={false} paragraphStyle="w-full 2xl:w-[94.3015%] lg-custom:w-[90.5555%]"/>
    </SectionWrapper>
  )
}

export default SubHero;
