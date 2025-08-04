import type { CheckboxProps } from "../../types/Form";

function FormCheckbox({ label, checked, onChange }: CheckboxProps) {
  return (
    <label className="flex items-center text-lg font-medium dark:text-gray60 text-gray-800 space-x-[6px] 2xl:space-x-2.5 ">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden peer"
      />
      <div
        className="
          w-6 h-6 2xl:w-7 2xl:h-7 rounded-sm
          border dark:border-gray15 border-purple70
          dark:bg-gray10
          transition-colors duration-200
          flex items-center justify-center
          peer-checked:bg-purple60 peer-checked:border-purple60
          focus-within:ring-2 focus-within:ring-purple60/30
          hover:border-purple60
        "
      >
        {checked && (
          <svg
            className="w-4 h-4 text-white"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
      <span
        className="text-sm lg-custom:text-base 2xl:text-lg"
        dangerouslySetInnerHTML={{ __html: label }}
      />
    </label>
  );
}

export default FormCheckbox;
