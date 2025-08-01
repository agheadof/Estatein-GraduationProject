import FormSelect from "./FormSelect";
import FormCheckbox from "./FormCheckbox";
import { useFormHandler } from "../../hooks/useFormHandler";
import SharedFields from "./SharedFields";
import FormTextarea from "./FormTextarea";
import { EmailIcon, PhoneIcon } from "../icons/FormIcons";

function InquiryForm({ contact }: { contact: boolean }) {
  const {
    formData,
    handleChange,
    handleSubmit,
    agreed,
    setAgreed,
    handleCheckboxChange,
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
  });

  return (
    <form className="space-y-[50px] 2xl:p-[100px] xl:p-[50px] p-5 2xl:mt-[80px] xl:mt-[60px] mt-10 rounded-xl border-1 border-gray15 w-full">
      <div
        className={
          contact
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] 2xl:gap-[50px]"
            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] 2xl:gap-[50px]"
        }
      >
        <SharedFields formData={formData} handleChange={handleChange} />
        {contact ? (
          <>
            <FormSelect
              label="Inquiry Type"
              name="inquiryType"
              placeholder="Select Inquiry Type"
              value={formData.inquiryType || ""}
              onChange={handleChange}
              options={["General", "Support", "Sales"]}
            />
            <FormSelect
              label="How Did You Hear About Us?"
              name="hearAboutUs"
              placeholder="Select"
              value={formData.hearAboutUs || ""}
              onChange={handleChange}
              options={["Friend", "Social Media", "Search Engine"]}
            />
          </>
        ) : (
          <>
            <FormSelect
              label="Preferred Location"
              name="location"
              placeholder="Select Location"
              value={formData.location || ""}
              onChange={handleChange}
              options={["London", "Paris", "New York"]}
            />
            <FormSelect
              label="Property Type"
              name="propertyType"
              placeholder="Select Property Type"
              value={formData.propertyType || ""}
              onChange={handleChange}
              options={["Villa", "Apartment", "Studio"]}
            />
            <FormSelect
              label="No. of Bathrooms"
              name="bathrooms"
              placeholder="Select no. of Bathrooms"
              value={formData.bathrooms || ""}
              onChange={handleChange}
              options={["1", "2", "3+"]}
            />
            <FormSelect
              label="No. of Bedrooms"
              name="bedrooms"
              placeholder="Select no. of Bedrooms"
              value={formData.bedrooms || ""}
              onChange={handleChange}
              options={["1", "2", "3+"]}
            />
            <div className="xl:col-span-2 col-span-1">
              <FormSelect
                label="Budget"
                name="budget"
                placeholder="Select Budget"
                value={formData.budget || ""}
                onChange={handleChange}
                options={["<1000", "1000-2000", ">2000"]}
              />
            </div>
            <div className="xl:col-span-2 md:col-span-3 col-span-1 flex flex-col justify-between">
              <label className="mb-4 lg-custom:text-xl text-base/[1.5] text-white font-semibold">
                Preferred Contact Method
              </label>
              <div className="w-full flex flex-col md:flex-row md:justify-between justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                <div className="relative w-full lg-custom:w-1/2 group">
                  <PhoneIcon className="absolute text-white group-hover:text-purple60 left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 pointer-events-none" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone || ""}
                    onChange={handleChange}
                    placeholder="Enter Your Number"
                    className="w-full rounded-lg bg-gray10 text-gray40 xl:text-lg/[20px] text-sm font-medium border-1 border-gray15 px-5 py-6 pl-14"
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
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 md:w-6 w-[10px] md:h-6 h-[10px] appearance-none bg-gray10 border-1 border-purple60 rounded-full checked:bg-purple60 cursor-pointer"
                  />
                </div>
                <div className="relative w-full lg-custom:w-1/2 group">
                  <EmailIcon className="absolute text-white group-hover:text-purple60 left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 pointer-events-none" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email || ""}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                    className="w-full rounded-lg bg-gray10 text-gray40 lg-custom:text-lg/[20px] text-sm font-medium border-1 border-gray15 px-5 py-6 pl-14"
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
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 md:w-6 w-[10px] md:h-6 h-[10px] appearance-none bg-gray10 border-1 border-purple60 rounded-full checked:bg-purple60 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <FormTextarea
        label="Message"
        name="message"
        value={formData.message || ""}
        onChange={handleChange}
      />
      <div className="flex justify-between">
        <FormCheckbox
          label={`I agree with <a href="#" class="underline">Terms of Use</a> and <a href="#" class="underline">Privacy Policy</a>`}
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />
        <button
          type="button"
          onClick={(e) =>
            handleSubmit((data) => console.log("Form submitted:", data))
          }
          className="bg-purple60 text-white px-4 py-2 rounded-md"
        >
          Send Your Message
        </button>
      </div>
    </form>
  );
}

export default InquiryForm;
