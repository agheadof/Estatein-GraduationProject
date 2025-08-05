import FormSelect from "./FormSelect";
import FormCheckbox from "./FormCheckbox";
import { useFormHandler } from "../../hooks/useFormHandler";
import SharedFields from "./SharedFields";
import FormTextarea from "./FormTextarea";
import { EmailIcon, PhoneIcon, LocationIcon } from "../icons/FormIcons";
import MainButton from "../ui/MainButton";

type InquiryFormProps = {
  type: "inquiry" | "contact" | "property";
};

function InquiryForm({ type }: InquiryFormProps) {
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
      ? "space-y-[20px] 2xl:p-[50px] lg-custom:p-[40px] p-5"
      : "space-y-[50px] 2xl:p-[100px] xl:p-[50px] p-5 2xl:mt-[80px] xl:mt-[60px] mt-10";

  const gridClass =
    isContact || isProperty
      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] 2xl:gap-[50px]"
      : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-[30px] 2xl:gap-[50px]";

  return (
    <form
      className={`${formPadding} rounded-xl border-1 border-white90 dark:border-gray15 w-full`}
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
            <div className="xl:col-span-2 col-span-1">
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

            <div className="xl:col-span-2 md:col-span-3 col-span-1 flex flex-col justify-between">
              <label className="mb-4 lg-custom:text-xl text-base/[1.5] text-black dark:text-white font-semibold">
                Preferred Contact Method
              </label>
              {errors.preferredContact && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.preferredContact}
                </p>
              )}
              <div className="w-full flex flex-col md:flex-row md:justify-between justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                <div className="relative w-full lg-custom:w-1/2 group">
                  <PhoneIcon className="absolute text-black dark:text-white group-hover:text-purple60 left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 pointer-events-none" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone || ""}
                    onChange={handleChange}
                    placeholder="Enter Your Number"
                    className="w-full rounded-lg bg-white97 dark:bg-gray10 text-gray60 dark:text-gray40 xl:text-lg/[20px] text-sm font-medium border-1 border-white90 dark:border-gray15 px-5 py-6 pl-14"
                    disabled={!formData.preferredContact?.includes("phone")}
                  />
                  <input
                    type="checkbox"
                    name="preferredContact"
                    value="phone"
                    checked={
                      formData.preferredContact?.includes("phone") || false
                    }
                    onChange={handleCheckboxChange}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 md:w-6 w-[10px] md:h-6 h-[10px] appearance-none bg-white97 dark:bg-gray10 border-1 border-purple90 dark:border-purple60 rounded-full checked:bg-purple60 cursor-pointer"
                  />
                </div>
                <div className="relative w-full lg-custom:w-1/2 group">
                  <EmailIcon className="absolute text-black dark:text-white group-hover:text-purple60 left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 pointer-events-none" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email || ""}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                    className="w-full rounded-lg bg-white97 dark:bg-gray10 text-gray60 dark:text-gray40 lg-custom:text-lg/[20px] text-sm font-medium border-1 border-white90 dark:border-gray15 px-5 py-6 pl-14"
                    disabled={!formData.preferredContact?.includes("email")}
                  />
                  <input
                    type="checkbox"
                    name="preferredContact"
                    value="email"
                    checked={
                      formData.preferredContact?.includes("email") || false
                    }
                    onChange={handleCheckboxChange}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 md:w-6 w-[10px] md:h-6 h-[10px] appearance-none bg-white97 dark:bg-gray10 border-1 border-purple90 dark:border-purple60 rounded-full checked:bg-purple60 cursor-pointer"
                  />
                </div>
              </div>
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </>
        )}

        {isProperty && (
          <div className="xl:col-span-2 flex flex-col justify-between">
            <label className="mb-4 text-xl lg-custom:text-base/[1.5] text-black dark:text-white font-semibold">
              Property Name
            </label>
            <div className="flex justify-between text-gray15 dark:text-white90 rounded-lg bg-white97 dark:bg-gray10 text-lg/[20px] lg-custom:text-sm font-medium border-1 border-white90 dark:border-gray15 px-5 py-6">
              Seaside Serenity Villa, Malibu, California
              <LocationIcon className="text-black dark:text-white" />
              {/* here we should add Property.name */}
            </div>
          </div>
        )}
      </div>

      {/* Message */}
      <FormTextarea
        label="Message"
        name="message"
        value={formData.message || ""}
        onChange={handleChange}
        error={errors.message}
      />

      {/* Agreement + Submit */}
      <div className="flex flex-col md:flex-row justify-between space-y-5">
        <div>
          <FormCheckbox
            label={`I agree with <a href="#" class="underline">Terms of Use</a> and <a href="#" class="underline">Privacy Policy</a>`}
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          {errors.agreed && (
            <p className="text-red-500 text-sm mt-1">{errors.agreed}</p>
          )}
        </div>
        <MainButton
          onClick={() =>
            handleSubmit((data) => console.log("Form submitted:", data))
          }
          className="normalPurple"
          variant="normalPurple"
        >
          Send Your Message
        </MainButton>
      </div>
    </form>
  );
}

export default InquiryForm;
