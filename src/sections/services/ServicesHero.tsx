import Title from "../../components/shared/Title";
import { SectionWrapper } from "../../layouts/SectionWrapper";
import SiteFeaturesSection from "../shared/SiteFeaturesSection";

const ServicesHero = () => {
  return (
    <section className="pb-[110px]">
      <SectionWrapper className="border-b border-gray1 bg-[linear-gradient(95.93deg,_#262626_-26.82%,_rgba(38,38,38,0)_40.46%)]">
        <Title
          starImg={false}
          titleStyle="pt-[250px]"
          heading="Elevate Your Real Estate Experience"
          paragraph="Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams."
          paragraphStyle="w-[94%]"
        />
      </SectionWrapper>
      <SiteFeaturesSection />
    </section>
  );
};

export default ServicesHero;
