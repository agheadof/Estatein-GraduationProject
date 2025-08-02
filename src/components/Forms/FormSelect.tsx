import type { SelectProps } from "../../types/Form";
import { DropdownIcon } from "../icons/FormIcons";

function FormSelect({
  label,
  name,
  value,
  placeholder,
  onChange,
  options,
  error,
}: SelectProps) {
  return (
    <div className="flex flex-col group shrink-0">
      <label
        htmlFor={name}
        className="mb-4 text-xl lg-custom:text-base/[1.5] text-white font-semibold"
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="appearance-none w-full rounded-lg bg-gray10 text-gray40 text-lg/[20px] lg-custom:text-sm font-medium border-1 border-gray15 px-5 py-6 pr-12"
        >
          <option value="">{placeholder || "Select"}</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <DropdownIcon className="absolute right-5 group-hover:text-purple60 top-1/2 transform -translate-y-1/2 text-white transition-colors duration-200" />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default FormSelect;
