import { SectionWrapper } from "../../layouts/SectionWrapper";
import FormSelect from "../../components/Forms/FormSelect";
import MainButton from "../../components/ui/MainButton";
import {
  SearchIcon,
  LocationIcon,
  PropertyIcon,
  PricingIcon,
  PropertySizeIcon,
  BuildIcon,
} from "../../components/icons/FilterPropertyIcons";
import { motion } from "framer-motion";
import { FilterMotionConfig } from "../../utlis/Anamation";

const FilterProperty = () => {
  const selectFields = [
    {
      name: "location",
      placeholder: "Location",
      options: ["General", "Support", "Sales"],
      icon: <LocationIcon className="text-black dark:text-white" />,
    },
    {
      name: "propertyType",
      placeholder: "Property Type",
      options: ["Villa", "Apartment", "Studio"],
      icon: <PropertyIcon className="text-black dark:text-white" />,
    },
    {
      name: "pricingRange",
      placeholder: "Pricing Range",
      options: ["London", "Paris", "New York"],
      icon: (
        <PricingIcon className="text-black dark:text-white hover:text-purple60 transition-colors duration-200" />
      ),
    },
    {
      name: "propertySize",
      placeholder: "Property Size",
      options: ["1", "2", "3+"],
      icon: <PropertySizeIcon className="text-black dark:text-white" />,
    },
    {
      name: "buildYear",
      placeholder: "Build Year",
      options: ["1", "2", "3+"],
      icon: <BuildIcon className="text-black dark:text-white" />,
    },
  ];

  return (
    <SectionWrapper className="mt-0 lg-custom:-mt-12 2xl:-mt-16 py-5 lg:py-0 w-full huge:container huge:mx-auto">
      {/* Search Bar Animation */}
      <motion.div
                {...FilterMotionConfig}

        className="mb-5 lg:mb-0 rounded-xl bg-purple70/60 dark:bg-gray10 border-r border-l border-1 border-gray08/60 dark:border-gray15 w-full lg:w-[81.4536%] lg:mx-auto pt-2.5 px-2.5"
      >
        <div className="px-4 py-2 flex justify-between items-center mb-2.5 rounded-lg bg-white99 dark:bg-gray08 text-black dark:text-white focus:outline-none focus:border-purple-500">
          <input
            type="text"
            placeholder="Search For A Property"
            className="w-full md:w-8/12 outline-none bg-transparent placeholder:text-black dark:placeholder:text-gray40"
          />
          <MainButton
            variant="normalPurple"
            className="flex items-center gap-2 px-6 py-2 font-semibold rounded-lg"
          >
            <SearchIcon className="text-black dark:text-white" />
            <span className="hidden lg:block">Find Property</span>
          </MainButton>
        </div>
      </motion.div>

      {/* Filter Form Animation */}
      <motion.form
        onSubmit={(e) => e.preventDefault()}
        {...FilterMotionConfig}

        className="p-2.5 space-y-[50px] rounded-xl w-full bg-purple70/60 dark:bg-gray10 border-1 border-gray15"
      >
        <div className="grid grid-cols-1 lg-custom:grid-cols-5 gap-5">
          {selectFields.map((field, index) => (
            <FormSelect
              key={index}
              name={field.name}
              placeholder={field.placeholder}
              value=""
              onChange={() => {}}
              options={field.options}
              error=""
              classExtra="bg-white99 dark:bg-gray08"
              classIcon="bg-purple90 dark:bg-gray10 rounded-full p-1"
            >
              <div className="flex items-center border-r border-white90 dark:border-gray15 pr-2.5">
                {field.icon}
              </div>
            </FormSelect>
          ))}
        </div>
      </motion.form>
    </SectionWrapper>
  );
};

export default FilterProperty;
