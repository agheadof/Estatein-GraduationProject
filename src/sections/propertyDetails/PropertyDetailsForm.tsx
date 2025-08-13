import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { fetchProperties } from "../../redux/slices/propertiesSlice";
import type { RootState, AppDispatch } from "../../redux/store";

import InquiryForm from "../../components/Forms/InquiryForm";
import Title from "../../components/shared/Title";
import { SectionWrapper } from "../../layouts/SectionWrapper";

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
    <SectionWrapper className="py-20 lg-custom:py-[120px] 2xl:py-[150px]">
      <div className="grid grid-cols-1 xl:grid-cols-[32.21%_61.53%] 2xl:grid-cols-[33.38%_61.38%] gap-y-10 md:gap-x-10 xl:gap-x-[80px] 2xl:gap-x-[100px]">
        <Title
          titleStyle="w-full"
          starImg={true}
          heading={`Inquire About ${property.title}`}
          paragraph="Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have."
          data-aos="fade-left"
        />
        <div className="w-full">
          <InquiryForm
            type="property"
            propertyTitle={property.title}
            propertyLocation={property.location ?? "Unknown Location"}
          />
        </div>
      </div>
    </SectionWrapper>
  );
}

export default PropertyDetailsForm;
