import Title from '../../components/shared/Title'
import AchievementsCard from '../../components/cards/AchievementsCard';
import { SectionWrapper } from '../../layouts/SectionWrapper';

interface Achievement {
  id: string;
  title: string;
  description: string;
}

function AchievementsSection() {
  return (
    <SectionWrapper className='py-20 lg-custom:py-[120px] 2xl:py-[150px]'>
      <div className='flex flex-col gap-10 md:gap-[60px] 2xl:gap-20'>
        <Title starImg={true} heading="Our Achievements" paragraph='Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.' paragraphStyle='w-[95%]' />
        <div className='flex gap-5 flex-col md:flex-row md:gap-[30px] 2xl:gap-10'>
          <AchievementsCard title='3+ Years of Excellence' description="With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate." />
          <AchievementsCard title='3+ Years of Excellence' description="With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate." />
          <AchievementsCard title='3+ Years of Excellence' description="With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate." />
        </div>
      </div>
    </SectionWrapper>
  )
}

export default AchievementsSection
