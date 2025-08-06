import type { TextareaProps } from "../../types/Form";
function FormTextarea({ label, name, value, onChange, error, className }: TextareaProps) {
  return (
    <div className={`${className} flex flex-col col-span-2`}>
      <label
        htmlFor={name}
        className="2xl:mb-4lg-custom:mb-3.5 mb-2.5 2xl:text-xl text-base/[1.5] dark:text-white text-black font-semibold"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        placeholder="Enter your Message here.."
        value={value}
        onChange={onChange}
        className="rounded-lg dark:bg-gray10 bg-white97 dark:text-gray40 text-gray60 2xl:text-lg lg-custom:text-sm/[20px] font-medium border-1 dark:border-gray15 border-white90 px-5 py-6 2xl:h-42.5 lg-custom:h-30.5 h-22.5"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default FormTextarea;
