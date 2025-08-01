import type { SelectProps } from "../../types/Form";
import { DropdownIcon } from "../icons/FormIcons";

function FormSelect({
  label,
  name,
  value,
  placeholder,
  onChange,
  options,
}: SelectProps) {
  return (
    <div className="flex flex-col group">
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
          className="appearance-none w-full rounded-lg bg-gray10 text-gray40 text-lg/[20px] lg-custom:text-sm font-medium border-1 border-gray15 px-5 py-6 pr-12" // ← pr-12 for icon space
        >
          <option value="">{placeholder || "Select"}</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>

        {/* Custom dropdown icon */}
        <DropdownIcon
          className="absolute right-5 group-hover:text-purple60 top-1/2 transform -translate-y-1/2 text-white transition-colors duration-200"
        />
      </div>
    </div>
  );
}

export default FormSelect;
