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

  // main SkeletonBox style
  const SkeletonBox = ({ height = "h-[52px]" }) => (
    <div>
      <div className="h-10 rounded bg-gray-300 dark:bg-gray-600 opacity-70 w-24 2xl:mb-4 lg-custom:mb-3.5 mb-2.5" />
      <div
        className={`${height} rounded bg-gray-300 dark:bg-gray-600 w-full`}
      />
    </div>
  );

  if (loading || !property) {
    return (
      <SectionWrapper className="py-20 lg-custom:py-[120px] 2xl:py-[150px]">
        <div className="grid grid-cols-1 xl:grid-cols-[32.21%_61.53%] 2xl:grid-cols-[33.38%_61.38%] gap-y-10 md:gap-x-10 xl:gap-x-[80px] 2xl:gap-x-[100px]">
          {/* left side */}
          <div className="animate-pulse">
            <div className="h-10 w-52 rounded bg-gray-300 dark:bg-gray-600 opacity-70 mb-2 lg-custom:mb-1.5 2xl:mb-3.5" />
            <div className="h-6 lg-custom:h-7 2xl:h-8 rounded bg-gray-300 dark:bg-gray-600" />
          </div>

          {/* right side */}
          <div className="flex flex-col gap-5 lg-custom:gap-[30px] rounded-lg bg-gray-200 dark:bg-gray-700 p-5 lg-custom:p-10 2xl:p-[50px] animate-pulse">
            {/* first row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg-custom:gap-[30px]">
              <SkeletonBox />
              <SkeletonBox />
            </div>

            {/* second row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg-custom:gap-[30px]">
              <SkeletonBox />
              <SkeletonBox />
            </div>

            {/* third row */}
            <SkeletonBox height="h-[90px] lg-custom:h-[122px] 2xl:h-[170px]" />

            {/* buttons */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-5 lg-custom:gap-[50px] mt-2.5 2xl:mt-5">
              <div className="h-6 lg-custom:h-7 2xl:h-8 w-full md:w-xs rounded bg-gray-300 dark:bg-gray-600" />
              <div className="h-[52px] 2xl:h-[60px] w-full md:w-[191px] 2xl:w-[250px] bg-purple-500 rounded-lg opacity-70" />
            </div>
          </div>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper className="py-20 lg-custom:py-[120px] 2xl:py-[150px]">
      <div className="grid grid-cols-1 xl:grid-cols-[32.21%_61.53%] 2xl:grid-cols-[33.38%_61.38%] gap-y-10 md:gap-x-10 xl:gap-x-[80px] 2xl:gap-x-[100px]">
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
    </SectionWrapper>
  );
}

export default PropertyDetailsForm;
