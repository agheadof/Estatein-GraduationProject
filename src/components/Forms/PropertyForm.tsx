import FormCheckbox from "./FormCheckbox";
import { useFormHandler } from "../../hooks/useFormHandler";
import SharedFields from "./SharedFields";
import FormTextarea from "./FormTextarea";
import { LocationIcon } from "../icons/FormIcons";
import MainButton from "../ui/MainButton";

function PropertyForm() {
  const { formData, handleChange, handleSubmit, agreed, setAgreed, errors } =
    useFormHandler({
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
    <form
      className="space-y-[20px] 2xl:p-[50px] lg-custom:p-[40px] p-5 lg-custom:mt-0 mt-[40px] rounded-xl border-1 border-gray15 w-full"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit((data) => console.log("Form submitted:", data));
      }}
    >
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 xl:gap-[30px]">
        <SharedFields
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
        <label className="mb-4 text-xl lg-custom:text-base/[1.5] text-white font-semibold">
          Property Name
        </label>
        <div className="flex justify-between text-white90 rounded-lg bg-gray10 text-lg/[20px] lg-custom:text-sm font-medium border-1 border-gray15 px-5 py-6">
          Seaside Serenity Villa, Malibu, California
          <LocationIcon className="text-white" />
          {/* here we should add {property?.name} */}
        </div>
      </div>
      <FormTextarea
        label="Message"
        name="message"
        value={formData.message || ""}
        onChange={handleChange}
        error={errors.message}
      />
      <div className="flex justify-between">
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

export default PropertyForm;