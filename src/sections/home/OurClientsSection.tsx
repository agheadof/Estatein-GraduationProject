import { SectionWrapper } from '../../layouts/SectionWrapper'
import Title from '../../components/shared/Title'
import { testimonials } from '../../data/testimonialsData'
import GenericSlider from '../../components/shared/GenericSlider/GenericSlider'
import TestimonialCard from '../../components/cards/TestimonialCard'

function OurClientsSection() {

    return (
        <SectionWrapper>
            <div className=' mt-[61px] lg-custom:mt[90px] 2xl:mt-[110px]'>
                <Title
                    heading="What Our Clients Say"
                    paragraph="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
                    buttonLabel="View All Testimonials"
                />
                <GenericSlider
                    items={testimonials}
                    renderSlide={(client, index) => client ? <TestimonialCard key={index} client={client} /> : null}
                    slidesPerView={3}
                    showCounter={true}
                    titleBtnLabel="View All Testimonials"
                />
            </div>

        </SectionWrapper>
    )
}

export default OurClientsSection
