import ClientCard from "../../components/cards/ClientCard";
import Title from "../../components/shared/Title";
import { SectionWrapper } from "../../layouts/SectionWrapper";

function ValuedClientsSection() {
  return (
    <SectionWrapper className="pb-20 lg-custom:mb-[120px] 2xl:mb-[150px]">
        <Title 
        heading="Our Valued Clients"
        paragraph="At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving"
        starImg
        paragraphStyle="w-full lg-custom:max-w-[81.214%] 2xl:max-w-[82%]"
        titleStyle="mb-10 lg-custom:mb-[60px] 2xl:mb-[80px]"
        />
        <div className="cards_container flex flex-col lg-custom:flex-row items-center gap-10 2xl:gap-[50px]">
            {/* cards go here */}
        </div>

    </SectionWrapper>
  )
}

export default ValuedClientsSection