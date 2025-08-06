import GenericSlider from "../../components/shared/GenericSlider/GenericSlider";
import TestimonialCard from "../../components/cards/TestimonialCard";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchTestimonials } from "../../redux/slices/testimonialsSlice";
import Title from "../../components/shared/Title";
import { SectionWrapper } from "../../layouts/SectionWrapper";
import ReviewModal from "../../components/cards/ReviewModal";

function OurClientsSection() {
  const [showReviewModal,setShowReviewModal] = useState<boolean>(false);

  const handleCloseModal = ()=>{
    setShowReviewModal(false);
  };

  const dispatch = useAppDispatch();
  const { visibleItems, loading, error } = useAppSelector(
    (state) => state.testimonials
  );

    useEffect(() => {
        if (visibleItems.length === 0) {
            dispatch(fetchTestimonials());
        }
    }, [dispatch, visibleItems.length]);

    const skeletonCount = visibleItems.length > 0 ? visibleItems.length : 3;

    return (
        <SectionWrapper>
            <div className='mt-[61px] lg-custom:mt-[90px] 2xl:mt-[110px] relative'>
                <Title
                    heading="What Our Clients Say"
                    paragraph="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
                    buttonLabel="View All Testimonials"
                    paragraphStyle="2xl:max-w-[1181px] lg-custom:max-w-[960px] w-full"

                />
                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[80px]">
                        {[...Array(skeletonCount)].map((_, i) => (
                            <div
                                key={i}
                                className="p-[30px] lg-custom:p-[40px] 2xl:p-[50px] rounded-[10px] 2xl:rounded-xl border dark:border-gray15 border-white90 bg-gray-200 dark:bg-gray-700 animate-pulse"
                            >
                                
                                <div className="flex gap-2 2xl:gap-2.5 mb-6 lg-custom:mb-[30px] 2xl:mb-10">
                                    {[...Array(5)].map((_, starIdx) => (
                                        <div
                                            key={starIdx}
                                            className="w-[30px] h-[30px] lg-custom:w-[38px] lg-custom:h-[36px] 2xl:w-11 2xl:h-11 rounded-full bg-gray-300 dark:bg-gray-600"
                                        />
                                    ))}
                                </div>
                                <div className="mb-6 lg-custom:mb-[30px] 2xl:mb-10">
                                    <div className="h-7 lg-custom:h-8 2xl:h-9 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-3" />
                                    <div className="h-5 lg-custom:h-6 2xl:h-7 bg-gray-300 dark:bg-gray-600 rounded w-full" />
                                </div>
                                <div className="flex gap-2.5 2xl:gap-3 items-center">
                                    <div className="w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px] rounded-full bg-gray-300 dark:bg-gray-600" />
                                    <div className="flex flex-col gap-1 w-full">
                                        <div className="h-5 lg-custom:h-6 2xl:h-7 bg-gray-300 dark:bg-gray-600 rounded w-1/2" />
                                        <div className="h-4 lg-custom:h-5 2xl:h-6 bg-gray-300 dark:bg-gray-600 rounded w-1/3" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
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
                <button className="text-white absolute left-5 bottom-[75px] text-sm underline cursor-pointer" onClick={()=>setShowReviewModal(true)}>Add a review</button>
                {showReviewModal &&
                <ReviewModal closeModal={handleCloseModal}/> }
            </div>
        </SectionWrapper>
    )
}

export default OurClientsSection
