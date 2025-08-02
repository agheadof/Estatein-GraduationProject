import OfficeLocationCard from "../../components/cards/OfficeLocationCard";
import Title from "../../components/shared/Title";

function OurOffices() {
  return (
    <div className="px-4 md:px-8 lg-custom:!px-20 2xl:!px-[162px] mt-20 lg-custom:mt-30 2xl:!mt-[150px]">
      <Title
        titleStyle="leading-[1.5]"
        starImg={true}
        heading="Discover Our Office Locations"
        paragraph="Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you"
      />
      <div className="flex flex-col lg:flex-row space-y-5 lg-custom:space-x-5 2xl:space-x-[30px]">
        <OfficeLocationCard />
        <OfficeLocationCard />
      </div>
    </div>
  );
}

export default OurOffices
