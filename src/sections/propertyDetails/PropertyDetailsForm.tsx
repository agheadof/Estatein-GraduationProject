import PropertyForm from "../../components/Forms/PropertyForm";
import Title from "../../components/shared/Title/Title"

function PropertyDetailsForm() {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-between xl:space-x-[100px]">
      <Title
        titleStyle="leading-[1.5] lg:w-1/3 w-full"
        starImg={true}
        heading="Inquire About Seaside Serenity Villa"
        paragraph="Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have."
      />
      <div className="lg:w-2/3 w-full">
        <PropertyForm />
      </div>
    </div>
  );
}

export default PropertyDetailsForm;
