import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Title from "../../components/shared/Title";
import { SectionWrapper } from "../../layouts/SectionWrapper";
import ReviewModal from "../../components/cards/ReviewModal";
import { listenToTestimonials } from "../../utlis/firebaseListeners/testimonialsListener";
import type { Client } from "../../redux/types/client";
import { scrollToTop } from "../../utlis/scrollToTop";
import Card from "../../components/cards/TestimonialCard/Card";
import type { RootState } from "../../redux/store";
import GenericSlider from "../../components/shared/GenericSlider";

function OurClientsSection() {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [hasReviewed, setHasReviewed] = useState(false);

  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector(
    (state: RootState) => state.testimonials
  );

  useEffect(() => {
    const reviewed = localStorage.getItem("hasReviewed");
    if (reviewed === "true") setHasReviewed(true);
  }, []);

  useEffect(() => {
    if (!items || items.length === 0) {
      dispatch(listenToTestimonials());
    }
  }, [dispatch, items]);

  const handleCloseModal = () => setShowReviewModal(false);
  const skeletonCount = items?.length > 0 ? items.length : 3;

  return (
    <SectionWrapper
      id="testimonials"
      className="pt-20 lg-custom:pt-[120px] 2xl:pt-[150px]"
    >
      <section className="relative">
        <Title
          heading="What Our Clients Say"
          paragraph="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
          buttonLabel="View All Testimonials"
          paragraphStyle="2xl:max-w-[1181px] lg-custom:max-w-[960px] w-full"
          onClick={() => scrollToTop()}
          anamation="fade-up"
          navigateTo="allTestimonials"
        />

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
            {[...Array(skeletonCount)].map((_, i) => (
              <div
                key={i}
                className="p-[30px] lg-custom:p-[40px] 2xl:p-[50px] rounded-[10px] 2xl:rounded-xl border dark:border-gray15 border-white90 bg-gray-200 dark:bg-gray-700 animate-pulse"
              ></div>
            ))}
          </div>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <>
            <GenericSlider<Client>
              items={items}
              renderSlide={(client: Client) => (
                <Card key={client.name} client={client} />
              )}
              slidesPerView={{ lg: 3, md: 2, sm: 1 }}
              showCounter
              titleBtnLabel="View All Testimonials"
              navigateTo="allTestimonials"
              onClick={() => scrollToTop()}
            />

            {!hasReviewed && (
              <button
                className="text-base cursor-pointer text-black dark:text-white underline mt-6 hover:text-purple60 hover:scale-105 duration-300"
                onClick={() => setShowReviewModal(true)}
              >
                Add a review
              </button>
            )}
          </>
        )}

        {showReviewModal && (
          <ReviewModal
            onSuccess={() => {
              localStorage.setItem("hasReviewed", "true");
              setHasReviewed(true);
            }}
            closeModal={handleCloseModal}
          />
        )}
      </section>
    </SectionWrapper>
  );
}

export default OurClientsSection;
