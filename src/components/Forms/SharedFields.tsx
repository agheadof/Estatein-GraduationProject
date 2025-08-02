import FormInput from "./FormInput";
import type { FormData } from "../../types/Form"

type Props = {
  formData: FormData;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
};

function SharedFields({ formData, handleChange }: Props) {
  return (
    <>
      <FormInput
        label="First Name"
        name="firstName"
        placeholder="Enter First Name"
        value={formData.firstName || ""}
        onChange={handleChange}
      />
      <FormInput
        label="Last Name"
        name="lastName"
        placeholder="Enter Last Name"
        value={formData.lastName || ""}
        onChange={handleChange}
      />
      <FormInput
        label="Email"
        name="email"
        placeholder="Enter your Email"
        value={formData.email || ""}
        onChange={handleChange}
        type="email"
      />
      <FormInput
        label="Phone"
        name="phone"
        placeholder="Enter Phone Number"
        value={formData.phone || ""}
        onChange={handleChange}
        type="tel"
      />
    </>
  );
}

export default SharedFields;
