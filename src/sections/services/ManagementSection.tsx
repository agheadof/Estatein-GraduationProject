import CommonCard from "../../components/cards/CommonCard";
import UnlockCardComponent from "../../components/cards/UnlockCardComponent";
import Title from "../../components/shared/Title";
import { managementData } from "../../data/managementData";
import { SectionWrapper } from "../../layouts/SectionWrapper";
import { pvCardAos, pvGridAos, pvSectionAos, pvUnlockAos } from "../../utlis/Anamation";

const ManagementSection = () => {
  return (
    <SectionWrapper className="pb-20 lg-custom:pb-[120px] 2xl:pb-[150px]">
      <section {...pvSectionAos()}
        id="management"
      >
        <Title
          titleStyle="pb-10 lg-custom:pb-[60px] 2xl:pb-20"
          heading="Effortless Property Management"
          paragraph="Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you"
          paragraphStyle="w-[81.203%]"
        />

        <div {...pvGridAos()} className="grid gap-5 2xl:gap-[30px] grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {managementData.map((card, index) => (
            <div key={index} {...pvCardAos(index)}>

              <CommonCard
                key={index}
                cardStyle="p-6 md:p-10 2xl:p-[50px] gap-4 md:gap-5 2xl:gap-[30px] border-white90 dark:border-gray15 h-full"
                cardImg={card.cardImg}
                cardTitle={card.cardTitle}
                cardDesc={card.cardDesc}
              />
            </div>

          ))}
          <div className="col-span-1 md:col-span-2" {...pvUnlockAos(managementData.length)}>
            <UnlockCardComponent
              cardStyle='col-span-1 md:col-span-2 p-6 md:py-[45.5px] md:px-10 2xl:py-[59.5px] 2xl:px-[50px] bg-[url("/assets/images/AbstractDesign2.png")] bg-no-repeat bg-cover'
              title="Experience Effortless Property Management"
              titleStyle="text-xl md:text-2xl 2xl:text-[30px] font-bold"
              desc="Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership."
              descStyle="text-gray40 dark:text-gray60"
            />
          </div>
        </div>

      </section>
    </SectionWrapper>
  );
};

export default ManagementSection;
