import ClientCard from "../../components/cards/ClientCard";
import GenericSlider from "../../components/shared/GenericSlider/GenericSlider";
import Title from "../../components/shared/Title";
import { SectionWrapper } from "../../layouts/SectionWrapper";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchClients } from "../../redux/slices/clientsSlice";
import { useEffect } from "react";
import type { Client } from "../../redux/types/client";

function ValuedClientsSection() {
  const dispatch = useAppDispatch();
  const { items, error, loading } = useAppSelector((state) => state.clients);

  useEffect(() => {
    const stop = fetchClients(dispatch);
    return typeof stop === "function" ? stop : undefined;
  }, [dispatch]);

  return (
    <SectionWrapper className="pb-20 lg-custom:mb-[120px] 2xl:mb-[150px]">
      <Title
        heading="Our Valued Clients"
        paragraph="At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving"
        starImg
        paragraphStyle="w-full lg-custom:max-w-[81.214%] 2xl:max-w-[82%]"
        anamation="fade-up"

      />
      <div className="cards_container flex flex-col lg-custom:flex-row items-center gap-10 2xl:gap-[50px]">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && items.length > 0 && (
          <GenericSlider
            items={items}
            renderSlide={(client: Client) => <ClientCard {...client} />}
            showCounter={true}
            slidesPerView={2}
            counterClassName="justify-center md:justify-between"
            navigateTo="/"
          />
        )}
      </div>
    </SectionWrapper>
  );
}

export default ValuedClientsSection;
