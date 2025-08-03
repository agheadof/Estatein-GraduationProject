import { SectionWrapper } from '../../layouts/SectionWrapper'
import Title from '../../components/shared/Title/Title'
import GenericSlider from '../../components/shared/GenericSlider/GenericSlider'
import TestimonialCard from '../../components/cards/TestimonialCard'
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchTestimonials } from "../../redux/slices/testimonialsSlice";

function OurClientsSection() {
    const dispatch = useAppDispatch();
    const { visibleItems, loading, error } = useAppSelector((state) => state.testimonials);

    useEffect(() => {
        dispatch(fetchTestimonials());
    }, [dispatch]);
    return (
        <SectionWrapper>
            <div className=' mt-[61px] lg-custom:mt[90px] 2xl:mt-[110px]'>
                <Title
                    heading="What Our Clients Say"
                    paragraph="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
                    buttonLabel="View All Testimonials"
                />
                {loading ? (
                    <p className="text-white">Loading...</p>
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : (
                    <GenericSlider
                        items={visibleItems}
                        renderSlide={(client, index) => client ? <TestimonialCard key={index} client={client} /> : null}
                        slidesPerView={3}
                        showCounter={true}
                        titleBtnLabel="View All Testimonials"
                    />
                )}
            </div>

        </SectionWrapper>
    )
}

export default OurClientsSection
