import FormSelect from "./FormSelect";
import FormCheckbox from "./FormCheckbox";
import { useFormHandler } from "../../hooks/useFormHandler";
import SharedFields from "./SharedFields";
import FormTextarea from "./FormTextarea";
import { EmailIcon, PhoneIcon, LocationIcon } from "../icons/FormIcons";
import MainButton from "../ui/MainButton";
import PreferredContactMethod from "./PreferredContactMethod";

type InquiryFormProps = {
  type: "inquiry" | "contact" | "property";
  propertyTitle?: string;
  propertyLocation?: string;
};


function InquiryForm({
  type,
  propertyTitle,
  propertyLocation,
}: InquiryFormProps) {
  const {
    formData,
    handleChange,
    handleSubmit,
    agreed,
    setAgreed,
    handleCheckboxChange,
    errors,
  } = useFormHandler({
    location: "",
    propertyType: "",
    bathrooms: "",
    bedrooms: "",
    budget: "",
    preferredContact: [],
    email: "",
    phone: "",
    inquiryType: "",
    hearAboutUs: "",
    message: "",
  });

  const isContact = type === "contact";
  const isProperty = type === "property";

  const formPadding =
    type === "property"
      ? "p-5 lg-custom:p-[40px] 2xl:p-[50px] gap-[30px] lg-custom:gap-[40px] 2xl:!gap-[50px]"
      : type === "contact"
      ? "p-5 lg-custom:p-[40px] 2xl:p-[50px] gap-10 lg-custom:gap-[60px] 2xl:gap-[50px]"
      : "p-5 xl:p-[50px] 2xl:p-[100px] mt-10 xl:mt-[60px] 2xl:mt-[80px] gap-[30px] 2xl:!gap-[50px]";

  const gridClass =
    type === "property"
      ? "grid p-0 m-0 grid-cols-1 lg:grid-cols-2 gap-x-[30px] gap-y-[20px]"
      : type === "contact"
      ? "grid p-0 m-0 grid-cols-1 md:grid-cols-3 gap-[30px]"
      : "grid p-0 m-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] 2xl:gap-[50px]";

  return (
    <form
      className={`${formPadding} flex flex-col w-full rounded-xl border-1 border-white90  dark:border-gray15`}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit((data) => console.log("Form submitted:", data));
      }}
    >
      <div className={gridClass}>
        <SharedFields
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />

        {isContact && (
          <>
            <FormSelect
              label="Inquiry Type"
              name="inquiryType"
              placeholder="Select Inquiry Type"
              value={formData.inquiryType || ""}
              onChange={handleChange}
              options={["General", "Support", "Sales"]}
              error={errors.inquiryType}
            />
            <FormSelect
              label="How Did You Hear About Us?"
              name="hearAboutUs"
              placeholder="Select"
              value={formData.hearAboutUs || ""}
              onChange={handleChange}
              options={["Friend", "Social Media", "Search Engine"]}
              error={errors.hearAboutUs}
            />
          </>
        )}

        {!isContact && !isProperty && (
          <>
            <FormSelect
              label="Preferred Location"
              name="location"
              placeholder="Select Location"
              value={formData.location || ""}
              onChange={handleChange}
              options={["London", "Paris", "New York"]}
              error={errors.location}
            />
            <FormSelect
              label="Property Type"
              name="propertyType"
              placeholder="Select Property Type"
              value={formData.propertyType || ""}
              onChange={handleChange}
              options={["Villa", "Apartment", "Studio"]}
              error={errors.propertyType}
            />
            <FormSelect
              label="No. of Bathrooms"
              name="bathrooms"
              placeholder="Select no. of Bathrooms"
              value={formData.bathrooms || ""}
              onChange={handleChange}
              options={["1", "2", "3+"]}
              error={errors.bathrooms}
            />
            <FormSelect
              label="No. of Bedrooms"
              name="bedrooms"
              placeholder="Select no. of Bedrooms"
              value={formData.bedrooms || ""}
              onChange={handleChange}
              options={["1", "2", "3+"]}
              error={errors.bedrooms}
            />
            <div className="col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-2 p-0 m-0">
              <FormSelect
                label="Budget"
                name="budget"
                placeholder="Select Budget"
                value={formData.budget || ""}
                onChange={handleChange}
                options={["<1000", "1000-2000", ">2000"]}
                error={errors.budget}
              />
            </div>

            <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-2 p-0 m-0 flex flex-col justify-between">
              <label className="2xl:mb-4 lg-custom:mb-3.5 mb-2.5 2xl:text-xl text-base/[1.5] text-black dark:text-white font-semibold">
                Preferred Contact Method
              </label>
              <div className="flex w-full flex-col items-center justify-center space-y-4 md:flex-row md:justify-between md:space-x-4 md:space-y-0">
                <PreferredContactMethod
                  icon={
                    <PhoneIcon className="absolute 2xl:left-6 left-5 top-1/2 2xl:h-6 2xl:w-6 h-5 w-5 -translate-y-1/2 text-black dark:text-white pointer-events-none group-hover:text-purple60" />
                  }
                  type="tel"
                  name="phone"
                  value={formData.phone || ""}
                  placeholder="Enter Your Number"
                  onChange={handleChange}
                  onCheckboxChange={handleCheckboxChange}
                  isChecked={
                    formData.preferredContact?.includes("phone") || true
                  }
                />
                <PreferredContactMethod
                  icon={
                    <EmailIcon className="absolute 2xl:left-6 left-5 top-1/2 2xl:h-6 2xl:w-6 h-5 w-5 -translate-y-1/2 text-black dark:text-white pointer-events-none group-hover:text-purple60" />
                  }
                  type="email"
                  name="email"
                  value={formData.email || ""}
                  placeholder="Enter Your Email"
                  onChange={handleChange}
                  onCheckboxChange={handleCheckboxChange}
                  isChecked={
                    formData.preferredContact?.includes("email") || false
                  }
                />
              </div>
              {errors.preferredContact && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.preferredContact}
                </p>
              )}
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
              )}
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>
          </>
        )}

        {isProperty && (
          <div className="col-span-full p-0 m-0 flex flex-col justify-between">
            <label className="mb-4 2xl:text-xl text-base/[1.5] text-black dark:text-white font-semibold">
              {propertyTitle}
            </label>
            <div className="flex justify-between rounded-lg border-1 border-white90 bg-white97 2xl:px-5 2xl:py-6 px-5 py-4 2xl:text-xl/[20px] text-sm/[20px] font-medium text-gray15 dark:border-gray15 dark:bg-gray10 dark:text-white90">
              {propertyTitle}, {propertyLocation}
              <LocationIcon className="text-black dark:text-white" />
            </div>
          </div>
        )}

        <FormTextarea
          label="Message"
          name="message"
          className="col-span-full p-0 m-0"
          value={formData.message || ""}
          onChange={handleChange}
          error={errors.message}
        />
      </div>

      <div className="p-0 m-0 gap-5 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="p-0 m-0 flex flex-col">
          <FormCheckbox
            label={`I agree with <a href="#" class="underline">Terms of Use</a> and <a href="#" class="underline">Privacy Policy</a>`}
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          {errors.agreed && (
            <p className="mt-1 text-sm text-red-500">{errors.agreed}</p>
          )}
        </div>
        <MainButton
          onClick={() =>
            handleSubmit((data) => console.log("Form submitted:", data))
          }
          className="normalPurple 2xl:py-4.5 2xl:px-11.5 lg-custom:py-3.5 lg-custom:px-[34px] 2xl:text-lg text-sm/[24px]"
          variant="normalPurple"
        >
          Send Your Message
        </MainButton>
      </div>
    </form>
  );
}

export default InquiryForm;
