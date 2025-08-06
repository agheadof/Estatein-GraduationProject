import ExperienceSectionCard from '../../components/cards/ExperienceSectionCard';
import { SectionWrapper } from '../../layouts/SectionWrapper';

import { fakeDataForTesting } from '../../data/ExperienceSectionData';
import Title from '../../components/shared/Title';

function ExperienceSection() {




  return (
    <SectionWrapper >
        <section className='ExperienceSection'>
            <Title
             heading='Navigating the Estatein Experience' 
             paragraph="At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works."
            starImg={true}
            titleStyle='mb-2 md:mb-[10px] lg-custom:mb-[14px]'
            paragraphStyle='w-full lg-custom:max-w-[1000px] 2xl:max-w-[1279px]'
             />
            <div className="cards_container grid grid-cols-1 md:grid-cols-2 lg-custom:!grid-cols-3 gap-y-[30px] gap-x-[0px] md:gap-x-[20px] md:gap-y-[40px] huge:gap-x-[30px] huge:gap-y-[50px] mt-10 lg-custom:mt-[60px] 2xl:mt-[80px]">
                {
                    fakeDataForTesting.map((item,idx)=>(
                        <ExperienceSectionCard description={item.description} title={item.title} step={item.step} key={idx}/>
                    ))
                }
            </div>
        </section>
    </SectionWrapper>

  )
}

export default ExperienceSection