import { useState } from "react";
import type { FormData } from "../types/Form";
type FormErrors = Partial<Record<keyof FormData | "agreed", string>>;


export function useFormHandler(initialValues?: Partial<FormData>) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    preferredContact: [],
    inquiryType: "",
    hearAboutUs: "",
    ...initialValues,
  });

  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});


  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const prevContact = prev.preferredContact || [];
      const updatedContact = checked
        ? [...prevContact, value]
        : prevContact.filter((c) => c !== value);
      return { ...prev, preferredContact: updatedContact };
    });
    setErrors((prev) => ({ ...prev, preferredContact: undefined }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    const requiredFields: (keyof FormData)[] = [
      "firstName",
      "lastName",
      "budget",
    ];
    requiredFields.forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
      }
    });

    if (!formData.preferredContact?.length) {
      newErrors.preferredContact = "At least one contact method is required";
    } else {
      if (formData.preferredContact.includes("email") && !formData.email) {
        newErrors.email = "Email is required when selected as contact method";
      }
      if (formData.preferredContact.includes("phone") && !formData.phone) {
        newErrors.phone = "Phone is required when selected as contact method";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (onSubmit?: (data: FormData) => void) => {
    if (!agreed) {
      setErrors((prev) => ({ ...prev, agreed: "You must agree to the terms" }));
      return false;
    }

    if (!validateForm()) {
      return false;
    }

    onSubmit?.(formData);
    return true;
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      preferredContact: [],
      inquiryType: "",
      hearAboutUs: "",
      ...initialValues,
    });
    setAgreed(false);
    setErrors({});
  };

  return {
    formData,
    setFormData,
    handleChange,
    handleCheckboxChange,
    handleSubmit,
    resetForm,
    agreed,
    setAgreed,
    errors,
  };
}
