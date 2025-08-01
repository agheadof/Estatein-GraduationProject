import FormSelect from "./FormSelect";
import FormCheckbox from "./FormCheckbox";
import { useFormHandler } from "../../hooks/useFormHandler";
import SharedFields from "./SharedFields";
import FormTextarea from "./FormTextarea";

function InquiryForm() {
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
  });

  return (
    <form className="space-y-[50px] p-[100px] mt-40 rounded-xl border-1 border-gray15 w-full">
      <div className="grid lg-custom:grid-cols-4 grid-col-1 gap-[50px]">
        <SharedFields formData={formData} handleChange={handleChange} />
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
        <div className="lg-custom:col-span-2">
          <FormSelect
            label="Budget"
            name="budget"
            placeholder="Select Budget"
            value={formData.budget || ""}
            onChange={handleChange}
            options={["<1000", "1000-2000", ">2000"]}
          />
        </div>
        <div className="lg-custom:col-span-2 flex flex-col justify-between">
          <label className="mb-4 text-xl lg-custom:text-base/[1.5] text-white font-semibold">
            Preferred Contact Method
          </label>
          <div className="w-full flex justify-between items-center space-x-4">
            <div className="relative w-1/2">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 pointer-events-none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 4.5C2 2.84315 3.34315 1.5 5 1.5H6.37163C7.232 1.5 7.98197 2.08556 8.19064 2.92025L9.29644 7.34343C9.47941 8.0753 9.20594 8.84555 8.60242 9.29818L7.3088 10.2684C7.17447 10.3691 7.14527 10.5167 7.183 10.6197C8.31851 13.7195 10.7805 16.1815 13.8803 17.317C13.9833 17.3547 14.1309 17.3255 14.2316 17.1912L15.2018 15.8976C15.6545 15.2941 16.4247 15.0206 17.1566 15.2036L21.5798 16.3094C22.4144 16.518 23 17.268 23 18.1284V19.5C23 21.1569 21.6569 22.5 20 22.5H17.75C9.05151 22.5 2 15.4485 2 6.75V4.5Z"
                  fill="white"
                />
              </svg>
              <input
                type="tel"
                name="phone"
                value={formData.phone || ""}
                onChange={handleChange}
                placeholder="Enter Your Number"
                className="w-full rounded-lg bg-gray10 text-gray40 text-lg/[20px] lg-custom:text-sm font-medium border-1 border-gray15 px-5 py-6 pl-14"
                disabled={!formData.preferredContact?.includes("phone")}
              />
              <input
                type="checkbox"
                name="preferredContact"
                value="phone"
                checked={formData.preferredContact?.includes("phone") || false}
                onChange={handleCheckboxChange}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 w-6 h-6 appearance-none bg-gray10 border-1 border-purple60 rounded-full checked:bg-purple60  cursor-pointer"
              />
            </div>
            <div className="relative w-1/2">
              {/* Left Icon */}
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 pointer-events-none"
              >
                <path
                  d="M1.75 8.6691V17.25C1.75 18.9069 3.09315 20.25 4.75 20.25H19.75C21.4069 20.25 22.75 18.9069 22.75 17.25V8.6691L13.8223 14.1631C12.8581 14.7564 11.6419 14.7564 10.6777 14.1631L1.75 8.6691Z"
                  fill="white"
                />
                <path
                  d="M22.75 6.90783V6.75C22.75 5.09315 21.4069 3.75 19.75 3.75H4.75C3.09315 3.75 1.75 5.09315 1.75 6.75V6.90783L11.4639 12.8856C11.946 13.1823 12.554 13.1823 13.0361 12.8856L22.75 6.90783Z"
                  fill="white"
                />
              </svg>

              {/* Input with left padding for the icon */}
              <input
                type="email"
                name="email"
                value={formData.email || ""}
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="w-full rounded-lg bg-gray10 text-gray40 text-lg/[20px] lg-custom:text-sm font-medium border-1 border-gray15 px-5 py-6 pl-14"
                disabled={!formData.preferredContact?.includes("email")}
              />

              {/* Right Checkbox */}
              <input
                type="checkbox"
                name="preferredContact"
                value="email"
                checked={formData.preferredContact?.includes("email") || false}
                onChange={handleCheckboxChange}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 w-6 h-6 appearance-none bg-gray10 border-1 border-purple60 rounded-full checked:bg-purple60 cursor-pointer"
              />
            </div>
          </div>
        </div>
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
