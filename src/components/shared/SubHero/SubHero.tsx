import { SectionWrapper } from "../../../layouts/SectionWrapper";

type SubHeroProps = {
  title: string
  desc: string
}

function SubHero({ title, desc }: SubHeroProps) {
  return (
    <SectionWrapper className="pt-[150px] pb-[100px] bg-gradient-custom">
      <h2 className="text-white font-semibold text-[28px] xl:text-[38px] 2xl:text-5xl [line-height:150%]">{title}</h2>
      <p className="text-gray60 font-medium text-sm xl:text-base 2xl:text-lg [line-height:150%]">{desc}</p>
    </SectionWrapper>
  )
}

export default SubHero;
