import { useEffect } from "react";
import ClientCard from "../../components/cards/ClientCard";
import GenericSlider from "../../components/shared/GenericSlider/GenericSlider";
import Title from "../../components/shared/Title";
import { SectionWrapper } from "../../layouts/SectionWrapper";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchClients } from "../../redux/slices/clientsSlice";

function ValuedClientsSection() {
  const dispatch = useAppDispatch();
  const { items, error, loading } = useAppSelector((state) => state.clients);
  useEffect(() => {
    dispatch(fetchClients());
  }, []);

  // main SkeletonBox style
  const SkeletonBox = () => (
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-xl p-6 lg-custom:p-[40px] 2xl:p-[50px] flex flex-col gap-[30px] 2xl:gap-[40px] shadow-[0px_0px_0px_6px_#f1f1f3] dark:shadow-[0px_0px_0px_6px_#191919] ">
      <div className="w-full flex gap-5">
        <div className="w-full h-[62px] lg-custom:h-[51px] 2xl:h-[65px] rounded-xl bg-gray-300 dark:bg-gray-600"></div>
        <div className="w-full h-[62px] lg-custom:h-[51px] 2xl:h-[65px] rounded-xl bg-gray-300 dark:bg-gray-600"></div>
      </div>
      <div className="w-full h-[62px] lg-custom:h-[51px] 2xl:h-[65px] rounded-xl bg-gray-300 dark:bg-gray-600"></div>
      <div className="w-full h-[159px] lg-custom:h-[155px] rounded-xl bg-gray-300 dark:bg-gray-600"></div>
    </div>
  );

  return (
    <SectionWrapper className="pb-20 lg-custom:mb-[120px] 2xl:mb-[150px]">
      <Title
        heading="Our Valued Clients"
        paragraph="At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving"
        starImg
        paragraphStyle="w-full lg-custom:max-w-[81.214%] 2xl:max-w-[82%]"
      />
      <div className="cards_container flex flex-col lg-custom:flex-row items-center gap-10 2xl:gap-[50px]">
        {loading ? (
          // Skeleton Loader
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg-custom:gap-[50px] w-full pt-10 md:pt-[60px] 2xl:pt-20  animate-pulse">
            <SkeletonBox />
            <div className="max-md:hidden">
              <SkeletonBox />
            </div>
          </div>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <GenericSlider
            items={items}
            renderSlide={(client, index) =>
              client ? <ClientCard key={index} {...client} /> : null
            }
            showCounter={true}
            slidesPerView={2}
            counterClassName="justify-center md:justify-between"
          />
        )}
      </div>
    </SectionWrapper>
  );
}

export default ValuedClientsSection;
