import FormSelect from "../../components/Forms/FormSelect";
import { BuildIcon, LocationIcon, PricingIcon, PropertyIcon, PropertySizeIcon, SearchIcon } from "../../components/icons/FilterPropertyIcons";
import MainButton from "../../components/ui/MainButton";
import { SectionWrapper } from "../../layouts/SectionWrapper";


function FilterProperty() {
  return (
    <SectionWrapper className="lg:absolute lg:top-[400px] py-5 lg:py-0 w-full huge:container huge:mx-auto">
      <div className="mb-5 lg:mb-0 rounded-xl bg-gray10  border-r border-l border-1 border-gray15 w-full lg:w-[81.4536%] lg:mx-auto pt-2.5 px-2.5">
        <div className="px-4 py-2 flex justify-between items-center mb-4 rounded-lg  bg-gray08 text-white focus:outline-none focus:border-purple-500">
          <input
            type="text"
            placeholder="Search For A Property"
            className="w-full md:w-8/12  "
          />
          <MainButton variant="normalPurple" key={"filter"}  
          className="px-6 py-2 text-white font-semibold rounded-lg ">
            <div className="flex">
              <SearchIcon className={`text-white`}/>
              <span className="hidden lg:block">
                Find Property
              </span>
              
            </div>
            
          </MainButton>
        </div>
        </div>
        <form
          className="space-y-[50px] p-2.5 rounded-xl w-full bg-gray10 border-1 border-gray15"
          onSubmit={(e) => {
            e.preventDefault();
          }}>
          <div className={"grid grid-cols-1 lg-custom:grid-cols-5 gap-5"}>
            <FormSelect
              classExtra="bg-gray08"
              classIcon="bg-gray10 rounded-full p-1"
              name="Location"
              placeholder="Location"
              value={""}
              onChange={() => { }}
              options={["General", "Support", "Sales"]}
              error={""}>
                <div className="border-r border-gray15 pr-2.5">
                  <LocationIcon className={`text-white`} />
                </div>
            </FormSelect>
            <FormSelect
              classExtra="bg-gray08"
              classIcon="bg-gray10 rounded-full p-1"
              name="PropertyType"
              placeholder="Property Type"
              value={""}
              onChange={() => { }}
              options={["London", "Paris", "New York"]}
              error={""}>
                <div className="border-r border-gray15 pr-2.5">
                  <PropertyIcon className={`text-white`} />
                </div>
            </FormSelect>
            <FormSelect
              classExtra="bg-gray08"
              classIcon="bg-gray10 rounded-full p-1"
              name="PricingRange"
              placeholder="Pricing Range"
              value={""}
              onChange={() => { }}
              options={["Villa", "Apartment", "Studio"]}
              error={""}
            >
              <div className="border-r border-gray15 pr-2.5">
                <PricingIcon className={`text-white`} />
              </div>
            </FormSelect>
            <FormSelect
              classExtra="bg-gray08"
              classIcon="bg-gray10 rounded-full p-1"
              name="PropertySize"
              placeholder="Property Size"
              value={""}
              onChange={() => { }}
              options={["1", "2", "3+"]}
              error={""}
            >
              <div className="border-r border-gray15 pr-2.5">
                <PropertySizeIcon className={`text-white`} /> 
              </div>
            </FormSelect>
            <FormSelect
              classExtra="bg-gray08"
              classIcon="bg-gray10 rounded-full p-1"
              name="bedrooms"
              placeholder="Build Year"
              value={""}
              onChange={() => { }}
              options={["1", "2", "3+"]}
              error={""}>
              <div className="border-r border-gray15 pr-2.5">
                <BuildIcon className={`text-white`} /> 
              </div>
            </FormSelect>
          </div>
        </form>
      

    </SectionWrapper>
  );
}

export default FilterProperty;
