import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import Title from "../../components/shared/Title"
import { SectionWrapper } from "../../layouts/SectionWrapper"
import ReviewModal from "../../components/cards/ReviewModal"
import AlertMessage from "../../components/ui/AlertMessage"
import { listenToTestimonials } from "../../utlis/firebaseListeners/testimonialsListener"
import type { Client } from "../../redux/types/client"
import { scrollToTop } from "../../utlis/scrollToTop"
import Card from "../../components/cards/TestimonialCard/Card"
import type { RootState } from "../../redux/store"
import GenericSlider from "../../components/shared/GenericSlider"

// function isValidClient(client: any): client is Client {
//   return (
//     client &&
//     typeof client.name === "string" &&
//     typeof client.subject === "string" &&
//     typeof client.review === "string" &&
//     typeof client.clientImage === "string" &&
//     typeof client.location === "string" &&
//     typeof client.show === "boolean" &&
//     typeof client.rate === "number"
//   );
// }

function OurClientsSection() {
  const [showReviewModal, setShowReviewModal] = useState(false)
  const [alertMessage, setAlertMessage] = useState<string | null>(null)

  const dispatch = useAppDispatch()

  const { items, loading, error } = useAppSelector(
    (state: RootState) => state.testimonials
  )

  useEffect(() => {
    if (!items || items.length === 0) {
      dispatch(listenToTestimonials())
    }
  }, [dispatch, items])

  console.log("items", items)

  const handleCloseModal = () => setShowReviewModal(false)

  // const validClients = useMemo(
  //   () => items.filter(isValidClient),
  //   [items]
  // );

  const skeletonCount = items?.length > 0 ? items.length : 3

  return (
    <SectionWrapper className="pt-20 lg-custom:pt-[120px] 2xl:pt-[150px]">
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
          <>
            <GenericSlider<Client>
              items={items}
              renderSlide={(client: Client) => (
                <Card key={client.name} client={client} />
              )}
              slidesPerView={3}
              showCounter
              titleBtnLabel="View All Testimonials"
              navigateTo="allTestimonials"
              onClick={() => scrollToTop()}
            />
            <button
              className="text-sm cursor-pointer text-black dark:text-white underline"
              onClick={() => setShowReviewModal(true)}
            >
              Add a review
            </button>
              className="text-sm cursor-pointer text-black dark:text-white underline"
              onClick={() => setShowReviewModal(true)}
            >
              Add a review
            </button>
          </>
        )}

        {alertMessage && (
          <AlertMessage
            message={alertMessage}
            onClose={() => setAlertMessage(null)}
          />
        )}
        {showReviewModal && (
          <ReviewModal
            setAlertMessage={setAlertMessage}
            closeModal={handleCloseModal}
          />
        )}
      </section>
    </SectionWrapper>
  )
}

export default OurClientsSection
