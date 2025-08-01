import { SectionWrapper } from "../../../layouts/SectionWrapper";
import Title from "../Title";

type SubHeroProps = {
  title: string
  desc: string
}

function SubHero({ title, desc }: SubHeroProps) {
  return (
    <SectionWrapper className="pt-[150px] pb-[100px] bg-gradient-custom">
      <Title heading={title} paragraph={desc} buttonLabel="" classEdit={true} />
    </SectionWrapper>
  )
}

export default SubHero;
