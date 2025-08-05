import CommonCard from "../../components/cards/CommonCard";
import UnlockCardComponent from "../../components/cards/UnlockCardComponent";
import Title from "../../components/shared/Title/Title";
import { managementData } from "../../data/managementData";

const ManagementSection = () => {
  return (
      <section className="pb-[61px] md:pb-[90px] 2xl:pb-[110px]">
        <Title
          titleStyle="pb-10 lg-custom:pb-[60px] 2xl:pb-20"
          heading="Effortless Property Management"
          paragraph="Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you"
          paragraphStyle="w-[81.203%]"
        />

        <div className="grid gap-5 2xl:gap-[30px] grid-cols-2 xl:grid-cols-3">
          {managementData.map((card, index) => (
            <CommonCard
              key={index}
              cardStyle="p-6 md:p-10 2xl:p-[50px] gap-4 md:gap-5 2xl:gap-[30px] border-white90 dark:border-gray15 "
              cardImg={card.cardImg}
              cardTitle={card.cardTitle}
              cardDesc={card.cardDesc}
            />
          ))}

          <UnlockCardComponent
            cardStyle='col-span-2 p-6 md:py-[45.5px] md:px-10 2xl:py-[59.5px] 2xl:px-[50px] bg-[url("/assets/images/AbstractDesign2.png")] bg-no-repeat bg-cover'
            title="Experience Effortless Property Management"
            titleStyle="text-xl md:text-2xl 2xl:text-[30px] font-bold"
            desc="Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership."
            descStyle="text-gray40 dark:text-gray60"
          />
        </div>
        
      </section>
  );
};

export default ManagementSection;
