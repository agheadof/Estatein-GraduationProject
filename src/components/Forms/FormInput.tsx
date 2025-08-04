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
    <div className="flex flex-col w-full">
      <label
        htmlFor={name}
        className="2xl:mb-4 lg-custom:mb-3.5 mb-2.5 text-base/[1.5] 2xl:text-xl  dark:text-white text-black font-semibold"
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
        className="rounded-lg dark:bg-gray10 bg-purple95 dark:text-gray40 text-purple65 2xl:text-lg text-sm/[20px] font-medium border-1 dark:border-gray15 border-purple70 2xl:px-5 2xl:py-6 px-5 py-4"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default FormInput;
