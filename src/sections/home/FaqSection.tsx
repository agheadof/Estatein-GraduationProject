import { SectionWrapper } from '../../layouts/SectionWrapper'
import Title from '../../components/shared/Title/Title'
import GenericSlider from '../../components/shared/GenericSlider/GenericSlider'
import FaqCard from '../../components/cards/FaqCard'
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchFaqs } from '../../redux/slices/faqsSlice'
function FaqSection() {
    const dispatch = useAppDispatch();
    const { visibleItems, loading, error } = useAppSelector((state) => state.faqs);

    useEffect(() => {
        dispatch(fetchFaqs());
    }, [dispatch]);
    return (
        <>
            <SectionWrapper>
                <div className=' mt-[61px] lg-custom:mt[90px] 2xl:mt-[110px] mb-[80px] lg-custom:mb-[72px] 2xl:mb-[96px]  '>
                    <Title
                        heading="Frequently Asked Questions"
                        paragraph="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
                        buttonLabel="View All FAQ’s"
                    />
                    {loading ? (
                    <p className="text-black dark:text-white">Loading...</p>
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : (
                    <GenericSlider
                        items={visibleItems}
                        renderSlide={(question, index) => question ? <FaqCard key={index} question={question} /> : null}
                        showCounter={true}
                        titleBtnLabel="View All FAQ’s"
                    />
                )}
                </div>
                

            </SectionWrapper>
        </>
    )
}

export default FaqSection