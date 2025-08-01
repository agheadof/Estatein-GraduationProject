import React from 'react'
import ExperienceSectionCard, { type ExperienceSectionCardProps } from './ExperienceSectionCard';


function ExperienceSection() {
    const fakeDataForTesting : ExperienceSectionCardProps[] = [
        {
            step:"01",
            description:'Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.',
            title:'Discover a World of Possibilities'
        },
        {
            step:"02",
            description:'Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.',
            title:'Discover a World of Possibilities'
        },
        {
            step:"03",
            description:'Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.',
            title:'Narrowing Down Your Choices'
        },
        {
            step:"04",
            description:"Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.",
            title:'Discover a World of Possibilities'
        },
        {
            step:"05",
            description:'Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.',
            title:'Discover a World of Possibilities'
        },
        {
            step:"06",
            description:'Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.',
            title:'Getting the Best Deal'
        },
    ];



  return (
    <section className='ExperienceSection mb-[30px] lg-custom:mb-[120px] huge:md-[150px]'>
        {/* ---use Title here--- */}
        <div className="cards_container grid grid-cols-1 md:grid-cols-2 lg-custom:!grid-cols-3 gap-y-[30px] gap-x-[0px] md:gap-x-[20px] md:gap-y-[40px] huge:gap-x-[30px] huge:gap-y-[50px]">
            {
                fakeDataForTesting.map((item,idx)=>(
                    <ExperienceSectionCard description={item.description} title={item.title} step={item.step} key={idx}/>
                ))
            }
        </div>
    </section>
  )
}

export default ExperienceSection