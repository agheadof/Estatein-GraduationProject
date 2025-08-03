import { SectionWrapper } from '../../layouts/SectionWrapper'
import Title from '../../components/shared/Title/Title'
import { faq } from '../../data/faqData'
import GenericSlider from '../../components/shared/GenericSlider/GenericSlider'
import FaqCard from '../../components/cards/FaqCard'
function FaqSection() {
    return (
        <>
            <SectionWrapper>
                <div className=' mt-[61px] lg-custom:mt[90px] 2xl:mt-[110px] mb-[80px] lg-custom:mb-[72px] 2xl:mb-[96px]  '>
                    <Title
                        heading="Frequently Asked Questions"
                        paragraph="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
                        buttonLabel="View All FAQ’s"
                    />
                    <GenericSlider
                        items={faq}
                        renderSlide={(question, index) => question ? <FaqCard key={index} question={question} /> : null}
                        showCounter={true}
                        titleBtnLabel="View All FAQ’s"
                    />
                </div>

            </SectionWrapper>
        </>
    )
}

export default FaqSection