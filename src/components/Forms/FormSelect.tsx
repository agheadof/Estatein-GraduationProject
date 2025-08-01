import type { SelectProps } from "../../types/Form";

function FormSelect({
  label,
  name,
  value,
  placeholder,
  onChange,
  options,
}: SelectProps) {
  return (
    <div className="flex flex-col">
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
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute right-5 top-1/2 transform -translate-y-1/2"
        >
          <path
            d="M19.5 8.25L12 15.75L4.5 8.25"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default FormSelect;
