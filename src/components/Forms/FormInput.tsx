import type { InputProps } from "../../types/Form";

function FormInput({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
}: InputProps) {
  return (
    <div className="flex flex-col shrink-0">
      <label
        htmlFor={name}
        className="mb-4 text-xl lg-custom:text-base/[1.5] text-white font-semibold"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        className="rounded-lg bg-gray10 text-gray40 text-lg/[20px] lg-custom:text-sm font-medium border-1 border-gray15 px-5 py-6"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default FormInput;
