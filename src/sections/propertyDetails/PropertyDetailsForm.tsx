import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { fetchProperties } from "../../redux/slices/propertiesSlice";
import type { RootState, AppDispatch } from "../../redux/store";

import InquiryForm from "../../components/Forms/InquiryForm";
import Title from "../../components/shared/Title/Title";

function PropertyDetailsForm() {
  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch<AppDispatch>();

  const property = useSelector((state: RootState) =>
    state.properties.all.find((p) => p.id === id)
  );

  const loading = useSelector((state: RootState) => state.properties.loading);

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  if (loading || !property) {
    return <div className="text-center text-red-200 py-20">Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[32.5%_65.5%] 2xl:grid-cols-[38.3%_70.7%] gap-y-10 md:gap-x-10 2xl:gap-x-[100px] xl:gap-x-[80px] lg-custom:my-30 2xl:!my-[150px]">
      <Title
        titleStyle="w-full"
        starImg={true}
        heading={`Inquire About ${property.title}`}
        paragraph="Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have."
      />
      <div className="w-full">
        <InquiryForm
          type="property"
          propertyTitle={property.title}
          propertyLocation={property.location ?? "Unknown Location"}
        />
      </div>
    </div>
  );
}

export default PropertyDetailsForm;
